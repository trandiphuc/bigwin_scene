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
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.scale = 0;
    },

    start () {
        let show = cc.tween(this.node).to(1, {scale: 0.5});
        cc.tween(this.node).then(show).start();
        let zoomIn = cc.tween(this.node).to(1, {scale: 1}, { easing: 'sineIn'});
        let zoomOut = cc.tween(this.node).to(1, {scale: 0.5}, { easing: 'sineOut'});
        let zoom = cc.tween(this.node).sequence(zoomIn, zoomOut);
        cc.tween(this.node).repeatForever(zoom).start();
    },

    // update (dt) {},
});
