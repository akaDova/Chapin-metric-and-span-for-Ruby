def initialize()
input_file = gets
output_file = gets
getcountbites = gets
@arrayInd = []
@sorted_array = []
@start_time = nil
@end_time = nil
@time_difference = nil
@start_time = Time.now
flag = true
begin
swapped = false
while flag do
index = index + 2
if @arrayInd > 0
 temp = @arrayInd + index
 flag = false
end

@arrayInd = @arrayInd + 1
end
@arrayInd = temp
swapped = true
@sorted_array = @arrayInd
flag = false
gap = @array.length / 2
while gap > 0 @arrayInd do |j|
index = @arrayInd
while (i >= gap and @arrayInd > index)
@arrayInd = @arrayInd - gap
@arrayInd = index
end
gap = gap / 2
@sorted_array = @arrayInd
flag = false
_notuse = 0
@end_time = Time.now
@time_difference = @end_time - @start_time
end
