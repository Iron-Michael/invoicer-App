import React from "react";

export const MainDetails = ({ name, address }) => {
  return (
    <>
      <section className="flex items-end justify-end flex-col">
        <h2 className=" font-bold text-xl uppercase md:text-4xl">{name}</h2>
        <p>{address}</p>
      </section>
    </>
  );
};
