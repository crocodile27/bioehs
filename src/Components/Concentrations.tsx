import React from "react";

interface Props {
  concentrationName: string;
  id: string;
}
const Concentrations = ({ concentrationName, id }: Props) => {
  return (
    <button className="concentrations" id={id}>
      {concentrationName}
    </button>
  );
};

export default Concentrations;
