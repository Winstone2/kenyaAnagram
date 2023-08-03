function isAnagram(str1, str2) {
    // Sanitize and lowercase the input strings
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    // If the lengths of the strings are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Count the frequency of characters in both strings
    const charFrequency1 = {};
    const charFrequency2 = {};

    for (const char of str1) {
        charFrequency1[char] = (charFrequency1[char] || 0) + 1;
    }

    for (const char of str2) {
        charFrequency2[char] = (charFrequency2[char] || 0) + 1;
    }

    // Compare the character frequencies
    for (const char in charFrequency1) {
        if (charFrequency1[char] !== charFrequency2[char]) {
            return false;
        }
    }

    return true;
}

// Example usage
const word1 = "listen";
const word2 = "silent";

if (isAnagram(word1, word2)) {
    console.log(`${word1} and ${word2} are anagrams.`);
} else {
    console.log(`${word1} and ${word2} are not anagrams.`);
}
