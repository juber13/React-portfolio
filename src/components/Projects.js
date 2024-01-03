import React from "react";
import Project from "./Project";
const Projects = () => {
  return (
    <div className='projects w-4/5 m-auto flex  flex-col p-3 mt-10' id="project">
      <div className="heading text-left mb-4">
        <h2 className='text-2xl text-left  text-white font-bold '>PROJECTS</h2>
        <hr className='w-[50px] h-[2px]  mb-4' />
      </div>
      <div className="w-full flex flex-wrap gap-10 items-center justify-start">
        <Project heading={"Note App"} link="https://notes-42.netlify.app/" githubLink="https://github.com/juber13/note-app" />
        <Project heading={"Book Store"} link="https://juber13.github.io/Book-App/" githubLink="https://github.com/juber13/Book-App" />
        <Project heading={"Amazone Clone"} githubLink="https://github.com/juber13/amazone-clone" />
        <Project heading={"Boat UI"} link="https://juber13.github.io/boat-clone/index.html" githubLink="https://github.com/juber13/boat-clone" />
        <Project heading={"Movie App"} githubLink="https://github.com/juber13/movie-app" link="https://65959e77a6fb800678093ec8--timely-dango-efdfd8.netlify.app/" />
      </div>
    </div>
  );
};

export default Projects;
