// Given a string s, find the length of the longest substring without duplicate characters.

function lengthOfLongestSubstring(s){
    let longestSub = 0;
    let currSub = "";
    
    for(let sIdx in s){
        const char = s[sIdx];
        if(!currSub.includes(char)){
            currSub += char
            if(currSub.length > longestSub){
                longestSub = currSub.length
            }
        }else{
            const updateChar = currSub.indexOf(char) !== -1 ? currSub.slice(currSub.indexOf(char) + 1) : currSub;
            currSub = updateChar+char
        }
    }
    
    console.log(longestSub)
}

lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("pwwkew")
lengthOfLongestSubstring(" ")
lengthOfLongestSubstring("")
lengthOfLongestSubstring("dvdf")