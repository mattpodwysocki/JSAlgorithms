var quickSort, swap, _undefined;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
quickSort = function (array, start, end) {
	if (start === _undefined && end === _undefined) {
		start = 0;
		end = array.length - 1;
	}
	var  i, k, pivot;
	i = start;
	k = end;
	if (end - start >= 1) {
		pivot = array[start];
		while (k > i) {
			while (array[i] <= pivot && i <= end && k > i) {
				i++;
			}
			while (array[k] > pivot && k >= start && k >= i) {
				k--;
			}
			if (k > i) {
				swap(array, i, k);
			}
		}
		swap(array, start, k);
		quickSort(array, start, k - 1);
		quickSort(array, k + 1, end);
	}
};