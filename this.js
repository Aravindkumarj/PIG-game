
var AJ = {
	year : 1985,
	age: 35,
	city: 'Brookfield',
	state: 'WI',
	country: 'USA',
	calcRetAge: function(){
		console.log(this); //this is placed here to prove that 'this' keyword here refers to the AJ object.
		this.retirementYear = (65 - this.age + 2020);
		
		function innerFunction(){ //this function is placed here to show that 'this' variable will always be assigned the window object even when called from a function within an method
			console.log(this);
		}
		innerFunction();
	}
}

AJ.calcRetAge();
console.log(AJ);

/* borrowing functions

Methods can be borrowed from one object to the other without rewriting the entire code. lets say, we create
Raj object which also needs retirement age calculation done, then we would do the following
*/

var raj = {
	year : 1986,
	age: 34
}

raj.calcRetAge = AJ.calcRetAge;
raj.calcRetAge();
console.log(raj);
