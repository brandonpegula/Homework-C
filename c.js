// function Multiplier(multiply, getCurrentValue){
// 	this.multiply = multiply;
// 	this.getCurrentValue = getCurrentValue;
	
// }	

// var Photo = new Multiplier

// Assignment C1

class Multiplier{

    constructor(){
   	this.currentValue = 1;
    }

     multiply(number) {
       this.currentValue =  number * this.currentValue
        }
    getCurrentValue() {
        return  this.currentValue 
    }

}

var m = new Multiplier()

// Assignment C2

// class Album{
// 	constructor(name, location){
// 			this.name = name;
// 			this.location = location;
// 		}
// }


// var photo = new Album('name.jpg', 'desktop')

// var test = new Multiplier(4,5);
// console.log(test)