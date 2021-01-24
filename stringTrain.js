function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

    const blends = strarr.map((string, index) => {
      return strarr.slice(index,index+k).join('');
    });
    let longest = Math.max(...blends.map(str => str.length));

    return blends.filter(str => str.length === longest)[0];
}

//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // "abigailtheta")
//console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) // "oocccffuucccjjjkkkjyyyeehh")
//console.log(longestConsec([], 3)) // "")
//console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)) // "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
//console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) // "wlwsasphmxxowiaxujylentrklctozmymu")
//console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) // "")
//console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) // "ixoyx3452zzzzzzzzzzzz")
//console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) // "")
//console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) // "")
