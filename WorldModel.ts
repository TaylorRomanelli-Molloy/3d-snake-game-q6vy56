import Snake from './Snake';
import View from './View';
var s1: Snake;
var s2: Snake;

class WorldModel
{
  protected widthWorld: number;
  protected heighWorld: number;

  view : null;
  

  update(steps:number):void
  {
    s1.move(steps);
    //s1.getPosition();
  }
  /*
  updateTurn(makeTurn:number):void
  {
    //s2.turn(makeTurn);
    //s2.getPosition();
  }
  */
  get width():number
  {
    return this.widthWorld;
  }
  get height():number
  {
    return this.heighWorld;
  }
  

}


export default WorldModel;