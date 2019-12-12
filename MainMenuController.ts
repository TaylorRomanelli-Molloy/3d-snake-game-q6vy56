import Game from './Game';
class MainMenuController
{
  private game: Game;
  private playGameButton:string;
  private humanPlayersInput:string;
  private aiPlayerInput:string;

  constructor(g: Game)
  {
    this.game = g;
    this.playGameButton = "button";
    this.humanPlayersInput = "input";
    this.aiPlayerInput = "input";

    document.createElement(this.playGameButton);
    document.createElement(this.humanPlayersInput);
    document.createElement(this.aiPlayerInput);
  }
}
export default MainMenuController;