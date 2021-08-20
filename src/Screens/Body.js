import React, { useState, useRef, useEffect } from "react";
import "../css/body.css";
import HelloWorld from "../Paragraphs/paragraphs";
import Timer from "./Timer";

export default function Body() {
  const [typed, addTyped] = useState("");
  const [states, setStates] = useState({
    lastPart: "",
    currentWord: "",
    restParagraph: "",
  });

  const [report, setReport] = useState({});
  const [timer, setTimer] = useState();

  const [finished, setFinished] = useState(false);
  const [start, setStart] = useState(false);

  const inputRef = useRef("");
  const paragraphRef = useRef();
  const result = useRef();

  const [paragraph, setParagraph] = useState(HelloWorld);

  function countWords(str) {
    return str.trim().split(/\s+/).length;
  }

  useEffect(() => {
    //TO CHECK IF THE TYPING IS CORRECT
    if (typed == paragraph.substring(0, typed.length)) {
      paragraphRef.current.style.color = "green";
    } else {
      paragraphRef.current.style.color = "red";
    }

    // ON FINISHED
    if (typed.length == paragraph.length) {
      console.log("finished");
      setFinished(true);
      setStart(false);
      var a = Date.now() / 1000 - timer;
      setTimer(a);
      setReport({
        seconds: Math.floor(a),
        minutes: Math.floor(a / 60),
        WPM: Math.floor(countWords(paragraph) / (a / 60)),
      });
      result.current.innerHTML =
        "You finished typing in " +
        Math.floor(a / 60).toString() +
        " Minutes \n WPM : " +
        Math.floor(countWords(paragraph) / (a / 60)).toString();
      inputRef.current.value = typed;
      // DISPLAY RESULTS AND EXIT
    }
  }, [typed]);

  //TO BOLD BODY WHILE TYPING AND OTHER SETTINGS
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

  //TO BE CALLED WHEN FINISHED TYPING.
  function displayResults() {
    if (paragraphRef.current.style.color == "red") {
      console.log("errors");
    } else {
      console.log("success!");
    }
  }

  function addTypedText(e) {
    if (!start && typed.length <= 0) {
      setStart(true);
      setTimer(Date.now() / 1000);
    }
    if (typed.length < paragraph.length - 1) {
      addTyped(() => {
        return typed + e;
      });
    } else {
      addTyped(() => {
        return typed + e;
      });
      inputRef.current.disabled = "disabled";
      displayResults();
    }
  }

  // ON BACKSPACE CLICKED
  function removeOneLetter() {
    let newString = typed.substring(0, typed.length - 1);
    addTyped(newString);
  }

  return (
    <div className="body">
      {start ? (
        <Timer></Timer>
      ) : (
        <div>
          {" "}
          {finished
            ? "You have completed Typing the Paragraph in " +
              report.seconds.toString() +
              " Seconds"
            : "Timer will start once you start typing"}
        </div>
      )}
      <h4>Paragraph</h4>
      <p ref={paragraphRef}>
        {states.lastPart}
        <b>{states.currentWord}</b>
        {states.restParagraph}
      </p>

      <textarea
        ref={inputRef}
        onKeyDown={(e) => {
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
