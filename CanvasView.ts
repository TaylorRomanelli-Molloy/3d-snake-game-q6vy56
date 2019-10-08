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

}