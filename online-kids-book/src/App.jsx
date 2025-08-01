import { useState } from "react";
import { sculptureList } from "./info";

export default function Book() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
    setShowMore(false);
  }
  function handleShowMore() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Kids E-Book</h1>
      <h2>
        <i>{sculpture.name}</i>
      </h2>
      <img src={sculpture.imgUrl}  width="300" height="250"/>

      <div>
        <button onClick={handleShowMore}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <strong>Description:</strong> {sculpture.description}
          </li>
          <li>
            <strong>Habitat:</strong> {sculpture.habitat}
          </li>
          <li>
            <strong>Food:</strong> {sculpture.food}
          </li>
          <li>
            <strong>Sound:</strong> {sculpture.sound}
          </li>
          <li>
            <strong>Lifespan:</strong> {sculpture.lifespan}
          </li>
          <li>
            <strong>Type:</strong> {sculpture.type}
          </li>
        </ul>
      )}
      </div>

      

      <h3>
        ({index + 1} page of {sculptureList.length})
      </h3>

      <button onClick={handleNextClick}>Next Page</button>
    </div>
  );
}
