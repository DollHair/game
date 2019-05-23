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

var dic = {1:'草莓',2:'寿司',3:'布丁',4:'甜甜圈',5:'披萨',6:'棒冰',7:'饼干'};
var dic2 = {草莓:1,寿司:2,布丁:3,甜甜圈:4,披萨:5,棒冰:6,饼干:7};

@ccclass
export default class GamingController extends cc.Component {

    @property(cc.Node)
    bg: cc.Node = null;

    @property(cc.Node)
    tipsv: cc.Node = null;

    @property(cc.Node)
    homev: cc.Node = null;

    @property(cc.Node)
    falsev: cc.Node = null;

    @property(cc.Button)
    tips: cc.Button = null;

    @property(cc.Button)
    home: cc.Button = null;

    @property(cc.Button)
    conf: cc.Button = null;

    @property(cc.Button)
    nodeb1: cc.Button = null;
    
    @property(cc.Button)
    nodeb2: cc.Button = null;
    
    @property(cc.Button)
    nodeb3: cc.Button = null;
    
    @property(cc.Button)
    nodeb4: cc.Button = null;

    @property(cc.Node)
    node1: cc.Node = null;

    @property(cc.Node)
    node2: cc.Node = null;

    @property(cc.Node)
    node3: cc.Node = null;

    @property(cc.Node)
    node4: cc.Node = null;

    @property(cc.Sprite)
    nodes1: cc.Sprite = null;

    @property(cc.Sprite)
    nodes2: cc.Sprite = null;

    @property(cc.Sprite)
    nodes3: cc.Sprite = null;

    @property(cc.Sprite)
    nodes4: cc.Sprite = null;

    @property(cc.Label)
    title1: cc.Label = null;

    @property(cc.Label)
    data: cc.Label = null;





    score: number = 0;

    stop: number = 0;

    flag: number = 0;

    count: number = 0;






    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.score = 0;
        this.stop = 0;
        this.flag = 0;
        this.count = 0;
        this.tipsv.active = false;
        this.homev.active = false;
        this.falsev.active = false;
        this.randsprite(this.nodes1);
        this.randsprite(this.nodes2);
        this.randsprite(this.nodes3);
        this.randsprite(this.nodes4);
        this.initstringtitle()
    }

    update (dt:number) {
        
        this.data.string = String(this.score);
        this.move(this.node1,this.nodes1);
        this.move(this.node2,this.nodes2);
        this.move(this.node3,this.nodes3);
        this.move(this.node4,this.nodes4);

     }

     randsprite(sp:cc.Sprite){
         let t1 = this.randomtitle();
        cc.loader.loadRes("assets/food", cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(dic[t1]);
            sp.spriteFrame = frame;
        });
     }

     randomtitle(){
        let t = Math.ceil(Math.random()*7);
        /*let t1 = new String();
        switch(t){
            case 1: t1 = '草莓';break;
            case 2: t1 = '寿司';break;
            case 3: t1 = '布丁';break;
            case 4: t1 = '甜甜圈';break;
            case 5: t1 = '披萨';break;
            case 6: t1 = '棒冰';break;
            case 7: t1 = '饼干';break;
        }*/
        return t;
     }

     move(wuti:cc.Node,wutis:cc.Sprite){
        let wutiX = wuti.x;
        if(this.stop == 0){
            if(this.score < 20)
                wuti.x = wutiX + 5;
            if(this.score >= 20 && this.score < 40)
                wuti.x = wutiX + 7;
            if(this.score >= 40 && this.score < 60)
                wuti.x = wutiX + 9;
            if(this.score >= 60 && this.score < 80)
                wuti.x = wutiX + 11;
            if(this.score >= 80 && this.score < 100)
                wuti.x = wutiX + 13;
            if(this.score > 100)
                wuti.x = wutiX +15;
        }
        else 
            wuti.x = wutiX;
        if(wuti.x > 687){
            this.randsprite(wutis);
            wuti.x = -887;
        }
     }
     
     initstringtitle(){
         let t1 = this.randomtitle();
         let t2 = this.randomtitle();
         let t3 = this.randomtitle();
         while(t1 == t2)
             t2 = this.randomtitle();
         while(t1 == t3 || t2 == t3)
             t3 = this.randomtitle();
         let tall = "老板来"+dic[t1]+","+dic[t2]+","+dic[t3]+"!";
         this.flag = t1 + t2 + t3;
         this.title1.string = tall;
     }

     setbuttontrue(){
        this.home.interactable = true;
        this.tips.interactable = true;
        this.conf.interactable = true;
        this.nodeb1.interactable = true;
        this.nodeb2.interactable = true;
        this.nodeb3.interactable = true;
        this.nodeb4.interactable = true;         
     }

     setbuttonfalse(){
        this.home.interactable = false;
        this.tips.interactable = false;
        this.conf.interactable = false;
        this.nodeb1.interactable = false;
        this.nodeb2.interactable = false;
        this.nodeb3.interactable = false;
        this.nodeb4.interactable = false;                  
     }

     onbuttontips(){
        this.tipsv.active = true;
        this.setbuttonfalse();
        this.stop = 1;
     }
     
     onbuttontipsback(){
        this.tipsv.active = false;
        this.setbuttontrue();
        this.stop = 0;
     }

     onbuttonhome(){
         this.homev.active = true;
         this.setbuttonfalse();
         this.stop = 1;
     }

     onbuttonhomeyes(){
         this.homev.active = false;
         this.setbuttontrue();
         this.stop = 0;
     }

     onbuttonhomeno(){
         this.gameover();
     }

     onbutton1(){
        let t = this.nodes1.spriteFrame.name;
        let s = dic2[t];
        this.count += s;

     }

     onbutton2(){
        let t = this.nodes2.spriteFrame.name;
        let s = dic2[t];
        this.count += s;
     }

     onbutton3(){
        let t = this.nodes3.spriteFrame.name;
        let s = dic2[t];
        this.count += s;
     }

     onbutton4(){
        let t = this.nodes4.spriteFrame.name;
        let s = dic2[t];
        this.count += s;
     }

     onbuttonconfirm(){
        if(this.count == this.flag){
            this.score += 5;
            this.flag = 0;
            this.count = 0;
            this.initstringtitle();
        }
        else{
            this.score -= 5;
            this.flag = 0;
            this.count = 0;
            this.initstringtitle();
        }
        if(this.score < 0){
            this.score = 0;
            this.falsev.active = true;
            this.setbuttonfalse();
            this.stop = 1;
        }
     }

     onbuttonfalseyes(){
         this.gameover();
     }

     gameover() {
         cc.director.loadScene("gameover");
     }
}
