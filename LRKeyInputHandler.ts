import InputHandler from "./InputHandler";

class LRKeyInputHandler implements InputHandler {
  wasLeftArrowPushed: boolean;
  wasRightArrowPushed: boolean;

  constructor() {
    this.wasLeftArrowPushed = false;
    this.wasRightArrowPushed = false;

    window.addEventListener("keydown", event => {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      switch (event.key) {
        case "ArrowLeft":
          this.wasLeftArrowPushed = true;
          break;

        case "ArrowRight":
          this.wasRightArrowPushed = false;
          break;

        default:
          return; // Quit when this doesn't handle the key event.
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    });
  }

  /*
  methods needed from implementations

  madeLeftMove:() => boolean ;
  madeRightMove:() => boolean;
  resetLeftMove:() => void;
  resetRightMove:() => void;
  */

  madeLeftMove(): boolean {
    this.resetLeftMove();
    return true;
  }
  madeRightMove(): boolean {
    this.resetRightMove();
    return true;
  }
  resetLeftMove(): void {
    this.wasLeftArrowPushed = false;
  }
  resetRightMove(): void {
    this.wasRightArrowPushed = false;
  }

  update() {
    if (this.wasLeftArrowPushed == false && this.wasRightArrowPushed == false) {
    }
  }
}

export default LRKeyInputHandler;
