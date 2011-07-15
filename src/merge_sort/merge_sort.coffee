mergeSort = (a) ->
  if a.length <= 1 then return a
  mid = Math.ceil(a.length / 2)
  left = a.slice(0, mid)
  right = a.slice(mid)
  left = mergeSort(left)
  right = mergeSort(right)
  merge(left, right)

merge = (left, right) ->
  result = []
  while left.length > 0 or right.length > 0
    if left.length and right.length > 0
      if left[0] < right[0]
        result.push(left[0])
        left.splice(0, 1)
      else
        result.push(right[0])
        right.splice(0, 1)
    else if left.length > 0
      result.push(left[0])
      left.splice(0, 1)
    else if right.length > 0
      result.push(right[0])
      right.splice(0, 1)
  result