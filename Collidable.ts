import Actor from './Actor';

interface Collidable extends Actor
{
  didCollide:(a: Actor)=>boolean;
}

export default Collidable;