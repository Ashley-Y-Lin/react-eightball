import React, { useState } from "react";

const defaultAnswers = [
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];

/** getRandom takes as input an array, and returns a random item from that array
 */

function getRandom(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

/** Renders a single Eightball with a custom message and color.
 *
 * Props:
 * - answers. It is an array of objects, each with a property of msg and color
 * which are strings
 *
 * State:
 * - answer: object with two keys, msg and color
 *
 * App -> Eightball
 */
function Eightball({ answers = defaultAnswers }) {
  const [answer, setAnswer] = useState({ msg: "Think of a Question", color: "black" });

  function handleClick(evt) {
    setAnswer(getRandom(answers));
  }

  const ballStyles = {
    color: "white",
    backgroundColor: answer.color,
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={ballStyles} onClick={handleClick}>
      <p>{answer.msg}</p>
    </div>
  );
}

export default Eightball;

