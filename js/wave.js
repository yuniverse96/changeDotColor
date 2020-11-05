import {Point} from './point.js';

export class Wave {
  constructor(color) {
    this.points = [];
    this.numberOfPoints = 10;
    this.color =[];

    for(let i = 0; i < this.numberOfPoints; i++){
       this.color.push("#"+Math.round(Math.random() *0xffffff).toString(16));
    }//랜덤색상 배열화

    // this.color =  ["#"+Math.round(Math.random() *0xffffff).toString(16)];//색 랜덤으로 만들어주는 함수
    
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;


    this.pointGap = this.stageWidth / (this.numberOfPoints - 1);

    this.init();
  }

  init() {

    for (let i = 0; i < this.numberOfPoints; i++) {
      this.points[i] = new Point(i, this.pointGap * i, this.centerY);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.numberOfPoints; i++) {
 
      ctx.beginPath();

      ctx.arc(this.points[i].x, this.points[i].y, 50, 0, 2 * Math.PI);


      ctx.fillStyle = this.color[i];
      ctx.fill();
      ctx.closePath();


    this.points[i].update();
  
    }
  }
}