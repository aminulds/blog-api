import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import blogImage from "../images/blog-image.jpg";

const Post = ({ post }) => {
  //get post
  const { title, body } = post;
  //StyleButton
  const detailsButtonStyle = {
    textDecoration: "none",
  };
  return (
    <Grid item sm={4}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={blogImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              style={{ textTransform: "capitalize" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {title.slice(0, 15) + " ....."}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body.slice(0, 45) + " ....."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link style={detailsButtonStyle} to={`/postDetail/${post.id}`}>
            <Button size="small" color="primary">
              Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
