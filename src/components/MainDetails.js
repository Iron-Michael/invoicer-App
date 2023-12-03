import React from "react";

export const MainDetails = () => {
  return (
    <>
      <section className="flex items-end justify-end flex-col">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Enter Your name?"
          required
        />
        <h2 className="text-xl uppercase">Sitthisak Logate</h2>
        <p>Your Address</p>
      </section>
    </>
  );
};
