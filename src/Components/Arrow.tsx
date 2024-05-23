import React from "react";

interface Props {
  start_x: any;
  start_y: string;
  hiearchy_number: number;
  subject: string;
  className: string;
  color: string;
}

const Arrow = ({
  start_x,
  start_y,
  hiearchy_number = 0,
  subject,
  className,
  color,
}: Props) => {
  const concentration_positions: any[] = [
    ["synthetic", ["14%", "66%"]],
    ["cell", ["39%", "66%"]],
    ["devices", ["64%", "66%"]],
    ["imaging", ["89%", "66%"]],
  ];
  let sideLine: string;
  let bottomLine: string;
  sideLine = (start_x / 1 + 5).toString().concat("%");
  bottomLine = (62 - hiearchy_number).toString().concat("%");
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
        x2={sideLine}
        y2={start_y}
      />
      <line
        className={className}
        stroke={color}
        x1={sideLine}
        y1={start_y}
        x2={sideLine}
        y2={bottomLine}
      />
      <line
        className={className}
        stroke={color}
        x1={sideLine}
        y1={bottomLine}
        x2={concentration_x}
        y2={bottomLine}
      />
      <line
        className={className}
        stroke={color}
        x1={concentration_x}
        y1={bottomLine}
        x2={concentration_x}
        y2={concentration_y}
      />
    </svg>
  );
};

export default Arrow;
