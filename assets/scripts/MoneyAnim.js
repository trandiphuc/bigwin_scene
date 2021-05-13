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
        coin_text: cc.Label,
        _value: 0,
        _nextValue: 1000000,
    },

    // LIFE-CYCLE CALLBACKS:
    
    onLoad () {
        this.coin_text.string = this._value;
    },
    start () {
        this.updateCoin();
    },
    updateCoin() {
        cc.tween(this)
          .to(10, {_value: this._nextValue})
          .start();
    },
    formatCoin(coin) {
        return new Intl.NumberFormat('en-US').format(coin);
    },
    
    update(dt) {
        //this.coin_text.string = this._value.toFixed(0);
        let formatcoin = this._value.toFixed(0);
        this.coin_text.string = this.formatCoin(formatcoin);
    },
});