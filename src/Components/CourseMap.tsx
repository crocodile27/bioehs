import React, { useState } from "react";
import GeneralRequirements from "./GeneralRequirements.tsx";
import Concentrations from "./Concentrations.tsx";

export const CourseMap = () => {
  const listOfDictOfCourses: any[] = [["mse45", ["devices", "cell"]]];
  const ListOfCourseInfo: { courseid: string; courseName: string }[] = [
    { courseid: "mse45", courseName: "MSE 45" },
    { courseid: "mechec85", courseName: "MECHE C85" },
    { courseid: "bioe10", courseName: "BIOE 10" },
    { courseid: "bioe11", courseName: "BIOE 11" },
    { courseid: "chem3a", courseName: "CHEM 3A" },
    { courseid: "cs70", courseName: "CS 70" },
    { courseid: "e7", courseName: "E 7" },
    { courseid: "cs61a", courseName: "CS 61A" },
    { courseid: "cs61b", courseName: "CS 61B" },
    { courseid: "physics7A", courseName: "PHYS 7A" },
    { courseid: "physics7B", courseName: "PHYS 7B" },
    { courseid: "math53", courseName: "MATH 53" },
    { courseid: "math54", courseName: "MATH 54" },
    { courseid: "math55", courseName: "MATH 55" },
    { courseid: "eecs16a", courseName: "EECS 16A" },
    { courseid: "eecs16b", courseName: "EECS 16B" },
  ];

  const [NonOpaqueList, setNonOpaqueList] = useState<string[]>([]);
  const [isHoveredOver, setHoveredOver] = useState(false);

  const onMouseOver = (courseId: string) => {
    setHoveredOver(false);
    for (let i = 0; i < listOfDictOfCourses.length; i++) {
      let [course, ListOfRelatedClasses] = listOfDictOfCourses[i];
      if (courseId === course) {
        setNonOpaqueList(ListOfRelatedClasses);
      }
    }
  };

  function onMouseOut(courseId: string) {
    setHoveredOver(true);
    setNonOpaqueList([]);
  }

  return (
    <div>
      <div>
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
          concentrationName={"Synthetic and Computational Biology"}
          id={"synthetic"}
        />
        <Concentrations
          concentrationName={"Cell & Tissue Engineering"}
          id={"cell"}
        />
        <Concentrations concentrationName={"Devices"} id={"devices"} />
        <Concentrations concentrationName={"Imaging"} id={"imaging"} />
      </div>
    </div>
  );
};

export default CourseMap;
