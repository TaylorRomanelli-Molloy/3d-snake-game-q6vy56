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

  get isSnakeActive()
  {
    if(this.sc.isSnakeActive() == true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}

export default Player;