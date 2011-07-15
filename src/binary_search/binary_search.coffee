binarySearchRecursive = (a, value, low, high) ->
  if high < low then -1
  else
    mid = low + Math.floor((high - low) / 2)
    if a[mid] > value
      binarySearchRecursive(a, value, low, mid - 1)
    else if a[mid] < value
      binarySearchRecursive(a, value, mid + 1, high)
    else
      mid

binarySearch = (a, value) ->
  binarySearchRecursive(a, value, 0, a.length - 1)