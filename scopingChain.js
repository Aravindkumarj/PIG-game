var a ="Hello";
first();
function first(){
	var b = "Hi!";
	second();
	return b;
	function second(){
		var c = "Hey";
		console.log(a+b+c);
		return b;
	}
}
console.log(b);