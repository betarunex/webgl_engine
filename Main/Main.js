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


var shaderProgram = ShaderUtil.createShaderProgram(gl, vertexShaderSource, fragmentShaderSource);

var mymodel1 = new DefaultModelType();
mymodel1.attribs.a_position.data = [
    -0.6,0,
    0,-0.8,
    0.5,1
];

var mymodel2 = new DefaultModelType();
mymodel2.attribs.a_position.data = [
    -0.9,1,
    -0.7,-0.3,
    0.5,1
];

// prepare
ModelUtil.prepare(gl, shaderProgram, mymodel1);
ModelUtil.prepare(gl, shaderProgram, mymodel2);

// draw vao (the triangle model)
gl.useProgram(shaderProgram);
gl.bindVertexArray(mymodel1.vao);
gl.drawArrays(gl.TRIANGLES,0,3); // (primative type, offset, count)

gl.bindVertexArray(mymodel2.vao);
gl.drawArrays(gl.TRIANGLES,0,3); // (primative type, offset, count)





