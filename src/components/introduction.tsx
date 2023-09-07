import React from "react";

const IntroductionComponent = ({ children }: any) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 grid-flow-row justify-center place-items-center mb-32">
      <div className="col-span-1 inline-flex row-start-2 col-start-2 justify-center">
        <p className="text-lg text-center">
          Writings of a money movement Engineer at Stitch.
        </p>
      </div>
    </div>
  );
};

export default IntroductionComponent;
