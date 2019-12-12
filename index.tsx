import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import display from './display';
import Snake from './Snake';
import SnakeTests from './SnakeTests';
import CanvasView from './CanvasView';
import WorldModel from './WorldModel';
import View from './View';
import Point from './Point';



interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p className="App-intro">
          Game Starting...
        </p>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {
           // <SnakeTests />
        }
        {
          // <DuckTests />
        }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));




//var s1 = new Snake;
//var s2 = new Snake;

//display(s1.getPosition());
//s1.move(2);
//display(s1.getPosition());
//s1.turn(1);
//s1.move(1);
//display(s1.getPosition())



//<canvas id="Game" width="600" height="800"></canvas>
//const canvas = document.getElementById('Game');

//let gameContext = document.getElementById("game").getContext("2d");
//gameContext.fillStyle = "red"; // replace red with desired color
//gameContext.fillRect(5, 10, 50, 20);

//gameContext.clearRect(5, 10, 50, 20);

let wm = new WorldModel();
let cv = new CanvasView(3);
//wm.view = cv;
//wm.update(5);
//cv.display(wm);
let p1 = new Point(0,0);
let p2 = new Point(10,10);
let s1 = new Snake(p1,2);
let s2 = new Snake(p2,4);
wm.addSnakes(s1);
wm.addSnakes(s2);
display(wm.allSnakesArray);
wm.addSnakes(s2);
display(wm.allSnakesArray);



