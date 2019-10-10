import Snake from './Snake';
import View from './View';
import display from './display';

var s1: Snake;
var s2: Snake;

class WorldModel
{
  protected widthWorld: number;
  protected heighWorld: number;

  v : View|null;


  update(steps:number):void
  {
    s1.move(steps);
    //s1.getPosition();

    display(this.v);
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


  set View(vv:View)
  {
    this.v = vv;
  }
  

}


export default WorldModel;