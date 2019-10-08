class CanvasView implements View
{
  canvasX : number;
  canvasY : number;
  scaleFactor : number;
  canvas : HTMLCanvasElement;

  constructor(xvalue:number,yvalue:number,scale:number)
  {
    this.canvasX = xvalue;
    this.canvasY = yvalue;
    this.scaleFactor = scale;

    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
  }

}