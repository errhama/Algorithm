

// function  canJump(nums) {
//    var n = nums.length;
//    var reachable = 0;
//     for(var i = 0; i < n; i++) {
       
//         if(reachable < i ) 
//             return false;
        
//         reachable = Math.max(reachable, i + nums[i]);

//     }
//     return true;
// };

// example : 
 
//console.log(canJump([1,3,4,2,0,1]));
//console.log(canJump([1,2,2,1,0,1]));


var u = canJump([1,2,2,1,0,1]);

console.log(u);



//
var canJump = function(nums) {
    if(nums.length === 1) return true
    var maxLen = 0;
    for(var i = 0; i <= maxLen; i++) {
        maxLen = Math.max(maxLen, i + nums[i]);
        if(maxLen >= nums.length - 1) {
            return true;
        }
    }
    return false;
};