const container = document.getElementById("container");
const cartContainer = document.getElementById("cart-container");
const totalPrice = document.getElementById("total-price");
let cartList = JSON.parse(localStorage.getItem("cart")) || [];

let qty = 1;

cartList = cartList.map((cart) => {
  return {...cart, qty: 1};
});

const fetchProducts = () => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data.products))
    .catch((err) => console.log(err));
}


const displayProducts = (products) => {
    products.forEach((product) =>{
        const div = document.createElement("div");
        div.innerHTML = ` <div class="card" style="width: 18rem;">
  <img src="${product.images[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Prise ${product.price}</li>
    <li class="list-group-item"> 
     <span class="badge rounded-pill text-bg-info">${product.discountPercentage}</span>
     <span class="badge rounded-pill text-bg-info">${product.rating}⭐</span>
     </li>
    <li class="list-group-item">Brand ${product.brand}</li>
  </ul>
  <div class="card-body">
    <button class="btn btn-primary">View</button>
    <button onclick='addToCart(${JSON.stringify(product)})' class="btn btn-success">Add to cart</button>
  </div>
</div>`;
container.appendChild(div);
    });

}

const removeProduct = (i) => {
  cartList.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cartList));
   displayCart();
}
 
const displayCart = () => {
  cartContainer.innerHTML = "";
  totalPrice.textContent = ""
 let total = 0;
  cartList.forEach((cart , i) => {
   
    const discountAmount = (cart.price * cart.discountPercentage) / 100;
    const finalPrice = cart.price - discountAmount;

    const div = document.createElement("div");

    div.innerHTML = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${cart.images[0]}" class="img-fluid rounded-start" alt="${cart.title}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${cart.title}</h5>
              <p class="card-text">Price: ₹${cart.price}</p>
              <p class="card-text text-success">
                Discount: -₹${discountAmount.toFixed(2)}
              </p>
              <p class="card-text fw-bold">
                Final Price: ₹${finalPrice.toFixed(2)}
              </p>
              <button onclick='removeProduct(${i})' class= "btn btn-danger m-2">Remove</button>
               <span>
               <button onclick='decrement(${i})' class="btn btn-secondary">-</button>
               <span class="m-2">${cart.qty}</span>
               <button onclick='increment(${i})' class="btn btn-secondary">+</button>

               </span>
              </div>
          </div>
        </div>
      </div>
    `;

    total =  total + (cart.price - (cart.price * cart.discountPercentage / 100))*cart.qty;
    totalPrice.textContent = `Total price - ${total}`;
    cartContainer.appendChild(div);
  });
};


    const increment = (i) => {
     cartList[i].qty++;
     localStorage.setItem("cart", JSON.stringify(cartList));
     displayCart()
    }
    const decrement = (i) => {
      cartList[i].qty--;
      localStorage.setItem("cart", JSON.stringify(cartList));
      displayCart()
    }

//      const increment = (i) => {
//   cartList[i].qty++;
//   localStorage.setItem("cart", JSON.stringify(cartList));
//   displayCart(); // 👈 important
// };

// const decrement = (i) => {
//   if (cartList[i].qty > 1) {   // negative hone se bachane ke liye
//     cartList[i].qty--;
//     localStorage.setItem("cart", JSON.stringify(cartList));
//     displayCart(); // 👈 important
//   }
// };





const addToCart = (product) => {
cartList.push(product);
localStorage.setItem("cart", JSON.stringify(cartList));
alert("add to cart");
}




if (container) {
  fetchProducts();
}

if (cartContainer) {
  displayCart();
}


