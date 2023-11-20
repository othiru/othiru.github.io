document.getElementById("emailBtn").addEventListener("click", emailValidate);
document.getElementById("phoneBtn").addEventListener("click", phoneValidate);
document.getElementById("postCodeBtn").addEventListener("click", postCodeValidate);



function showAlert(msg, className)
{
    // Existing Alert Clear --- for avoiding too many alerts
    let currentAlert = document.querySelector(".alert");
    if (currentAlert)
    {
        currentAlert.remove();
    }

    let div1 = document.createElement("div");
    div1.setAttribute("class", className)
    div1.appendChild(document.createTextNode(msg));
    document.getElementById("alert1").appendChild(div1);
    setTimeout(function(){
        div1.remove();
    }, 3000);
}
    
function emailValidate()
{
    let value1 = prompt(`Enter Email Address: 
Example: abc@gmail.com`);
    let re1 = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;

    if (value1 !== null && value1 !== "")
    {
        try
        {
            if (value1 === re1.exec(value1)[0])
            {
                showAlert("Valid Email Address!!!", "success alert");
            }
        }
        catch(e)
        {
            showAlert("Invalid Email Address!!!", "error alert");
        }
    }
    else
    {
        showAlert("Please Enter Email Address to Validate!!!", "warning alert");
    }
}

function phoneValidate()
{
    let value2 = prompt(`Enter Phone Number: 
Example: 017XXXXXXXX, +88017XXXXXXXX, 88017XXXXXXXX`);
    let re1 = /^(\+)?(88)?01[0-9]{9}$/;
    if (value2 !== null && value2 !== "")
    {
        try
        {
            if (value2 === re1.exec(value2)[0])
            {
                showAlert("Valid Phone Number!!!", "success alert");
            }
        }
        catch(e)
        {
            showAlert("Invalid Phone Number!!!", "error alert");
        }
    }
    else
    {
        showAlert("Please Enter Phone Number to Validate!!!", "warning alert");
    }
}

function postCodeValidate()
{
    let value3 = parseInt(prompt(`Enter Post Code: 
Example: 1212`));
    let re1 = /^[0-9]{4}$/;

    if (!isNaN(value3))
    {
        try
        {
            if (value3 === parseInt(re1.exec(value3)[0]))
            {
                showAlert("Valid Post Code!!!", "success alert");
            }
        }
        catch(e)
        {
            showAlert("Invalid Post Code!!!", "error alert");
        }
    }
    else
    {
        showAlert("Please Enter Post Code to Validate!!!", "warning alert");
    }
}