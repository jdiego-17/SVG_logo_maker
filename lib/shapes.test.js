const {Circle, Square, Triangle} = require("./shapes")


describe('Circle', () => {
    // TODO: Add a comment describing this test.
    describe('render', () => {
      it('should apply color chosen by the user', () => {
        const shape = new Circle();
        shape.setColor('blue')
  
        expect(shape.render()).toEqual(' <circle cx="150" cy="100" r="80" fill="green" />')
      })
    });
});


describe('Square', () => {
    // TODO: Add a comment describing this test.
    describe('render', () => {
      it('should apply color chosen by the user', () => {
        const shape = new Circle();
        shape.setColor('green')
  
        expect(shape.render()).toEqual(' <circle x="50" cy="800" r="100" fill="green" />')
      })
    });
});


describe('Triangle', () => {
    // TODO: Add a comment describing this test.
    describe('render', () => {
      it('should apply color chosen by the user', () => {
        const shape = new Circle();
        shape.setColor('pink')
  
        expect(shape.render()).toEqual(' <polygon points="210,0 300,210 150,210" fill="green" />')
      })
    });
});