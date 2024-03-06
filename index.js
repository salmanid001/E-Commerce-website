
let bagItem = [];
onLoad()

function onLoad() {
let bagItemStr = localStorage.getItem('bagItem');
bagItem = bagItemStr ? JSON.parse(bagItemStr) : [];

displayBagIcon();
displayItemToHome();
}

function addToBag(itemId) {
bagItem.push(itemId);
localStorage.setItem('bagItem', JSON.stringify(bagItem))
displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    bagItemCountElement.innerText = bagItem.length;
    
if(bagItem.length > 0)
{
    bagItemCountElement.style.visibility = "visible";
}
else
{
    bagItemCountElement.style.visibility = "hidden";
   }
  
}
function displayItemToHome() {
let itemContainerElement = document.querySelector('.pro-container');
if(!itemContainerElement){
    return
}


let innerHTML = ''
item.forEach(item =>{
innerHTML += 
 `<div class="pro">
<img src="${item.item_image}" onclick="window.location.href='sproduct.html'"alt="">
<div class="des">
  <span>${item.company_name}</span>
  <h5>${item.item_name}</h5>
  <div class="star">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
  </div>
<h4>${item.price}</h4>
</div>
<button class"add-to-bag" onclick="addToBag (${item.id})"><i class="fa-solid fa-cart-shopping cart"></i></button>
</div>`

})


itemContainerElement.innerHTML = innerHTML;
}











// function displayBagIcon() {
//     let bagItemCountElement = document.querySelector('.bag-item-count');
//    if (bagItem.length > 0) {
//     bagItemCountElement.Style.visibility = 'visible';
//     bagItemCountElement.innerText = bagItem.length;
//    } else {
//     bagItemCountElement.Style.visibility = 'hidden';
//    }