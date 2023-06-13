const inquirer = require('inquirer');
const fs = require('fs');

const {Circle, Square, Triangle} = require("./lib/shapes")

const SVG = require('./lib/svg ')

// prompt questions
const questions = [
    {
        //Text for logo
        type: "input",
        message: "enter up to three characters",
        name: "text"
    },
    {
        //Text Color for logo
        type: "input",
        message: "enter a color keyword (OR a hexadecimal number)",
        name: "textColor"
    },
    {
        //Shape for logo
        type: "list",
        message: "Enter preffered shape",
        name: "Shapes",
        choices: ["Circle","Triangle", "Square"]
    },
    {
        type: "input",
        message: "enter a color keyword (OR a hexadecimal number) for shape color",
        name: "shapesColor"
    }
]

inquirer.prompt(questions)
.then(({text, textColor, Shapes, shapesColor}) => {
    let shape;
    switch(Shapes){
        case 'Circle':
        shape = new Circle();
        shape.setColor(shapesColor);
        break;
        
        case 'Square':
        shape = new Square();
        shape.setColor(shapesColor);
        break;

        default:
        shape = new Triangle();
        shape.setColor(shapesColor);
        break;
    }

// generates the logo svg file
    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setShape(shape)
    return writeToFile('./examples/log.svg', svg.render());
    });

// function to catch error

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('something went wrong', err);
    } else {
      console.log("Logo file has been generated");
    };
  })
}

