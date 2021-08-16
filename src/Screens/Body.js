import { split } from "lodash";
import React, { useState, useRef, useEffect } from "react";
import "../css/body.css";
export default function Body() {
  const [typed, addTyped] = useState("");
  const [states, setStates] = useState({
    lastPart: "",
    currentWord: "",
    restParagraph: "",
  });
  const inputRef = useRef("");
  const paragraphRef = useRef();
  const paragraph =
    "this is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph but just a series of run on sentences this should help you get faster at typing as im trying not to use too many difficult words in it although i think that i might start making it hard by including some more difficult letters I'm typing pretty quickly so forgive me for any mistakes i think that i will not just tell you a story about the time i went to the zoo and found a monkey and a fox playing together they were so cute and i think that they were not supposed to be in the same cage but they somehow were and i loved watching them horse";

  useEffect(() => {
    //TO CHECK IF THE TYPING IS CORRECT
    if (typed == paragraph.substring(0, typed.length)) {
      paragraphRef.current.style.color = "green";
    } else {
      paragraphRef.current.style.color = "red";
    }
  }, [typed]);

  //TO BOLD BODY WHILE TYPING

  useEffect(() => {
    let rest = paragraph.substring(typed.length,paragraph.length)
    let current = rest.substring(0,rest.indexOf(" "))
    let previous = paragraph.substring(0,typed.length)

    setStates({lastPart : previous,currentWord:current,restParagraph:rest.substring(current.length,rest.length)})
  }, [typed]);

  function addTypedText(e) {
    addTyped(() => {
      return typed + e;
    });
  }

  function removeOneLetter() {
    let newString = typed.substring(0, typed.length - 1);
    addTyped(newString);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h3>Timer - 00:00</h3>
      <p ref={paragraphRef}>
        {states.lastPart}
        <abc><b>{states.currentWord}</b></abc>
        {states.restParagraph}
      </p>

      <input
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
        style={{
          width: "20vw",
          alignSelf: "center",
          outline: "none",
          textAlign: "center",
          borderRadius: "20px",
          borderColor: "tomato",
        }}
      ></input>
    </div>
  );
}
