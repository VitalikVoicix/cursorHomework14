const getmoda = (...numbers)=> {
    let newArr = numbers.filter(number => Number.isInteger(number))
    let mode, count = [], i, number, maxIndex = 0;
    for (i = 0; i < newArr.length; i++) {
        number = newArr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                mode=Number(i);
            }
        }
 
    return mode;
}
 export {getmoda};