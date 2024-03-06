
let bagItemObject;
onLoad()
displayItemToHome();



function onLoad() {
  loadBagItemObject();
  displayBagItem();
}

function loadBagItemObject() {
    
      bagItemObject = bagItem.map(itemId => {
          for (let i = 0; i < item.length; i++) {
              if (itemId == item[i].id) {
                return item[i];
              }
          }
      });
      console.log(bagItemObject)
    }
  
function displayBagItem() {
let containerElement = document.querySelector('.cart-list');

let innerHTML = '';
BagItemObject.forEach(bagItem => {
innerHTML += genrateItemHTML (bagItem);
});


  

}
function genrateItemHTML(Item){
 `<tbody class="cart-list">
 <tr>
   <td><img src="${item.item_image}" alt=""></td>
   <td>${item.item_name}</td>
     <td>${item.price}</td>
   <td class="quentity">
     <span class="minus" onclick="decreaceNumber()">-</span>
     <span class="num">1</span>
     <span class="plus" onclick="increaceNumber()">+</span>
   </td>
   <td>${item.price}</td>
   <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
 </tr>
 <tr>
   <td><img src="img/products/f1.jpg" alt=""></td>
   <td>Cartoon Astronaut t-shirt</td>
   <td>600rs</td>
   <td class="quentity">
     <span class="minus">
     </span>
         <span>1</span>
         <span class="plus">></span>
   </td>
   <td>600rs</td>
   <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
 </tr>`
 
}



// let bagItemObject;
// onLoad();

// function onLoad() {
//     loadBagItemObject();
//     displayBagItem();
// }

// function loadBagItemObject() {
    
//     bagItemObject = bagItem.map(itemId => {
//         for (let i = 0; i < item.length; i++) {
//             if (itemId == item[i].id) {
//               return item[i];
//             }
//         }
//     });
//     console.log(bagItemObject);
// }

// function displayBagItem() {
//     let containerElement = document.querySelector('.cart-list');
// }
// let innerHTML ='';
// bagItemObject.forEach(bagItem => {
//     innerHTML += genrateItemHTML(bagItem)
// });
// containerElement.innerHTML = innerHTML;

// function genrateItemHTML(item) {
//     return `<tbody class="cart-list">
//     <tr>
//       <td><img src="${item.item_image}" alt=""></td>
//       <td>${item.item_name}</td>
//       <td>${item.price}</td>
//       <td class="quentity">
//         <span class="minus" onclick="decreaceNumber()">-</span>
//         <span class="num">1</span>
//         <span class="plus" onclick="increaceNumber()">+</span>
//       </td>
//       <td>${item.price}</td>
//       <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
//     </tr>
//     <tr>
//       <td><img src="img/products/f1.jpg" alt=""></td>
//       <td>Cartoon Astronaut t-shirt</td>
//       <td>600rs</td>
//       <td class="quentity">
//         <span class="minus">
//         </span>
//             <span>1</span>
//             <span class="plus">></span>
//       </td>
//       <td>600rs</td>
//       <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
//     </tr>`
// }