import React from "react";
import "../css/Results.css";

/*
 Results
 Average WPM for a student is 35
 Average WPM for a programmer is 50
 Average WPM for a Professional Typist is 75
 Fastest typing speed recorded is 219
 Average typing speed recorded is 40
*/

export default function Results(props) {
  console.log(props.results);
  return (
    <div className="resultsDiv">
      <h1> Your Typing speed is : {props.results.WPM} wpm</h1>
      <h6> Errors made : {props.errors}</h6>
      <h2> You took {props.results.seconds} seconds! </h2>
      <h3>
        An Average student would have taken {props.results.student} seconds
      </h3>
      <h3>
        An Average Programmer would have taken {props.results.programmer}{" "}
        seconds
      </h3>
      <h3>
        An Average Professional Typist would have taken {props.results.typist}{" "}
        seconds
      </h3>
      <h3>
        The fastest typer would have taken {props.results.fastest} seconds
      </h3>

      <button onClick={props.reset}>Try Again</button>
    </div>
  );
}
