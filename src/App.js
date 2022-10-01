import "./styles.css";
// import arr from "./data";
import NumCard from "./numCard";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  let [content, setContent] = useState("");
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setContent(e.target.value);
  }

  let handleClick = async () => {
    await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=v3gAwuBLtGNHeZL5WuHRXq2PepIVFRXJ&limit=8&q=${content}`
    )
      .then((response) => response.json())
      .then((data) => setData(data.data));
    console.log(data);
    // setData(responses)
  };

  function decreaseNum() {
    setNum(num - 1);
  }

  function increaseNum() {
    setNum(num + 1);
  }
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=v3gAwuBLtGNHeZL5WuHRXq2PepIVFRXJ&limit=8&q='smile'`
    )
      .then((response) => response.json())
      .then((data) => setData(data.data));

    console.log("initial fetch", data);
  }, []);
  return (
    <div className="App">
      <h2>Count Button</h2>
      <div className="counterContainer">
        <button onClick={decreaseNum}>-</button>
        <h3>{num}</h3>
        <button onClick={increaseNum}>+</button>
      </div>

      <hr style={{ color: "white", width: "80%" }} />

      <h2>Giphy Search</h2>
      <input
        placeholder="search"
        name="name"
        value={content}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      {data.map((obj, index) => {
        return <NumCard url={obj.images.original.url} title={obj.title} />;
      })}
    </div>
  );
}
