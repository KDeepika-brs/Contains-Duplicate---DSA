function checkDuplicates() {
  var inputArray = document.getElementById("inputArray").value;
  var nums = inputArray.split(',').map(Number);

  var hasDuplicates = checkForDuplicates(nums);

  var resultElement = document.getElementById("result");
  resultElement.textContent = hasDuplicates ? "Duplicates found!" : "No duplicates found.";
}


function checkForDuplicates(nums) {
  hash = {}
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      return true
    } else {
      hash[nums[i]] = 1
    }
  }
  return false
};