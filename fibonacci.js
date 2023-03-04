function fibs(n) {
	const sequence = [0, 1];

	if (n <= 0 || !Number.isInteger(n))
		return "Must be an integer of 1 or greater";
	if (n === 1) return [0];

	for (let i = 2; i < n; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2]);
	}

	return sequence;
}

console.log(fibs(0)); // "Must be an integer of 1 or greater"
console.log(fibs(1)); //  [0]
console.log(fibs(4)); // [0, 1, 1, 2]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(15)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]