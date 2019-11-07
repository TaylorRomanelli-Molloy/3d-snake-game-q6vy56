import SnakeController from './SnakeController';
import Point from './Point';
import Player from './Player';


class HumanPlayer extends Player
{
  constructor(snakeController:SnakeController)
  {
    super(snakeController);
  }

  makeTurn():void
  {
    if(this.sc.snakePosition() == this.zerozeroPoint)
      this.sc.turnSnakeLeft();
  }
}


export default HumanPlayer;