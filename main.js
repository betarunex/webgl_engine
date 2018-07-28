// Start using WebGL 2.0
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl2");
if(!gl){
    // TODO stop execution
    console.log("Failed to load glContext");
}

// Change the background colour of our canvas
gl.clearColor(0.5,0.6,0.9,1); // rgb alpha 0.0-1.0 (Kind of default colour selected to this)
gl.clear(gl.COLOR_BUFFER_BIT) // Clear the canvas (with selected cleared colour)

var trianglePoints = [
    -0.6,0,
    0,-0.8,
    0.5,1
];

// create shaders
// create shader program from shaders
// create vaos
// create vbos ans store in vao
// draw vao (the triangle model)
