function merge(low, high) {
	const mergeArray = [];
	while (low.length && high.length) {
		mergeArray.push(low[0] > high[0] ? high.shift() : low.shift());
	}

	return mergeArray.concat(low, high);
}

function mergeSort(array) {
	if (!array.length || !Array.isArray(array)) return "Unable to merge sort";
	if (array.length === 1) return array;

	const middle = Math.floor(array.length / 2);
	const lowArray = mergeSort(array.slice(0, middle));
	const highArray = mergeSort(array.slice(middle, array.length));

	return merge(lowArray, highArray);
}

console.log(mergeSort("beans")); // Unable to merge sort
console.log(mergeSort([])); // Unable to merge sort
console.log(mergeSort([5])); // [5]
console.log(mergeSort([3, 2, 4, 1, 7, 9, 8, 6, 5, 0])); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeSort([2, 2, 89, 15, 7, 4, 4])); // [2, 2, 4, 4, 7, 15, 89]
