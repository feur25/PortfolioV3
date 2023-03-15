import React, { useState, useEffect } from 'react';
import Blogs from '../View/Projects/Blogs.jsx';
import { BlogStyle } from "./styleBlog";
const ModelFetch = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const fetchData = () => {
    fetch('data.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setBlogs(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <BlogStyle>
      <div>
        {blogs && <Blogs data={blogs} />}
        {isError && <div>Une erreur est survenue.</div>}
      </div>
    </BlogStyle>
  );
};
export default ModelFetch;