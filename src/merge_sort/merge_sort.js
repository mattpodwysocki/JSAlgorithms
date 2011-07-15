var merge, mergeSort;
mergeSort = function (a) {
    var left, mid, right;
    if (a.length <= 1) {
        return a;
    }
    mid = Math.ceil(a.length / 2);
    left = a.slice(0, mid);
    right = a.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
};
merge = function (left, right) {
    var result;
    result = [];
    while (left.length > 0 || right.length > 0) {
        if (left.length && right.length > 0) {
            if (left[0] < right[0]) {
                result.push(left[0]);
                left.splice(0, 1);
            } else {
                result.push(right[0]);
                right.splice(0, 1);
            }
        } else if (left.length > 0) {
            result.push(left[0]);
            left.splice(0, 1);
        } else if (right.length > 0) {
            result.push(right[0]);
            right.splice(0, 1);
        }
    }
    return result;
};