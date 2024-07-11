import { useState, useEffect } from "react";

const UseEffectExample1 = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          console.log("Data fetched:", data);
          // Effect dependent on `data`
        });
    }, 2000);
  }, [count]); // count state in dependency array means effect will run when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Fetched Data</h2>
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

export default UseEffectExample1;
