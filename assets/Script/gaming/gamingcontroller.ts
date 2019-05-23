// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class GamingController extends cc.Component {

    @property(cc.Sprite)
    cm: cc.Sprite = null;

    @property(cc.Sprite)
    bd: cc.Sprite = null;

    @property(cc.Sprite)
    ttq: cc.Sprite = null;

    @property(cc.Sprite)
    beg: cc.Sprite = null;

    @property(cc.Node)
    cm1: cc.Node = null;

    @property(cc.Node)
    bd1: cc.Node = null;

    @property(cc.Node)
    ttq1: cc.Node = null;

    @property(cc.Node)
    beg1: cc.Node = null;

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Label)
    score1: cc.Label = null;

    @property(cc.Label)
    title: cc.Label = null;



    time: number = 0;

    flag: number = 0;

    score: number = 0;

    title1: number = 0;



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.score = 0;
        this.randtitle();
    }

    update (dt:number) {
        //let timeTmp = this.time + dt;
        //this.time = timeTmp;


        this.move(this.cm1);
        this.move(this.bd1);
        this.move(this.ttq1);
        this.move(this.beg1);
        
        if (this.flag == this.title1){
            this.score += 5;
            this.randtitle();
        }

        if(this.score > 100){
            this.gameover();
        }

        this.score1.string = String(this.score);
     }

     randtitle(){
        this.title1 = Math.ceil(Math.random()*4);
        switch(this.title1)
        {
            case(1): this.title.string = "草莓";break;
            case(2): this.title.string = "布丁";break;
            case(3): this.title.string = "甜甜圈";break;
            case(4): this.title.string = "饼干";break;
        }
    }

     move(wuti:cc.Node){
        let wutiX = wuti.x;
        if(this.score < 20){
            wuti.x = wutiX + 5;
        }
        else if(20 <= this.score && this.score < 40){
            wuti.x = wutiX + 7;
        }
        else if(40 <= this.score && this.score < 60){
            wuti.x = wutiX + 11;
        }
        else if(60 <= this.score && this.score < 80){
            wuti.x = wutiX + 13;
        }
        else if(80 <= this.score){
            wuti.x = wutiX + 15;
        }
        if(wuti.x > 687){
            wuti.x = -887;
        }
     }

     onbutton1(){
        this.flag = 1;
     }

     onbutton2(){
         this.flag = 2;
     }

     onbutton3(){
         this.flag = 3;
     }

     onbutton4(){
        this.flag = 4;
     }

     gameover() {
         cc.director.loadScene("gameover");
     }
}
