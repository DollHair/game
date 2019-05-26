"use strict";
cc._RF.push(module, '2c387AInpxBEbKxRgeJ3mgB', 'maincontroller');
// Script/gamemain/maincontroller.ts

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainController = /** @class */ (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view1s = null;
        _this.view2s = null;
        _this.view3s = null;
        _this.vieww = null;
        _this.bt1 = null;
        _this.bt2 = null;
        _this.bt3 = null;
        _this.bts = null;
        _this.check1 = null;
        _this.check2 = null;
        _this.check3 = null;
        _this.butm = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    MainController.prototype.onLoad = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
        this.check1.active = false;
        this.check2.active = false;
        this.check3.active = false;
        this.vieww.active = false;
        this.start1.active = false;
    };
    MainController.prototype.start = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
        this.check1.active = false;
        this.check2.active = false;
        this.check3.active = false;
        this.vieww.active = false;
        this.start1.active = false;
    };
    MainController.prototype.on_start_buttonclick = function () {
        cc.audioEngine.playEffect(this.butm, false);
        if (this.check2.active == true)
            cc.director.loadScene("gaming");
        else {
            this.vieww.active = true;
            this.setbuttonfalse();
        }
    };
    MainController.prototype.on_view1_buttonclick = function () {
        this.view1s.active = true;
        this.view2s.active = false;
        this.view3s.active = false;
        this.check1.active = true;
        this.check2.active = false;
        this.check3.active = false;
        this.setbuttonfalse();
        cc.audioEngine.playEffect(this.butm, false);
    };
    MainController.prototype.on_view2_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = true;
        this.view3s.active = false;
        this.check1.active = false;
        this.check2.active = true;
        this.check3.active = false;
        this.setbuttonfalse();
        cc.audioEngine.playEffect(this.butm, false);
    };
    MainController.prototype.on_view3_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = true;
        this.check1.active = false;
        this.check2.active = false;
        this.check3.active = true;
        this.setbuttonfalse();
        cc.audioEngine.playEffect(this.butm, false);
    };
    MainController.prototype.on_back_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
        this.vieww.active = false;
        this.setbuttontrue();
        cc.audioEngine.playEffect(this.butm, false);
    };
    MainController.prototype.setbuttonfalse = function () {
        this.bt1.interactable = false;
        this.bt2.interactable = false;
        this.bt3.interactable = false;
        this.bts.interactable = false;
    };
    MainController.prototype.setbuttontrue = function () {
        this.bt1.interactable = true;
        this.bt2.interactable = true;
        this.bt3.interactable = true;
        this.bts.interactable = true;
    };
    MainController.prototype.update = function (dt) {
        if (this.check1.active == true || this.check2.active == true || this.check3.active == true) {
            this.start1.active = true;
        }
    };
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "view1s", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "view2s", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "view3s", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "vieww", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "start1", void 0);
    __decorate([
        property(cc.Button)
    ], MainController.prototype, "bt1", void 0);
    __decorate([
        property(cc.Button)
    ], MainController.prototype, "bt2", void 0);
    __decorate([
        property(cc.Button)
    ], MainController.prototype, "bt3", void 0);
    __decorate([
        property(cc.Button)
    ], MainController.prototype, "bts", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "check1", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "check2", void 0);
    __decorate([
        property(cc.Node)
    ], MainController.prototype, "check3", void 0);
    __decorate([
        property(cc.AudioClip)
    ], MainController.prototype, "butm", void 0);
    MainController = __decorate([
        ccclass
    ], MainController);
    return MainController;
}(cc.Component));
exports.default = MainController;

cc._RF.pop();