class ModelTypesContainer {
    constructor() {
        this.loadModelTypes();
    }

    loadModelTypes() {
        var modelType1 = new DefaultModelTypeTest1();
        var modelType2 = new DefaultModelTypeTest2();

        this.modelsTypes = [];
        this.modelsTypes[modelType1.ID] = modelType1;
        this.modelsTypes[modelType2.ID] = modelType2;
    }
}