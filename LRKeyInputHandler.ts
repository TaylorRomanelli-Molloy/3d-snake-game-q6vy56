import InputHandler from './InputHandler';

class LRKeyInputHandler implements InputHandler
{
  wasLeftArrowPushed:boolean;
  wasRightArrowPushed:boolean;

  constructor()
  {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;
  }

  /*
  methods needed from implementations

  madeLeftMove:() => boolean ;
  madeRightMove:() => boolean;
  resetLeftMove:() => void;
  resetRightMove:() => void;
  */

  madeLeftMove():boolean
  {
    this.resetLeftMove();
    return true;
  }
  madeRightMove():boolean
  {
    this.resetRightMove();
    return true;
  }
  resetLeftMove():void
  {
    this.wasLeftArrowPushed = false;
  }
  resetRightMove():void
  {
    this.wasRightArrowPushed = false;
  }
}

export default LRKeyInputHandler;