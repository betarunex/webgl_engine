class RenderEngine {
    constructor(canvas, vertexShaderSource, fragmentShaderSource) {
        this.gl = canvas.getContext("webgl2");
        this.bgColor = [0,0,0,1];
        if(!this.gl){
            // TODO stop execution
            console.log("Failed to load glContext");
        }

        this.shaderProgram = ShaderUtil.createShaderProgram(this.gl, vertexShaderSource, fragmentShaderSource);
    }

    refresh() {
        this.gl.clearColor(...this.bgColor);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }

    loadModelTypes(modelsTypes) {
        for(var key of Object.keys(modelsTypes)){
            ModelUtil.prepare(this.gl, this.shaderProgram, modelsTypes[key]);
        }
        this.modelTypes = modelsTypes;
    }

    drawModelsForType(models, modelType) {
        this.gl.bindVertexArray(modelType.vao);
        for(var model of models){
            // load model specific data
            this.gl.drawArrays(this.gl.TRIANGLES,0,3);
        }
    }

    drawModels(models){
        renderer.refresh();
        this.gl.useProgram(this.shaderProgram);
        // sort models by type
        var modelsByType = {};
        for(var model of models){
            if(!modelsByType[model.ID]){
                modelsByType[model.ID] = new Set();
            }
            modelsByType[model.ID].add(model);
        }
        // draw models by type
        for(var modelType of Object.keys(modelsByType)) {
            this.drawModelsForType(modelsByType[modelType], this.modelTypes[modelType]);
        }
    }

    setBackgroundColour(r,g,b,a){
        this.bgColor = [r,g,b,a];
    }
}