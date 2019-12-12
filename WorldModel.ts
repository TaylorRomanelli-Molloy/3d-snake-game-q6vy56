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
    this.allSnakes = [];
    this.allViews = [];
  }


  update(steps:number):void
  {
    //this.s1.move(steps);
    //s1.getPosition();

    //display(this.v);
    //display(this.s1);

    let tempArray: Snake[];


    for(let i=0; i<this.allSnakes.length;i++)
    {
      this.allSnakes[i].move(steps);
    }

    for(let i=0; i<this.allSnakes.length;i++)
    {
      //if(this.allSnakes[i].didCollide(this.allSnakes.currentParts[]) = true)
      //{
       //this.allSnakes.splice(i);
      //}
    }

    //check if no food is on screen 
    //adds food if no food is on screen
    //check length of filtered actors
    //Math.floor(n*Math.random())

    
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


  reset()
  {
    //this.allViews.forEach(this.allViews[].dispose());
    for(let i = 0; i<this.allViews.length;i++)
    {
      //dispose
      //actors and views properties to empty arrays
    }
  }
 
 
  

}


export default WorldModel;