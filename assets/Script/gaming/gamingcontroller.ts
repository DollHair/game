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
    nodec1: cc.Node = null;

    @property(cc.Node)
    nodec2: cc.Node = null;

    @property(cc.Node)
    nodec3: cc.Node = null;

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
    conf: cc.Button = null;

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

    @property(cc.AudioClip)
    butm: cc.AudioClip = null;





    score: number = 0;

    stop: number = 0;

    flag: number = 0;

    count: number = 0;

    flag2: number = 0;

    life: number = 0;






    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.score = 0;
        this.stop = 0;
        this.flag = 1;
        this.count = 0;
        this.flag2 = 0;
        this.life = 3;
        this.tipsv.active = false;
        this.homev.active = false;
        this.rolev.active = false;
        this.falsev.active = false;
        this.nodea1.active = false;
        this.nodea2.active = false;
        this.nodea3.active = false;
        this.nodea4.active = false;
        this.nodec1a.active = false;
        this.nodec2a.active = false;
        this.nodec3a.active = false;
        this.nodet.active = false;
        this.nodet.scale = 0;
        this.nodef.active = false;
        this.nodef.scale = 0;
        this.randsprite(this.nodes1);
        this.randsprite(this.nodes2);
        this.randsprite(this.nodes3);
        this.randsprite(this.nodes4);
        this.initstringtitle()
    }

    update (dt:number) {
        this.datal.string = String(this.life);
        this.data.string = String(this.score);
        this.move(this.node1,this.nodes1);
        this.move(this.node2,this.nodes2);
        this.move(this.node3,this.nodes3);
        this.move(this.node4,this.nodes4);
        if(this.flag2 == 0){
            this.nodec1.active = true;
            this.nodec2.active = true;
            this.nodec3.active = true;
            this.nodec1a.active = false;
            this.nodec2a.active = false;
            this.nodec3a.active = false;
        }
        if(this.flag2 == 1){
            this.nodec1.active = false;
            this.nodec2.active = true;
            this.nodec3.active = true;
            this.nodec1a.active = true;
            this.nodec2a.active = false;
            this.nodec3a.active = false;
        }
        if(this.flag2 == 2){
            this.nodec1.active = false;
            this.nodec2.active = false;
            this.nodec3.active = true;
            this.nodec1a.active = true;
            this.nodec2a.active = true;
            this.nodec3a.active = false;
        }
        if(this.flag2 == 3){
            this.nodec1.active = false;
            this.nodec2.active = false;
            this.nodec3.active = false;
            this.nodec1a.active = true;
            this.nodec2a.active = true;
            this.nodec3a.active = true;
        }


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
            wuti.active = true;
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
         let tall = "老板来一份螺蛳粉！\n(还差:"+dic[t1]+","+dic[t2]+","+dic[t3]+")";
         this.flag = t1 + t2 + t3;
         this.title1.string = tall;
     }

     setbuttontrue(){
        this.home.interactable = true;
        this.tips.interactable = true;
        this.conf.interactable = true;
        this.role.interactable = true;
        this.nodeb1.interactable = true;
        this.nodeb2.interactable = true;
        this.nodeb3.interactable = true;
        this.nodeb4.interactable = true;         
     }

     setbuttonfalse(){
        this.home.interactable = false;
        this.tips.interactable = false;
        this.conf.interactable = false;
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

     onbutton1(){
        this.touchactionS(this.node1,this.nodes1,this.nodea1,this.nodeas1);
        let t = this.nodes1.spriteFrame.name;
        let s = dic2[t];
        this.count += s;
        this.flag2 += 1;
        cc.audioEngine.playEffect(this.butm, false);

     }

     onbutton2(){
        this.touchactionS(this.node2,this.nodes2,this.nodea2,this.nodeas2);
        let t = this.nodes2.spriteFrame.name;
        let s = dic2[t];
        this.count += s;
        this.flag2 += 1;
        cc.audioEngine.playEffect(this.butm, false);
     }

     onbutton3(){
        this.touchactionS(this.node3,this.nodes3,this.nodea3,this.nodeas3);
        let t = this.nodes3.spriteFrame.name;
        let s = dic2[t];
        this.count += s;
        this.flag2 += 1;
        cc.audioEngine.playEffect(this.butm, false);
     }

     onbutton4(){
        this.touchactionS(this.node4,this.nodes4,this.nodea4,this.nodeas4);
        let t = this.nodes4.spriteFrame.name;
        let s = dic2[t];
        this.count += s;
        this.flag2 += 1;
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
             node.scale = 0;},1.2)
     }
     onbuttonconfirm(){
        if(this.count == this.flag){
            this.score += 5;
            this.flag = 0;
            this.count = 0;
            this.flag2 = 0;
            this.touchactionc(this.nodet);
            this.initstringtitle();
        }
        else{
            this.life -= 1;
            this.flag = 0;
            this.count = 0;
            this.flag2 = 0;
            if(this.life > 0)
                this.touchactionc(this.nodef);
            this.initstringtitle();
        }
        if(this.life < 1){
            this.falsev.active = true;
            this.result.string = "本次得分为:"+this.score;
            this.setbuttonfalse();
            this.stop = 1;
        }
        cc.audioEngine.playEffect(this.butm, false);
     }

     onbuttonfalseyes(){
         cc.audioEngine.playEffect(this.butm, false);
         this.gameover();
     }

     gameover() {
         cc.director.loadScene("gameover");
     }
}
