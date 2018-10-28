function sumOfOther(arr){
	let sum = arr.reduce((pv,nv)=>pv+nv);
	return arr.map(i=>sum-i)	
}