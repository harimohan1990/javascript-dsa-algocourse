function isUniqueWithinRange(start, end) {
    const chars = new Set();
    for (let i = start; i < end; i++) {
      let char = s[i];
      if (chars.has(char)) {
        return false;
      }
      chars.add(char);
    }
    return true;
  }
  function lengthOfLongestSubstring(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        if (isUniqueWithinRange(i, j)) {
          result = Math.max(result, j - i + 1);
        }
      }
    }
    return result;
  }