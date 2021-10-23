import { Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/postDetail/:postId">
            <PostDetail></PostDetail>
          </Route>
          <Route path="*">
            <>
              <h3>Page Not Found</h3>
              <p>404 error!</p>
            </>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
