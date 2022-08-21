import React from "react";
import Progresswrapper from "../Progressbars/Progresswrapper";
import { UilArrowCircleRight } from "@iconscout/react-unicons";

function Pathcard({ completion, title }) {
  return (
    <div className="relative flex flex-row items-center justify-between max-w-md p-5 m-3 mx-auto shadow-lg w-fit rounded-2xl hover:bg-gray-100">
      <Progresswrapper
        type="circular"
        progressVal={completion}
        color={"orange"}
        containerSize={125}
      />
      <span className="text-3xl font-bold">Resume {title}</span>
      <UilArrowCircleRight className="absolute bottom-0 right-0 w-12 h-12 m-2 rounded-xl" />
    </div>
  );
}

export default Pathcard;
