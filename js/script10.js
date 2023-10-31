class Products
{
    constructor()
    {
        this.prodList = [];
    }

    addProducts(pName, category, weight, price, image)
    {
        let addProd1 = 
        {
            "Name": pName,
            "Category": category,
            "Weight": weight,
            "Price": price,
            "Image": image
        }

        let divMain = document.createElement("div");
        divMain.classList.add("card","mt-3","mb-3");
        divMain.style.width = "18rem";

        let imageElement = document.createElement("img");
        imageElement.classList.add("card-img-top");
        imageElement.setAttribute("src",image);

        divMain.appendChild(imageElement);

        let div1 = document.createElement("div");
        div1.classList.add("card-body");
        let h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.textContent = pName;

        div1.appendChild(h5);
        divMain.appendChild(div1);

        let ul = document.createElement("ul");
        ul.classList.add("list-group", "list-group-flush");
        let li1 = document.createElement("li");
        li1.classList.add("list-group-item");
        li1.setAttribute("value", category);
        li1.textContent = `Category: ${category}`;
        let li2 = document.createElement("li");
        li2.classList.add("list-group-item");
        li2.setAttribute("value", weight);
        li2.textContent = `Weight: ${weight}`;
        let li3 = document.createElement("li");
        li3.classList.add("list-group-item");
        li3.setAttribute("value", price);
        li3.textContent = `Price: ${price}`;

        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
        divMain.appendChild(ul);

        let div2 = document.createElement("div");
        div2.classList.add("card-body");
        let cartIcon = document.createElement("img");
        cartIcon.classList.add("card-img-top");
        cartIcon.setAttribute("src","https://img.icons8.com/color/48/shopping-cart--v1.png");
        cartIcon.style.height = "30px";
        cartIcon.style.width = "30px";
        let aLink = document.createElement("a");
        aLink.setAttribute("href","");
        aLink.classList.add("card-link");
        aLink.textContent = "Add to Cart";

        div2.appendChild(cartIcon);
        div2.appendChild(aLink);
        divMain.appendChild(div2);

        document.getElementById("products").appendChild(divMain);

        this.prodList.push(addProd1);
    }

    addProductsLocal(prodListLocal)
    {
        prodListLocal = JSON.stringify(this.prodList);
        localStorage.setItem("productList",prodListLocal);
    }


    static addCart(pName1, category1, weight1, price1, image1)
    {
        let addCartItem1 = 
        {
            "Name": pName1,
            "Category": category1,
            "Weight": weight1,
            "Price": price1,
            "Image": image1
        }

        let tBody = document.getElementById("tbodyData");

        let tDataRow = document.createElement("tr");
        let tdata1 = document.createElement("td");
        tdata1.className = "text-center align-middle";
        let prodImage = document.createElement("img");
        prodImage.setAttribute("src", image1);
        prodImage.style.height = "50px";
        prodImage.style.weight = "50px";
        tdata1.appendChild(prodImage);
        let tdata2 = document.createElement("td");
        tdata2.className = "text-center align-middle";
        tdata2.textContent = pName1;
        let tdata3 = document.createElement("td");
        tdata3.className = "text-center align-middle";
        tdata3.textContent = category1;
        let tdata4 = document.createElement("td");
        tdata4.className = "text-center align-middle";
        tdata4.textContent = weight1;
        let tdata5 = document.createElement("td");
        tdata5.className = "text-center align-middle";
        tdata5.textContent = price1;
        let tdata6 = document.createElement("td");
        tdata6.className = "text-center align-middle";
        let delLink = document.createElement("a");
        delLink.setAttribute("href","");
        let delImage = document.createElement("img");
        delImage.setAttribute("src", "https://img.icons8.com/flat-round/64/minus.png");
        delImage.style.height = "20px";
        delImage.style.weight = "20px";
        delLink.appendChild(delImage);
        tdata6.appendChild(delLink);

        tDataRow.append(tdata1, tdata2, tdata3, tdata4, tdata5, tdata6);
        tBody.appendChild(tDataRow);

        Products.showAlert("New product is added succesfully!!!", "success alert", "alert1"); 

        if (localStorage.getItem("cartList") === null)
        {
            this.cartList = []
            this.cartList.push(addCartItem1);
            localStorage.setItem("cartList", JSON.stringify(this.cartList))
        }
        else
        {
            this.cartList = JSON.parse(localStorage.getItem("cartList"));
            this.cartList.push(addCartItem1);
            localStorage.setItem("cartList", JSON.stringify(this.cartList))
        }
    }

    static showAlert(msg, className, alertDiv)
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
        document.getElementById(alertDiv).appendChild(div1);
        setTimeout(function(){
            div1.remove();
        }, 3000);
    }
}

