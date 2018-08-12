class Game {
    constructor() {
        var object1 = new DefaultModel1();
        var object2 = new DefaultModel1();
        var object3 = new DefaultModel2();
        this.modelsToRender = [object1, object2, object3];
        this.running = true;
    }

    runGameLogic(){
        console.log("testing");
    }

    stop() {
        this.running = false;
    }
}