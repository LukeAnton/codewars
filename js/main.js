// monkeyCount = n => {
//   res = [];
//   for (i = 0; i < n; i++) {
//     res.push(i + 1);
//   }
//   return res;
// };
// console.log(monkeyCount(10));
// avgArray = a => {
//   const len = a.length;
//   let res = [];
//   for (let i in a[0]) {
//     let num = 0;
//     for (let j in a) {
//       num += a[j][i];
//     }
//     res.push(num / len);
//   }
//   return res;
// };
// console.log(avgArray([[1, 2, 3, 4], [5, 6, 7, 8]])); //[3, 4, 5, 6]
// Create a function that takes a 2D array as an input,
// and outputs another array that contains the average values for
// the numbers in the nested arrays at the corresponding indexes.
//
// For Example:
//
// avgArray([[1, 2, 3, 4], [5, 6, 7, 8]]); // => [3, 4, 5, 6]
// avgArray([[2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34]]); // => [22.5, 11, 38.75, 38.25, 19.5]
// This function should also work with negative numbers.
// oddCount = n => Math.floor(n / 2);
//
// console.log(oddCount(392));

// binaryConvert = num => {
//   if (num != Math.floor(num)) {
//     console.log("Please enter a number");
//   } else if (num < 0) {
//     return;
//   } else {
//     log(parseInt(num.toString(2))
//     console.log(parseInt(binaryString));
//   }
// };
// console.log(binaryConvert(4));
//
// binaryConvert = num => parseInt(num.toString(2));

// const romanToInt = function(numeral) {
//   let result = "";
//
//   const romanToIntMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   const nKeys = Object.keys(romanToIntMap);
//   console.log(nKeys);
//   console.log(romanToIntMap["6"]);
//
//   for (let i = 0; i < nKeys.length; i++) {
//     for (let j = 0; j < numeral.length; j++) {
//       if (nKeys[i] === numeral[j]) {
//         result += romanToIntMap[nKeys[i]];
//       }
//     }
//   }
//   return result;
// };

// const romanToInt = num => {
//   let roman = [
//     [1000, "M"],
//     [900, "CM"],
//     [500, "D"],
//     [400, "CD"],
//     [100, "C"],
//     [90, "XC"],
//     [50, "L"],
//     [40, "XL"],
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"]
//   ];
//   const nKeys = Object.keys(roman);
//   console.log(nKeys);
//   if (num === 0) {
//     return "";
//   }
//   const s = num.split();
//   console.log(s);
//   // return s.filter(res => res === nKeys);
// };

// romEncoder = num => {
//   let rom = {
//     1000: "M",
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I"
//   };
//   const rKeys = Object.keys(rom);
//   console.log(num);
//   console.log(rKeys);
//   let res = "";
//   for (let i = 0; i < rKeys.length; i++) {
//     if (parseInt(rKeys[i]) === num) {
//       res = rom[rKeys[i]];
//       return res;
//     }
//   }
// };
//
// console.log(romEncoder(101));
// const romanToInt = function(numeral) {
// //   let result = 0;
// //
// //   const romanToIntMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
// //   const nKeys = Object.keys(romanToIntMap);
// //   // console.log(romanToIntMap["V"]);
// //
// //   for (let i = 0; i < nKeys.length; i++) {
// //     for (let j = 0; j < numeral.length; j++) {
// //       if (nKeys[i] === numeral[j]) {
// //         result += romanToIntMap[nKeys[i]];
// //       }
// //     }
// //   }
// //   return result;
// // };
// for (var i = 0; i < roman.length; i++) {
//  if (num >= roman[i][0]) {
//    return roman[i][1] + romanToInt(num - roman[i][0]);
//  }
// }

