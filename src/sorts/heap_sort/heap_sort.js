var heapSort, heapify, siftDown, swap;
swap = function (arr, idx1, idx2) {
	var temp;
	temp = arr[idx1];
	arr[idx1] = arr[idx2];
	arr[idx2] = temp;
};
heapSort = function (array) {
	var count, end;
	count = array.length;
	end = count - 1;
	heapify(array);
	while (end > 0) {
		swap(array, end, 0);
		siftDown(array, 0, end - 1);
		end--;
	}
};
heapify = function (array) {
	var count, start;
	count = array.length;
	start = Math.floor(count / 2) - 1;
	while (start >= 0) {
		siftDown(array, start, count - 1);
		start--;
	}
};
siftDown = function (array, start, end) {
	var root, swapped, child;
	root = start;
	while (root * 2 + 1 <= end) {
		child = root * 2 + 1;
		swapped = root;
		if (array[swapped] < array[child]) {
			swapped = child;
		}
		if (child + 1 <=end && array[swapped] < array[child + 1]) {
			swapped = child + 1;
		}
		if (swapped !== root) {
			swap(array, root, swapped);
			root = swapped;
		} else {
			return;
		}
	}
};