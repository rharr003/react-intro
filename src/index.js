import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import First from "./FirstComponent";
import Named from "./NamedComponent";
import Tweet from "./Tweet";
import Person from "./Person";
const tweet1 = {
  username: "rharr003",
  date: "2/5/23",
  message: "hello everyone!",
};

const tweet2 = {
  username: "ariggs",
  date: "2/1/23",
  message: "I love cats!",
};

const tweet3 = {
  username: "sasha123",
  date: "1/5/23",
  message: "I am hungry",
};

const person1 = {
  name: "Scott Harrington",
  age: 26,
  hobbies: ["Running", "Surfing", "Cats"],
};

const person2 = {
  name: "Jeff Adams",
  age: 77,
  hobbies: ["Running", "Surfing", "Cats"],
};
const person3 = {
  name: "Ashley Harper",
  age: 12,
  hobbies: ["Running", "Surfing", "Cats"],
};

const arr = [tweet1, tweet2, tweet3];
const personArr = [person1, person2, person3];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      <First />
      <Named name="Scott" />
      {arr.map((val) => (
        <Tweet
          username={val.username}
          date={val.date}
          message={val.message}
          key={val.username}
        />
      ))}
      {personArr.map((val) => (
        <Person name={val.name} age={val.age} hobbies={val.hobbies} />
      ))}
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
