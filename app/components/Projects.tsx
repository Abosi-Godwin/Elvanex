import Line from "./Line";
import Heading from "./Heading";
import Project from "./Project";

import { projects } from "../data/mockDatas";
const Projects = () => {
  return (
    <div className="py-16 bg-darkCharcoal text-white">
      <div className="w-full flex items-center justify-evenly">
        <Line bg="accentWhite" />
        <Heading text="Case Studies" />
        <Line bg="accentWhite" />
      </div>
      <h1 className="text-2xl font-bold text-center pt-5 capitalize">Our latest projects</h1>
      <div className="grid grid-cols-1 gap-6 px-3 py-10 md:grid-cols-3">
        {projects?.map((data) => (
          <Project
            key={data.id}
            {...data}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
