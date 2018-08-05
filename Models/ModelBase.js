class ModelBase {
    constructor(){
    }

    constructor(vao,vbos){
        this.vao = vao;
        this.vbos = vbos;
    };

    addVBO = function(vboName, vbo){
        this.vbos[vboName] = vbo;
    }

    setVBOs = function(vbos){
        this.vbos = vbos;
    }

    getVBOs = function(){
        return vbos;
    }

    setVAO = function(vao){
        this.vao = vao;
    }

    getVAO = function(){
        return this.vao;
    }
}