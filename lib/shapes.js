class Shapes {
    constructor(color) {
        this.color = color
    }
    render(){
    }
    setColor(color){
        return this.color = color
    }
}

class Circle extends Shapes{
    constructor(color) {
        super(color);
    }
    render() {
        return ` <circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shapes{
    constructor(color) {
        super(color);
    }
    render() {
        return ` <square cx="50" cy="80" r="150" fill="${this.color}" />`
    }
}

class Triangle extends Shapes{
    constructor(color) {
        super(color);
    }
    render() {
        return `  <polygon points="210,6 350,190 100,200" fill="${this.color}" />`
    }
}


module.exports = {Circle, Square, Triangle};
