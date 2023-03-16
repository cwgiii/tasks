My solution is a series of if statements that determine how the number on
each line should be interpretted (ignore, end, include). The number is 
pulled from the each line until either there are no new lines, or the number
-999 is reached.
The runtime of this algorithm is linear, as the number of repetitions is 
dependent on the number of lines, or the presence of negative numbers. 
