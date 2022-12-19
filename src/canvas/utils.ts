import {canvasUtilBase} from "./component"

interface setupBase {
}

interface startAnimationBase{
}


export class CanvasControl implements canvasUtilBase{
  canvas:HTMLCanvasElement
  ctx:CanvasRenderingContext2D
  offset:{
    x: number;
    y: number;
  }



    constructor(canvas:HTMLCanvasElement, offset = { x: 0, y: 0 }) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d")!;
      this.offset = offset;
    }

    setup(props:setupBase){
      this.clear()
    }

    startAnimation(props:startAnimationBase){

      return ()=> {}

    }


    clear(clearColor = "#FFFFFF") {
      //console.log(`trying to clear the background with ${clearColor}`);
      this.ctx.fillStyle = clearColor;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
}