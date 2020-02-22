"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Dice = /** @class */ (function (_super) {
        __extends(Dice, _super);
        // constructor
        function Dice(image, x, y, isCentered) {
            if (image === void 0) { image = config.Game.ASSETS.getResult("six"); }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, image, x, y, isCentered) || this;
            _this.scaleX = 0.75;
            _this.scaleY = 0.75;
            _this._test = new objects.Label("default", "30px", "Consolas", "#000000", _this.x + 75, _this.y + 180, false);
            _this.Start();
            return _this;
        }
        Dice.prototype.Reset = function () {
            this.parent.removeChild(this._test);
        };
        Dice.prototype._checkBounds = function () {
        };
        Dice.prototype.Start = function () {
        };
        Dice.prototype.Update = function () {
        };
        Dice.prototype.DisplayResult = function (num) {
            this.image = config.Game.DICEIMAGE[num - 1].image;
            this._test.setText("" + num);
            this.parent.addChild(this._test);
        };
        return Dice;
    }(objects.GameObject));
    objects.Dice = Dice;
})(objects || (objects = {}));
//# sourceMappingURL=Dice.js.map