class DefaultModelType {
    constructor() {
        this.vao = null;
        this.type = "default";
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

class DefaultModelTypeTest1 extends DefaultModelType {
    constructor(){
        super();
        this.type = "default1";
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
        this.type = "default2";
        this.attribs.a_position.data = [
            -0.9,1,
            -0.7,-0.3,
            0.5,1
        ];
    }
}

