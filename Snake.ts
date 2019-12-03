import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

class Snake
{
  private currentParts: [Point];

  private currentDirection: number;
  //0 is in front

  //private p: Point;

  protected startPosition: Point;

  protected size: number;

  constructor(sp:Point,s:number)
  {
    this.startPosition = sp;
    this.size = s;
    this.currentParts[0] = this.startPosition;
    this.currentDirection = 0;

  }

  move(numMoves:number):void
  { 
    if(this.currentDirection == 1)
    {
      display("Moving down")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts = new Point(this.currentParts.x,this.currentParts.y - numMoves);
    }
    if(this.currentDirection == -1)
    { 
      display("Moving up")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts = new Point(this.currentParts.x,this.currentParts.y + numMoves);
    }
    if(this.currentDirection == 2)
    {
      display("Moving left")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts = new Point(this.currentParts.x - numMoves,this.currentParts.y);
    }
    if(this.currentDirection == -2)
    {
      display("Moving left")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts = new Point(this.currentParts.x - numMoves,this.currentParts.y);
    }
    else
    {
      display("Moving right")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts = new Point(this.currentParts.x + numMoves,this.currentParts.y);
    }
  }
/*
  turn(newDir:number):void
  {
    //1 turns right
    //-1 turns left
    this.currentDirection = this.currentDirection + newDir;
  }
  */
  turnLeft():void
  {
    //2 || -2 is behing
    if(this.currentDirection == -2 || this.currentDirection == 2)
      this.currentDirection = this.currentDirection - 1;
    else
      this.currentDirection = this.currentDirection + 1;
  }
  turnRight():void
  {
    //2 || -2 is behing
    if(this.currentDirection == -2 || this.currentDirection == 2)
      this.currentDirection = this.currentDirection + 1;
    else
      this.currentDirection = this.currentDirection - 1;
  }

  get position():Point //number
  {
    //return this.currentParts
    return this.currentParts;
  }
  get direction():number //number
  {
    //return this.currentDirection
    return this.currentDirection;
  }



}

export default Snake;