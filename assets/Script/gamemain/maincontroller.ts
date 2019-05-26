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
export default class MainController extends cc.Component {

    @property(cc.Node)
    view1s: cc.Node = null;

    @property(cc.Node)
    view2s: cc.Node = null;

    @property(cc.Node)
    view3s: cc.Node = null;

    @property(cc.Node)
    vieww: cc.Node = null;

    @property(cc.Node)
    start1: cc.Node

    @property(cc.Button)
    bt1: cc.Button = null;

    @property(cc.Button)
    bt2: cc.Button = null;

    @property(cc.Button)
    bt3: cc.Button = null;
    
    @property(cc.Button)
    bts: cc.Button = null;

    @property(cc.Node)
    check1: cc.Node = null;

    @property(cc.Node)
    check2: cc.Node = null;

    @property(cc.Node)
    check3: cc.Node = null;

    @property(cc.AudioClip)
    butm: cc.AudioClip = null;



    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
        this.check1.active = false;
        this.check2.active = false;
        this.check3.active = false;
        this.vieww.active = false; 
        this.start1.active = false;  
     }

    start () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
        this.check1.active = false;
        this.check2.active = false;
        this.check3.active = false;
        this.vieww.active = false;
        this.start1.active = false;  
    }

    on_start_buttonclick(){
        cc.audioEngine.playEffect(this.butm, false);
            if(this.check2.active == true)
                cc.director.loadScene("gaming");
            else{
                this.vieww.active = true;
                this.setbuttonfalse();
            }        
        }
    
    on_view1_buttonclick(){
        this.view1s.active = true;
        this.view2s.active = false;
        this.view3s.active = false;
        this.check1.active = true;
        this.check2.active = false;
        this.check3.active = false;
        this.setbuttonfalse()
        cc.audioEngine.playEffect(this.butm, false);
    }

    on_view2_buttonclick(){
        this.view1s.active = false;
        this.view2s.active = true;
        this.view3s.active = false;
        this.check1.active = false;
        this.check2.active = true;
        this.check3.active = false;
        this.setbuttonfalse()
        cc.audioEngine.playEffect(this.butm, false);
    }

    on_view3_buttonclick(){
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = true;
        this.check1.active = false;
        this.check2.active = false;
        this.check3.active = true;
        this.setbuttonfalse()
        cc.audioEngine.playEffect(this.butm, false);
    }

    on_back_buttonclick(){
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
        this.vieww.active = false;
        this.setbuttontrue();
        cc.audioEngine.playEffect(this.butm, false);
    }

    setbuttonfalse(){
        this.bt1.interactable = false;
        this.bt2.interactable = false;
        this.bt3.interactable = false;
        this.bts.interactable = false;
    }

    setbuttontrue(){
        this.bt1.interactable = true;
        this.bt2.interactable = true;
        this.bt3.interactable = true;
        this.bts.interactable = true;
    }

    update (dt) {
        if(this.check1.active == true || this.check2.active == true || this.check3.active == true){
            this.start1.active = true;
        }
    }
}
