import SnakeController from './SnakeController';
import Point from './Point';

abstract class Player
{
  protected sc: SnakeController;
  protected zerozeroPoint: Point;

  constructor(snakeController:SnakeController)
  {
    this.sc = snakeController;
    this.zerozeroPoint = new Point(0,0)
  }

  makeTurn():void
  {
    if(this.sc.snakePosition() == this.zerozeroPoint)
      this.sc.turnSnakeLeft();
  }
}

export default Player;