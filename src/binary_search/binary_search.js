var binarySearch, binarySearchRecursive;
binarySearchRecursive = function (a, value, low, high) {
    var mid;
    if (high < low) {
        return -1;
    } else {
        mid = low + Math.floor((high - low) / 2);
        if (a[mid] > value) {
            return binarySearchRecursive(a, value, low, mid - 1);
        } else if (a[mid] < value) {
            return binarySearchRecursive(a, value, mid + 1, high);
        } else {
            return mid;
        }
    }
};
binarySearch = function (a, value) {
    return binarySearchRecursive(a, value, 0, a.length - 1);
};