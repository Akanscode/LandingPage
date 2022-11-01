import React from "react";
import cardsList from "../Data/DataList";
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {cardsList.map((val, id) => {
          return (
            <div
              key={id}
              className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={val.cover}
                className="w-20 mx-auto mt-[3rem] bg-white"
                alt=""
              />
              <h2 className="text-2xl font-bold text-center py-8 capitalize">
                {val.user}
              </h2>
              <p className="text-center text-4xl font-bold">${val.price}</p>
              <div className="text-center font-medium">
                <p className="py-2 border-b mx-8 mt-8">{val.storage}</p>
                <p className="py-2 border-b mx-8">{val.text1}</p>
                <p className="py-2 border-b mx-8">{val.text2}</p>
              </div>
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Start Trial
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
