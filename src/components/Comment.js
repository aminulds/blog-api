import { Card, Grid, Typography } from "@mui/material";
import React from "react";
import profileImage from "../images/profile.png";

const comment = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <Grid item sm={9}>
      <Card sx={{ textAlign: "center" }}>
        <img src={profileImage} alt="" style={{ width: "50px" }} />
        <Typography variant="h6">{name}</Typography>
        <Typography>{email}</Typography>
        <Typography>{body}</Typography>
      </Card>
    </Grid>
  );
};

export default comment;
