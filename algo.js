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
    if (cc.length > 4) {
        console.log("**** In If ****")
        for (let idx = 0; idx < cc.length; idx++) {
            if (idx < (cc.length-4)) {
                output += "#";
            } else {
                output += cc[idx]
            }
            console.log(output[idx]);
        }        
    }
    return output;
}

console.log("maskify 4556364607935616:", maskify("4556364607935616"));
