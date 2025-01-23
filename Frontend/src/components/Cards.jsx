import React from "react";

function Cards({ item }) {
  return (  
    <>
      <div className="flex items-center justify-center flex-col mx-1">
        <div className="card max-w-100 max-h-92 border-[3px] border-pink-300 shadow-xl hover:scale-x-105 duration-250  dark:text-white dark:border-[3px] dark:border-white">
          <figure className="flex items-center justify-center p-4  bg-blue-100 dark:bg-blue-100">
            <img
              src={item.image}
              alt="Books"
              className="h-[8rem]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-base ">
              {item.name}
              
            </h2>
            <div className="badge badge-secondary text-[0.7rem]">{item.category}</div>
            <p className="text-xs ">{item.title}</p>
            <div className="card-actions justify-between items-center">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer rounded-full border-[2px] hover:bg-pink-500 hover:text-white px-2 py-1 text-xs">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </> 
  );
}

export default Cards;
