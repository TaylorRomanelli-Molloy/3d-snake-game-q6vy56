import WorldModel from './WorldModel';
import View from './View';


import Food from './Food';
import Snake from './Snake';
import Actor from './Actor';

class CanvasView implements View
{
  scaleFactor : number;
  canvas : HTMLCanvasElement;
  context :  CanvasRenderingContext2D;

  constructor(scale:number)
  {
    this.scaleFactor = scale;

    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);

    this.context = this.canvas.getContext("2d"); 
  }

  display(wm:WorldModel)
  {
    this.canvas.width = wm.widthWorld * this.scaleFactor;
    this.canvas.height = wm.heighWorld * this.scaleFactor;

    this.context.fillStyle = "red";
    this.context.fillRect(5, 10, this.canvas.width, this.canvas.height);
  }

  dispose()
  {
    document.body.removeChild(this.canvas);
  }

  draw(context: CanvasRenderingContext2D, a: Actor)
  {
    if(a.type() == "snake")
    {
      //this.drawSnake(context);
    }
    if(a.type() == "food")
    {
      //this.drawFood(context);
    }
  }
  /*
  drawSnake(context: CanvasRenderingContext2D)
  {
    this.draw(context,a)
  }
  drawFood(context: CanvasRenderingContext2D)
  {

  }
  */

  update()
  { 
    for(var Actor of Actor)
    {
      if(Actor.type == "snake")
      {
        //DRAW SNAKES
      }
      if(Actor.type == "food")
      {
        //DRAW FOOD
      }
    }

  }
}

export default CanvasView;