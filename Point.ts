import display from './display';

class Point
{
  private xcoord: number;
  private ycoord: number;

/*
  constructor()
  {
    this.xcoord = 0;
    this.ycoord = 0;
  }
  */
  
  
  constructor(x:number,y:number)
  {
    this.xcoord = x;
    this.ycoord = y;
  }
  
  getPoint():string
  {
    return (this.xcoord + ", " + this.ycoord);
  }
  get x():number
  {
    return this.xcoord;
  }
  get y():number
  {
    return this.ycoord;
  }

}

export default Point;