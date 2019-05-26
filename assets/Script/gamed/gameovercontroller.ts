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
export default class GameoverController extends cc.Component {

    @property(cc.Node)
    viewrs: cc.Node = null;

    @property(cc.Button)
    bts: cc.Button = null;

    @property(cc.Button)
    btr: cc.Button = null;

    @property(cc.AudioClip)
    butm: cc.AudioClip = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.viewrs.active = false;
    }

    start () {

    }

    on_restart_bottonclick(){
        cc.audioEngine.playEffect(this.butm, false);
        cc.director.loadScene("Main");
    }
    
    on_viewr_buttonclick(){
        cc.audioEngine.playEffect(this.butm, false);
        this.viewrs.active = true;
        this.setbuttonfalse();
    }

    on_back_buttonclick(){
        cc.audioEngine.playEffect(this.butm, false);
        this.viewrs.active = false;
        this.setbuttontrue();
    }

    setbuttonfalse(){
        this.bts.interactable = false;
        this.btr.interactable = false;
    }

    setbuttontrue(){
        this.bts.interactable = true;
        this.btr.interactable = true;
    }

    // update (dt) {}
}
