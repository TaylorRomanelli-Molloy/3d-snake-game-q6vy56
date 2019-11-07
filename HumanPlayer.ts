import SnakeController from './SnakeController';
import InputHandler from './InputHandler';
import Point from './Point';
import Player from './Player';

import LRKeyInputHandler from './LRKeyInputHandler';
import display from './display';

class HumanPlayer extends Player
{
  inputHand:InputHandler;

  constructor(snakeController:SnakeController, ih:LRKeyInputHandler)
  {
    super(snakeController);
    this.inputHand=ih;
  }

  makeTurn():void
  {
    if(this.inputHand.madeLeftMove() == true)
    {
      this.inputHand.resetLeftMove()
      display("Left Move Made And Reset");
    }
    if(this.inputHand.madeRightMove() == true)
    {
      this.inputHand.resetRightMove()
      display("Right Move Made And Reset");
    }
    else
    {
      display("No Action");
    }
  }
}


export default HumanPlayer;