import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import HeartIcon from "@mui/icons-material/FavoriteBorder";
import Grid from "@mui/material/Grid2";
import Avatar from '@mui/material/Avatar';
import { ProjectContext } from "../../contexts/projectContext";

export default function ProjectCard({ project }) {

  return (
    <Card>
      <CardHeader
        avatar={
            <Avatar sx={{ backgroundColor: 'purple' }}>
              <HeartIcon />
            </Avatar>
        }
        title={
          <Typography variant="h5" component="p">
            {project.title}{" "}
          </Typography>
        }
      />
      <CardContent>
        <Grid container>
          <Grid size={{xs: 6}}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {project.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}