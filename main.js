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

function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success){
        return shader;
    }
    console.log("Error creating shader: ", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

// create shader program from shaders
function createShaderProgram(gl, vertexShader, fragmentShader) {
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram,vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    var success = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS);
    if (success){
        return shaderProgram;
    }
    console.log("Error creating shaderProgram: ", gl.getProgramInfoLog(shaderProgram));
    gl.deleteProgram(shaderProgram);
}

var shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);

// once off get locations from shader program (ie out of loop)
var a_positionLoc = gl.getAttribLocation(shaderProgram, "a_position");

// create vaos
// create vbos and store in vao
// draw vao (the triangle model)
