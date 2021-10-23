import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Post from "./Post";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20)));
  }, []);
  return (
    <>
      <Header></Header>
      {/* Post */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </Grid>
    </>
  );
};

export default Home;
