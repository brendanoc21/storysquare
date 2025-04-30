import React from "react";
import PageTemplate from "../components/templateProjectListPage";
import myProjects from "../contexts/projectContext";

const HomePage = (props) => {

  const projects = [myProjects];

  return (
      <PageTemplate
        projects={projects}
        title="My Projects"
      />
  );
};

export default HomePage;