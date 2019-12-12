import Point from './Point';

interface Actor
{  
  update:()=>void;
  type:() => string;
  Position:() => Point;

}

export default Actor;