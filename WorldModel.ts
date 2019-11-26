import Snake from './Snake';
import View from './View';
import display from './display';

class WorldModel
{
  widthWorld: number;
  heighWorld: number;

  allViews : View[];

  allSnakes:Snake[];

  constructor()
  {
    this.allSnakes = new Array();
    this.allViews = new Array();
  }


  update(steps:number):void
  {
    //this.s1.move(steps);
    //s1.getPosition();

    //display(this.v);
    //display(this.s1);

    for(let i=0; i<this.allSnakes.length;i++)
    {
      this.allSnakes[i].move(steps);
    }
  }
  
  //updateTurn(makeTurn:number):void
  //{
    //s2.turn(makeTurn);
    //s2.getPosition();
  //}
  
  get width():number
  {
    return this.widthWorld;
  }
  get height():number
  {
    return this.heighWorld;
  }


  addSnakes(s: Snake)
  {
    this.allSnakes[this.allSnakes.length] = s;
  }

  addViews(v: View)
  {
    this.allViews[this.allViews.length] = v;
  }

  get allSnakesArray()
  {
    return this.allSnakes;
  }
  get allViewsArray()
  {
    return this.allViews;
  }
  

}


export default WorldModel;