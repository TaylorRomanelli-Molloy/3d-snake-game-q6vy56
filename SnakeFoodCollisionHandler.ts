import Snake from './Snake';
import Food from './Food';

interface SnakeFoodCollisionHandler
{
  applyAction:(s:Snake,f:Food)=>void;
}
export default SnakeFoodCollisionHandler;