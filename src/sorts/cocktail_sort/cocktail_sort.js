var cocktailSort, swap;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
cocktailSort = function (arr) {
	var swapped, i, begin, end;
	begin = -1;
	end = arr.length - 2;
	do {
		swapped = false;
		begin++
		for (i = begin; i <= end; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				swapped = true;
			}
		}
		if (!swapped) {
			break;
		}
		swapped = false;
		end--;
		for (i = end; i >= begin; i--) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				swapped = true
			}
		}
	} while (swapped);
};