// function charCount(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     return obj;
// }

function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    //         if (/[a-z0-9]/.test(char)) {
    if (isAlphaNumeric(char)) {
      //             if (obj[char] > 0) {
      //                 obj[char]++;
      //             } else {
      //                 obj[char] = 1;
      //             };
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

charCount("Hello hi!");