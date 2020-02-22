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

            this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);
            this._dices[0] = new objects.Dice(config.Game.ASSETS.getResult("six"),10, 65, false);
            this._dices[1] = new objects.Dice(config.Game.ASSETS.getResult("six"),220, 65, false);
            this._dices[2] = new objects.Dice(config.Game.ASSETS.getResult("six"),430, 65, false);
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
            this.addChild(this._dices[2]);
            this._rollButton.on("click", this.Roll.bind(this));

        }

        public Roll() {
            let outCome = [0, 0, 0];
            for (let spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 6) + 1);
                this._dices[spin].DisplayResult(outCome[spin]);
            }
        }
    }
}