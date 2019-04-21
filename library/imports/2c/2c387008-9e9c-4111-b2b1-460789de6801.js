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
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    MainController.prototype.onLoad = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
    };
    MainController.prototype.start = function () {
    };
    MainController.prototype.on_start_buttonclick = function () {
        cc.director.loadScene("gaming");
    };
    MainController.prototype.on_view1_buttonclick = function () {
        this.view1s.active = true;
        this.view2s.active = false;
        this.view3s.active = false;
    };
    MainController.prototype.on_view2_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = true;
        this.view3s.active = false;
    };
    MainController.prototype.on_view3_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = true;
    };
    MainController.prototype.on_back_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
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
    MainController = __decorate([
        ccclass
    ], MainController);
    return MainController;
}(cc.Component));
exports.default = MainController;

cc._RF.pop();