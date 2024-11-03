import React, { useState } from "react";
import GeneralRequirements from "./GeneralRequirements.tsx";
import Concentrations from "./Concentrations.tsx";
import Arrow from "./Arrow.tsx";
import Upperdivs from "./Upperdivs.tsx";

export const CourseMap = () => {
  const listOfConcentrations: string[] = [
    "synthetic",
    "cell",
    "devices",
    "imaging",
  ];

  const listOfGenReq: string[] = [
    "mse45",
    "mechec85",
    "e7",
    "chem3a",
    "cs70",
    "bioe10",
    "bioe25",
    "bioe26",
    "bioe11",
    "cs61a",
    "cs61b",
    "physics7a",
    "physics7b",
    "math55",
    "math54",
    "math53",
    "eecs16a",
    "eecs16b",
  ];

  const listOfUpDiv: string[] = [
    "bioe100",
    "bioe101",
    "bioe102",
    "bioe103",
    "bioe104",
    "bioe105",
    "bioec106a",
    "bioec106b",
    "bioe110",
    "bioe111",
    "bioec112",
    "bioe114",
    "bioe115",
    "bioe117",
    "bioe118",
    "bioec119",
    "bioe121",
    "bioe121l",
    "bioe124",
    "bioe125",
    "bioe125b",
    "bioe131",
    "bioe135",
    "bioe134",
    "bioe140l",
    "bioe145",
    "bioe147",
    "bioe148",
    "bioe150",
    "bioe151",
    "bioec165",
    "bioe163",
    "bioe163l",
    "bioe168l",
    "bioe187",
    "bioec117",
    "bioec118",
    "bioec131",
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
  // for arrow location reference only.
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
    // { course: "bioe101", y_coordinate: "98", x_coordinate: "75.4" },
    // { course: "bioe105", y_coordinate: "98", x_coordinate: "80.4" },
    // { course: "bioec165", y_coordinate: "98", x_coordinate: "85.4" },
    // { course: "bioe168l", y_coordinate: "98", x_coordinate: "90.4" },
    // { course: "bioe110", y_coordinate: "98", x_coordinate: "20.4" },
    // { course: "bioe114", y_coordinate: "98", x_coordinate: "20.4" },
    // { course: "bioe121", y_coordinate: "32", x_coordinate: "15.4" },
    // { course: "bioe121l", y_coordinate: "47", x_coordinate: "15.4" },
    // { course: "bioe145", y_coordinate: "110", x_coordinate: "20.4" },
    // { course: "bioe151", y_coordinate: "47", x_coordinate: "25.4" },
    // { course: "bioe163", y_coordinate: "32", x_coordinate: "30.4" },
    // { course: "bioe163l", y_coordinate: "47", x_coordinate: "30.4" },
    // { course: "bioec117", y_coordinate: "32", x_coordinate: "35.4" },
    // { course: "bioec118", y_coordinate: "32", x_coordinate: "42" },
    // { course: "bioe150", y_coordinate: "32", x_coordinate: "45.4" },
    // { course: "bioe187", y_coordinate: "98", x_coordinate: "42" },
    // { course: "bioe103", y_coordinate: "98", x_coordinate: "45.4" },
    // { course: "bioe104", y_coordinate: "98", x_coordinate: "50.4" },
    // { course: "bioe102", y_coordinate: "98", x_coordinate: "55.4" },
    // { course: "bioe111", y_coordinate: "98", x_coordinate: "55.4" },
    // { course: "bioe124", y_coordinate: "32", x_coordinate: "60.4" },
    // { course: "bioec112", y_coordinate: "47", x_coordinate: "65.4" },
    // { course: "bioe115", y_coordinate: "47", x_coordinate: "70.4" },
    // { course: "bioe110", y_coordinate: "98", x_coordinate: "60.4" },
    // { course: "bioe114", y_coordinate: "98", x_coordinate: "65.4" },
    // { course: "bioec131", y_coordinate: "98", x_coordinate: "0.4" },
    // { course: "bioe135", y_coordinate: "98", x_coordinate: "5.4" },
    // { course: "bioe140l", y_coordinate: "98", x_coordinate: "10.4" },
    // { course: "bioe134", y_coordinate: "47", x_coordinate: "0.4" },
    // { course: "bioe147", y_coordinate: "47", x_coordinate: "5.4" },
    // { course: "bioe148", y_coordinate: "47", x_coordinate: "10.4" },
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
  ];

  const upperDivRelationships = {
    bioe100: {
      prereqsAndConcentrations: ["imaging", "devices", "cell", "synthetic"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe101: {
      prereqsAndConcentrations: [
        "eecs16a",
        "eecs16b",
        "math53",
        "physics7a",
        "physics7b",
        "imaging",
        "devices",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe102: {
      prereqsAndConcentrations: [
        "math53",
        "math54",
        "physics7a",
        "cell",
        "devices",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    //bio1a or bioe11
    bioe103: {
      prereqsAndConcentrations: [
        "physics7a",
        "physics7b",
        "math51",
        "math52",
        "math53",
        "math54",
        "bio1a",
        "bioe11",
        "synthetic",
        "cell",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe104: {
      prereqsAndConcentrations: [
        "math53",
        "math54",
        "physics7a",
        "synthetic",
        "cell",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe105: {
      prereqsAndConcentrations: ["math53", "physics7a", "physics7b", "devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    //new course: math 54 or 16a/16b
    bioec106a: {
      prereqsAndConcentrations: [
        "math54",
        "eecs16a",
        "eecs16b",
        "cs61a",
        "cs61b",
        "devices",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    //new course:
    bioec106b: {
      prereqsAndConcentrations: [
        "eecsc106a",
        "bioec106a",
        "mecec106a",
        "eecsc206a",
        "devices",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe110: {
      prereqsAndConcentrations: [
        "bioe10",
        "bioe11",
        "bio1a",
        "math54",
        "cell",
        "devices",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe111: {
      prereqsAndConcentrations: [
        "chem1a",
        "chem4a",
        "bioe11",
        "bio1a",
        "bioe103",
        "devices",
        "cell",
        "synthetic",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    //new course: "bioe102", "mecec85", "civec30"
    bioec112: {
      prereqsAndConcentrations: [
        "bioe102",
        "mechec85",
        "civec30",
        "devices",
        "cell",
        "synthetic",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    //new course bioe11 or bio1a
    bioe114: {
      prereqsAndConcentrations: ["bio1a", "bioe11"],
      color: "blue",
      hiearchy_number: 1,
    },
    //bioe114 or bioe 202
    bioe115: {
      prereqsAndConcentrations: [
        "bioe114",
        "bioe11",
        "bioe202",
        "synthetic",
        "cell",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    //new course: MEC ENG 108, BIO ENG 102, MAT SCI 113 or equivalent
    bioe117: {
      prereqsAndConcentrations: ["mece108", "bioe102", "matsci113", "devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe118: {
      prereqsAndConcentrations: [
        "mse45",
        "bioe103",
        "bioe102",
        "bioe104",
        "devices",
        "cell",
        "synthetic",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    //new course: mecec85 or civec30 or bioe102
    bioec119: {
      prereqsAndConcentrations: ["mechec85", "civec30", "bioe102"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe121: {
      prereqsAndConcentrations: [
        "chem3a",
        "physics7a",
        "physics7b",
        "bioe104",
        "devices",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe121l: {
      prereqsAndConcentrations: ["bioe104", "bioe121", "devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe124: {
      prereqsAndConcentrations: ["bioe11", "chem3b", "bioe103", "bioe104"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe125: {
      prereqsAndConcentrations: ["Eleng120", "devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe125b: {
      prereqsAndConcentrations: ["eecsc106a", "bioec125"],
      color: "blue",
      hiearchy_number: 1,
    },
    //bioe11 or bio1a
    bioe131: {
      prereqsAndConcentrations: [
        "bioe11",
        "bio1a",
        "cs61a",
        "engin7",
        "synthetic",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe134: {
      prereqsAndConcentrations: ["cs61b", "bioe11", "bioe103", "synthetic"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe135: {
      prereqsAndConcentrations: ["synthetic"],
      color: "blue",
      hiearchy_number: 1,
    }, // bioe11 or bio1a
    bioe140l: {
      prereqsAndConcentrations: ["bioe11", "bio1a", "synthetic"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe145: {
      prereqsAndConcentrations: ["devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe147: {
      prereqsAndConcentrations: ["bioe103", "synthetic"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe148: {
      prereqsAndConcentrations: ["bioe103", "synthetic"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe150: {
      prereqsAndConcentrations: ["devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe151: {
      prereqsAndConcentrations: ["bioe104", "devices", "bioe11"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe163: {
      prereqsAndConcentrations: ["chem3a", "physics7b", "bioe102", "devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe163l: {
      prereqsAndConcentrations: ["bioe163", "devices"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioec165: {
      prereqsAndConcentrations: [
        "eecs16b",
        "eecs16a",
        "devices",
        "imaging",
        "eleng20",
        "math54",
        "bioe105",
        "bioe101",
      ],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe168l: {
      prereqsAndConcentrations: ["imaging"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioe187: {
      prereqsAndConcentrations: ["devices", "synthetic"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioec117: {
      prereqsAndConcentrations: ["bioe102", "devices", "cell"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioec118: {
      prereqsAndConcentrations: ["bioe103", "devices", "cell"],
      color: "blue",
      hiearchy_number: 1,
    },
    bioec131: {
      prereqsAndConcentrations: ["bioe11", "synthetic"],
      color: "blue",
      hiearchy_number: 1,
    },
  };
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

  const ListOfUpperDivInfo: {
    courseid: string;
    courseName: string;
  }[] = [
    { courseid: "bioe101", courseName: "BIOE 101" },
    {
      courseid: "bioe102",
      courseName: "BIOE 102",
    },
    { courseid: "bioe105", courseName: "BIOE 105" },
    { courseid: "bioec106a", courseName: "BIOE C106A" },
    { courseid: "bioec106b", courseName: "BIOE C106B" },
    { courseid: "bioe110", courseName: "BIOE 110" },
    { courseid: "bioe117", courseName: "BIOE 117" },
    { courseid: "bioec119", courseName: "BIOE C119" },
    { courseid: "bioec165", courseName: "BIOE 165" },
    { courseid: "bioe168l", courseName: "BIOE 168L" },
    { courseid: "bioe121", courseName: "BIOE 121" },
    { courseid: "bioe121l", courseName: "BIOE 121L" },
    { courseid: "bioe124", courseName: "BIOE 124" },
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
  const totalList = [...listOfGenReq, ...listOfConcentrations, ...listOfUpDiv];
  const [HighlightedList, setHighlightedList] = useState<string[]>([]);
  const [isHoveredOver, setHoveredOver] = useState(false);
  const [OpaqueList, setOpaqueList] = useState<string[]>([]);

  // FUNCTIONS
  // on MouseOver set hovered over to be true and then set all related courses to be non-opaque

  const onMouseOver = (courseId: string) => {
    setHoveredOver(true);
    let HighlightedList: string[] = [];
    if (listOfGenReq.includes(courseId)) {
      // if it is a general requirement
      for (let i = 0; i < listOfRelatedRequirements.length; i++) {
        if (listOfRelatedRequirements[i].includes(courseId)) {
          // add related requirements to HighlightedList
          HighlightedList = HighlightedList.concat(
            listOfRelatedRequirements[i]
          );
        }
      }
    } else if (listOfConcentrations.includes(courseId)) {
      //If it is a concentration
      let otherConcentrations = listOfConcentrations.filter(
        (concentration) => concentration !== courseId
      );
      // add related lower div courses
      for (let i = 0; i < listOfRelatedRequirements.length; i++) {
        if (listOfRelatedRequirements[i].includes(courseId)) {
          // add related requirements to HighlightedList
          let related_courses = listOfRelatedRequirements[i].filter(
            (course) => !otherConcentrations.includes(course)
          );
          HighlightedList = HighlightedList.concat(related_courses);
        }
      }

      // Loop through the upperDivRelationships map
      for (const [upperDiv, upperDivCourseInfo] of Object.entries(
        upperDivRelationships
      )) {
        // Check if the course's prereqsAndConcentrations contains the courseId
        if (upperDivCourseInfo.prereqsAndConcentrations.includes(courseId)) {
          // Add the upperDiv course to HighlightedList
          HighlightedList.push(upperDiv);
        }
      }

      // Ensure HighlightedList has unique courses
      HighlightedList = [...new Set(HighlightedList)];
    } else if (listOfUpDiv.includes(courseId)) {
      // Please fill in the rest
      HighlightedList =
        upperDivRelationships[courseId].prereqsAndConcentrations || [];
      HighlightedList = [courseId, ...HighlightedList];
    } else {
      setOpaqueList([]);
      setHighlightedList(HighlightedList);
    }
    let opaqueList = totalList.filter(
      (course) => !HighlightedList.includes(course)
    );
    setOpaqueList(opaqueList);
    setHighlightedList(HighlightedList);
  };

  // on MouseOut, set hovered over to be equal to false again and set non-opaque list to nothing
  function onMouseOut(courseId: string) {
    setHoveredOver(false);
    setHighlightedList([]);
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
      <div className="main-content">
        <div className="container-arrows">
          {relationships.map((relationship) =>
            relationship.gen_req.map((i) =>
              relationship.concentrations.map((subject) => (
                <Arrow
                  key={i + subject}
                  className={
                    isHoveredOver
                      ? HighlightedList.includes(i) &&
                        !OpaqueList.includes(subject)
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
                  ? HighlightedList.includes(courseInfo.courseid) &&
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
            <Upperdivs
              key={courseInfo.courseid}
              className={
                isHoveredOver
                  ? HighlightedList.includes(courseInfo.courseid)
                    ? "small-circle highlight-border"
                    : "small-circle opaque"
                  : "small-circle"
              }
              courseName={courseInfo.courseName}
              id={courseInfo.courseid}
              href={`https://bioehs.studentorg.berkeley.edu/courseguides/${courseInfo.courseid}`}
              onMouseOver={() => onMouseOver(courseInfo.courseid)}
              onMouseOut={() => onMouseOut(courseInfo.courseid)}
            />
          ))}
        </div>
      </div>
      <div className="courseMapSummary">
        <div>
          <p>
            Hi! This project was curated by Anthea from Bioengineering Honor
            Society and assisted by Buvi. Feel free to fill in this{" "}
            <a href="https://forms.gle/endBsmRMRvLCtTHi7">form</a> with any
            comments or suggestions.{" "}
            <a href="https://forms.gle/4ZhuwB3gr7xHQ73GA">Subscribe </a>to our
            latest updates on the course map so you can best utilize this free
            tool.
            <h3>How to use this course map:</h3>
            <p>
              All upper division courses highlight their respective
              prerequisites. Note that BioE11 has the alternative prerequisite
              of Bio1A in most cases, and concentrations are observations from
              Anthea not the department guide yet check{" "}
              <a href="https://guide.berkeley.edu/courses/bio_eng/">
                this website
              </a>{" "}
              to be sure.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};
