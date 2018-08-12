// Start using WebGL 2.0
var canvas = document.getElementById("canvas");
var modelTypesContainer = new ModelTypesContainer();
var renderer = new RenderEngine(canvas, vertexShaderSource, fragmentShaderSource); // add model types
renderer.loadModelTypes(modelTypesContainer.modelsTypes);
var game = new Game();
renderer.setBackgroundColour(0.5,0.6,0.9,1);

function loop() {
    renderer.drawModels(game.modelsToRender);
    game.runGameLogic();
    if(game.running){
        setTimeout(() => {
            loop();
        }, 500);
    } else {
        // delete shader and buffers etc.
    }
}

// start
loop();

// stop in console for now
// game.stop();



