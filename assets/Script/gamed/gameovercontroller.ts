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

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.viewrs.active = false;
    }

    start () {

    }

    on_restart_bottonclick(){
        cc.director.loadScene("Main");
    }
    
    on_viewr_buttonclick(){
        this.viewrs.active = true;
    }

    on_back_buttonclick(){
        this.viewrs.active = false;
    }

    // update (dt) {}
}
