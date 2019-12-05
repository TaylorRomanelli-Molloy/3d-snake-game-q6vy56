import WorldModel from './WorldModel';
import Player from './Player'

class GameController
{
  private gameWorld: WorldModel;

  private player1: Player;
  private player2: Player;

  private lastTime: number;

  constructor(wm: WorldModel)
  {
    this.gameWorld = wm;
  }

  set Player1(p:Player)
  {
    this.player1 = p;
  }
  set Player2(p:Player)
  {
    this.player2 = p;
  }

  run()
  {
    this.lastTime = 0;
  }

  updateFrame()
  {
    this.player1.makeTurn();
    this.player2.makeTurn();

    if(this.lastTime > 250)
    {
      this.gameWorld.update(1);
      this.lastTime-=250;
    }

    this.lastTime++;
    
    requestAnimationFrame(this.updateFrame);
  }

}

export default GameController;