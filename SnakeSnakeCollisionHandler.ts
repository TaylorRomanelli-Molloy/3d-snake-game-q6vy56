import Snake from './Snake';

interface SnakeSnakeCollisionHandler
{
  applyAction:(s1:Snake,s2:Snake)=>void; 
}
export default SnakeSnakeCollisionHandler;