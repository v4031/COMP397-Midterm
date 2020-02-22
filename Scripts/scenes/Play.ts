module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _rollButton : objects.Button;
        private _nextButton : objects.Button;
        private _dices: objects.Dice[] = [];
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

            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 360, true);
            this._nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 430, true);
            this._dices[0] = new objects.Dice(config.Game.ASSETS.getResult("six"),60, 100, false);
            this._dices[1] = new objects.Dice(config.Game.ASSETS.getResult("six"),430, 100, false);
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {
            this.addChild(this._rollButton);
            this.addChild(this._nextButton);
            this.addChild(this._dices[0]);
            this.addChild(this._dices[1]);
            this._rollButton.on("click", this.Roll.bind(this));
            this._nextButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.BONUS;
            });
        }

        public Roll() {
            let outCome = [0, 0];
            for (let dice = 0; dice < 2; dice++) {
                outCome[dice] = Math.floor((Math.random() * 6) + 1);
                this._dices[dice].DisplayResult(outCome[dice]);
            }
            let rollSound = createjs.Sound.play("roll");
            rollSound.volume = 1;
        }
    }
}