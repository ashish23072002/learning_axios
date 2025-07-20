import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../component/UI/Card";

const Movie = () => {
  const [data, setData] = useState([]);
  const API =
    "https://www.omdbapi.com/?i=tt3896198&apikey=47aee04e&s=titanic&page=1";
  const getMovieData = async () => {
    try {
      const res = await axios.get(API);
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log(error);
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
