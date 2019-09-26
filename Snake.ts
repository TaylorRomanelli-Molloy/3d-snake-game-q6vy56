import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

class Snake
{
  private currentPosition: Point;

  private currentDirection: number;
  //0 is in front

  //private p: Point;

  constructor()
  {
    this.currentPosition = new Point(0,0);
    this.currentDirection = 0;

  }

  move(numMoves:number):void
  { 
    if(this.currentDirection == 1)
    {
      display("Moving down")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = new Point(this.currentPosition.x,this.currentPosition.y - numMoves);
    }
    if(this.currentDirection == -1)
    { 
      display("Moving up")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = new Point(this.currentPosition.x,this.currentPosition.y + numMoves);
    }
    if(this.currentDirection == 2)
    {
      display("Moving left")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = new Point(this.currentPosition.x - numMoves,this.currentPosition.y);
    }
    if(this.currentDirection == -2)
    {
      display("Moving left")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = new Point(this.currentPosition.x - numMoves,this.currentPosition.y);
    }
    else
    {
      display("Moving right")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = new Point(this.currentPosition.x + numMoves,this.currentPosition.y);
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
    //return this.currentPosition
    return this.currentPosition;
  }
  get direction():number //number
  {
    //return this.currentDirection
    return this.currentDirection;
  }
}

export default Snake;