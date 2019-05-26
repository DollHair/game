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

//var dic = {1:'草莓',2:'寿司',3:'布丁',4:'甜甜圈',5:'披萨',6:'棒冰',7:'饼干'};
//var dic2 = {草莓:1,寿司:2,布丁:3,甜甜圈:4,披萨:5,棒冰:6,饼干:7};
var dic = {1:'腐竹',2:'螺蛳',3:'酸笋',4:'木耳'}
var dic2 = {腐竹:1,螺蛳:2,酸笋:3,木耳:4}

@ccclass
export default class GamingController extends cc.Component {

    @property(cc.Node)
    tipsv: cc.Node = null;

    @property(cc.Node)
    homev: cc.Node = null;

    @property(cc.Node)
    rolev: cc.Node = null;

    @property(cc.Node)
    falsev: cc.Node = null;

    @property(cc.Node)
    node1: cc.Node = null;

    @property(cc.Node)
    node2: cc.Node = null;

    @property(cc.Node)
    node3: cc.Node = null;

    @property(cc.Node)
    node4: cc.Node = null;

    @property(cc.Node)
    nodea1: cc.Node = null;

    @property(cc.Node)
    nodea2: cc.Node = null;

    @property(cc.Node)
    nodea3: cc.Node = null;

    @property(cc.Node)
    nodea4: cc.Node = null;

    @property(cc.Node)
    nodec1a: cc.Node = null;

    @property(cc.Node)
    nodec2a: cc.Node = null;

    @property(cc.Node)
    nodec3a: cc.Node = null;

    @property(cc.Node)
    nodef: cc.Node = null;

    @property(cc.Node)
    nodet: cc.Node = null;

    @property(cc.Node)
    nodef2: cc.Node = null;

    @property(cc.Node)
    nodef3: cc.Node = null;

    @property(cc.Sprite)
    nodes1: cc.Sprite = null;

    @property(cc.Sprite)
    nodes2: cc.Sprite = null;

    @property(cc.Sprite)
    nodes3: cc.Sprite = null;

    @property(cc.Sprite)
    nodes4: cc.Sprite = null;

    @property(cc.Sprite)
    nodeas1: cc.Sprite = null;

    @property(cc.Sprite)
    nodeas2: cc.Sprite = null;

    @property(cc.Sprite)
    nodeas3: cc.Sprite = null;

    @property(cc.Sprite)
    nodeas4: cc.Sprite = null;

    @property(cc.Button)
    tips: cc.Button = null;

    @property(cc.Button)
    home: cc.Button = null;

    @property(cc.Button)
    role: cc.Button = null;

    @property(cc.Button)
    nodeb1: cc.Button = null;
    
    @property(cc.Button)
    nodeb2: cc.Button = null;
    
    @property(cc.Button)
    nodeb3: cc.Button = null;
    
    @property(cc.Button)
    nodeb4: cc.Button = null;

    @property(cc.Label)
    title1: cc.Label = null;

    @property(cc.Label)
    data: cc.Label = null;

    @property(cc.Label)
    datal: cc.Label = null;

    @property(cc.Label)
    result: cc.Label = null;

    @property(cc.Label)
    timec: cc.Label

    @property(cc.AudioClip)
    butm: cc.AudioClip = null;





    score: number = 0;

    stop: number = 0;

    flag2: number = 0;

    life: number = 0;

    time: number = 0;

    t1: number = 0;

    t2: number = 0;

    t3: number = 0;

    flagt1: number = 0;

    flagt2: number = 0;

