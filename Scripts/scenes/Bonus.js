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
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Bonus() {
            var _this = _super.call(this) || this;
            _this._dices = [];
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Bonus.prototype.Start = function () {
            this._title = new objects.Label("Roll 4d6", "30px", "Consolas", "Black", 320, 20, true);
            this._result = new objects.Label("Result:", "30px", "Consolas", "Black", 320, 180, true);
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 360, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            this._dices[0] = new objects.Dice(config.Game.ASSETS.getResult("six"), 10, 15, false);
            this._dices[1] = new objects.Dice(config.Game.ASSETS.getResult("six"), 430, 15, false);
            this._dices[2] = new objects.Dice(config.Game.ASSETS.getResult("six"), 10, 265, false);
            this._dices[3] = new objects.Dice(config.Game.ASSETS.getResult("six"), 430, 265, false);
            this.Main();
        };
        Bonus.prototype.Update = function () {
        };
        Bonus.prototype.Main = function () {
            this.addChild(this._title);
            this.addChild(this._rollButton);
            this.addChild(this._backButton);
            this.addChild(this._dices[0]);
            this.addChild(this._dices[1]);
            this.addChild(this._dices[2]);
            this.addChild(this._dices[3]);
            this.addChild(this._result);
            this._rollButton.on("click", this.Roll.bind(this));
            this._backButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        Bonus.prototype.Roll = function () {
            var rollSound = createjs.Sound.play("roll");
            rollSound.volume = 1;
            var outCome = [0, 0, 0, 0];
            for (var spin = 0; spin < 4; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6) + 1);
                this._dices[spin].DisplayResult(outCome[spin]);
            }
            outCome = outCome.sort().slice(1, 4);
            var total = outCome[0] + outCome[1] + outCome[2];
            this._result.setText("Result: " + total);
        };
        return Bonus;
    }(objects.Scene));
    scenes.Bonus = Bonus;
})(scenes || (scenes = {}));
//# sourceMappingURL=Bonus.js.map