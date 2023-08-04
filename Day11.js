function missingNum(input){
    for(let i=1;i<=10;i++){
        if (!(input.includes(i))){
            return i ;
        }
    }
}
console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));