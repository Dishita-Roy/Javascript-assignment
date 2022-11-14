// solution Q.2
let arr = [];
let arritem = document.querySelectorAll(".as-imagegrid-item");
for (list of arritem){
    arr.push(list)
};
console.log(arr);

//solution Q.3
let item = document.createElement("section");

item.setAttribute("class","parent");

item.style.textAlign = "left";
item.style.background = "#ffffff";
item.style.border-top = "thin solid #a9acaa";
item.style.font-family = "Google Sans Text Roboto Helvetica Neue Helvetica sans-serif";
item.style.lineHeight = "1.25rem";
item.style.padding = "1rem";

let text = document.createTextNode("My New Faq");
item.appendChild("text");

let faqlist = document.querySelector(".accordion-homepage .article .main-content");
faqlist.appendChild("item");

//solution Q.4
let number = document.querySelector(".customer-support .contact-us");
number.innerText = "+91 2226664444";

//solution Q.5
let button = document.querySelector(".diwali-deals-product-sale-btn .diwali-deals-product-sale-pro");

button.innerText = "Check out";

//solution Q.6
let form = document.querySelector(".searchinput___19uW0 .search-icon___32bte");
form.addEventListener("mouseover",hover);
function hover(){
    document.style.backgroundColor = "red";
};

//solution Q.8
let language = document.querySelector(".SIvCob");
let lanlist = document.querySelectorAll("a");
for(let i=0; i<lanlist.length; i=i+2){
    language.removeChild(lanlist[i]);
}
console.log(lanlist);

//solution Q.9
let font = document.querySelector(".text-color-white .text-color-hero-gradient");
font.style.fontFamily = "monospace";
font.style.color = "#ff4d4d";

//solution Q.10
let text = document.querySelector(".login-btn-text");
text.addEventListener("mouseover", ()=>{
    text.style.backgroundColor = "red";
});

//solution Q.11
let logo = document.querySelector(".header .wrapper .logo .icon .icon-logo");
logo.style.backgroundImage = "url(https://ineuron.ai/images/ineuron-logo.png)";

//solution Q.12
let button = document.querySelector(".btn-primary");
button.style.backgroundColor = "#1621bc";

//solution Q.13
let text = document.querySelector(".home22-intro-text");
text.innerHTML = "JSBOOTCAMP";

//solution Q.14
let heading = document.querySelector(".HotDealsAll__Heading__2fIbe");
heading.style.fontSize = "80px";

//solution Q.15
let heading = document.querySelector(".ps-title");
heading.style.textAlign = "right";

//solution Q.16
let heading = document.querySelector(".section-title_title__VEDfK");
heading.innerHTML = "Start with Scratch";

//solution Q.17
let date = document.querySelector(".btn-container .btn");
date.innerHTML = new Date().toString();

//solution Q.18
let footer = document.querySelector(".p-f03-footer-container");
footer.style.backgroundColor = "orange";

//solution Q.19
let link = document.querySelector(".logo");
link.getAttribute('src');

//solution Q.20
let description = document.querySelector(".desc");
description.style.color = "orange";













