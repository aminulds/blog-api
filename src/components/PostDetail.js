import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import blogImage from "../images/blog-image.jpg";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Comment from "./Comment";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    //post
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostDetail(data));
    //comment
    let commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(commentUrl)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [postId]);

  return (
    <>
      <Header></Header>
      {/* Post Details */}

      <Grid sx={{ my: 3 }}>
        <Card>
          <CardActionArea>
            <Typography variant="h3" sx={{ textAlign: "center", py: 2 }}>
              Post Details
            </Typography>
            <CardMedia
              component="img"
              height="400"
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
                {postDetail.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {postDetail.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {/* Comment */}
        <Card sx={{ my: 3 }}>
          <Typography variant="h3" sx={{ textAlign: "center", py: 2 }}>
            Comments
          </Typography>
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            {comments.map((comment) => (
              <Comment comment={comment} key={comment.id}></Comment>
            ))}
          </Grid>
        </Card>
      </Grid>
    </>
  );
};

export default PostDetail;
