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
    if (cc.length > 4) {
        console.log("**** In If ****")
        for (let idx = 0; idx < cc.length-4; idx++) {
            cc[idx] = "#";
        }        
    }
    return cc;
}

console.log("maskify 4556364607935616:", maskify("4556364607935616"));
