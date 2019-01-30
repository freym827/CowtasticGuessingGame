import React from "react";
import './Letter.css';

const Letter = props => (
  <button className="letters" onClick={() => props.clickletter(props.whichKey)} id={props.whichKey}>{props.whichKey}</button> 
);

export default Letter;