let products = new Products()
let prod1 = products.addProducts("Snickers Miniatures Chocolate","Chocolates","150g","550","images/snickers1.png");
let prod2 = products.addProducts("Mars Soft Baked Double Chocolate Cookies","Cookies and Biscuits","162g","620","images/mars cookies1.png");
let prod3 = products.addProducts("Cadbury Dairy Milk Whole Nut Chocolate","Chocolates","180g","650","images/CadburyDairyMilkWholeNut1.png");
let prod4 = products.addProducts("Maltesers Chocolate","Chocolates","37g","220","images/maltesers1.png");
let productsLocal = products.addProductsLocal();


document.getElementById("products").addEventListener("click", addCart);
function addCart(e)
{
    e.preventDefault();
    if (e.target.hasAttribute("href"))
    {
        let imageTest = e.target.parentElement.parentElement.children[0].getAttribute("src");
        let nameTest = e.target.parentElement.parentElement.children[1].children[0].textContent;
        let categoryTest = e.target.parentElement.parentElement.children[2].children[0].getAttribute("value");
        let weightTest = e.target.parentElement.parentElement.children[2].children[1].getAttribute("value");
        let priceTest = e.target.parentElement.parentElement.children[2].children[2].getAttribute("value");

        Products.addCart(nameTest, categoryTest, weightTest, priceTest, imageTest);
    }
}



function cartView()
{
    if (localStorage.getItem("cartList") === null || JSON.parse(localStorage.getItem("cartList")).length === 0)
    {     
        
    }
    else
    {
        let data = JSON.parse(localStorage.getItem("cartList"));
        let tableBody = document.getElementById("tbodyData");

        data.forEach(element => {
            let tDataRow = document.createElement("tr");
            let tdata1 = document.createElement("td");
            tdata1.className = "text-center align-middle";
            let prodImage = document.createElement("img");
            prodImage.setAttribute("src", element.Image);
            prodImage.style.height = "50px";
            prodImage.style.weight = "50px";
            tdata1.appendChild(prodImage);
            let tdata2 = document.createElement("td");
            tdata2.className = "text-center align-middle";
            tdata2.textContent = element.Name;
            let tdata3 = document.createElement("td");
            tdata3.className = "text-center align-middle";
            tdata3.textContent = element.Category;
            let tdata4 = document.createElement("td");
            tdata4.className = "text-center align-middle";
            tdata4.textContent = element.Weight;
            let tdata5 = document.createElement("td");
            tdata5.className = "text-center align-middle";
            tdata5.textContent = element.Price;
            let tdata6 = document.createElement("td");
            tdata6.className = "text-center align-middle";
            let delLink = document.createElement("a");
            delLink.setAttribute("href","#");
            let delImage = document.createElement("img");
            delImage.setAttribute("src", "https://img.icons8.com/flat-round/64/minus.png");
            delImage.style.height = "20px";
            delImage.style.weight = "20px";
            delLink.appendChild(delImage);
            tdata6.appendChild(delLink);

            tDataRow.append(tdata1, tdata2, tdata3, tdata4, tdata5, tdata6);
            tableBody.appendChild(tDataRow);
        });
    }

    if (document.getElementById("tbodyData"))
    {
        document.getElementById("tbodyData").addEventListener("click", delCartItem);
    }
    
}

document.addEventListener("DOMContentLoaded", cartView);


function delCartItem(e)
{
    e.preventDefault();
    if (e.target.parentElement.hasAttribute("href"))
    {
        if (confirm("Are you sure?"))
        {
            e.target.parentElement.parentElement.parentElement.remove();

            let targetName = e.target.parentElement.parentElement.parentElement.children[1].textContent;

            let dataDel = JSON.parse(localStorage.getItem("cartList"));
            dataDel.forEach( (element, index) => {
                if (element.Name === targetName)
                {
                    dataDel.splice(index, 1);
                }
            });

            localStorage.setItem("cartList", JSON.stringify(dataDel));

            Products.showAlert("Product is removed from the cart!!!", "delete alert", "alert2"); 
        }
    }
}
