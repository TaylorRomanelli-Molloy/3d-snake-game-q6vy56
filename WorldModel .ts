import Snake from './Snake'

var s1: Snake;
var s2: Snake;

class WorldModel
{
  

  updateMove(steps:number):void
  {
    s1.move(steps);
    s1.getPosition();
  }
  updateTurn(makeTurn:number):void
  {
    //s2.turn(makeTurn);
    s2.getPosition();
  }
  

}


export default WorldModel;