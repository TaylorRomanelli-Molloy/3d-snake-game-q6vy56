import Actor from './Actor';

interface Collidable extends Actor
{
  didCollide:()=>boolean;
}

export default Collidable;