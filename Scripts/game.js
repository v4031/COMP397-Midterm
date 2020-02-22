"use strict";
//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
var Game = (function () {
    // variable declarations
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        { id: "button", src: "./Assets/images/button.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "rollButton", src: "./Assets/images/rollButton.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "plane", src: "./Assets/images/plane.png" },
        { id: "one", src: "./Assets/images/1.png" },
        { id: "two", src: "./Assets/images/2.png" },
        { id: "three", src: "./Assets/images/3.png" },
        { id: "four", src: "./Assets/images/4.png" },
        { id: "five", src: "./Assets/images/5.png" },
        { id: "six", src: "./Assets/images/6.png" },
        { id: "roll", src: "./Assets/audio/roll.wav" }
    ];
    function Preload() {
        assets = new createjs.LoadQueue(); // asset container
        config.Game.ASSETS = assets; // make a reference to the assets in the global config
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        config.Game.DICEIMAGE[0] = new createjs.Bitmap(config.Game.ASSETS.getResult("one"));
        config.Game.DICEIMAGE[1] = new createjs.Bitmap(config.Game.ASSETS.getResult("two"));
        config.Game.DICEIMAGE[2] = new createjs.Bitmap(config.Game.ASSETS.getResult("three"));
        config.Game.DICEIMAGE[3] = new createjs.Bitmap(config.Game.ASSETS.getResult("four"));
        config.Game.DICEIMAGE[4] = new createjs.Bitmap(config.Game.ASSETS.getResult("five"));
        config.Game.DICEIMAGE[5] = new createjs.Bitmap(config.Game.ASSETS.getResult("six"));
        console.log("%c Game Started!", "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        if (currentSceneState != config.Game.SCENE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main() {
        console.log("%c Scene Switched...", "color: green; font-size: 16px;");
        // clean up
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }
        // switch to the new scene
        switch (config.Game.SCENE) {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start();
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
                currentScene = new scenes.Play();
                break;
            case scenes.State.BONUS:
                console.log("switch to Bonus Scene");
                currentScene = new scenes.Bonus();
                break;
            case scenes.State.END:
                console.log("switch to End Scene");
                currentScene = new scenes.End();
                break;
        }
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=game.js.map