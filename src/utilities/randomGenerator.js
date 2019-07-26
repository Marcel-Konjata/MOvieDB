const generateRandom3Indexes = array => {
    const uniqueRandoms = [];
    for (let i = 0; i < 3; i++) {
       const randomNumber = Math.floor(Math.random() * array.length);
       let isUnique = true;
       if (i === 0) {
          uniqueRandoms.push(randomNumber);
       } else {
           // for each number iterate backwards for checking rest of loop
           // j-1 is basicaly nearest previous nubmer, that means at second number check 1st
          for (let j = i; j >= 0; j--) {
             if (uniqueRandoms[j - 1] === randomNumber) {
                isUnique = false;
             }
          }
          if (isUnique === true) {
             uniqueRandoms.push(randomNumber);
          }
       }
       if (isUnique === false) {
          // undo iteration if the number is not unique
          //reverse aproach would be not define increment and switch false to true and than incrementing
          i--;
       }
    }
    return uniqueRandoms;
 };
 
 
 export default generateRandom3Indexes;