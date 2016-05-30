var x = (document.getElementById("input").value).split(',');

document.getElementById("num1").innerHTML = "MAX: "+getMaxOfArray(x);

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

document.getElementById("num2").innerHTML = "MIN: "+ getMinOfArray(x);


function getMinOfArray(numArray) {
  return Math.min.apply(null, numArray);
}


function getsum(numArray){
var sum = 0;
for(i = 0;i<numArray.length;i++){
sum = sum + parseInt(numArray[i]);
}
return sum;
}
document.getElementById("num3").innerHTML = "Sum: "+ getsum(x);
document.getElementById("num4").innerHTML = "AVG: "+ getsum(x)/x.length;


document.getElementById("num5").innerHTML = " Reverse: "+x.reverse();;

function onblurfunc() {
	var x = (document.getElementById("input").value).split(',');
document.getElementById("num1").innerHTML = "MAX: "+getMaxOfArray(x);
document.getElementById("num2").innerHTML = "MIN: "+ getMinOfArray(x);
document.getElementById("num3").innerHTML = "Sum: "+ getsum(x);
document.getElementById("num4").innerHTML = "AVG: "+ getsum(x)/x.length;
document.getElementById("num5").innerHTML = "Reverse: "+x.reverse();
}