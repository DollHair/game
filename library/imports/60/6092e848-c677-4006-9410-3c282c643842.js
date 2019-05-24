"use strict";
cc._RF.push(module, '6092ehIxndABpQQPCgsZDhC', 'gamingcontroller');
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
var dic = { 1: '草莓', 2: '寿司', 3: '布丁', 4: '甜甜圈', 5: '披萨', 6: '棒冰', 7: '饼干' };
var dic2 = { 草莓: 1, 寿司: 2, 布丁: 3, 甜甜圈: 4, 披萨: 5, 棒冰: 6, 饼干: 7 };
var GamingController = /** @class */ (function (_super) {
    __extends(GamingController, _super);
    function GamingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.tipsv = null;
        _this.homev = null;
        _this.falsev = null;
        _this.node1 = null;
        _this.node2 = null;
        _this.node3 = null;
        _this.node4 = null;
        _this.nodea1 = null;
        _this.nodea2 = null;
        _this.nodea3 = null;
        _this.nodea4 = null;
        _this.nodec1 = null;
        _this.nodec2 = null;
        _this.nodec3 = null;
        _this.nodec1a = null;
        _this.nodec2a = null;
        _this.nodec3a = null;
        _this.nodes1 = null;
        _this.nodes2 = null;
        _this.nodes3 = null;
        _this.nodes4 = null;
        _this.nodeas1 = null;
        _this.nodeas2 = null;
        _this.nodeas3 = null;
        _this.nodeas4 = null;
        _this.tips = null;
        _this.home = null;
        _this.conf = null;
        _this.nodeb1 = null;
        _this.nodeb2 = null;
        _this.nodeb3 = null;
        _this.nodeb4 = null;
        _this.title1 = null;
        _this.data = null;
        _this.score = 0;
        _this.stop = 0;
        _this.flag = 0;
        _this.count = 0;
        _this.flag2 = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GamingController.prototype.start = function () {
        this.score = 0;
        this.stop = 0;
        this.flag = 1;
        this.count = 0;
        this.flag2 = 0;
        this.tipsv.active = false;
        this.homev.active = false;
        this.falsev.active = false;
        this.nodea1.active = false;
        this.nodea2.active = false;
        this.nodea3.active = false;
        this.nodea4.active = false;
        this.nodec1a.active = false;
        this.nodec2a.active = false;
        this.nodec3a.active = false;
        this.randsprite(this.nodes1);
        this.randsprite(this.nodes2);
        this.randsprite(this.nodes3);
        this.randsprite(this.nodes4);
        this.initstringtitle();
    };
    GamingController.prototype.update = function (dt) {
        this.data.string = String(this.score);
        this.move(this.node1, this.nodes1);
        this.move(this.node2, this.nodes2);
        this.move(this.node3, this.nodes3);
        this.move(this.node4, this.nodes4);
        if (this.flag2 == 0) {
            this.nodec1.active = true;
            this.nodec2.active = true;
            this.nodec3.active = true;
            this.nodec1a.active = false;
            this.nodec2a.active = false;
            this.nodec3a.active = false;
        }
        if (this.flag2 == 1) {
            this.nodec1.active = false;
            this.nodec2.active = true;
            this.nodec3.active = true;
            this.nodec1a.active = true;
            this.nodec2a.active = false;
            this.nodec3a.active = false;
        }
        if (this.flag2 == 2) {
            this.nodec1.active = false;
            this.nodec2.active = false;
            this.nodec3.active = true;
            this.nodec1a.active = true;
            this.nodec2a.active = true;
            this.nodec3a.active = false;
        }
        if (this.flag2 == 3) {
            this.nodec1.active = false;
            this.nodec2.active = false;
            this.nodec3.active = false;
            this.nodec1a.active = true;
            this.nodec2a.active = true;
            this.nodec3a.active = true;
        }
    };
    GamingController.prototype.randsprite = function (sp) {
        var t1 = this.randomtitle();
        cc.loader.loadRes("assets/food", cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(dic[t1]);
            sp.spriteFrame = frame;
        });
    };
    GamingController.prototype.randomtitle = function () {
        var t = Math.ceil(Math.random() * 7);
        /*let t1 = new String();
        switch(t){
            case 1: t1 = '草莓';break;
            case 2: t1 = '寿司';break;
            case 3: t1 = '布丁';break;
            case 4: t1 = '甜甜圈';break;
            case 5: t1 = '披萨';break;
            case 6: t1 = '棒冰';break;
            case 7: t1 = '饼干';break;
        }*/
        return t;
    };
    GamingController.prototype.move = function (wuti, wutis) {
        var wutiX = wuti.x;
        if (this.stop == 0) {
            if (this.score < 20)
                wuti.x = wutiX + 5;
            if (this.score >= 20 && this.score < 40)
                wuti.x = wutiX + 7;
            if (this.score >= 40 && this.score < 60)
                wuti.x = wutiX + 9;
            if (this.score >= 60 && this.score < 80)
                wuti.x = wutiX + 11;
            if (this.score >= 80 && this.score < 100)
                wuti.x = wutiX + 13;
            if (this.score > 100)
                wuti.x = wutiX + 15;
        }
        else
            wuti.x = wutiX;
        if (wuti.x > 687) {
            this.randsprite(wutis);
            wuti.active = true;
            wuti.x = -887;
        }
    };
    GamingController.prototype.initstringtitle = function () {
        var t1 = this.randomtitle();
        var t2 = this.randomtitle();
        var t3 = this.randomtitle();
        while (t1 == t2)
            t2 = this.randomtitle();
        while (t1 == t3 || t2 == t3)
            t3 = this.randomtitle();
        var tall = "老板来" + dic[t1] + "," + dic[t2] + "," + dic[t3] + "!";
        this.flag = t1 + t2 + t3;
        this.title1.string = tall;
    };
    GamingController.prototype.setbuttontrue = function () {
        this.home.interactable = true;
        this.tips.interactable = true;
        this.conf.interactable = true;
        this.nodeb1.interactable = true;
        this.nodeb2.interactable = true;
        this.nodeb3.interactable = true;
        this.nodeb4.interactable = true;
    };
    GamingController.prototype.setbuttonfalse = function () {
        this.home.interactable = false;
        this.tips.interactable = false;
        this.conf.interactable = false;
        this.nodeb1.interactable = false;
        this.nodeb2.interactable = false;
        this.nodeb3.interactable = false;
        this.nodeb4.interactable = false;
    };
    GamingController.prototype.onbuttontips = function () {
        this.tipsv.active = true;
        this.setbuttonfalse();
        this.stop = 1;
    };
    GamingController.prototype.onbuttontipsback = function () {
        this.tipsv.active = false;
        this.setbuttontrue();
        this.stop = 0;
    };
    GamingController.prototype.onbuttonhome = function () {
        this.homev.active = true;
        this.setbuttonfalse();
        this.stop = 1;
    };
    GamingController.prototype.onbuttonhomeyes = function () {
        this.homev.active = false;
        this.setbuttontrue();
        this.stop = 0;
    };
    GamingController.prototype.onbuttonhomeno = function () {
        this.gameover();
    };
    GamingController.prototype.onbutton1 = function () {
        this.touchactionS(this.node1, this.nodes1, this.nodea1, this.nodeas1);
        var t = this.nodes1.spriteFrame.name;
        var s = dic2[t];
        this.count += s;
        this.flag2 += 1;
    };
    GamingController.prototype.onbutton2 = function () {
        this.touchactionS(this.node2, this.nodes2, this.nodea2, this.nodeas2);
        var t = this.nodes2.spriteFrame.name;
        var s = dic2[t];
        this.count += s;
        this.flag2 += 1;
    };
    GamingController.prototype.onbutton3 = function () {
        this.touchactionS(this.node3, this.nodes3, this.nodea3, this.nodeas3);
        var t = this.nodes3.spriteFrame.name;
        var s = dic2[t];
        this.count += s;
        this.flag2 += 1;
    };
    GamingController.prototype.onbutton4 = function () {
        this.touchactionS(this.node4, this.nodes4, this.nodea4, this.nodeas4);
        var t = this.nodes4.spriteFrame.name;
        var s = dic2[t];
        this.count += s;
        this.flag2 += 1;
    };
    GamingController.prototype.touchaction = function (nodea) {
        var action = cc.moveTo(1, -9, -77);
        nodea.runAction(action);
    };
    GamingController.prototype.touchactionS = function (node, nodes, nodea, nodeas) {
        node.active = false;
        nodea.position = node.position;
        nodeas.spriteFrame = nodes.spriteFrame;
        nodea.active = true;
        this.touchaction(nodea);
        this.scheduleOnce(function () { nodea.active = false; }, 1.2);
    };
    GamingController.prototype.onbuttonconfirm = function () {
        if (this.count == this.flag) {
            this.score += 5;
            this.flag = 0;
            this.count = 0;
            this.flag2 = 0;
            this.initstringtitle();
        }
        else {
            this.score -= 5;
            this.flag = 0;
            this.count = 0;
            this.flag2 = 0;
            this.initstringtitle();
        }
        if (this.score < 0) {
            this.score = 0;
            this.falsev.active = true;
            this.setbuttonfalse();
            this.stop = 1;
        }
    };
    GamingController.prototype.onbuttonfalseyes = function () {
        this.gameover();
    };
    GamingController.prototype.gameover = function () {
        cc.director.loadScene("gameover");
    };
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "tipsv", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "homev", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "falsev", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "node1", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "node2", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "node3", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "node4", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodea1", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodea2", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodea3", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodea4", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec1", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec2", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec3", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec1a", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec2a", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec3a", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodes1", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodes2", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodes3", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodes4", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodeas1", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodeas2", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodeas3", void 0);
    __decorate([
        property(cc.Sprite)
    ], GamingController.prototype, "nodeas4", void 0);
    __decorate([
        property(cc.Button)
    ], GamingController.prototype, "tips", void 0);
    __decorate([
        property(cc.Button)
    ], GamingController.prototype, "home", void 0);
    __decorate([
        property(cc.Button)
    ], GamingController.prototype, "conf", void 0);
    __decorate([
        property(cc.Button)
    ], GamingController.prototype, "nodeb1", void 0);
    __decorate([
        property(cc.Button)
    ], GamingController.prototype, "nodeb2", void 0);
    __decorate([
        property(cc.Button)
    ], GamingController.prototype, "nodeb3", void 0);
    __decorate([
        property(cc.Button)
    ], GamingController.prototype, "nodeb4", void 0);
    __decorate([
        property(cc.Label)
    ], GamingController.prototype, "title1", void 0);
    __decorate([
        property(cc.Label)
    ], GamingController.prototype, "data", void 0);
    GamingController = __decorate([
        ccclass
    ], GamingController);
    return GamingController;
}(cc.Component));
exports.default = GamingController;

cc._RF.pop();