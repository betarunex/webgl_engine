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
var vertexShaderSource = `# version 300 es

in vec4 a_position;

void main(){
    gl_Position = a_position;
}`;

var fragmentShaderSource = `# version 300 es

precision mediump float;

out vec4 outColour;

void main(){
    outColour = vec4(0.2,0.2,0.4,1);
}`;

// create shader program from shaders
// create vaos
// create vbos ans store in vao
// draw vao (the triangle model)
