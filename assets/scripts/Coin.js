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
        coin_prefab: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    },
    start () {
        let create = cc.tween(this)
                    .call(this.createCoin.bind(this))
        cc.tween(this)
          .repeat(80, create)
          .start()
    },

    createCoin() {
        let xShootUp = this.getRandomArbitrary(-480, 480);
        let yShootUp = this.getRandomArbitrary(-320, 320);
        let coin = cc.instantiate(this.coin_prefab);
        this.node.addChild(coin);
        let scaleCoin = cc.scaleTo(1, 1, 1).easing(cc.easeIn(2.0));
        let actionShoot = cc.moveTo(3, cc.v2(xShootUp, yShootUp)).easing(cc.easeIn(2.0));
        let shootCoin = cc.spawn(scaleCoin, actionShoot);
        let dropCoin = cc.moveBy(10, cc.v2(0, -800)).easing(cc.easeIn(2.0));
        let destruction = cc.callFunc( () => {
             coin.destroy();
         })
        let action = cc.sequence(shootCoin, dropCoin, destruction)
        coin.runAction(action);
    },
    // update (dt) {},
});