    flagt3: number = 0;






    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.score = 0;
        this.life = 5;
        this.stop = 0;
        this.t1 = 0;
        this.t2 = 0;
        this.t3 = 0;
        this.tipsv.active = false;
        this.homev.active = false;
        this.rolev.active = false;
        this.falsev.active = false;
        this.nodea1.active = false;
        this.nodea2.active = false;
        this.nodea3.active = false;
        this.nodea4.active = false;
        this.nodet.active = false;
        this.nodet.scale = 0;
        this.nodef.active = false;
        this.nodef.scale = 0;
        this.nodef2.active = false;
        this.nodef2.scale = 0;
        this.nodef3.active = false;
        this.nodef3.scale = 0;
        this.randsprite(this.nodes1);
        this.randsprite(this.nodes2);
        this.randsprite(this.nodes3);
        this.randsprite(this.nodes4);
        this.setconst();
        this.schedule(function(){if(this.stop == 0) this.time -= 1;},1);
    }

    update (dt:number) {
        this.datal.string = String(this.life);
        this.data.string = String(this.score);
        this.timec.string = String(this.time);
        this.move(this.node1,this.nodes1);
        this.move(this.node2,this.nodes2);
        this.move(this.node3,this.nodes3);
        this.move(this.node4,this.nodes4);
        if(this.flagt1 == 1){
            this.nodec1a.active = true;
        }
        if(this.flagt2 == 1){
            this.nodec2a.active = true;
        }
        if(this.flagt3 == 1){
            this.nodec3a.active = true;
        }
        if(this.flag2 == 3){
            this.setconst();
        }
        if(this.time == 0){
            if(this.life > 1){
                this.touchactionc(this.nodef2);
                this.setconst();
                this.life -= 1;
            }
            else{
                this.setfalse();
            }
        }
        if(this.life < 1){
            this.setfalse();
        }


     }
     setconst(){
        this.flag2 = 0;
        this.time = 20;
        this.flagt1 = 0;
        this.flagt2 = 0;
        this.flagt3 = 0;
        this.initstringtitle();
        this.nodec1a.active = false;
        this.nodec2a.active = false;
        this.nodec3a.active = false;
     }

     setfalse(){
        this.falsev.active = true;
        this.stop = 1;
        this.result.string = "本次得分为:"+this.score;
        this.setbuttonfalse();
     }

     randsprite(sp:cc.Sprite){
         let t1 = this.randomtitle();
        cc.loader.loadRes("assets/food2", cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(dic[t1]);
            sp.spriteFrame = frame;
        });
     }

     randomtitle(){
        let t = Math.ceil(Math.random()*4);
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
            wuti.active = true;
            wuti.x = -887;
        }
     }
     
     initstringtitle(){
         this.t1 = this.randomtitle();
         this.t2 = this.randomtitle();
         this.t3 = this.randomtitle();
         while(this.t1 == this.t2)
             this.t2 = this.randomtitle();
         while(this.t1 == this.t3 || this.t2 == this.t3)
             this.t3 = this.randomtitle();
         let tall = "老板来一碗螺蛳粉！\n(还差:"+dic[this.t1]+","+dic[this.t2]+","+dic[this.t3]+")";
         //this.flag = this.t1 + t2 + t3;
         this.title1.string = tall;
     }

     setbuttontrue(){
        this.home.interactable = true;
        this.tips.interactable = true;
        this.role.interactable = true;
        this.nodeb1.interactable = true;
        this.nodeb2.interactable = true;
        this.nodeb3.interactable = true;
        this.nodeb4.interactable = true;         
     }

     setbuttonfalse(){
        this.home.interactable = false;
        this.tips.interactable = false;
        this.role.interactable = false;
        this.nodeb1.interactable = false;
        this.nodeb2.interactable = false;
        this.nodeb3.interactable = false;
        this.nodeb4.interactable = false;                  
     }

     onbuttontips(){
        this.tipsv.active = true;
        this.setbuttonfalse();
        this.stop = 1;
        cc.audioEngine.playEffect(this.butm, false);
     }
     
     onbuttontipsback(){
        this.tipsv.active = false;
        this.setbuttontrue();
        this.stop = 0;
        cc.audioEngine.playEffect(this.butm, false);
     }

     onbuttonhome(){
         this.homev.active = true;
         this.setbuttonfalse();
         this.stop = 1;
         cc.audioEngine.playEffect(this.butm, false);
     }

     onbuttonhomeyes(){
         this.homev.active = false;
         this.setbuttontrue();
         this.stop = 0;
         cc.audioEngine.playEffect(this.butm, false);
     }

     onbuttonhomeno(){
         cc.audioEngine.playEffect(this.butm, false);
         this.gameover();
     }

     onbuttonrole(){
        this.rolev.active = true;
        this.setbuttonfalse();
        this.stop = 1
        cc.audioEngine.playEffect(this.butm, false);
     }

     onbuttonroleback(){
         this.rolev.active = false;
         this.setbuttontrue();
         this.stop = 0;
         cc.audioEngine.playEffect(this.butm, false);
     }
     onbuttonfalseyes(){
         cc.audioEngine.playEffect(this.butm, false);
         this.gameover();
     }
     onbutton1(){
        let t = this.nodes1.spriteFrame.name;
        let s = dic2[t];
        this.spriteswitch(this.node1,this.nodes1,this.nodea1,this.nodeas1,s);
        cc.audioEngine.playEffect(this.butm, false);

     }

     onbutton2(){
        
        let t = this.nodes2.spriteFrame.name;
        let s = dic2[t];
        this.spriteswitch(this.node2,this.nodes2,this.nodea2,this.nodeas2,s);
        cc.audioEngine.playEffect(this.butm, false);
     }

     onbutton3(){
        
        let t = this.nodes3.spriteFrame.name;
        let s = dic2[t];
        this.spriteswitch(this.node3,this.nodes3,this.nodea3,this.nodeas3,s);
        cc.audioEngine.playEffect(this.butm, false);
     }

     onbutton4(){
        
        let t = this.nodes4.spriteFrame.name;
        let s = dic2[t];
        this.spriteswitch(this.node4,this.nodes4,this.nodea4,this.nodeas4,s);
        cc.audioEngine.playEffect(this.butm, false);
     }

     touchaction(nodea:cc.Node){
        let action = cc.spawn(cc.moveTo(1, -5, -83),cc.scaleTo(1, 0.1, 0.1));
        nodea.runAction(action);
     }

     touchactionS(node:cc.Node,nodes:cc.Sprite,nodea:cc.Node,nodeas:cc.Sprite){
        node.active = false;
        nodea.position = node.position;
        nodeas.spriteFrame = nodes.spriteFrame;
        nodea.active = true;
        this.touchaction(nodea);
        this.scheduleOnce(function(){
            nodea.active = false;
            nodea.scale = 1;},1.2);

     }
     touchactionc(node:cc.Node){
         node.active = true;
         let action = cc.scaleTo(1, 1, 1)
         node.runAction(action);
         this.scheduleOnce(function(){
             node.active = false;
             node.scale = 0;},0.8)
     }

     spriteswitch(node:cc.Node,nodes:cc.Sprite,nodea:cc.Node,nodeas:cc.Sprite,s:number){
        if(this.t1 == s || this.t2 == s || this.t3 == s){
            if(this.t1 == s) this.flagt1 ++;
            else if(this.t2 == s) this.flagt2 ++;
            else if(this.t3 == s) this.flagt3 ++;
            if(((this.flagt1==0)||(this.flagt1==1))&&((this.flagt2==0)||(this.flagt2==1))&&((this.flagt3==0)||(this.flagt3==1))){
                this.touchactionS(node,nodes,nodea,nodeas);
                this.touchactionc(this.nodet);
                this.score += 2;
                this.flag2 += 1;
            }
            else{
                if(this.life > 1)
                    this.touchactionc(this.nodef3);
                this.life -= 1;
                if(this.flagt1 > 1)
                this.flagt1=1;
                if(this.flagt2 > 1)
                this.flagt2=1;
                if(this.flagt3 > 1)
                this.flagt3=1;
            }
        }
       else{
            this.touchactionc(this.nodef);
            this.life -= 1;
        }
     }
     

     gameover() {
         cc.director.loadScene("gameover");
     }
}
