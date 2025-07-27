import "./App.css";
import { Accordion } from "./components/Accordion";
import Post from "./components/Post";
// import Movie from "./Pages/Movie";

const App = () => {
  return (
    <section className="main-section">
      <Accordion />
      <Post />
    </section>
    // <Movie />
  );
};

export default App;
