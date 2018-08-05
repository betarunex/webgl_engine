
var trianglePoints = [
    -0.6,0,
    0,-0.8,
    0.5,1
];

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

// once off get locations
var a_positionLoc = gl.getAttribLocation(shaderProgram, "a_position");

// create and link VAO
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);
gl.enableVertexAttribArray(a_positionLoc); // enable all attribs in use

// create buffer to load data to attrib
var vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(trianglePoints), gl.STATIC_DRAW);
gl.vertexAttribPointer(a_positionLoc, 2, gl.FLOAT, false, 0, 0); // binds bound buffer to attrib

// unbind vbos and vaos
gl.bindBuffer(gl.ARRAY_BUFFER, null);
gl.bindVertexArray(null);
// Use shader and bind the vao we want to use to draw
gl.useProgram(shaderProgram);
gl.bindVertexArray(vao);

gl.drawArrays(gl.TRIANGLES,0,3); // (primative type, offset, count)