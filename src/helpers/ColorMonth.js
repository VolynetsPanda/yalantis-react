/**
 * Condition by number of people
 * @param count
 * @returns {string}
 * @constructor
 */
export const ColorMonth = (count) => {
    let color = "";
    if (count<=2) color='grey'
    else if(count>=3 && count<=6) color='blue'
    else if(count>=7 && count<=10) color='green'
    else if(count>=11) color='red'
    return color;
}
