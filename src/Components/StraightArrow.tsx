import React from "react";

interface Props {
  start_x: any;
  start_y: string;
  subject: string;
  className: string;
  color: string;
}

const StraightArrow = ({
  start_x,
  start_y,
  subject,
  className,
  color,
}: Props) => {
  const concentration_positions: any[] = [
    ["synthetic", ["12.6%", "66%"]],
    ["cell", ["35%", "66%"]],
    ["devices", ["57%", "66%"]],
    ["imaging", ["79.4%", "66%"]],
  ];
  let sideLine: string;
  let bottomLine: string;
  sideLine = (start_x / 1 + 2.5).toString().concat("%");
  //bottomLine = hiearchy_number.toString().concat("%");
  start_x = start_x + "%";
  start_y = start_y + "%";

  let concentration_x: string = "0";
  let concentration_y: string = "0";
  for (var i = 0; i < concentration_positions.length; i++) {
    if (concentration_positions[i][0] === subject) {
      concentration_x = concentration_positions[i][1][0];
      concentration_y = concentration_positions[i][1][1];
    }
  }
  return (
    <svg className="full">
      <line
        className={className}
        stroke={color}
        x1={start_x}
        y1={start_y}
        x2={concentration_x}
        y2={concentration_y}
      />
    </svg>
  );
};

export default StraightArrow;
