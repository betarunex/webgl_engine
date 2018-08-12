class DefaultModelType {
    constructor() {
        this.vao = null;
        this.ID = "default";
        this.attribs = {
            a_position : {
                name: "a_position",
                size: 2,
                data: null,
                location: null
            }
        }
    }
}

// load random modeltypes
class DefaultModelTypeTest1 extends DefaultModelType {
    constructor(){
        super();
        this.ID = "default1";
        this.attribs.a_position.data = [
            -0.6,0,
            0,-0.8,
            0.5,1
        ];
    }
}
class DefaultModelTypeTest2 extends DefaultModelType {
    constructor(){
        super();
        this.ID = "default2";
        this.attribs.a_position.data = [
            -0.9,1,
            -0.7,-0.3,
            0.5,1
        ];
    }
}

