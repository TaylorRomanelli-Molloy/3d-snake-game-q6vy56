import Player from './Player';
import SnakeController from './SnakeController';



class AvoidWallsPlayer extends Player
{
  constructor(snakeController:SnakeController)
  {
    super(snakeController);
  }
  makeTurn()
  {
  }

  
}

export default AvoidWallsPlayer;