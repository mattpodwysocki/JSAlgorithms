var gnomeSort, swap;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
gnomeSort = function (arr) {
	var pos, length;
	length = arr.length;
	pos = 1;
	while (pos < length) {
		if (arr[pos] >= arr[pos - 1]) {
			pos++
		} else {
			swap(arr, pos, pos - 1);
			if (pos > 1) {
				pos--
			} else {
				pos++
			}
		}
	}
};