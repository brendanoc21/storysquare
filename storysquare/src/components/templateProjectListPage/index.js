import React, { useState } from "react";
import Header from "../headerProjectList";
import Grid from "@mui/material/Grid2";

function ProjectListPageTemplate({ title }) {
  
    return (
      <Grid container>
        <Grid size={12}>
          <Header title={title} />
        </Grid>
      </Grid>
    );
  }
  export default ProjectListPageTemplate;