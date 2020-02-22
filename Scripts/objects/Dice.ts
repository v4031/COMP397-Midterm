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

            this._test = new objects.Label("default", "40px", "Consolas", "#000000", this.x+100,this.y+220,false);

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