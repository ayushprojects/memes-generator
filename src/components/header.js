/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import image from "../images/troll-face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={image} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">Random meme generator</h4>
    </header>
  );
}
