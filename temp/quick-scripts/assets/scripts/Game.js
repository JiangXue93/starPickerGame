(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a53c4L8r3xMkKObLPAMBwfE', 'Game', __filename);
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
        //# sourceMappingURL=Game.js.map
        