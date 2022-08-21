import React from "react";
import { Disclosure } from "@headlessui/react";
import { UilAngleRightB } from "@iconscout/react-unicons";
import Topiccard from "./Topiccard";

function Modulecard({moduleNumber=0, title="", description="", moduleList=[]}) {
  return (
    <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-2">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="text-md font-semibold">Module {moduleNumber}</div>
            <Disclosure.Button className="flex min-h-fit w-full min-w-fit items-center justify-start gap-4 whitespace-nowrap rounded-lg py-2 text-left text-xl font-medium text-purple-900">
              <div
                className={`flex items-center justify-start gap-4 duration-300 ${
                  open ? "text-3xl font-bold" : ""
                } mr-5 text-purple-500`}
              >
                <UilAngleRightB
                  className={`${
                    open ? "rotate-90 scale-150 transform" : ""
                  } h-5 w-5 text-purple-500`}
                />
                <span className={`${open ? "transform" : ""} text-purple-500`}>
                  {title}
                </span>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="px-2 pt-4 pb-2 text-sm text-gray-500">
              <div className="text-base">{description}</div>
              {moduleList.map((item) => (
                <Topiccard title={item.title} key={item.id} />
              ))}
              <Topiccard title="Internet of Things" />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Modulecard;


// example Call
{/* <Modulecard
        moduleNumber={1}
        title="This is Module HTML"
        description="This is a description. I hope you can read it. I am just increasing word count to make the line got to the next line. hello world. bye world"
        moduleList={[
          {
            id: 1,
            title: "Internet of Things",
          },
          { id: 2, title: "Bro WTF" },
        ]}
      /> */}