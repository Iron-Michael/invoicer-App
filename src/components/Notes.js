import React from "react";

export const Notes = ({ notes }) => {
  return (
    <>
      {" "}
      <section className="mb-5">
        {/* text area */}

        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
    </>
  );
};
