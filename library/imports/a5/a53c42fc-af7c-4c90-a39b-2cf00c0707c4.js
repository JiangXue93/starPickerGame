"use strict";
cc._RF.push(module, 'a53c4L8r3xMkKObLPAMBwfE', 'Game');
// scripts/Game.js

'use strict';

cc.Class({
  extends: cc.Component,

  properties: {
    ShowStartPanel: true,
    StartPanel: {
      default: null,
      type: cc.Node
    },
    StartGame: false
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {
    if (!this.ShowStartPanel) {
      this.StartPanel.active = false;
      window.StartGame = true;
    } else {
      window.StartGame = false;
    }
  },
  start: function start() {},
  onClickStart: function onClickStart() {
    // this.StartPanel.active = false
    var anim = this.StartPanel.getComponent(cc.Animation);
    anim.play('ChangeOpacityHide');
    window.StartGame = true;
    // console.log(StartMask)
  }
  // update (dt) {},

});

cc._RF.pop();