import React, { useState } from "react";

export const ProjectContext = React.createContext(null);

const ProjectContextProvider = (props) => {
  const [myProjects, setMyProjects] = useState( {} ) 

  const newProject = (project) => {
    setMyProjects( {...myProjects, project } )
  };

  return (
    <ProjectContext.Provider
      value={{
        myProjects,
        newProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;