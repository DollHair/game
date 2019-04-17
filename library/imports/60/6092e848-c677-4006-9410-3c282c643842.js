"use strict";
cc._RF.push(module, '6092ehIxndABpQQPCgsZDhC', 'gundong');
// Script/gundong.ts

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
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        var timeTmp = this.time + dt;
        this.time = timeTmp;
        if (this.flag == 1) {
            var cmX = this.cm1.x;
            this.cm1.x = cmX;
        }
        else {
            var cmX = this.cm1.x;
            this.cm1.x = cmX + 5;
        }
        var bdX = this.bd1.x;
        this.bd1.x = bdX + 5;
        var ttqX = this.ttq1.x;
        this.ttq1.x = ttqX + 5;
        var begX = this.beg1.x;
        this.beg1.x = begX + 5;
        if (this.cm1.x > 687) {
            this.cm1.x = -887;
        }
        if (this.bd1.x > 687) {
            this.bd1.x = -887;
        }
        if (this.ttq1.x > 687) {
            this.ttq1.x = -887;
        }
        if (this.beg1.x > 687) {
            this.beg1.x = -887;
        }
    };
    NewClass.prototype.onbutton = function () {
        this.cm1.x = 29;
        this.cm1.y = -113;
        this.flag = 1;
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "cm", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "bd", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "ttq", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "beg", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "cm1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bd1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ttq1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "beg1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "bg", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();