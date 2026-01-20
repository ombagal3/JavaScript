// // ================== DOM ELEMENTS ==================
// const container = document.getElementById("container");
// const cartContainer = document.getElementById("cart-container");
// const totalPrice = document.getElementById("total-price");
// // ================== CART DATA ==================
// let cartList = JSON.parse(localStorage.getItem("cart")) || [];

// // ================== FETCH PRODUCTS ==================
// const fetchProducts = () => {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => displayProducts(data.products))
//     .catch((err) => console.log(err));
// };

// // ================== DISPLAY PRODUCTS ==================
// const displayProducts = (products) => {
//   products.forEach((product) => {
//     const div = document.createElement("div");

//     div.innerHTML = `
//       <div class="card" style="width: 18rem;">
//         <img src="${product.images[0]}" class="card-img-top" alt="${product.title}">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">${product.description}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">Price: ₹${product.price}</li>
//           <li class="list-group-item">
//             <span class="badge rounded-pill text-bg-info">
//               ${product.discountPercentage}% OFF
//             </span>
//             <span class="badge rounded-pill text-bg-warning">
//               ⭐ ${product.rating}
//             </span>
//           </li>
//           <li class="list-group-item">Brand: ${product.brand}</li>
//         </ul>
//         <div class="card-body d-flex gap-2">
//           <button class="btn btn-primary">View</button>
//           <button class="btn btn-success" onclick='addToCart(${JSON.stringify(
//             product
//           )})'>Add to Cart</button>
//         </div>
//       </div>
//     `;

//     container.appendChild(div);
//   });
// };

// // ================== ADD TO CART ==================
// const addToCart = (product) => {
//   cartList.push(product);
//   localStorage.setItem("cart", JSON.stringify(cartList));
//   alert("Product added to cart");
// };


// const removeProduct = (i) => {
//   cartList.splice(i, 1);
//   localStorage.setItem("cart", JSON.stringify(cartList));
//    displayCart();
// }








// // ================== DISPLAY CART ==================
// const displayCart = () => {
//   cartContainer.innerHTML = "";
//    totalPrice.textContent = "";
//  let total = 0;




//   // if (cartList.length === 0) {
//   //   cartContainer.innerHTML = `<h4>Your cart is empty</h4>`;
//   //   return;
//   // }

//   cartList.forEach((cart) => {
//     const discountAmount = (cart.price * cart.discountPercentage) / 100;
//     const finalPrice = cart.price - discountAmount;

//     const div = document.createElement("div");

//     div.innerHTML = `
//       <div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//           <div class="col-md-4">
//             <img src="${cart.images[0]}" class="img-fluid rounded-start" alt="${cart.title}">
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title">${cart.title}</h5>
//               <p class="card-text">Price: ₹${cart.price}</p>
//               <p class="card-text text-success">
//                 Discount: -₹${discountAmount.toFixed(2)}
//               </p>
//               <p class="card-text fw-bold">
//                 Final Price: ₹${finalPrice.toFixed(2)}
//               </p>
//                      <button onclick='removeProduct(${i})' class= "btn btn-danger">Remove</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//      total = total + cart.price - (cart.price * cart.discountPercentage / 100);
//     totalPrice.textContent = `Total price - ${total}`;

//     cartContainer.appendChild(div);
//   });
// };

// // ================== PAGE CHECK ==================
// if (container) {
//   fetchProducts();
// }

// if (cartContainer) {
//   displayCart();
// }

// const a = 10;
//   b = 20;
// console.log(a+b);

// function delayLog() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
// }
// }

// delayLog();

// function Table () {
//   let i=1;
  
//   for(i=1; i<=10; i++);
//   console.log( "7 x " + i  + " = " + 7 * i);

// }
// Table();

