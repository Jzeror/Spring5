"use strict"
$.prototype.nullChecker = x=>{
			let flag = false;
			let i = 0;
			for(i in x){ // for-each loop
				if(x[i] === ''){
					flag = true;
				}
			}
			return flag;
}
$.prototype.zeroChecker = x=>{
	let flag = false;
	let i = 0;
	for(i in x){ // for-each loop
		if(x[i] === 0){
			flag = true;
		}
	}
	return flag;
}
