import React, { useState, useRef, useEffect } from "react";
import "../css/body.css";
import array from "../Paragraphs/paragraphs";

export default function Body() {
  const [typed, addTyped] = useState("");
  const [states, setStates] = useState({
    lastPart: "",
    currentWord: "",
    restParagraph: "",
  });
  const [finished, setFinished] = useState(false);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(0);
  const inputRef = useRef("");
  const paragraphRef = useRef();
  const result = useRef();
  const paragraph = array.array[0];

  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        if (start) {
          setTimer((timer) => timer + 1);
        } else {
          clearInterval(interval);
          setTimer(0)
        }
      }, 1000);
    }
  }, [start]);

  useEffect(() => {
    //TO CHECK IF THE TYPING IS CORRECT
    if (typed == paragraph.substring(0, typed.length)) {
      paragraphRef.current.style.color = "green";
    } else {
      paragraphRef.current.style.color = "red";
    }

    // FINISHED
    if (typed.length == paragraph.length) {
      console.log("finished");
      setStart(false);
      setFinished(true);
      result.current.innerHTML = "You finished typing in " + timer.toString();
      // DISPLAY RESULTS AND EXIT
    }
  }, [typed]);

  //TO BOLD BODY WHILE TYPING

  useEffect(() => {
    let rest = paragraph.substring(typed.length, paragraph.length);
    let current = rest.substring(0, rest.indexOf(" "));
    let previous = paragraph.substring(0, typed.length);
    setStates({
      lastPart: previous,
      currentWord: current,
      restParagraph: rest.substring(current.length, rest.length),
    });
  }, [typed]);

  function displayResults() {
    if (paragraphRef.current.style.color == "red") {
      console.log("errors");
    } else {
      console.log("success!");
    }
  }

  function addTypedText(e) {
    if (!finished) {
      addTyped(() => {
        return typed + e;
      });
    } else {
      displayResults();
    }
  }

  function removeOneLetter() {
    let newString = typed.substring(0, typed.length - 1);
    addTyped(newString);
  }

  return (
    <div className="body">
      <h2>Timer - {timer}</h2>
      <h4>Paragraph</h4>
      <p ref={paragraphRef}>
        {states.lastPart}
        <b>{states.currentWord}</b>
        {states.restParagraph}
      </p>

      <textarea
        ref={inputRef}
        onKeyDown={(e) => {
          if (!start) {
            setStart(true);
          }
          if (e.key == " ") {
            addTypedText(" ");
          } else if (e.key == "enter") {
            addTypedText(" ");
          } else if (e.key.length <= 1) {
            addTypedText(e.key);
          } else if (e.key == "Backspace") {
            removeOneLetter();
          }
        }}
        placeholder={"Tap here to type..."}
      ></textarea>
      <div ref={result}></div>
    </div>
  );
}
