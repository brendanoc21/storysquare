import React from "react";
import PageTemplate from "../components/templateProjectListPage";
import ProjectCreator from "../components/projectCreator";

const AddProjectPage = (props) => {
    return (
        <PageTemplate
          title="Add new Project"
        >
          <ProjectCreator/>
        </PageTemplate>
    );
};

export default AddProjectPage;