module scenes
{
    export class Bonus extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton : objects.Button;
        private _backButton : objects.Button;
        private _dices: objects.Dice[] = [];
        private _result : objects.Label;
        private _title : objects.Label;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {

            this._title = new objects.Label("Roll 4d6", "30px", "Consolas", "White", 320, 20, true);
            this._result = new objects.Label("Result:", "30px", "Consolas", "White", 320, 180, true);
            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 360, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 430, true);
            this._dices[0] = new objects.Dice(config.Game.ASSETS.getResult("six"),60, 15, false);
            this._dices[1] = new objects.Dice(config.Game.ASSETS.getResult("six"),430, 15, false);
            this._dices[2] = new objects.Dice(config.Game.ASSETS.getResult("six"),60, 265, false);
            this._dices[3] = new objects.Dice(config.Game.ASSETS.getResult("six"),430, 265, false);
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this._title);
            this.addChild(this._rollButton);
            this.addChild(this._backButton);
            this.addChild(this._dices[0]);
            this.addChild(this._dices[1]);
            this.addChild(this._dices[2]);
            this.addChild(this._dices[3]);
            this.addChild(this._result);
            this._rollButton.on("click", this.Roll.bind(this));

            this._backButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

        }

        public Roll() {
            let rollSound = createjs.Sound.play("roll");
            rollSound.volume = 1;
            let outCome = [0, 0, 0, 0];
            for (let dice = 0; dice < 4; dice++) {
                outCome[dice] = Math.floor((Math.random() * 6) + 1);
                this._dices[dice].DisplayResult(outCome[dice]);
            }
            outCome = outCome.sort().slice(1, 4);
            let total = outCome[0] + outCome[1] + outCome[2];
            this._result.setText("Result: " + total); 
        }
    }
}