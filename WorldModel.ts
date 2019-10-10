import Snake from './Snake';
import View from './View';
import display from './display';

var s1: Snake;
var s2: Snake;

class WorldModel
{
  widthWorld: number;
  heighWorld: number;

  view : View|null;


  update(steps:number):void
  {
    s1.move(steps);
    //s1.getPosition();

    display(this.view);
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


  set View(v:View)
  {
    this.view = v;
  }
  

}


export default WorldModel;