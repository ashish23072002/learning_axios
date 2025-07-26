import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";

const Post = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

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
    getPostData();
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

  const handleUpdatePost = (curElem) => {
    setUpdateDataApi(curElem);
  };

  return (
    <>
      <section className="section-form">
        <Form
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="section-post">
        <ol>
          {data.map((curElem) => {
            const { id, body, title } = curElem;
            return (
              <li key={id}>
                <p>{id}</p>
                <p>Title:{title}</p>
                <p>Body:{body}</p>
                <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
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
    </>
  );
};

export default Post;
