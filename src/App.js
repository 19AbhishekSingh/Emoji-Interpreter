import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "French-Fries",
  "🌭": "HotDog",
  "🍿": "Popcorn",
  "🧇": "Waffle",
  "🧀": "Chese-wedge",
  "🥪": "Sandwich",
  "🍝": "Spaghetti",
  "🍨": "Ice-Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    if (emojiDictionary[event.target.value] === undefined) {
      emojiDictionary[event.target.value] = "We dont have this in our database";
    }
    setMeaning(emojiDictionary[event.target.value]);
  }
  function emojiInput(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.5rem",
          backgroundColor: "#F3F4F6",
          padding: "2rem",
          borderRadius: "1rem",
          marginBottom: "2rem"
        }}
      >
        Emo-ji restaurant
      </header>

      <h1>Food Menu!</h1>
      <input  onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Emoji We Know </h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span 
            onClick={() => {
              emojiInput(emoji);
            }}
            key={emoji}
            style={{ fontSize: "1.6rem", cursor: "pointer", padding: "1rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
