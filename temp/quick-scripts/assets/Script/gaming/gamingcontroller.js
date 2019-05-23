(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gaming/gamingcontroller.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6092ehIxndABpQQPCgsZDhC', 'gamingcontroller', __filename);
// Script/gaming/gamingcontroller.ts

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
var GamingController = /** @class */ (function (_super) {
    __extends(GamingController, _super);
    function GamingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cm = null;
        _this.bd = null;
        _this.ttq = null;
        _this.beg = null;
        _this.cm1 = null;
        _this.bd1 = null;
        _this.ttq1 = null;
        _this.beg1 = null;
        _this.bg = null;
        _this.score1 = null;
        _this.title = null;
        _this.time = 0;
        _this.flag = 0;
        _this.score = 0;
        _this.title1 = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GamingController.prototype.start = function () {
        this.score = 0;
        this.randtitle();
    };
    GamingController.prototype.update = function (dt) {
        //let timeTmp = this.time + dt;
        //this.time = timeTmp;
        this.move(this.cm1);
        this.move(this.bd1);
        this.move(this.ttq1);
        this.move(this.beg1);
        if (this.flag == this.title1) {
            this.score += 5;
            this.randtitle();
        }
        if (this.score > 100) {
            this.gameover();
        }
        this.score1.string = String(this.score);
    };
    GamingController.prototype.randtitle = function () {
        this.title1 = Math.ceil(Math.random() * 4);
        switch (this.title1) {
            case (1):
                this.title.string = "草莓";
                break;
            case (2):
                this.title.string = "布丁";
                break;
            case (3):
                this.title.string = "甜甜圈";
                break;
            case (4):
                this.title.string = "饼干";
                break;
        }
    };
    GamingController.prototype.move = function (wuti) {
        var wutiX = wuti.x;
        if (this.score < 20) {
            wuti.x = wutiX + 5;
        }
        else if (20 <= this.score && this.score < 40) {
            wuti.x = wutiX + 7;
        }
        else if (40 <= this.score && this.score < 60) {
            wuti.x = wutiX + 11;
        }
        else if (60 <= this.score && this.score < 80) {
            wuti.x = wutiX + 13;
        }
        else if (80 <= this.score) {
            wuti.x = wutiX + 15;
        }
        if (wuti.x > 687) {
            wuti.x = -887;
        }
    };
    GamingController.prototype.onbutton1 = function () {
        this.flag = 1;
    };
    GamingController.prototype.onbutton2 = function () {
        this.flag = 2;
    };
    GamingController.prototype.onbutton3 = function () {
        this.flag = 3;
    };
    GamingController.prototype.onbutton4 = function () {
        this.flag = 4;
    };
    GamingController.prototype.gameover = function () {
        cc.director.loadScene("gameover");
    };
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "cm", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "bd", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "ttq", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "beg", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "cm1", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "bd1", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "ttq1", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "beg1", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "bg", void 0);
    __decorate([
        property(cc.Label)
    ], GamingController.prototype, "score1", void 0);
    __decorate([
        property(cc.Label)
    ], GamingController.prototype, "title", void 0);
    GamingController = __decorate([
        ccclass
    ], GamingController);
    return GamingController;
}(cc.Component));
exports.default = GamingController;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=gamingcontroller.js.map
        