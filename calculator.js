let val = document.getElementById("number");
function calc(a){
	val.value+=a;
	}
function result(){
	val.value=eval(val.value);
}
function clear1(){
	val.value=val.value.substring(0,val.value.length-1);
}
function clearScreen(){
	val.value=" ";
}
