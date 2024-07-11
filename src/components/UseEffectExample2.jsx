/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const UseEffectExample2 = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const result = await response.json();
      setData(result);
      console.log("Data fetched:", result);
    };

    fetchData();

    return () => {
      console.log("Cleanup previous fetch");
      // Cleanup function for previous fetch
    };
  }, [id]); // Runs whenever `id` changes

  return (
    <div>
      <h2>Data</h2>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UseEffectExample2;
