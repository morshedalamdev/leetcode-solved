/* Given a string s, return the longest palindromic substring in s. */

// ROW SOLUTION:
function expandAround(str, start, end){
    let left = start;
    let right = end;
    let sub
    
    while(left >= 0 && right <= str.length && str[left] === str[right]){
            sub = str.substring(left, right + 1);
        left--;
        right++
    }
    
    return sub;
}

var longestPalindrome = function(s) {
    if(s.length <= 2) return s;
    let longestSub = ""
    for(let i = 0; i < s.length; i++){
        const oddPalindorme = expandAround(s, i, i);
        const evenPalindorme = expandAround(s, i, i + 1);
        
        if(evenPalindorme && evenPalindorme.length > longestSub.length){
            longestSub = evenPalindorme;
        }
        if(oddPalindorme && oddPalindorme.length > longestSub.length){
            longestSub = oddPalindorme
        }
    }
    
    console.log(longestSub)
};


// ENHANCED SOLUTION:
function expandAround(str, left, right){    
    while(left >= 0 && right <= str.length && str[left] === str[right]){
        left--;
        right++
    }
    
    return right - left - 1;
}

var longestPalindrome = function(s) {
    if(s.length < 2) return s;
    
    let start = 0;
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        const oddLength = expandAround(s, i, i);
        const evenLength = expandAround(s, i, i + 1);

        const currentLength = Math.max(oddLength, evenLength);
        
        if(currentLength > maxLength){
            maxLength = currentLength;
            start = i - Math.floor((currentLength - 1) / 2)
        }
    }
    
    console.log(s.substring(start, start + maxLength))
};

// TEST CASES:
longestPalindrome("babad")
longestPalindrome("cbbd")
longestPalindrome("tststed")