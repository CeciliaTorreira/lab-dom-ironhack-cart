// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // Step 1
let priceDOM = product.querySelector(".price span")   
let quantityDOM = product.querySelector(".quantity input")  
  // Step 2
let priceNum = priceDOM.innerHTML; // 25$  //! En este punto intenté usar .value pero no funcionó, con .innerHTML e .innerText sí me funcionó
let numQuantity = quantityDOM.value; 

// Step 3
let subtotalPrice = priceNum * numQuantity; 

// Step 4 
let subtotalValue = product.querySelector(".subtotal span");  //! Por alguna razón escribí spain en lugar de span y tardé un ratito en darme cuenta, me sucedió arriba igual lol

// Step 5
subtotalValue.innerHTML = subtotalPrice; //! En el paso dos obtuve el valor del precio con innerHTML así que decidi hacer lo mismo aquí ya que value tampoco me funcionó

return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let allProducts = document.querySelectorAll(".product") 
  let totalPrice = 0;

  allProducts.forEach((eachProduct) => {
    let subtotal =  updateSubtotal(eachProduct); //! Si pasamos la función updateSubtotal que ya es 100% funcional debería hacer lo mismo con cada producto.
    totalPrice += subtotal;
  });
  // ITERATION 3
  let totalCartPrice = document.querySelector("#total-value span") 
  totalCartPrice.innerHTML = totalPrice;
  

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target); //Consola: The target in remove is: <button class=​"btn btn-remove">​Remove​</button>​ index.js:50
                                                   //! Consigo esto en la consola pero solo al pulsar el primer botón, con el segundo no funciona.
  //... your code goes here                        //! Intenté hacer un bucle para que abarcase los dos remove button pero no lo logré
  console.log("Probando")
  
}
let button = document.querySelector(".btn-remove") //!Esta sería la localización del botón "Remove." Lo saqué mirando el HTML, espero conseguirlo con el comando .target pero todavía no ha salido.
button.addEventListener("click", removeProduct)  

 /* button.forEach((eachButton)=>{                
  eachButton.addEventListener("click", removeProduct) 
})  */

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
