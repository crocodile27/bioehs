import React from "react";

interface Props {
  className: string;
  courseName: string;
  id: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
}
const GeneralRequirements = ({
  className = "circle",
  courseName,
  id,
  onMouseOver,
  onMouseOut,
}: Props) => {
  return (
    <button
      className={className}
      id={id}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {courseName}
    </button>
  );
};

export default GeneralRequirements;
