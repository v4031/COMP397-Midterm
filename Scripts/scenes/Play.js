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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this._dices = [];
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this._dices[0] = new objects.Dice(config.Game.ASSETS.getResult("six"), 10, 65, false);
            this._dices[1] = new objects.Dice(config.Game.ASSETS.getResult("six"), 220, 65, false);
            this._dices[2] = new objects.Dice(config.Game.ASSETS.getResult("six"), 430, 65, false);
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            this.addChild(this._rollButton);
            this.addChild(this._nextButton);
            this.addChild(this._dices[0]);
            this.addChild(this._dices[1]);
            this.addChild(this._dices[2]);
            this._rollButton.on("click", this.Roll.bind(this));
        };
        Play.prototype.Roll = function () {
            var outCome = [0, 0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6) + 1);
                this._dices[spin].DisplayResult(outCome[spin]);
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map