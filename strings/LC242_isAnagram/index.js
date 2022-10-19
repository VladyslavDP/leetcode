/**
 * Function that check two string if they anagrams
 * Time complexity - O(n)
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const sMap = {};
  let i = 0;

  for (i; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }
  i = 0;
  for (i; i < t.length; i++) {
    if (!!sMap[t[i]]) {
      sMap[t[i]] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

/**
 * Function that check two string if they anagrams
 * Time complexity - O(n)
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagram_1(s, t) {
  const sMap = {},
    tMap = {};
  let i = 0;

  if (s.length !== t.length) return false;

  for (i; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }
  i = 0;
  for (i; i < t.length; i++) {
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (const [key] in sMap) {
    if (sMap[key] !== tMap[key]) {
      return false;
    }
  }

  for (const [key] in tMap) {
    if (tMap[key] !== sMap[key]) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
