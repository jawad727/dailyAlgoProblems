// Leetcode Link: https://leetcode.com/problems/permutations/submissions/

var permute = function(nums, set = [], answers = []) {

    if (nums.length == 0) {
        answers.push([...set])
    }
    
    for (let i = 0; i<nums.length; i++) {
        const newNums = nums.filter((n, index) => index !== i)
        // console.log(newNums)
        set.push(nums[i])
        permute(newNums, set, answers)
        set.pop()
    }
    
    return answers
};

permute(arr)