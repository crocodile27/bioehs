import React, { useState } from "react";
import GeneralRequirements from "./GeneralRequirements.tsx";
import Concentrations from "./Concentrations.tsx";

export const CourseMap = () => {
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

  const onMouseOver = (courseId: string) => {
    setHoveredOver(true);
    let totalList: string[] = [];
    for (let i = 0; i < listOfRelatedRequirements.length; i++) {
      if (listOfRelatedRequirements[i].includes(courseId)) {
        totalList = totalList.concat(listOfRelatedRequirements[i]);
      }
    }
    setNonOpaqueList(totalList);
  };

  function onMouseOut(courseId: string) {
    setHoveredOver(false);
    setNonOpaqueList([]);
  }

  return (
    <div className="main-container">
      <div className="container">
        {ListOfCourseInfo.map((courseInfo) => (
          <GeneralRequirements
            key={courseInfo.courseid}
            className={
              isHoveredOver
                ? NonOpaqueList.includes(courseInfo.courseid)
                  ? "circle"
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
              ? NonOpaqueList.includes("synthetic")
                ? "concentration"
                : "concentration opaque"
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
              ? NonOpaqueList.includes("cell")
                ? "concentration"
                : "concentration opaque"
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
              ? NonOpaqueList.includes("devices")
                ? "concentration"
                : "concentration opaque"
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
              ? NonOpaqueList.includes("imaging")
                ? "concentration"
                : "concentration opaque"
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

export default CourseMap;
