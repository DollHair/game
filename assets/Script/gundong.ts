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
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

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



    time: number = 0;

    flag: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

     update (dt:number) {
        let timeTmp = this.time + dt;
        this.time = timeTmp;

        if (this.flag == 1){
            let cmX = this.cm1.x;
            this.cm1.x = cmX;
        }
        else{
            let cmX = this.cm1.x;
            this.cm1.x = cmX + 5;            
        }
        let bdX = this.bd1.x;
        this.bd1.x = bdX + 5;

        let ttqX = this.ttq1.x;
        this.ttq1.x = ttqX + 5;

        let begX = this.beg1.x;
        this.beg1.x = begX + 5;
        
        if (this.cm1.x > 687){
            this.cm1.x = -887;
        }
        
        if (this.bd1.x > 687){
            this.bd1.x = -887;
        }
        
        if (this.ttq1.x > 687){
            this.ttq1.x = -887;
        }
        
        if (this.beg1.x > 687){
            this.beg1.x = -887;
        }
     }

     onbutton(){
         this.cm1.x = 29;
         this.cm1.y = -113;
         this.flag = 1;
     }
}
