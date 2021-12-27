////////////////////////////////////////////////////////////////
//  CODE WARS > Credit Card Mask
//  By: Virgilio D. Cabading Jr.
////////////////////////////////////////////////////////////////

/**
 * maskify function
 * @param {string} cc 
 * @returns a masked string
 */
function maskify(cc) {
    let output = "";
    for (let idx = 0; idx < cc.length; idx++) {
        if (idx < (cc.length-4)) {
            output += "#";
        } else {
            output += cc[idx]
        }
    }        
    return output;
}

console.log("maskify 4556364607935616:", maskify("4556364607935616"));
console.log("maskify 35616:", maskify("35616"));
console.log("maskify 616:", maskify("616"));