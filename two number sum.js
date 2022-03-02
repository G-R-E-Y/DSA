// O(n^2) Time | o(1) space
// Bruteforce solution we looped the array in 2 for loop and got the solution.

function twoNumberSum(array, targetSum) {
  // Write your code here.
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return [];
}

// Do not edit the line below.
numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(twoNumberSum(numberArray, 10));

// Lets see if we can try another solution
// In operator works only in object not in array
// Here we tried to get the target sum and put all which did not work in an object with the num as key dummy value.
// We are taking new number itterating over old numbers and then getting the result
// O(n)ST

function twoNumberSum1(array, targetSum) {
  // Write your code here.
  const nums = {};
  for (const num of array) {
    const potentialSum = targetSum - num;
    if (potentialSum in nums) {
      return [potentialSum, num];
    } else {
      nums[num] = 'fuckup';
    }
  }
  return [];
}

numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(twoNumberSum1(numberArray, 10));

// Third approach (sorting and then adding lowest to highest and finding the solution)

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  console.log(array[left]);
  console.log(array[right]);
  while (left < right) {
    const currentSum = array[left] + array[right];
    console.log(currentSum);
    if (currentSum === targetSum) {
      console.log([array[left], array[right]]);
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
