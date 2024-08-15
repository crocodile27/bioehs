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

    ["bioe101", "bioe105", "bioec165", "imaging", "devices", "bioe11"],
    ["bioe102", "devices", "synthetic", "cell"],
    ["bioe103", "devices", "synthetic", "cell"],
    ["bioe104", "devices", "synthetic", "cell"],
    ["bioe110", "synthetic", "cell", "bioe11", "bioe10"],
    ["bioe111", "bioe103", "cell"],
    ["bioe114", "cell", "imaging", "devices", "bioe11"],
    ["bioe114", "devices", "synthetic", "cell", "bioe11"],
    ["bioe115", "bioe114", "bioe11", "synthetic", "cell"],
    ["bioe121", "bioe121l", "devices"],
    ["bioe124", "bioe103", "bioe104", "cell"],
    ["bioe134", "bioe103", "synthetic"],
    ["bioe135", "synthetic"],
    ["bioe140l", "bioe11", "synthetic"],
    ["bioe145", "devices"],
    ["bioe147", "bioe103", "synthetic"],
    ["bioe148", "bioe103", "synthetic"],
    ["bioe150", "devices"],
    ["bioe151", "devices", "bioe11"],
    ["bioe163", "bioe163l", "bioe102", "devices"],
    ["bioe168l", "imaging"],
    ["bioe187", "devices", "synthetic"],
    ["bioec112", "bioe102", "synthetic", "cell"],
    ["bioec117", "bioe102", "devices", "cell"],
    ["bioec118", "bioe103", "devices", "cell"],
    ["bioec131", "bioe11", "synthetic"],
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
    //upper divs
    { course: "bioe101", y_coordinate: "98", x_coordinate: "75.4" },
    { course: "bioe105", y_coordinate: "98", x_coordinate: "80.4" },
    { course: "bioec165", y_coordinate: "98", x_coordinate: "85.4" },
    { course: "bioe168l", y_coordinate: "98", x_coordinate: "90.4" },
    { course: "bioe110", y_coordinate: "98", x_coordinate: "20.4" },
    { course: "bioe114", y_coordinate: "98", x_coordinate: "20.4" },
    { course: "bioe121", y_coordinate: "32", x_coordinate: "15.4" },
    { course: "bioe121l", y_coordinate: "47", x_coordinate: "15.4" },
    { course: "bioe145", y_coordinate: "110", x_coordinate: "20.4" },
    { course: "bioe151", y_coordinate: "47", x_coordinate: "25.4" },
    { course: "bioe163", y_coordinate: "32", x_coordinate: "30.4" },
    { course: "bioe163l", y_coordinate: "47", x_coordinate: "30.4" },
    { course: "bioec117", y_coordinate: "32", x_coordinate: "35.4" },
    { course: "bioec118", y_coordinate: "32", x_coordinate: "42" },
    { course: "bioe150", y_coordinate: "32", x_coordinate: "45.4" },
    { course: "bioe187", y_coordinate: "98", x_coordinate: "42" },
    { course: "bioe103", y_coordinate: "98", x_coordinate: "45.4" },
    { course: "bioe104", y_coordinate: "98", x_coordinate: "50.4" },
    { course: "bioe102", y_coordinate: "98", x_coordinate: "55.4" },
    { course: "bioe111", y_coordinate: "98", x_coordinate: "55.4" },
    { course: "bioe124", y_coordinate: "98", x_coordinate: "60.4" },
    { course: "bioec112", y_coordinate: "47", x_coordinate: "65.4" },
    { course: "bioe115", y_coordinate: "47", x_coordinate: "70.4" },
    { course: "bioe110", y_coordinate: "98", x_coordinate: "60.4" },
    { course: "bioe114", y_coordinate: "98", x_coordinate: "65.4" },
    { course: "bioec131", y_coordinate: "98", x_coordinate: "0.4" },
    { course: "bioe135", y_coordinate: "98", x_coordinate: "5.4" },
    { course: "bioe140l", y_coordinate: "98", x_coordinate: "10.4" },
    { course: "bioe134", y_coordinate: "47", x_coordinate: "0.4" },
    { course: "bioe147", y_coordinate: "47", x_coordinate: "5.4" },
    { course: "bioe148", y_coordinate: "47", x_coordinate: "10.4" },
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
      hiearchy_number: 62 - 0,
    },
    {
      gen_req: ["mechec85"],
      concentrations: ["synthetic", "devices"],
      color: "burlywood",
      hiearchy_number: 62 - 1,
    },
    {
      gen_req: ["bioe10", "bioe25", "bioe26"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#00cccc",
      hiearchy_number: 62 - 2,
    },
    {
      gen_req: ["bioe11", "chem3a"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#00cccc",
      hiearchy_number: 62 - 3,
    },
    {
      gen_req: ["e7", "cs61a", "cs61b"],
      concentrations: ["devices", "synthetic"],
      color: "#00bfff",
      hiearchy_number: 62 - 4,
    },
    {
      gen_req: ["cs70"],
      concentrations: ["synthetic"],
      color: "#00bfff",
      hiearchy_number: 62 - 5,
    },
    {
      gen_req: ["physics7a", "physics7b"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#ff9933",
      hiearchy_number: 62 - 6,
    },
    {
      gen_req: ["math53", "math54", "math55"],
      concentrations: ["cell", "devices", "imaging", "synthetic"],
      color: "#ff6666",
      hiearchy_number: 62 - 7,
    },
    {
      gen_req: ["eecs16a", "eecs16b"],
      concentrations: ["imaging", "devices"],
      color: "#cccccc",
      hiearchy_number: 62 - 8,
    },
    // {
    //   gen_req: [
    //     "bioec131",
    //     "bioe140l",
    //     "bioe103",
    //     "bioe104",
    //     "bioe111",
    //     "bioe110",
    //     "bioe114",
    //   ],
    //   concentrations: ["synthetic"],
    //   color: "#00bfff",
    //   hiearchy_number: 85,
    // },
    /* task: something is wrong with 110, 114, think it's something to do with the containers being too much to the left or something...
    
    */
    // {
    //   gen_req: ["bioe134", "bioe147", "bioe148", "bioec112", "bioe115"],
    //   concentrations: ["synthetic"],
    //   color: "#00bfff",
    //   hiearchy_number: 120,
    // },
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

  const ListOfUpperDivInfo: { courseid: string; courseName: string }[] = [
    { courseid: "bioe101", courseName: "BIOE 101" },
    { courseid: "bioe105", courseName: "BIOE 105" },
    { courseid: "bioec165", courseName: "BIOE 165" },
    { courseid: "bioe168l", courseName: "BIOE 168L" },
    { courseid: "bioe121", courseName: "BIOE 121" },
    { courseid: "bioe121l", courseName: "BIOE 121L" },
    { courseid: "bioe145", courseName: "BIOE 145" },
    { courseid: "bioe151", courseName: "BIOE 151" },
    { courseid: "bioe163", courseName: "BIOE 163" },
    { courseid: "bioe163l", courseName: "BIOE 163L" },
    { courseid: "bioec117", courseName: "BIOE C117" },
    { courseid: "bioec118", courseName: "BIOE C118" },
    { courseid: "bioe150", courseName: "BIOE 150" },
    { courseid: "bioe187", courseName: "BIOE 187" },
    { courseid: "bioe103", courseName: "BIOE 103" },
    { courseid: "bioe104", courseName: "BIOE 104" },
    { courseid: "bioe102", courseName: "BIOE 102" },
    { courseid: "bioe111", courseName: "BIOE 111" },
    { courseid: "bioe124", courseName: "BIOE 124" },
    { courseid: "bioec112", courseName: "BIOE C112" },
    { courseid: "bioe115", courseName: "BIOE 115" },
    { courseid: "bioe110", courseName: "BIOE 110" },
    { courseid: "bioe114", courseName: "BIOE 114" },
    { courseid: "bioec131", courseName: "BIOE C131" },
    { courseid: "bioe135", courseName: "BIOE 135" },
    { courseid: "bioe140l", courseName: "BIOE 140L" },
    { courseid: "bioe134", courseName: "BIOE 134" },
    { courseid: "bioe147", courseName: "BIOE 147" },
    { courseid: "bioe148", courseName: "BIOE 148" },
  ];

  const [NonOpaqueList, setNonOpaqueList] = useState<string[]>([]);
  const [isHoveredOver, setHoveredOver] = useState(false);
  const [OpaqueList, setOpaqueList] = useState<string[]>([]);

  // FUNCTIONS
  // on MouseOver set hovered over to be true and then set all related courses to be non-opaque

  const onMouseOver = (courseId: string) => {
    setHoveredOver(true);
    let totalList: string[] = [];
    for (let i = 0; i < listOfRelatedRequirements.length; i++) {
      if (listOfRelatedRequirements[i].includes(courseId)) {
        totalList = totalList.concat(listOfRelatedRequirements[i]);
      }
    }
    totalList = [...new Set(totalList)];
    if (listOfConcentrations.includes(courseId)) {
      let opaqueList = listOfConcentrations.filter(
        (concentration) => concentration !== courseId // filters out other courses and makes them opaque
      );
      let newTotalList = totalList.filter(
        (course) => !opaqueList.includes(course)
      );
      //task need to remove opaque list from non opaque list
      console.log(opaqueList);
      console.log(newTotalList);
      setOpaqueList(opaqueList); //set all other concentrations to be opaque
      setNonOpaqueList(newTotalList);
    } else {
      setOpaqueList([]);
      setNonOpaqueList(totalList);
    }
  };

  // on MouseOut, set hovered over to be equal to false again and set non-opaque list to nothing
  function onMouseOut(courseId: string) {
    setHoveredOver(false);
    setNonOpaqueList([]);
    setOpaqueList([]);
  }

  //gets the x and y coordiate of the
  function getXYCoordinate(courseId: string) {
    const course = gen_req_coordinates.find((c) => c.course === courseId);
    return course ? [course.x_coordinate, course.y_coordinate] : ["0", "0"];
  }

  //CourseMap Layout STARTS HERE
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
                    ? NonOpaqueList.includes(i) && !OpaqueList.includes(subject)
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
                ? NonOpaqueList.includes(courseInfo.courseid) &&
                  !OpaqueList.includes(courseInfo.courseid)
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
      <div className="upper-div-container">
        {ListOfUpperDivInfo.map((courseInfo) => (
          <GeneralRequirements
            key={courseInfo.courseid}
            className={
              isHoveredOver
                ? NonOpaqueList.includes(courseInfo.courseid)
                  ? "small-circle highlight-border"
                  : "small-circle opaque"
                : "small-circle"
            }
            courseName={courseInfo.courseName}
            id={courseInfo.courseid}
            onMouseOver={() => onMouseOver(courseInfo.courseid)}
            onMouseOut={() => onMouseOut(courseInfo.courseid)}
          />
        ))}
      </div>
    </div>
  );
};
