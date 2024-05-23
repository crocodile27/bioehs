import React from "react";

interface Props {
  concentrationName: string;
  id: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
  className: string;
}
const Concentrations = ({
  className,
  concentrationName,
  id,
  onMouseOut,
  onMouseOver,
}: Props) => {
  return (
    <button
      className={className}
      id={id}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {concentrationName}
    </button>
  );
};

export default Concentrations;
