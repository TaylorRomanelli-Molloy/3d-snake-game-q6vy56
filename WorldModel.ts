import Snake from './Snake'

var s1: Snake;
var s2: Snake;

class WorldModel
{
  public widthWorld: number;
  public heighWorld: number;
  

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