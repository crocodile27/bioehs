import React, { useState } from "react";
import GeneralRequirements from "./GeneralRequirements.tsx";
import Concentrations from "./Concentrations.tsx";
import Arrow from "./Arrow.tsx";

export const CourseMap = () => {
  const listOfConcentrations: string[] = [
    "synthetic",
    "cell",
    "devices",
    "imaging",
  ];
  const listOfRelatedRequirements: any[] = [
    ["mse45", "devices", "cell"],
    ["mechec85", "synthetic", "devices"],
    ["bioe10", "bioe25", "bioe26", "cell", "devices", "imaging", "synthetic"],
    ["bioe11", "chem3a", "cell", "devices", "imaging", "synthetic"],
    ["e7", "cs61a", "cs61b", "devices", "synthetic"],
    ["cs70", "synthetic"],
    ["physics7a", "physics7b", "cell", "devices", "imaging", "synthetic"],
    ["math53", "math54", "math55", "cell", "devices", "imaging", "synthetic"],
    ["eecs16a", "eecs16b", "imaging", "devices"],
  ];
  const gen_req_coordinates: {
    course: string;
    x_coordinate: string;
    y_coordinate: string;
  }[] = [
    { course: "mse45", y_coordinate: "25", x_coordinate: "2.5" },
    { course: "mechec85", y_coordinate: "25", x_coordinate: "11.5" },
    { course: "e7", y_coordinate: "25", x_coordinate: "56" },
    { course: "chem3a", y_coordinate: "25", x_coordinate: "29.1" },
    { course: "cs70", y_coordinate: "32", x_coordinate: "38" },
    { course: "bioe10", y_coordinate: "17", x_coordinate: "20.5" },
    { course: "bioe25", y_coordinate: "32", x_coordinate: "20.5" },
    { course: "bioe26", y_coordinate: "47", x_coordinate: "20.5" },
    { course: "bioe11", y_coordinate: "40", x_coordinate: "29.1" },
    { course: "cs61a", y_coordinate: "25", x_coordinate: "47" },
    { course: "cs61b", y_coordinate: "40", x_coordinate: "47" },
    { course: "physics7a", y_coordinate: "25", x_coordinate: "64.9" },
    { course: "physics7b", y_coordinate: "40", x_coordinate: "64.9" },
    { course: "math55", y_coordinate: "32", x_coordinate: "82.7" },
    { course: "math54", y_coordinate: "25", x_coordinate: "73.5" },
    { course: "math53", y_coordinate: "40", x_coordinate: "73.5" },
    { course: "eecs16a", y_coordinate: "25", x_coordinate: "91.6" },
    { course: "eecs16b", y_coordinate: "40", x_coordinate: "91.6" },
  ];

  const relationships: {
    gen_req: any[];
    concentrations: any[];
    color: string;
    hiearchy_number: number;
  }[] = [
    {
      gen_req: ["mse45"],
      concentrations: ["devices", "cell"],
      color: "brown",
      hiearchy_number: 0,
    },
    {
      gen_req: ["mechec85"],
      concentrations: ["synthetic", "devices"],
      color: "burlywood",
      hiearchy_number: 1,
    },
    {
      gen_req: ["bioe10", "bioe25", "bioe26"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#00cccc",
      hiearchy_number: 2,
    },
    {
      gen_req: ["bioe11", "chem3a"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#00cccc",
      hiearchy_number: 3,
    },
    {
      gen_req: ["e7", "cs61a", "cs61b"],
      concentrations: ["devices", "synthetic"],
      color: "#00bfff",
      hiearchy_number: 4,
    },
    {
      gen_req: ["cs70"],
      concentrations: ["synthetic"],
      color: "#00bfff",
      hiearchy_number: 5,
    },
    {
      gen_req: ["physics7a", "physics7b"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#ff9933",
      hiearchy_number: 6,
    },
    {
      gen_req: ["math53", "math54", "math55"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#ff6666",
      hiearchy_number: 7,
    },
    {
      gen_req: ["eecs16a", "eecs16b"],
      concentrations: ["imaging", "devices"],
      color: "#cccccc",
      hiearchy_number: 8,
    },
  ];

  const ListOfCourseInfo: { courseid: string; courseName: string }[] = [
    { courseid: "mse45", courseName: "MSE 45" },
    { courseid: "mechec85", courseName: "MECHE C85" },
    { courseid: "bioe10", courseName: "BIOE 10" },
    { courseid: "bioe25", courseName: "BIOE 25" },
    { courseid: "bioe26", courseName: "BIOE 26" },
    { courseid: "bioe11", courseName: "BIOE 11" },
    { courseid: "chem3a", courseName: "CHEM 3A" },
    { courseid: "cs70", courseName: "CS 70" },
    { courseid: "e7", courseName: "E 7" },
    { courseid: "cs61a", courseName: "CS 61A" },
    { courseid: "cs61b", courseName: "CS 61B" },
    { courseid: "physics7a", courseName: "PHYS 7A" },
    { courseid: "physics7b", courseName: "PHYS 7B" },
    { courseid: "math53", courseName: "MATH 53" },
    { courseid: "math54", courseName: "MATH 54" },
    { courseid: "math55", courseName: "MATH 55" },
    { courseid: "eecs16a", courseName: "EECS 16A" },
    { courseid: "eecs16b", courseName: "EECS 16B" },
  ];

  const [NonOpaqueList, setNonOpaqueList] = useState<string[]>([]);
  const [isHoveredOver, setHoveredOver] = useState(false);
  const [OpaqueList, setOpaqueList] = useState<string[]>([]);

  const onMouseOver = (courseId: string) => {
    setHoveredOver(true);
    let totalList: string[] = [];
    for (let i = 0; i < listOfRelatedRequirements.length; i++) {
      if (listOfRelatedRequirements[i].includes(courseId)) {
        totalList = totalList.concat(listOfRelatedRequirements[i]);
      }
    }
    totalList = [...new Set(totalList)];
    setNonOpaqueList(totalList);
    if (listOfConcentrations.includes(courseId)) {
      const opaqueList = listOfConcentrations.filter(
        (concentration) => concentration !== courseId
      );
      setOpaqueList(opaqueList);
    } else {
      setOpaqueList([]);
    }
  };

  function onMouseOut(courseId: string) {
    setHoveredOver(false);
    setNonOpaqueList([]);
  }

  function getXYCoordinate(courseId: string) {
    for (let i = 0; i < gen_req_coordinates.length; i++) {
      if (courseId === gen_req_coordinates[i].course) {
        return [
          gen_req_coordinates[i].x_coordinate,
          gen_req_coordinates[i].y_coordinate,
        ];
      }
    }
    return ["0", "0"]; // Return null if the courseId is not found
  }

  return (
    <div className="main-container">
      <div className="container-arrows">
        {relationships.map((relationship) =>
          relationship.gen_req.map((i) =>
            relationship.concentrations.map((subject) => (
              <Arrow
                key={i + subject}
                className={
                  isHoveredOver
                    ? NonOpaqueList.includes(relationship.gen_req[0])
                      ? "arrow"
                      : "arrow opaque-arrow"
                    : "arrow"
                }
                hiearchy_number={relationship.hiearchy_number}
                color={relationship.color}
                start_x={getXYCoordinate(i)[0]}
                start_y={getXYCoordinate(i)[1]}
                subject={subject}
              />
            ))
          )
        )}
      </div>
      <div className="container">
        {ListOfCourseInfo.map((courseInfo) => (
          <GeneralRequirements
            key={courseInfo.courseid}
            className={
              isHoveredOver
                ? NonOpaqueList.includes(courseInfo.courseid)
                  ? "circle highlight-border"
                  : "circle opaque"
                : "circle"
            }
            courseName={courseInfo.courseName}
            id={courseInfo.courseid}
            onMouseOver={() => onMouseOver(courseInfo.courseid)}
            onMouseOut={() => onMouseOut(courseInfo.courseid)}
          />
        ))}
      </div>
      <div className="sub-container">
        <Concentrations
          className={
            isHoveredOver
              ? OpaqueList.includes("synthetic")
                ? "concentration opaque"
                : "concentration highlight-border"
              : "concentration"
          }
          concentrationName={"Synthetic and Computational Biology"}
          id={"synthetic"}
          onMouseOver={() => onMouseOver("synthetic")}
          onMouseOut={() => onMouseOut("synthetic")}
        />
        <Concentrations
          className={
            isHoveredOver
              ? OpaqueList.includes("cell")
                ? "concentration opaque"
                : "concentration highlight-border"
              : "concentration"
          }
          concentrationName={"Cell & Tissue Engineering"}
          id={"cell"}
          onMouseOver={() => onMouseOver("cell")}
          onMouseOut={() => onMouseOut("cell")}
        />
        <Concentrations
          className={
            isHoveredOver
              ? OpaqueList.includes("devices")
                ? "concentration opaque"
                : "concentration highlight-border"
              : "concentration"
          }
          concentrationName={"Devices"}
          id={"devices"}
          onMouseOver={() => onMouseOver("devices")}
          onMouseOut={() => onMouseOut("devices")}
        />
        <Concentrations
          className={
            isHoveredOver
              ? OpaqueList.includes("imaging")
                ? "concentration opaque"
                : "concentration highlight-border"
              : "concentration"
          }
          concentrationName={"Imaging"}
          id={"imaging"}
          onMouseOver={() => onMouseOver("imaging")}
          onMouseOut={() => onMouseOut("imaging")}
        />
      </div>
      <div className="addition-courses-container"></div>
    </div>
  );
};
