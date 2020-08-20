(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3b2dcshRHRKu5YGRO+Na+Jh', 'Player', __filename);
// scripts/Player.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    speed: 1,
    isLeft: false,
    isRight: false
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    if (StartGame) {
      var seq = cc.repeatForever(cc.sequence(cc.moveBy(2, 200, 0), cc.moveBy(2, -200, 0)));
      this.node.runAction(seq);
    }
  },
  start: function start() {},
  onKeyDown: function onKeyDown() {
    if (!StartGame) {
      return;
    }
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        cc.log('Press a key');
        cc.log(StartGame);
        this.isLeft = true;
        this.isRight = false;
        // this.node.x -= this.step
        break;
      case cc.macro.KEY.d:
        // this.node.x += this.step
        this.isLeft = false;
        this.isRight = true;
        console.log('Press d key');
        break;
      case cc.macro.KEY.s:
        this.isLeft = false;
        this.isRight = false;
        break;
      case cc.macro.KEY.space:
        console.log('start to jump');
        break;
    }
  },
  update: function update(dt) {
    // console.log(dt)
    if (this.isLeft) {
      if (this.node.x < -480) {
        return;
      }
      this.node.x -= this.speed * dt;
    } else if (this.isRight) {
      if (this.node.x > 480) {
        return;
      }
      this.node.x += this.speed * dt;
    }
  }
});

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
        //# sourceMappingURL=Player.js.map
        