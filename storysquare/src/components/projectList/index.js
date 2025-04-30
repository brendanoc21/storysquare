import React from "react";
import Project from "../projectCard/";
import Grid from "@mui/material/Grid2";

const ProjectList = (props) => {
  let projectCards = props.projects?.map((p) => (
    <Grid key={p.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <Project key={p.id} project={p} action={props.action} />
    </Grid>
  ));
  return projectCards; 
};

export default ProjectList;