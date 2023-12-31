class Shape {
    constructor(color) {
        this.color = color
    }
    render(){
    }
    setColor(color){
        this.color = color
    }
}

class Circle extends Shape{
    render() {
        return ` <circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape{
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.color}" />`
    }
}

class Triangle extends Shape{
    render() {
        return `  <polygon points="210,6 350,190 100,200" fill="${this.color}" />`
    }
}


module.exports = { Circle, Square, Triangle };
