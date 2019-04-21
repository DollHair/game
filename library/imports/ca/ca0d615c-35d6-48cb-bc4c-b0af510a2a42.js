"use strict";
cc._RF.push(module, 'ca0d6FcNdZIy7xMsK9RCipC', 'gameovercontroller');
// Script/gamed/gameovercontroller.ts

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
var GameoverController = /** @class */ (function (_super) {
    __extends(GameoverController, _super);
    function GameoverController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewrs = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    GameoverController.prototype.onLoad = function () {
        this.viewrs.active = false;
    };
    GameoverController.prototype.start = function () {
    };
    GameoverController.prototype.on_restart_bottonclick = function () {
        cc.director.loadScene("Main");
    };
    GameoverController.prototype.on_viewr_buttonclick = function () {
        this.viewrs.active = true;
    };
    GameoverController.prototype.on_back_buttonclick = function () {
        this.viewrs.active = false;
    };
    __decorate([
        property(cc.Node)
    ], GameoverController.prototype, "viewrs", void 0);
    GameoverController = __decorate([
        ccclass
    ], GameoverController);
    return GameoverController;
}(cc.Component));
exports.default = GameoverController;

cc._RF.pop();