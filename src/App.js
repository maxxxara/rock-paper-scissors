import React, {Component} from 'react';
import './App.css';
import rockImage from './img/rock.png';
import scissorsImage from './img/scissors.png';
import paperImage from './img/paper.png';


class App extends Component {
  choices = ["ROCK", "PAPER", "SCISSORS"];

  state = {
    playerChoice: '',
    computerChoice: '',
    playerImage: '',
    computerImage: '',
    playerPoint: 0,
    computerPoint: 0
  }


  choiced = (c) => {
    this.setState({
      playerChoice: c,
      computerChoice: this.choices[Math.floor(Math.random() * 3)]
    }, () => {
      console.log(this.state)

      /* win logic */
      if(this.state.playerChoice == this.state.computerChoice) {
        console.log("fre")
      }
      else if(this.state.playerChoice == "ROCK" && this.state.computerChoice == "SCISSORS") {
        this.setState({
          playerPoint: this.state.playerPoint + 1
        })
      }
      else if(this.state.playerChoice == "PAPER" && this.state.computerChoice == "ROCK") {
        this.setState({
          playerPoint: this.state.playerPoint + 1
        })
      }
      else if(this.state.playerChoice == "SCISSORS" && this.state.computerChoice == "PAPER") {
        this.setState({
          playerPoint: this.state.playerPoint + 1
        })
      }else {
        this.setState({
          computerPoint: this.state.computerPoint + 1
        })
      }
      /* win logic */




      /* image changes */
      if(this.state.playerChoice == "ROCK") {
        this.setState({
          playerImage: rockImage
        })
      }
      else if(this.state.playerChoice == "PAPER") {
        this.setState({
          playerImage: paperImage
        })
      }
      else {
        this.setState({
          playerImage: scissorsImage
        })
      }
      if(this.state.computerChoice == "ROCK") {
        this.setState({
          computerImage: rockImage
        })
      }
      else if(this.state.computerChoice == "PAPER") {
        this.setState({
          computerImage: paperImage
        })
      }
      else {
        this.setState({
          computerImage: scissorsImage
        })
      }
      /* image changes */
    });
  }

  render() {

    return(
      <div className="app">

        <div className="board">
          <div className="player">
            <p>Player</p>
            <img src={this.state.playerImage}/>
          </div>
          <div className="counter">
            <p>{this.state.playerPoint} - {this.state.computerPoint}</p>
          </div>
          <div className="computer">
            <p>Computer</p>
            <img src={this.state.computerImage} />
          </div>
        </div>

        <div className="choices">
          <div className="choice">
            <img src={rockImage} onClick={() => { this.choiced("ROCK") }} />
          </div>
          <div className="choice">
            <img src={paperImage} onClick={() => { this.choiced("PAPER") }} />
          </div>
          <div className="choice">
            <img src={scissorsImage} onClick={() => { this.choiced("SCISSORS") }} />
          </div>
        </div>


      </div>
    )
  }
}



export default App;
