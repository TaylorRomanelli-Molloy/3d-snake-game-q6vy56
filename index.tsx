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



interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
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

// Add display statements below
display("Let's get started with React TypeScript!");


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
wm.view = cv;
wm.update(5);




