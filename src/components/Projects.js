import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div className='projects w-4/5 m-auto flex  flex-col p-3'>
      <div className="heading text-left mb-4">
        <h2 className='text-2xl text-left  text-white font-bold '>PROJECTS</h2>
        <hr className='w-[50px] h-[2px]  mb-4'/>
      </div>
      <div className="w-full flex flex-wrap gap-10 items-center justify-start">
      <Project heading={"Note App"}/>
      <Project heading={"Book Store"}/>
      <Project heading={"Amazone Clone"}/>
      <Project heading={"Boat UI"}/>
      <Project heading={"Movie App"}/>
      <Project heading={"Quora Clone"}/>
      </div>
    </div>
  );
};

export default Projects;
