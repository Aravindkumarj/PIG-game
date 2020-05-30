var restaurantTrips = {
	bills : [124, 48, 268, 180, 42],
	calcTip :  function(){
		tips = [];
		totalBill = [];
		for (i = 0; i < this.bills.length; i++)
		{
			if (this.bills[i] < 50){
			tips[i] = +(this.bills[i] * 0.2).toFixed(2);
			totalBill[i] = this.bills[i]+ tips[i];
			}
			else if ((this.bills[i]>= 50) && (this.bills[i] <200)){
			tips[i] = +(this.bills[i] * 0.15).toFixed(2);
			totalBill[i] = this.bills[i]+ tips[i];
			}
			else if (this.bills[i]>= 200){
			tips[i] = +(this.bills[i] * 0.1).toFixed(2);
			totalBill[i] = this.bills[i]+ tips[i];
			}
		}
		console.log(tips, totalBill);
	return (tips,totalBill);
}
}

restaurantTrips.calcTip();