// sortTransform = a => {
//   const l = [length - 2, length - 1];
//   const pa = String.fromCharCode(a[0], a[1], a[a.l[0]], a[a.l[1]]);
//   const sb = a.sort((x, y) => x - y);
//   const pb = String.fromCharCode(sb[0], sb[1], sb[sb.l[0]], sb[sb.l[1]]);
//   const sc = a.sort((x, y) => y - x);
//   const pc = String.fromCharCode(sc[0], sc[1], sc[sc.l[0]], sc[sc.l[1]]);
//   return `${pa}-${pb}-${pc}-${pb}`;
// };
// console.log(romanToInt());
// const sortTransform = a => {
//   const pa = String.fromCharCode(a[0], a[1], a[a.length - 2], a[a.length - 1]);
//   //sort in accending
//   let sortT = a.sort((x, y) => x - y);
//   const pb = String.fromCharCode(
//     sortT[0],
//     sortT[1],
//     sortT[sortT.length - 2],
//     sortT[sortT.length - 1]
//   );
//   sortT = a.sort((x, y) => y - x);
//   const pc = String.fromCharCode(
//     sortT[0],
//     sortT[1],
//     sortT[sortT.length - 2],
//     sortT[sortT.length - 1]
//   );
//   sortT = a.sort((x, y) => x - y);
//   const pd = String.fromCharCode(
//     sortT[0],
//     sortT[1],
//     sortT[sortT.length - 2],
//     sortT[sortT.length - 1]
//   );
//   return `${pa}-${pb}-${pc}-${pd}`;
// };

// orderedCount = text => text.split("").filter(text => text == "a");
// orderedCount = text => {
//   result = [];
//   const arr = text.split("");
//   for (let i = 0; i < arr.length; i++) {}
// };
//
// con4sole.log(orderedCount("abracadabra"));

// fil[(["a", 5], ["b", 2], ["r", 2], ["c", 1], ["d", 1])];

// stringToNumber = str => Number(str);
// stringToNumber = Number;

// console.log(stringToNumber("1454"));
// betterThanAverage = (c, m) =>
//   c.reduce((a, b) => a + b, 0) / c.length > m ? false : true;
//
// console.log(betterThanAverage([100, 100, 100, 100], 5));

//   Test.it("betterThanAverage([2, 3], 5) should return True", function() {
//     Test.assertEquals(betterThanAverage([2, 3], 5), true);
//   });
//
//   Test.it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", function() {
//     Test.assertEquals(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
//   });
//
//   Test.it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function() {
//     Test.assertEquals(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
//   });
// });

