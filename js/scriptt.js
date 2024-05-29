import { cardComponent } from "../component/cardComponent.js";
import { product } from "../data/products.js";

let renderArea = document.querySelector("#card-area")

product.map((product)=>{
  renderArea.innerHTML += cardComponent(product)
})
