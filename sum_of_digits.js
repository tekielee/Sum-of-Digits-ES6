function getSum(n) {
	let sum = 0;
	while(n > 0) {
		sum += parseInt(n % 10);
		n = parseInt(n / 10);
	}
	return sum;
}

let n = 687;
console.log(getSum(n));

function getSum1(n) {
	let sum = 0;
	let num = n.split('').map(Number);
	for(let i = 0; i < num.length; i++) {
		sum += num[i];
	}
	return sum;
}

let n1 = '687';
console.log(getSum1(n1));