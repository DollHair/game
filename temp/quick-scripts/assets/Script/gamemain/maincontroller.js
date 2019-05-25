(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gamemain/maincontroller.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2c387AInpxBEbKxRgeJ3mgB', 'maincontroller', __filename);
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
        _this.butm = null;
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
        cc.audioEngine.playEffect(this.butm, false);
        cc.director.loadScene("gaming");
    };
    MainController.prototype.on_view1_buttonclick = function () {
        this.view1s.active = true;
        this.view2s.active = false;
        this.view3s.active = false;
        cc.audioEngine.playEffect(this.butm, false);
    };
    MainController.prototype.on_view2_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = true;
        this.view3s.active = false;
        cc.audioEngine.playEffect(this.butm, false);
    };
    MainController.prototype.on_view3_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = true;
        cc.audioEngine.playEffect(this.butm, false);
    };
    MainController.prototype.on_back_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
        cc.audioEngine.playEffect(this.butm, false);
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
        property(cc.AudioClip)
    ], MainController.prototype, "butm", void 0);
    MainController = __decorate([
        ccclass
    ], MainController);
    return MainController;
}(cc.Component));
exports.default = MainController;

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
        //# sourceMappingURL=maincontroller.js.map
        