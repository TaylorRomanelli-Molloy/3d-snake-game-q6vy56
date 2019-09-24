import display from './display';
import Point from './Point';

// place your code on line 5 above the export statement below

class Snake
{
  private currentPosition: number;

  private currentDirection: number;
  //0 is in front

  private p: Point;

  constructor()
  {
    this.currentPosition = 0;
    this.currentDirection = 0;
    var p= new Point();

  }

  move(numMoves:number):void
  { 
    if(this.currentDirection == 1)
    {
      display("Moving down")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = this.p.getY() - 1;
    }
    if(this.currentDirection == -1)
    { 
      display("Moving up")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = this.p.getY() + 1;
    }
    if(this.currentDirection == 2)
    {
      display("Moving left")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = this.p.getX() - 1;
    }
    if(this.currentDirection == -2)
    {
      display("Moving left")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = this.p.getX() - 1;
    }
    else
    {
      display("Moving right")
      //this.currentPosition = this.currentPosition + numMoves;
      this.currentPosition = this.p.getX() + 1;
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

  getPosition():string //number
  {
    //return this.currentPosition
    return ("Snake position is at " + this.p.getPoint());
  }
}

export default Snake;