const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle')
const Square = require('./lib/square')
const Triangle = require('./lib/triangle')

const svgGen = require('./lib/svg ')



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
.then((response) =>{
    if(response.shape){
        var shapeOption = new Square(response.color).render();
    }else if (response.shape){
        var shapeOption = new Triangle(response.color).render();
    }else if(response.shape){
        var shapeOption = new Circle(response.color).render()
    } else {
    fs.writeFile("logo.svg", response)
}
})
