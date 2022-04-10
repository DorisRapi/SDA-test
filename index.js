console.log("====Albani====");

const orderNumbers = [9, 1, 3, 7];

function sortNumbers(){
    orderNumbers.sort (function(a,b){
        return a-b;
    });
    return sortNumbers;
}

let sortedNumbers = sortNumbers(orderNumbers);
console.log(sortedNumbers);

let i;
for (i=0; i<sortedNumbers.length-1; i++){
    if(sortedNumbers[i+1] - sortedNumbers[i] !==1){
        console.log("false");
        break;
    }
}

if (i >= sortedNumbers.length-1){
    console.log("true");
}