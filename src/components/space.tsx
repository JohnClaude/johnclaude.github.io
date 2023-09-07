import React from "react";

const SpaceComponent = ({
  marginTopValue = "4rem",
  marginBottomValue = "4rem",
}: any) => {
  return (
    <div
      style={{ marginTop: marginTopValue, marginBottom: marginBottomValue }}
    ></div>
  );
};

export default SpaceComponent;
