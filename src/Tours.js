import React from "react";
import Tour from "./Tour";

const Tours = ({ items, removeTour }) => {
  //access to array and function
  //   console.log(items);
  //   console.log(removeTour);
  return (
    <section>
      <div className="title">
        <h2>tours and travels</h2>
        <div className="under-line"></div>
      </div>
      <div>
        {items.map((item) => {
          return <Tour key={item.id} {...item} removeTour={removeTour} />; //...item contains object
        })}
      </div>
    </section>
  );
};

export default Tours;
