import Snake from './Snake';
import View from './View';
import display from './display';

class WorldModel
{
  widthWorld: number;
  heighWorld: number;

  v : View|null;

  s1:Snake;

  constructor()
  {
    this.s1= new Snake;
  }


  update(steps:number):void
  {
    this.s1.move(steps);
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


  set view(v:View)
  {
    this.v = v;
  }
  

}


export default WorldModel;