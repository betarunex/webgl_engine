
var vertexShaderSource = `# version 300 es

in vec4 a_vertices;

uniform vec3 u_position;

void main(){
    vec4 pos = a_vertices + vec4(u_position, 0);
    gl_Position = pos;
}`;

var fragmentShaderSource = `# version 300 es

precision mediump float;

out vec4 outColour;

void main(){
    outColour = vec4(0.2,0.2,0.4,1);
}`;
