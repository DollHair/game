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

    @property(cc.Node)
    view1s: cc.Node = null;

    @property(cc.Node)
    view2s: cc.Node = null;

    @property(cc.Node)
    view3s: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;   
     }

    start () {

    }

    on_start_buttonclick(){
        cc.director.loadScene("version1");
    }
    
    on_view1_buttonclick(){
        this.view1s.active = true;
        this.view2s.active = false;
        this.view3s.active = false;
    }

    on_view2_buttonclick(){
        this.view1s.active = false;
        this.view2s.active = true;
        this.view3s.active = false;
    }

    on_view3_buttonclick(){
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = true;
    }

    on_back_buttonclick(){
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
    }



    // update (dt) {}
}
