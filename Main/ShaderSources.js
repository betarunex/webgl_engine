
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
