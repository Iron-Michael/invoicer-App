import React from "react";

export const Dates = () => {
  return (
    <>
      {" "}
      <article className="my-5 flex items-end justify-end ">
        <ul>
          <li>
            {" "}
            <span className="font-bold">Invoicer Number:</span>{" "}
          </li>
          <li>
            <span className="font-bold">Invoice date :</span>{" "}
          </li>
          <li>
            <span className="font-bold">Due Date</span>
          </li>
        </ul>
      </article>
    </>
  );
};