// const coolString = s => {
//   if (s[0] == Number(s[0])) return false;
//   letterCount = [];
//
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j + 1 < s.length; j++) {
//       if (
//         (s[i] === s[i].toUpperCase() && s[j] === s[j].toLowerCase()) ||
//         (s[i] === s[i].toLowerCase() && s[j] === s[j].toUpperCase())
//       ) {
//         letterCount.push(s[i]);
//         if (letterCount.length === s.length) {
//           return true;
//         }
//       }
//     }
//     if (s[i] == " ") return false;
//     if (s[i] == +s[i]) return false;
//   }
//   return true;
// };
//
// console.log(coolString("kKkK"));

// //assumes the return when you create and arrow function like this
// const getSize = (w, h, d) => [2 * d * h + 2 * w * h + 2 * d * w, w * h * d];
//
// console.log(getSize(4, 2, 6));

//
// const orderedCount = text => {
//   const setToArr = set => Array.from(set);
//   const set = text
//     .split("")
//     .reduce((acc, val) => acc.set(val, (acc.get(val) || 0) + 1), new Map());
//   return setToArr(set);
// };
//
// console.log(orderedCount("aavvvjkkkjj"));
// const examples = [
//     ["abracadabra", [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
//     ["Code Wars",  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
//     ["212", [['2', 2], ['1', 1 ]]],
// ];
// reverseWords = str => {
//   return str
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .reverse()
//     .join(" ");
// };
//
// console.log(reverseWords("The quick brown fox ju
// mps over the lazy dog."));

//reverse whole words
// reverseWords = str => {
//   return str
//     .split(" ")
//     .reverse()
//     .join(" ");
// };
//
// console.log(reverseWords("hello world!")); //"world! hello"

// const cookingTime = weight => {
//   let totalMinutes = weight * 44.44444 + 20;
//   let hours = totalMinutes / 60;
//   let rhours = Math.floor(hours);
//   let rnhours = Math.round(hours / 1) * 1;
//   let minutes = (hours - rhours) * 60;
//   let rminutes = Math.round(minutes / 5) * 5;
//   if (weight === 0) {
//     return "There is no chicken!";
//   }
//   if (hours < 1) {
//     return rminutes + " mins";
//   }
//   if (rminutes === 60 && hours >= 1) {
//     return rnhours + " hrs";
//   }
//   if (hours >= 2) {
//     return rhours + " hrs " + rminutes + " mins";
//   } else {
//     return rhours + " hr " + rminutes + " mins";
//   }
// };

// cookingTime = weight => {
//   let time = Math.ceil((((weight * 1000) / 450) * 20 + 20) / 5) * 5;
//   if (weight === 0) {
//     return "There is no chicken!";
//   }
//   if (time % 60 === 0) {
//     if (time === 60) return "1 hr";
//     let a = time / 60;
//     return a + " hrs";
//   }
//   if (time > 120) {
//     let b = Math.floor(time / 60);
//     let c = time % 60;
//     return b + " hrs " + c + " mins";
//   }
//   if (time > 60) {
//     let d = time - 60;
//     return "1 hr " + d + " mins";
//   } else return time + " mins";
// };
//
// console.log(cookingTime(1)); //"1 hr 5 mins"
// console.log(cookingTime(2.2)); //"2 hrs"
// console.log(cookingTime(0.3)); //"35 mins"
// console.log(cookingTime(0)); //"35 mins"

// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }
//
// console.log(enough(10, 5, 5)); // 0
// console.log(enough(100, 60, 50)); // 10
// console.log(enough(20, 5, 5)); // 0

//printing the same amount of occourences in an array as the 2nd input
// const deleteNth = (arr, x) => {
//   //storing total
//   let totals = [];
//   //looping through the array and adding each number the amount of x to the totals array
//   return arr.filter(o => (totals[o] = ++totals[o] || null) < x);
// };
//
// console.log(deleteNth([20, 37, 20, 21], 1));
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 1));
// // Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// //
// // Symbol       Value
// // I             1
// // V             5
// // X             10
// // L             50
// // C             100
// // D             500
// // M             1000
// // For example, two is written as II in Roman numeral, just two one's added together.
// // Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII,
// // which is XX + V + II.
// //
// // Roman numerals are usually written largest to smallest from left to right. However,
// // the numeral for four is not IIII. Instead, the number four is written as IV.
// // Because the one is before the five we subtract it making four.
// // The same principle applies to the number nine, which is written as IX.
// // There are six instances where subtraction is used:
// //
// // I can be placed before V (5) and X (10) to make 4 and 9.
// // X can be placed before L (50) and C (100) to make 40 and 90.
// // C can be placed before D (500) and M (1000) to make 400 and 900.
// // Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
// //
// // Example 1:
// // Input: "III"
// // Output: 3
//
// // Example 2:
// // Input: "IV"
// // Output: 4
//
// // Example 3:
// // Input: "IX"
// // Output: 9
//
// // Example 4
// // Input: "LVIII"
// // Output: 58
// // Explanation: L = 50, V= 5, III = 3.
//
// // Example 5:
// // Input: "MCMXCIV"
// // Output: 1994
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
//
// const romanToInt = function(numeral) {
//   let result = 0;
//
//   const romanToIntMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//   const nKeys = Object.keys(romanToIntMap);
//   // console.log(romanToIntMap["V"]);
//
//   for (let i = 0; i < nKeys.length; i++) {
//     for (let j = 0; j < numeral.length; j++) {
//       if (nKeys[i] === numeral[j]) {
//         result += romanToIntMap[nKeys[i]];
//       }
//     }
//   }
//   return result;
// };
//
// const romanToInt = function(numeral) {
//   let result = 0;
//   const romanToIntMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
//
//   for (let i = 0; i < numeral.length; i++) {
//     result += romanToInt[numeral[i]];
//   }
//   return result;
// };
//
// console.log(romanToInt("XV"));
//
// // 2 submit
// // let twoSum = function(nums, target) {
// //   let ind = [];
// //   for (i = 0; i < nums.length; i++) {
// //     for (j = 0; j < nums.length; j++) {
// //       if (nums[i] + nums[j] === target) {
// //         ind.push([i, j]);
// //         return ind;
// //       }
// //     }
// //   }
// // };
// //
// // console.log(twoSum([2, 7, 11, 15], 9));
//
// function solution(A, K, L) {
//   highestOfBob = [];
//   highestOfAlice = [];
//
//   highestOfBob.push(Math.max(...A));
//   A.pop(Math.max(...A));
//   highestOfBob.push(Math.max(...A));
//   console.log(highestOfBob);
// }
//
// solution([6, 1, 4, 6, 3, 2, 7, 4], 3, 2);
