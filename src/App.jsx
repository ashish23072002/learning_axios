import { useEffect } from "react";
import { getPost } from "./api/PostApi";
import "./App.css";
// import Movie from "./Pages/Movie";

const App = () => {
  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log(res.data);
      // setData(res.data.Search);
    } catch (error) {
      console.log("Erroe message", error.message);
      console.log("Erroe Status", error.Status);
      console.log("Erroe data", error.data);
    }
  };
  useEffect(() => {
    console.log(getPostData());
  }, []);
  return (
    <h1>hello from post</h1>
    // <Movie />
  );
};

export default App;
