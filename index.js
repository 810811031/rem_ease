'use strict';

var Rem = /** @class */ (function () {
    function Rem(design, ratio) {
        this.font_size = 16;
        this._init(design, ratio);
        this._resize(design, ratio);
    }
    Rem.prototype._init = function (design, ratio) {
        var device_width = document.documentElement.clientWidth || window.screen.width;
        this.font_size = device_width / design * ratio;
        document.getElementsByTagName('html')[0].style.fontSize = this.font_size + "px";
        window ? window.font_size = this.font_size : false;
        this._showLog();
    };
    Rem.prototype._resize = function (design, ratio) {
        var _this = this;
        window ? window.onresize = function () { return _this._init(design, ratio); } : false;
    };
    Rem.prototype._showLog = function () {
        console.log("%c setting font-size <" + this.font_size + "px> complete. ", 'background: #458C67; color: #fff');
    };
    return Rem;
}());

export default Rem;
