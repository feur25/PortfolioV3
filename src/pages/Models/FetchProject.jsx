import React, { useState, useEffect } from 'react';
import GetIdProject from '../View/Templates/blog.jsx';
import { BlogStyles } from "./styleBlog";
const ModelFetchProject = () => {
  const [id, setId] = useState([]);
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
        setId(data);
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
    <BlogStyles>
      <div>
        {id && <GetIdProject data={id} />}
        {isError && <div>Une erreur est survenue.</div>}
      </div>
    </BlogStyles>
  );
};
export default ModelFetchProject;