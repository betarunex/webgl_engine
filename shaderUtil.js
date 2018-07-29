class ShaderUtil {
    static createShader(gl, type, source) {
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
    
    // create shader program from shaders
    static createShaderProgram(gl, vertexShaderSource, fragmentShaderSource) {
        var vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        var fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

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
}
