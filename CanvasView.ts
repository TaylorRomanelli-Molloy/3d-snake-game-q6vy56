import WorldModel from './WorldModel';
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
}