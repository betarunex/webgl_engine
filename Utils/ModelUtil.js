class ModelUtil {
    static setVAO(gl, model){
        var vao = this.createAndBindVAO();
        for(const key of Object.keys(model.attribs)){
            var attrib = model.attribs[key];
            this.bindVBO(gl, attrib.location, attrib.data, attrib.size);
            gl.enableVertexAttribArray(attrib.location);
        }
        this.unbind();
        model.vao = vao;
    }

    static createAndBindVAO(){
        var vao = gl.createVertexArray();
        gl.bindVertexArray(vao);
        return vao;
    }

    static bindVBO(gl, location, data, size){
        var vbo = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
        gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0); // binds bound buffer to attrib
        return vbo;
    }

    // unbind vbos and vaos
    static unbind(){
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindVertexArray(null);
    }

    static setAttribLocations(gl, shaderProgram, model){
        for(const key of Object.keys(model.attribs)){
            var attrib = model.attribs[key];
            attrib.location = gl.getAttribLocation(shaderProgram, attrib.name);
        }
    }

    static prepare(gl, shaderProgram, model){
        this.setAttribLocations(gl, shaderProgram, model);
        this.setVAO(gl, model);
    }
}