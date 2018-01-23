// function Multiplier(multiply, getCurrentValue){
// 	this.multiply = multiply;
// 	this.getCurrentValue = getCurrentValue;
	
// }	

// var Photo = new Multiplier

// Assignment C1

// class Multiplier{

//     constructor(){
//    	this.currentValue = 1;
//     }

//      multiply(number) {
//        this.currentValue =  number * this.currentValue
//         }
//     getCurrentValue() {
//         return  this.currentValue 
//     }

// }

// var m = new Multiplier()

// Assignment C2

// class Album{
// 	constructor(albumName, location){
// 			this.albumName = 'NFC Championship Game';
// 			this.location = 'Lincoln Financial Field: Philadelphia, PA';
// 		}
// }

// class Photo extends Album{
// 	constructor(photoName, size, albumName, location){
// 		super(albumName, location)
// 		this.photoName = photoName;
// 		this.size = size + 'MB';
// 	}

// }


// var photo1 = new Photo('touchdown!', 300)
// var photo2 = new Photo('turnover', 375)
// var photo3 = new Photo('pick six!', 250)
// var photo4 = new Photo('final', 200)

// Assignment C3

class School{
	constructor(schoolName, location){
		this.schoolName = 'Valley View'
		this.location = 'Archbald, PA'
	}
}

class Person extends School{
	constructor(firstName, lastName, age, schoolName, location){
		super(schoolName, location)
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
}

class Teacher extends Person{
	constructor(firstName, lastName, age, course, schoolName, location){
		super(firstName, lastName, age, schoolName, location)
		this.course = course;

	}

}

class Student extends Person{
	constructor(firstName, lastName, age, absences, schoolName, location){
		super(firstName, lastName, age, schoolName, location)
		this.absences = absences;
	}

}


var teacher1 = new Teacher('Rebecca', 'Smith', 45, 'English')
var teacher2 = new Teacher('Jim', 'Straus', 39, 'Algebra I')
var teacher3 = new Teacher('Sam', 'Santarelli', 51, 'History') 
var student1 = new Student('Steven', 'Jones', 14, 3)
var student2 = new Student('Val', 'Grey', 15, 1)
var student3 = new Student('Jennifer', 'Garcia', 16, 0)