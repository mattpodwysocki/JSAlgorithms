var bubbleSort, swap;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
bubbleSort = function (arr) {
	var n, i, j, temp;
	n = arr.length;
	for (i = 0; i < n; i++) {
		for (j = n - 1; j > i; j--) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j, j - 1);
			}
		}
	}
};