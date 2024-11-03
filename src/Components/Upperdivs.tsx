import React from "react";

interface Props {
  className: string;
  courseName: string;
  id: string;
  href: string;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

const Upperdivs = ({
  className = "small-circle",
  courseName,
  id,
  href,
  onMouseOver,
  onMouseOut,
}: Props) => {
  return (
    <a
      className={className}
      id={id}
      href={href}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      target="_blank"
      rel="noopener noreferrer"
    >
      {courseName}
    </a>
  );
};

export default Upperdivs;
