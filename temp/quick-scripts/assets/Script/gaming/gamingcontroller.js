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
        _this.time = 0;
        _this.flag = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GamingController.prototype.start = function () {
    };
    GamingController.prototype.update = function (dt) {
        var timeTmp = this.time + dt;
        this.time = timeTmp;
        this.move(this.cm1);
        this.move(this.bd1);
        this.move(this.ttq1);
        this.move(this.beg1);
        if (this.flag == 1) {
            this.gameover();
        }
        /*
        else{
            let cmX = this.cm1.x;
            this.cm1.x = cmX + 5;
        }
        let bdX = this.bd1.x;
        this.bd1.x = bdX + 5;

        let ttqX = this.ttq1.x;
        this.ttq1.x = ttqX + 5;

        let begX = this.beg1.x;
        this.beg1.x = begX + 5;
        
        if (this.cm1.x > 687){
            this.cm1.x = -887;
        }
        
        if (this.bd1.x > 687){
            this.bd1.x = -887;
        }
        
        if (this.ttq1.x > 687){
            this.ttq1.x = -887;
        }
        
        if (this.beg1.x > 687){
            this.beg1.x = -887;
        }*/
    };
    GamingController.prototype.move = function (wuti) {
        var wutiX = wuti.x;
        wuti.x = wutiX + 5;
        if (wuti.x > 687) {
            wuti.x = -887;
        }
    };
    GamingController.prototype.onbutton = function () {
        this.flag = 1;
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
        