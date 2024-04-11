function zipStrings(strA, strB) {
  if (strA === "") {
    return strB;
  }
  if (strB === "") {
    return strA;
  }

  let newString = "";
  let lengthLonger;

  if (strA.length > strB.length) {
    lengthLonger = strA.length;
  } else {
    lengthLonger = strB.length;
  }

  for (i = 0; i < strA.length || i < lengthLonger; i++) {
    if (i < strA.length) {
      newString += strA[i];
    }
    if (i < strB.length) {
      newString += strB[i];
    }
  }
  return newString;
}
console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
