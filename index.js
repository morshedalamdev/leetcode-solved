/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
     P   A   H   N
     A P L S I I G
     Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:
     string convert(string s, int numRows);
 */

var convert = function(s, numRows) {
    if(numRows === 1) return s;
    
    let rows = [];
    let crrRow = 0;
    let dir = 1;
    
    for(let i = 0; i < s.length; i++){
        const ch = s[i];
        rows[crrRow] ? rows[crrRow] += ch : rows.push(ch)
        
        crrRow += dir;
        if(crrRow + 1 === numRows) dir = -1;
        if(crrRow === 0) dir = +1;
    }
    const result = rows.join("")
    console.log(result)
};

convert("PAYPALISHIRING", 3)
convert("PAYPALISHIRING", 4)