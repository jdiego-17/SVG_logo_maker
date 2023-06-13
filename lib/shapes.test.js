const {Circle, Square, Triangle} = require("./shapes")


describe('Circle', () => {
   test('should apply color chosen by the user', () => {
        const shape = new Circle();
        shape.setColor('blue')
  
        expect(shape.render()).toEqual(' <circle cx="150" cy="100" r="80" fill="green" />')
      })
});



describe('Square', () => {
    test('should apply color chosen by the user', () => {
        const shape = new Square();
        shape.setColor('green')
  
        expect(shape.render()).toEqual(' <circle x="50" cy="800" r="100" fill="green" />')
    })
});



describe('Triangle', () => {
    test('should apply color chosen by the user', () => {
        const shape = new Triangle();
        shape.setColor('pink')
  
        expect(shape.render()).toEqual(' <polygon points="210,0 300,210 150,210" fill="green" />')
    })
});