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
//var dic = {1:'草莓',2:'寿司',3:'布丁',4:'甜甜圈',5:'披萨',6:'棒冰',7:'饼干'};
//var dic2 = {草莓:1,寿司:2,布丁:3,甜甜圈:4,披萨:5,棒冰:6,饼干:7};
var dic = { 1: '腐竹', 2: '螺蛳', 3: '酸笋', 4: '木耳' };
var dic2 = { 腐竹: 1, 螺蛳: 2, 酸笋: 3, 木耳: 4 };
var GamingController = /** @class */ (function (_super) {
    __extends(GamingController, _super);
    function GamingController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipsv = null;
        _this.homev = null;
        _this.rolev = null;
        _this.falsev = null;
        _this.node1 = null;
        _this.node2 = null;
        _this.node3 = null;
        _this.node4 = null;
        _this.nodea1 = null;
        _this.nodea2 = null;
        _this.nodea3 = null;
        _this.nodea4 = null;
        _this.nodec1a = null;
        _this.nodec2a = null;
        _this.nodec3a = null;
        _this.nodef = null;
        _this.nodet = null;
        _this.nodef2 = null;
        _this.nodef3 = null;
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
        _this.role = null;
        _this.nodeb1 = null;
        _this.nodeb2 = null;
        _this.nodeb3 = null;
        _this.nodeb4 = null;
        _this.title1 = null;
        _this.data = null;
        _this.datal = null;
        _this.result = null;
        _this.butm = null;
        _this.score = 0;
        _this.stop = 0;
        _this.flag2 = 0;
        _this.life = 0;
        _this.time = 0;
        _this.t1 = 0;
        _this.t2 = 0;
        _this.t3 = 0;
        _this.flagt1 = 0;
        _this.flagt2 = 0;
        _this.flagt3 = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    GamingController.prototype.start = function () {
        this.score = 0;
        this.life = 5;
        this.stop = 0;
        this.t1 = 0;
        this.t2 = 0;
        this.t3 = 0;
        this.tipsv.active = false;
        this.homev.active = false;
        this.rolev.active = false;
        this.falsev.active = false;
        this.nodea1.active = false;
        this.nodea2.active = false;
        this.nodea3.active = false;
        this.nodea4.active = false;
        this.nodet.active = false;
        this.nodet.scale = 0;
        this.nodef.active = false;
        this.nodef.scale = 0;
        this.nodef2.active = false;
        this.nodef2.scale = 0;
        this.nodef3.active = false;
        this.nodef3.scale = 0;
        this.randsprite(this.nodes1);
        this.randsprite(this.nodes2);
        this.randsprite(this.nodes3);
        this.randsprite(this.nodes4);
        this.setconst();
        this.schedule(function () { if (this.stop == 0)
            this.time -= 1; }, 1);
    };
    GamingController.prototype.update = function (dt) {
        this.datal.string = String(this.life);
        this.data.string = String(this.score);
        this.timec.string = String(this.time);
        this.move(this.node1, this.nodes1);
        this.move(this.node2, this.nodes2);
        this.move(this.node3, this.nodes3);
        this.move(this.node4, this.nodes4);
        if (this.flagt1 == 1) {
            this.nodec1a.active = true;
        }
        if (this.flagt2 == 1) {
            this.nodec2a.active = true;
        }
        if (this.flagt3 == 1) {
            this.nodec3a.active = true;
        }
        if (this.flag2 == 3) {
            this.setconst();
        }
        if (this.time == 0) {
            if (this.life > 1) {
                this.touchactionc(this.nodef2);
                this.setconst();
                this.life -= 1;
            }
            else {
                this.setfalse();
            }
        }
        if (this.life < 1) {
            this.setfalse();
        }
    };
    GamingController.prototype.setconst = function () {
        this.flag2 = 0;
        this.time = 20;
        this.flagt1 = 0;
        this.flagt2 = 0;
        this.flagt3 = 0;
        this.initstringtitle();
        this.nodec1a.active = false;
        this.nodec2a.active = false;
        this.nodec3a.active = false;
    };
    GamingController.prototype.setfalse = function () {
        this.falsev.active = true;
        this.stop = 1;
        this.result.string = "本次得分为:" + this.score;
        this.setbuttonfalse();
    };
    GamingController.prototype.randsprite = function (sp) {
        var t1 = this.randomtitle();
        cc.loader.loadRes("assets/food2", cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(dic[t1]);
            sp.spriteFrame = frame;
        });
    };
    GamingController.prototype.randomtitle = function () {
        var t = Math.ceil(Math.random() * 4);
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
        this.t1 = this.randomtitle();
        this.t2 = this.randomtitle();
        this.t3 = this.randomtitle();
        while (this.t1 == this.t2)
            this.t2 = this.randomtitle();
        while (this.t1 == this.t3 || this.t2 == this.t3)
            this.t3 = this.randomtitle();
        var tall = "老板来一碗螺蛳粉！\n(还差:" + dic[this.t1] + "," + dic[this.t2] + "," + dic[this.t3] + ")";
        //this.flag = this.t1 + t2 + t3;
        this.title1.string = tall;
    };
    GamingController.prototype.setbuttontrue = function () {
        this.home.interactable = true;
        this.tips.interactable = true;
        this.role.interactable = true;
        this.nodeb1.interactable = true;
        this.nodeb2.interactable = true;
        this.nodeb3.interactable = true;
        this.nodeb4.interactable = true;
    };
    GamingController.prototype.setbuttonfalse = function () {
        this.home.interactable = false;
        this.tips.interactable = false;
        this.role.interactable = false;
        this.nodeb1.interactable = false;
        this.nodeb2.interactable = false;
        this.nodeb3.interactable = false;
        this.nodeb4.interactable = false;
    };
    GamingController.prototype.onbuttontips = function () {
        this.tipsv.active = true;
        this.setbuttonfalse();
        this.stop = 1;
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbuttontipsback = function () {
        this.tipsv.active = false;
        this.setbuttontrue();
        this.stop = 0;
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbuttonhome = function () {
        this.homev.active = true;
        this.setbuttonfalse();
        this.stop = 1;
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbuttonhomeyes = function () {
        this.homev.active = false;
        this.setbuttontrue();
        this.stop = 0;
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbuttonhomeno = function () {
        cc.audioEngine.playEffect(this.butm, false);
        this.gameover();
    };
    GamingController.prototype.onbuttonrole = function () {
        this.rolev.active = true;
        this.setbuttonfalse();
        this.stop = 1;
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbuttonroleback = function () {
        this.rolev.active = false;
        this.setbuttontrue();
        this.stop = 0;
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbuttonfalseyes = function () {
        cc.audioEngine.playEffect(this.butm, false);
        this.gameover();
    };
    GamingController.prototype.onbutton1 = function () {
        var t = this.nodes1.spriteFrame.name;
        var s = dic2[t];
        this.spriteswitch(this.node1, this.nodes1, this.nodea1, this.nodeas1, s);
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbutton2 = function () {
        var t = this.nodes2.spriteFrame.name;
        var s = dic2[t];
        this.spriteswitch(this.node2, this.nodes2, this.nodea2, this.nodeas2, s);
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbutton3 = function () {
        var t = this.nodes3.spriteFrame.name;
        var s = dic2[t];
        this.spriteswitch(this.node3, this.nodes3, this.nodea3, this.nodeas3, s);
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.onbutton4 = function () {
        var t = this.nodes4.spriteFrame.name;
        var s = dic2[t];
        this.spriteswitch(this.node4, this.nodes4, this.nodea4, this.nodeas4, s);
        cc.audioEngine.playEffect(this.butm, false);
    };
    GamingController.prototype.touchaction = function (nodea) {
        var action = cc.spawn(cc.moveTo(1, -5, -83), cc.scaleTo(1, 0.1, 0.1));
        nodea.runAction(action);
    };
    GamingController.prototype.touchactionS = function (node, nodes, nodea, nodeas) {
        node.active = false;
        nodea.position = node.position;
        nodeas.spriteFrame = nodes.spriteFrame;
        nodea.active = true;
        this.touchaction(nodea);
        this.scheduleOnce(function () {
            nodea.active = false;
            nodea.scale = 1;
        }, 1.2);
    };
    GamingController.prototype.touchactionc = function (node) {
        node.active = true;
        var action = cc.scaleTo(1, 1, 1);
        node.runAction(action);
        this.scheduleOnce(function () {
            node.active = false;
            node.scale = 0;
        }, 0.8);
    };
    GamingController.prototype.spriteswitch = function (node, nodes, nodea, nodeas, s) {
        if (this.t1 == s || this.t2 == s || this.t3 == s) {
            if (this.t1 == s)
                this.flagt1++;
            else if (this.t2 == s)
                this.flagt2++;
            else if (this.t3 == s)
                this.flagt3++;
            if (((this.flagt1 == 0) || (this.flagt1 == 1)) && ((this.flagt2 == 0) || (this.flagt2 == 1)) && ((this.flagt3 == 0) || (this.flagt3 == 1))) {
                this.touchactionS(node, nodes, nodea, nodeas);
                this.touchactionc(this.nodet);
                this.score += 2;
                this.flag2 += 1;
            }
            else {
                if (this.life > 1)
                    this.touchactionc(this.nodef3);
                this.life -= 1;
                if (this.flagt1 > 1)
                    this.flagt1 = 1;
                if (this.flagt2 > 1)
                    this.flagt2 = 1;
                if (this.flagt3 > 1)
                    this.flagt3 = 1;
            }
        }
        else {
            this.touchactionc(this.nodef);
            this.life -= 1;
        }
    };
    GamingController.prototype.gameover = function () {
        cc.director.loadScene("gameover");
    };
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "tipsv", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "homev", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "rolev", void 0);
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
    ], GamingController.prototype, "nodec1a", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec2a", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodec3a", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodef", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodet", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodef2", void 0);
    __decorate([
        property(cc.Node)
    ], GamingController.prototype, "nodef3", void 0);
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
    ], GamingController.prototype, "role", void 0);
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
    __decorate([
        property(cc.Label)
    ], GamingController.prototype, "datal", void 0);
    __decorate([
        property(cc.Label)
    ], GamingController.prototype, "result", void 0);
    __decorate([
        property(cc.Label)
    ], GamingController.prototype, "timec", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GamingController.prototype, "butm", void 0);
    GamingController = __decorate([
        ccclass
    ], GamingController);
    return GamingController;
}(cc.Component));
exports.default = GamingController;

cc._RF.pop();