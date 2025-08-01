import { useState } from "react";
import { sculptureList } from "./info";

export default function Book() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  let sculpture = sculptureList[index];

  function handleNextClick() {
    if (index < sculptureList.length - 1) {
      setIndex((prevIndex) => prevIndex + (1 % sculptureList.length));
      setShowMore(false);
    }
  }

  function handleToggle() {
    setShowMore((prev) => !prev);
  }

  function handleJumpToPage(pageIndex) {
    setIndex(pageIndex);
    setShowMore(false);
  }

  //   function handleShowMore() {
  //     setShowMore(!showMore);
  //   }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Kids E-Book</h1>
      <h2>
        <i>{sculpture.name}</i>
      </h2>
      <img src={sculpture.imgUrl} width="300" height="250" />

      <div>
        <button onClick={handleToggle}>
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

      <div style={{ marginBottom: "15px" }}>
        {sculptureList.map((_, i) => (
          <button
            key={i}
            onClick={() => handleJumpToPage(i)}
            style={{
              margin: "2px",
              padding: "5px 10px",
              backgroundColor: index === i ? "#4CAF50" : "#e0e0e0",
              color: index === i ? "white" : "black",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button onClick={handleNextClick}>Next Page</button>
    </div>
  );
}
