import display from './display';
import Point from './Point';

import Collidable from './Collidable';
import Actor from './Actor';

// place your code on line 5 above the export statement below

class Snake implements Collidable
{
  private currentParts: Point[];

  private currentDirection: number;
  //0 is in front

  //private p: Point;

  protected startPosition: Point;

  protected size: number;

  private numMovesPerMove: number;

  private isCurrentlyActive: boolean;
  private isType: string = "snake";




  constructor(sp:Point,s:number)
  {
    this.startPosition = sp;
    this.size = s;
    this.currentParts[0] = this.startPosition;
    this.currentDirection = 0;

    this.numMovesPerMove = 1;
    this.isCurrentlyActive = true;

    for(let q =1; q < this.size; q++)
    {
      this.currentParts[q] = new Point(this.currentParts[q-1].x-1,this.currentParts[q-1].y);
    }
  }

  move(numMoves:number):void
  { 
    if(this.currentDirection == 1)
    {
      display("Moving down")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts[0] = new Point(this.currentParts[0].x,this.currentParts[0].y - numMoves);
    }
    if(this.currentDirection == -1)
    { 
      display("Moving up")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts[0] = new Point(this.currentParts[0].x,this.currentParts[0].y + numMoves);
    }
    if(this.currentDirection == 2)
    {
      display("Moving left")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts[0] = new Point(this.currentParts[0].x - numMoves,this.currentParts[0].y);
    }
    if(this.currentDirection == -2)
    {
      display("Moving left")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts[0] = new Point(this.currentParts[0].x - numMoves,this.currentParts[0].y);
    }
    else
    {
      display("Moving right")
      //this.currentParts = this.currentParts + numMoves;
      this.currentParts[0] = new Point(this.currentParts[0].x + numMoves,this.currentParts[0].y);
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
    return this.currentParts[0];
  }
  get direction():number //number
  {
    //return this.currentDirection
    return this.currentDirection;
  }
  didCollide(a: Actor): boolean
  {
    if(a.type() == "snake")
    {
      for(let z = 0; z < this.currentParts.length; z++)
      {
       if(this.currentParts[0] == this.currentParts[z])
        {
          return true;
        }
      }

    }
    if(this.type != "snake")
    {
      for(let z = 0; z < this.currentParts.length; z++)
      {
       if(this.currentParts[z] == a.Position())
        {
          return true;
        }
      }
    }
    
    
  }

  didCollideOld(s: Point)
  {
    
    for(let z = 0; z < this.currentParts.length; z++)
    {
      if(this.currentParts[z] == s)
      {
        return true;
      }
    }
    

    if(this.currentParts[0].equals(s))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  update()
  {
    this.move(this.numMovesPerMove);
  }

  die()
  {
    this.isCurrentlyActive = false;
  }
  get isActive(): boolean
  {
    return this.isCurrentlyActive;
  }
  get type(): string
  {
    return this.isType;
  }



}

export default Snake;