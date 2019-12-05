import WorldModel from './WorldModel';
import Player from './Player'

class GameController
{
  private gameWorld: WorldModel;

  private player1: Player;
  private player2: Player;


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
    let lastTime: number =0;

    let updateFrame=(milliseconds) =>
    {
      this.player1.makeTurn();
      this.player2.makeTurn();

     if(milliseconds - lastTime > 250)
     {
      this.gameWorld.update(1);
      lastTime+=250;
    }
    
    requestAnimationFrame(updateFrame);
  }
  requestAnimationFrame(updateFrame);
  }

  

}

export default GameController;