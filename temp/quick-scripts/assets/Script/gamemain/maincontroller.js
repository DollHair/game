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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.view1s = null;
        _this.view2s = null;
        _this.view3s = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.on_start_buttonclick = function () {
        cc.director.loadScene("version1");
    };
    NewClass.prototype.on_view1_buttonclick = function () {
        this.view1s.active = true;
        this.view2s.active = false;
        this.view3s.active = false;
    };
    NewClass.prototype.on_view2_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = true;
        this.view3s.active = false;
    };
    NewClass.prototype.on_view3_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = true;
    };
    NewClass.prototype.on_back_buttonclick = function () {
        this.view1s.active = false;
        this.view2s.active = false;
        this.view3s.active = false;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "view1s", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "view2s", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "view3s", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
        