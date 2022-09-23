import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)
  const inCartText = inCart ? "Remove From Cart" : "Add to Cart"
  const inCartClass = inCart ? "in-cart" : ""
  const inCartColor = inCart ? "remove" : "add"
  function handleCart() {
    setCart((inCart) => !inCart)
  }


  return (
    <li className={inCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCartColor} onClick = {handleCart}>{inCartText}</button>
    </li>
  );
}

export default Item;
