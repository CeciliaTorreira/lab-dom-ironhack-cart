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
                                                   //! //! Actualización: usé querySelector y no querySelectorAll para los botones
  console.log("Probando")                          //! Tras ver la explicación de Jorge entendí que no hice mal la parte de borrar toda la fila, pero yo creía que
                                                   //! había que resetear quantity y subtotal y que la fila en si siguiese intacta
  
let removeButton = target.parentNode.parentNode
console.log(removeButton)
removeButton.remove()

}
let button = document.querySelectorAll(".btn-remove") //!Esta sería la localización del botón "Remove." Lo saqué mirando el HTML, espero conseguirlo con el comando .target pero todavía no ha salido.
 

 button.forEach((eachButton)=>{                
  eachButton.addEventListener("click", removeProduct)  //! NOTA: usar más console.log y NO BORRARLOS para guiarme y hacer más comprensible cada paso

})  

// ITERATION 5              //! Hecha desde 0 con Jorge por la mañana

function createProduct() {
  console.log("Creando item")
  const productName = document.querySelector(".create-product input[type=text]")           //! CSS selector por TIPO
  const productPrice = document.querySelector(".create-product input[type=number]")
  console.log(productName.value, productPrice.value)
  //... your code goes here
  let table = document.querySelector("tbody")
  let element = 
  `<tr> 
  <td class="name">
  <span>${productName.value}</span>
</td>
<td class="price">$<span>${productName.value}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>
</tr>`
 //! Se añade un string que se asemeja a un elemento HTML
 table.innerHTML += element
 

}
//! El botón de remove no funcionará con el nuevo elemento creado, habría que añadir la misma lógica de abajo de borrar un botón tras la creación de dicho nuevo item 

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const createButton = document.querySelector("#create")          
  createButton.addEventListener("click", createProduct)

});
