var bills = [124, 48, 268]
function tipCalculator(a,b,c){
	tips = [];
	totalBill = [];
	for (i = 0; i < arguments.length ; i++)
	{
		if (arguments[i] < 50){
			tips[i] = +(arguments[i] * 0.2).toFixed(2);
			totalBill[i] = arguments[i]+ tips[i];
		}
		else if ((arguments[i]>= 50) && (arguments[i] <200)){
			tips[i] = +(arguments[i] * 0.15).toFixed(2);
			totalBill[i] = arguments[i]+ tips[i];
		}
		else if (arguments[i]>= 200){
			tips[i] = +(arguments[i] * 0.1).toFixed(2);
			totalBill[i] = arguments[i]+ tips[i];
		}
	}
	console.log (tips, totalBill);
	return (tips, totalBill);
}
tipCalculator(...bills);
