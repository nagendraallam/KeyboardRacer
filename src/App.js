import React, { useState, useRef, useEffect } from "react";
import "./css/app.css";
import Results from "./Screens/Results";
import { getPara } from "./Paragraphs/paragraphs";
import getResults from "./utils/getResults";
import WordCounter from "./utils/WordCounter";

export default function App() {
  const [typed, addTyped] = useState("");
  const [states, setStates] = useState({
    wrong: false,
    errors: 0,
    finished: false,
    timer: 0,
  });

  const inputRef = useRef("");
  const select = useRef("");

  const [paragraph, setParagraph] = useState(getPara(2));

  useEffect(() => {
    if (typed.length == 1) {
      setStates({ ...states, timer: new Date().getTime() });
    }
    let substring = paragraph.substring(0, typed.length);
    if (typed.length == paragraph.length) {
      // START LOGIC TO SHOW RESULTS
      setStates({ ...states, finished: true });
      inputRef.current.disabled = true;
      console.log((new Date().getTime() - states.timer) / 100);
    }
    if (substring != typed) {
      setStates({ ...states, wrong: true, errors: states.errors + 1 });
    }
  }, [typed]);

  function removeOneLetter() {
    addTyped(typed.substring(0, typed.length - 1));
  }

  function reset() {
    setParagraph(getPara(1));
    setStates({ ...states, wrong: false, errors: 0, finished: false });
    addTyped("");
    inputRef.current.disabled = false;
  }

  return (
    <div className="body">
      <div>
        {states.finished ? (
          <Results
            reset={reset}
            errors={states.errors}
            results={getResults(
              (new Date().getTime() - states.timer) / 1000,
              WordCounter(paragraph)
            )}
          />
        ) : states.timer == 0 ? (
          "Timer will start once you start typing"
        ) : (
          "TIMER STARTED! TYPE ASAP"
        )}
      </div>

      <select
        defaultValue={1}
        name="diff"
        id="diff"
        ref={select}
        onChange={() => {
          console.log(select.current.value);
          reset();
        }}
      >
        <option value={1}>easy</option>
        <option value={2}>medium</option>
        <option value={3}>hard</option>
      </select>
      <h4>Paragraph</h4>
      <p>{paragraph}</p>

      <textarea
        ref={inputRef}
        value={typed}
        onKeyDown={(e) => {
          if (!states.wrong) {
            if (e.key.length <= 1) {
              addTyped((typed) => typed + e.key);
            } else if (e.keyCode === 8) {
              removeOneLetter();
            }
          } else {
            if (e.keyCode === 8) {
              removeOneLetter();
              setStates({ ...states, wrong: false });
            } else {
              console.log("remove letter first");
            }
          }
        }}
        placeholder={"Tap here to type..."}
      ></textarea>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
