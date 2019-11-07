import SnakeController from './SnakeController';
import Point from './Point';

abstract class Player
{
  protected sc: SnakeController;

  constructor(snakeController:SnakeController)
  {
    this.sc = snakeController;
  }

  abstract makeTurn():void;
}

export default Player;