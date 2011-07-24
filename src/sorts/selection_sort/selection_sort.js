var selectionSort, swap;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
selectionSort = function (array) {
	var i, j, min, n;
	n = array.length;
	for (i = 0; i < n; i++) {
		min = i;
		for (j = i + 1; j < n; j++) {
			if (array[j] < array[min]) {
				min = j;
			}
		}
		
		if (min !== i) {
			swap(array, i, min);
		}
	}
};