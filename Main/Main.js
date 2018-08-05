// Start using WebGL 2.0
var canvas = document.getElementById("canvas");
var renderer = new RenderEngine(canvas, vertexShaderSource, fragmentShaderSource);

var mymodel1 = new DefaultModelTypeTest1();
var mymodel2 = new DefaultModelTypeTest2();

var modelsTypes = [];
modelsTypes[mymodel1.type] = mymodel1;
modelsTypes[mymodel2.type] = mymodel2;

// prepare
renderer.loadModelTypes(modelsTypes);

gl = renderer.gl;

var model11 = new DefaultModel1();
var model12 = new DefaultModel1();
var model21 = new DefaultModel2();

models = [model11, model12, model21];
// loop here
renderer.refresh(0.5,0.6,0.9,1);
renderer.drawModels(models);

// // draw vao (the triangle model)
// gl.useProgram(shaderProgram);
// gl.bindVertexArray(mymodel1.vao);
// gl.drawArrays(gl.TRIANGLES,0,3); // (primative type, offset, count)

// gl.bindVertexArray(mymodel2.vao);
// gl.drawArrays(gl.TRIANGLES,0,3); // (primative type, offset, count)





