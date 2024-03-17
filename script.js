const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let currentSum = 0;
  let currentSubarray = [];

  for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      // Check if adding the current number would exceed the limit
      if (currentSum + num <= n) {
          currentSum += num;
          currentSubarray.push(num);
      } else {
          // Start a new subarray
          result.push(currentSubarray);
          currentSubarray = [num];
          currentSum = num;
      }
  }

  // Push the last subarray
  if (currentSubarray.length > 0) {
      result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
