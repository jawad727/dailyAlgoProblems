def addemUp(arr, window_size = 3):
  if (window_size < 1 or (window_size % 2) == 0):
    return "Input a int that is greater than 0 and prime"
  newArr = []
  for i in range(0, len(arr)):
    skip_size = (window_size - 1) / 2
    # print(i - skip_size, i + skip_size)
    if (i - skip_size < 0) or (i + skip_size >= len(arr) ):
      pass
    else:
      newArr.append( sum(arr[int(i - skip_size): int(i + skip_size + 1)]) )
  return newArr
