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
 

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


function playAgain()
{
    location.reload();
}


let correctNumber = getRandomInt(1,11);
let value1;

document.getElementById("guessBtn").addEventListener("click", guessFunc);

function guessFunc()
{
    for (let x=0; x<3; x++)
    {
        value1 = parseInt(prompt("Enter A Number Between (1-10)"));

        if (value1 === correctNumber)
        {
            showAlert("You Won!!!", "success alert");
            document.getElementById("guessBtn").disabled = true;
            document.getElementById("playBtn").hidden = false;
            document.getElementById("playBtn").addEventListener("click",  playAgain);
            break;
        }
        else
        {
            if (x===2)
            {
                showAlert(`You Lose!!! Correct Answer is: ${correctNumber}`, "unsuccess alert");
                document.getElementById("guessBtn").disabled = true;
                document.getElementById("playBtn").hidden = false;
                document.getElementById("playBtn").addEventListener("click",  playAgain);
                break;
            }
            if (value1 > correctNumber)
            {
                alert(`Correct answer is smaller!!! You have ${2-x} chances left!!!`);
            }
            else if (value1 < correctNumber)
            {
                alert(`Correct answer is greater!!! You have ${2-x} chances left!!!`);
            }
        }
    }
}