import React, { useState } from "react";
import Header from "../headerProjectList";
import Grid from "@mui/material/Grid2";
import ProjectList from "../projectList";

function ProjectListPageTemplate({ projects, title, children }) {
  

    return (
      <Grid container>
        <Grid size={12}>
          <Header title={title} />
        </Grid>
        <Grid size={15}>
          {children}
        </Grid>
        <Grid>
          <ProjectList projects={projects}></ProjectList>
        </Grid>
      </Grid>
    );
  }
  export default ProjectListPageTemplate;