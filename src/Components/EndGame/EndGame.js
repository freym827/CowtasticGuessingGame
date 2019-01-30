import React from "react";
import './EndGame.css';
import angus from "../../images/angus.jpg"
import holstein from "../../images/holstein.jpg"
import wagyu from "../../images/wagyu.jpg"
import beefalo from "../../images/beefalo.jpg"
import galloway from "../../images/galloway.jpg"
import brahman from "../../images/brahman.jpg"
import charolais from "../../images/charolais.jpg"
import dexter from "../../images/dexter.jpg"
import gelbvieh from "../../images/gelbvieh.jpg"
import hereford from "../../images/hereford.jpg"
import highland from "../../images/highland.jpg"
import watusi from "../../images/watusi.jpg"
import ayrshire from "../../images/ayrshire.jpg"
import piedmontese from "../../images/piedmontese.png"
import tharparkar from "../../images/tharparkar.jpg"
import sindhi from "../../images/sindhi.jpg"
import elsa from "../../images/elsa.jpg"
import chicken from "../../images/chicken.jpg"

const EndGame = props => (
  <div className="endgame" id="EndGame">
    <img src={angus} alt="cow" id="angus" className="cowpic"></img>
    <img src={holstein} alt="cow" id="holstein" className="cowpic"></img>
    <img src={wagyu} alt="cow" id="wagyu" className="cowpic"></img>
    <img src={beefalo} alt="cow" id="beefalo" className="cowpic"></img>
    <img src={galloway} alt="cow" id="galloway" className="cowpic"></img>
    <img src={brahman} alt="cow" id="brahman" className="cowpic"></img>
    <img src={charolais} alt="cow" id="charolais" className="cowpic"></img>
    <img src={dexter} alt="cow" id="dexter" className="cowpic"></img>
    <img src={gelbvieh} alt="cow" id="gelbvieh" className="cowpic"></img>
    <img src={hereford} alt="cow" id="hereford" className="cowpic"></img>
    <img src={highland} alt="cow" id="highland" className="cowpic"></img>
    <img src={watusi} alt="cow" id="watusi" className="cowpic"></img>
    <img src={ayrshire} alt="cow" id="ayrshire" className="cowpic"></img>
    <img src={piedmontese} alt="cow" id="piedmontese" className="cowpic"></img>
    <img src={tharparkar} alt="cow" id="tharparkar" className="cowpic"></img>
    <img src={sindhi} alt="cow" id="eindhi" className="cowpic"></img>
    <img src={elsa} alt="cow" id="elsa" className="cowpic"></img>
    <img src={chicken} alt="cow" id="chicken" className="cowpic"></img>
    <div className="loseresults" id="Lost">
        <p className="losstag">YOU HAVE LOST</p>
        <button onClick={props.btnclick} className="playagain">Click to play again</button>
    </div>
    <div className="winresults" id="Won">
        <p className="losstag">WIN! {props.wincow} is correct!</p>
        <button onClick={props.btnclick} className="playagain">Click to play again</button>
    </div>
  </div>
);

export default EndGame;