module objects
{
    export class Dice extends GameObject
    {
        private _test:objects.Label;
        public Reset(): void {
            this.parent.removeChild(this._test);
        }
        // constructor
        constructor(image:Object = config.Game.ASSETS.getResult("six")
            , x:number = 0, y:number= 0, isCentered:boolean = false)
        {
            super(image, x, y, isCentered);
            this.scaleX = 0.75;
            this.scaleY = 0.75;
            this._test = new objects.Label("default", "30px", "Consolas", "#000000", this.x + 75,this.y+180,false);

            this.Start();
        }
        
        protected _checkBounds(): void {
            
        }

        public Start(): void {
            
        }

        public Update(): void {
            
        }

        public DisplayResult(num:number):void
        {
            this.image = config.Game.DICEIMAGE[num - 1].image;
            this._test.setText(""+num);
            this.parent.addChild(this._test);
        }
    }
}