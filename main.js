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
var shaderProgram = ShaderUtil.createShaderProgram(gl, vertexShaderSource, fragmentShaderSource);

// once off get locations from shader program (ie out of loop)
var a_positionLoc = gl.getAttribLocation(shaderProgram, "a_position");

// create vaos
// create and link VAO
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);
gl.enableVertexAttribArray(a_positionLoc); // enable all attribs in use

    // create vbos and store in vao
var vbo = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(trianglePoints), gl.STATIC_DRAW);
gl.vertexAttribPointer(a_positionLoc, 2, gl.FLOAT, false, 0, 0); // binds bound buffer to attrib

// unbind vbos and vaos
gl.bindBuffer(gl.ARRAY_BUFFER, null);
gl.bindVertexArray(null);

// draw vao (the triangle model)
gl.useProgram(shaderProgram);
gl.bindVertexArray(vao);
gl.drawArrays(gl.TRIANGLES,0,3); // (primative type, offset, count)