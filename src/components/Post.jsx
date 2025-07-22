import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";

const Post = () => {
  const [data,setData]=useState([]);
  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log(res.data);
      setData(res.data);
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
    <section className="section-post">
      <ol>
        {
          data.map((curElemnt)=>{
            const {id,body,title}=curElemnt
            return(
              <li key={id}>
                <p>Title:{title}</p>
                <p>Body:{body}</p>
                <button>Edit</button>
                <button className="btn-delete">Delete</button>
              </li>
            )
          })
        }
      </ol>
    </section>
  );
};

export default Post;
