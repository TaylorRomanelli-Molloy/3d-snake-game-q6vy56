import Actor from './Actor';
import Point from './Point';

class Food implements Actor
{
  private currentPosition: Point;
  private isCurrentlyActive: boolean;
  private isType: string = "food";

  constructor(x:number,y:number)
  {
    this.currentPosition = new Point(x,y);
    this.isCurrentlyActive = true;
  } 
  eat()
  {
    this.isCurrentlyActive = false;
  }
  get Position(): Point
  {
    return this.currentPosition;
  }
  get isActive(): boolean
  {
    return this.isCurrentlyActive;
  }
  get type(): string
  {
    return this.isType;
  }

  update()
  {

  }

}
export default Food;