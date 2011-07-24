var combSort, swap;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
combSort = function (arr) {
	var shrinkFactor, size, swapped, gap, i;
	shrinkFactor = 1.247330950103979;
	size = arr.length;
	swapped = true;
	gap = size;
	while (gap > 1 || swapped) {
		if (gap > 1) {
			gap = Math.floor(gap / shrinkFactor);
		}
		swapped = false;
		i = 0;
		while (gap + i < size) {
			if (arr[i] - arr[i + gap] > 0) {
				swap(arr, i, i + gap);
				swapped = true;
			}
			++i;
		}
	}
};