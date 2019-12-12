import Snake from './Snake';
import World from './WorldModel';
import Point from './Point';


class SnakeController
{
  private slitherer: Snake;
  private snakeWorld: World;

  constructor(World:World, Snake:Snake)
  {
    this.slitherer = Snake;
    this.snakeWorld = World; 
  }
  turnSnakeLeft():void
  {
    this.slitherer.turnLeft();
  }
 
  turnSnakeRight():void
  {
    this.slitherer.turnRight();
  }

  snakePosition():Point
  {
    return this.slitherer.position;
  }

  snakeDirection():number
  {
    return this.slitherer.direction; 
  }

  worldWidth():number
  {
    return this.snakeWorld.width;
  }
  worldHeight():number
  {
    return this.snakeWorld.height;
  }

  get isSnakeActive()
  {
    if(this.slitherer.isActive == true)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}


export default SnakeController;