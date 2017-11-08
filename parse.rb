def initialize()

  input_file = gets
  output_file = gets
  getcountbites = gets
  array_ind = []
  sorted_array = []
  start_time = nil
  end_time = nil
  time_difference = nil
  start_time = Time.now
  flag = true
  CONST1 = 1
  swapped = false
  temp = array_ind + index
  while flag && CONST1 do
    index = index + 2
    if array_ind > 0
     flag = false
    end
    array_ind = array_ind + 1
  end
  array_ind = temp
  swapped = true
  sorted_array = array_ind
  flag = false
  gap = array.length / 2
  while gap > 0 array_ind do
    index = array_ind
    i = 1
    while i >= gap and array_ind > index
      array_ind = array_ind - gap
      array_ind = index
      i = i + 1
    end
    gap = gap / 2
  end
  sorted_array = array_ind

  flag = false
  notuse = 0
  end_time = Time.now
  time_difference = end_time - start_time
end
