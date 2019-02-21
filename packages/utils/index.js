Math.rndNum = function(min,max){
	if(min > max) min = [max,max=min][0];
	return this.floor(this.random() * (max - min +1) + min);
}