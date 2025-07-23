import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";

const Post = () => {
  const [data, setData] = useState([]);
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

  //fucntion to delete Post, in api as well in UI
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);
      if (res.status === 200) {
        const newUpdatedPost = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPost);
      } else {
        console.log(res.status);
      }
    } catch (error) {
      console.log("Erroe message", error.message);
    }
  };
  return (
    <section className="section-post">
      <ol>
        {data.map((curElemnt) => {
          const { id, body, title } = curElemnt;
          return (
            <li key={id}>
              <p>{id}</p>
              <p>Title:{title}</p>
              <p>Body:{body}</p>
              <button>Edit</button>
              <button
                className="btn-delete"
                onClick={() => handleDeletePost(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Post;
