// import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../component/UI/Card";
import { getMovies } from "../services/GetServices";

const Movie = () => {
  const [data, setData] = useState([]);
  //   const API =
  //     "https://www.omdbapi.com/?i=tt3896198&apikey=47aee04e&s=titanic&page=1";
  const getMovieData = async () => {
    try {
      //   const res = await axios.get(API);
      const res = await getMovies();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log("Erroe message", error.message);
      console.log("Erroe Status", error.Status);
      console.log("Erroe data", error.data);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <ul className="container grid grid-four--cols">
      {data.map((currElement) => {
        return <Card key={currElement.imdbID} movieData={currElement} />;
      })}
    </ul>
  );
};

export default Movie;
