var oddEvenSort, swap;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
oddEvenSort = function (arr) {
	var sorted, n, i;
	sorted = false;
	n = arr.length - 1;
	while (!sorted) {
		sorted = true;
		for (i = 1; i < n; i += 2) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				sorted = false;
			}
		}
		for (i = 0; i < n; i += 2) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				sorted = false;
			}
		}		
	}
};