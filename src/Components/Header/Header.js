import React from "react";
import './Header.css';

const Letter = props => (
  <div className="header">
    <p className="title">The Cattle Guessing Game</p>
    <p className="win">Wins:  <span className="winnum">{props.wins}</span> Losses:  <span className="lossnum">{props.losses}</span></p>
  </div>
);

export default Letter;