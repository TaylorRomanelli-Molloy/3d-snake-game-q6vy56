class CanvasView implements View
{
  canvasX : number;
  canvasY : number;
  scaleFactor : number;

  constructor(xvalue:number,yvalue:number,scale:number)
  {
    this.canvasX = xvalue;
    this.canvasY = yvalue;
    this.scaleFactor = scale;

    document.createElement("canvas")
  }

}