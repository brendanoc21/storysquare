import React, { useState } from "react";

export const ProjectContext = React.createContext(null);

const ProjectContextProvider = (props) => {
  const [myProjects, setMyProjects] = useState( {} ) 

  const newProject = () => {
  };

  return (
    <ProjectContext.Provider
      value={{
        newProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;