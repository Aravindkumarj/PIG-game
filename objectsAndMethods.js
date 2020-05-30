 var john = {
	 firstName: 'John',
	 lastName: 'Smith',
	 birthYear: 1990,
	 family: ['Jane', 'Mark', 'Bob', 'Emily'],
	 job: 'teacher',
	 isMarried: false,
	 calcAge: function(){
		 var d = new Date();
		 this.age = (d.getFullYear() - this.birthYear);
	 }
 }
 john.calcAge();
 console.log(john);