function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookUp = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }
  console.log(lookUp);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  console.log(lookUp);

  return true;
}

validAnagram("anagram", "nagaram");
