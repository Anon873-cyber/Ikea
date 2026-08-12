import React from "react";
import { Trash2 as TrashIcon } from "lucide-react";


function Item({item}) {
  console.log("item component")
  console.log(item,"item ")
  return (
    <section className="item">
      <div className="container">
        <div className="container">
          <div className="image">
            <img src="" alt="" srcset="" />
          </div>
          <div className="cointainer">
            <h1>{item.productName}</h1>
            <p>{item.productDescription}</p>
            <h2>{item.price}</h2>
          </div>
        </div>
        <div className="container">

          <button className="btn">
            <TrashIcon size={20} />
          </button>
          <button>Move to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Item;
