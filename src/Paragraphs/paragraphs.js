import React from "react";

export default function HelloWorld() {
  const ParagraphData = [
    "hello","world","Thirdly, we use a grid layout to center div in the web browser. Grid layout new ways to center your div. the grid system is very cool and easy to use. The grid system very effectively designs a 3D website layout. I'm also recommended to use a grid system in the website rather than use any CSS framework."
  ];

  return ParagraphData[Math.floor(Math.random()*3)];
}
