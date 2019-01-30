import React, { Component } from 'react'
import Letter from './Components/Letter'
import Header from './Components/Header'
import EndGame from './Components/EndGame'
import './App.css'
import singlecow from './images/singlecow.mp3'
import rooster from './images/rooster.mp3'
import trombone from './images/sadtrombone.mp3'
import cowherd from './images/cowherd.mp3'
import applause from './images/applause.mp3'

const alphabet=["A","B","C","D","E","F","G","H","I","J","K","L",
                "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "rnd"]

class App extends Component {
  state = {
    cowtype: ["A N G U S ", "H O L S T E I N ","W A G Y U ", "B E E F A L O ", "G A L L O W A Y ", "B R A H M A N ",
              "C H A R O L A I S ", "D E X T E R ", "G E L B V I E H ", "H E R E F O R D ", "H I G H L A N D ", "W A T U S I ",
              "A Y R S H I R E ", "P I E D M O N T E S E ", "T H A R P A R K A R ", "S I N D H I ", "E L S A "],
    currentcow: "",
    currentspaces: "",
    wrongletters: "",
    EGPic: "",
    wins: 0,
    losses: 0
  }

  clickletter = letter => {
    if(letter === "rnd"){
      const temp = Math.floor(Math.random() * 26)
      this.letterPlacement(alphabet[temp])
    }else {
      this.letterPlacement(letter)
    }
  }

  letterPlacement = letter => {
    if(this.state.wrongletters.includes(letter) || this.state.currentspaces.includes(letter)) {
      console.log("already guessed")
      return
    }
    if(!this.state.currentcow.includes(letter)) {
      let tempwrong = this.state.wrongletters
      tempwrong += letter
      if(tempwrong.length>5) {
        this.losegame()
      }
      this.setState({
        wrongletters: tempwrong
      })
      return
    }
    let cow = this.state.currentcow
    let tempcow = this.state.currentspaces
    let wrongguess = this.state.wrongletters
    for(let i=0;i<cow.length;i++) {
      if(cow.charAt(i) === letter) {
        let part1 = tempcow.substring(0, i);
        let part2 = tempcow.substring(i + 1, tempcow.length);
        tempcow = part1 + letter + part2;
      }
    }
    if(tempcow === cow) {
      this.wingame()
      return
    }
    this.setState({
      currentspaces: tempcow,
      wrongletters: wrongguess
    })
  }

  losegame = () => {
    document.getElementById("chicken").setAttribute("style", "display: block")
    document.getElementById("Lost").setAttribute("style", "display: block")
    document.getElementById("rooster").play()
    document.getElementById("trombone").play()
    this.setState({
      losses: this.state.losses + 1
    })
  }

  wingame = () => {
    document.getElementById(this.state.EGPic).setAttribute("style", "display: block")
    document.getElementById("Won").setAttribute("style", "display: block")
    document.getElementById("applause").play()
    document.getElementById("cowherd").play()
    this.setState({
      wins: this.state.wins + 1
    })
  }

  startclick = () => {
    for(let i=0;i<this.state.cowtype.length + 1;i++) {
      document.getElementsByClassName("cowpic")[i].setAttribute("style", "display: none")
    }
    document.getElementById("Lost").setAttribute("style", "display: none")
    document.getElementById("Won").setAttribute("style", "display: none")
    document.getElementById("startBtn").setAttribute("style", "display: none")
    document.getElementById("intxtbox").setAttribute("style", "display: none")
    document.getElementById("guessDiv").setAttribute("style", "display: block")
    document.getElementById("Wordbox").setAttribute("style", "display: block")
    document.getElementById("Keyboard").setAttribute("style", "display: block")
    document.getElementById("singleCow").play()
    const temp = Math.floor(Math.random() * 17)
    let spaces = ""
    for(let i=0;i<this.state.cowtype[temp].length/2;i++) {
      spaces += "_ "
    }
    this.setState({
      currentcow: this.state.cowtype[temp],
      currentspaces: spaces,
      wrongletters: ""
    })
    console.log(this.state.cowtype[temp])
    this.pickPic(this.state.cowtype[temp])
  }

  pickPic = cow => {
    let cow1 = cow.replace(/\s+/g, '').toLowerCase()
    this.setState({
      EGPic: cow1
    })
  }

  render() {
    return (
      <div className="App">
      <EndGame wincow={this.state.currentcow} btnclick={this.startclick}/>
      <Header wins={this.state.wins} losses={this.state.losses} />
      <audio src={singlecow} id="singleCow"></audio>
      <audio src={rooster} id="rooster"></audio>
      <audio src={trombone} id="trombone"></audio>
      <audio src={cowherd} id="cowherd"></audio>
      <audio src={applause} id="applause"></audio>
        <div id="intxtbox">
          <h1 className="intro in1">Cowtastic</h1>
          <h1 className="intro in2">Guessing</h1>
          <h1 className="intro in3">Game</h1>
        </div>
        <div id="Wordbox" className="wordbox big">
          <p className="gtxt">Press letters to guess the word</p>
          <p id="Word" className="word">{this.state.currentspaces}</p>
        </div>
        <button onClick={this.startclick} className="startbtn" id="startBtn">Start</button>
        <div id="guessDiv" className="guessdiv big">
          <div className="wrongdiv">
            <p className="gtxt">Wrong letters:</p>
            <p id="Wrong" className="wrong">{this.state.wrongletters}</p>
          </div>
        </div>
        <div className="keyboard" id="Keyboard">
        {alphabet.map(letter => (
            <Letter
              key={letter}
              whichKey={letter}
              clickletter={this.clickletter}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
