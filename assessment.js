//sum zero
function sumZero(array){
    for(i=0; i<array.length; i++){
        for (j=1; j<array.length; j++){
            if (array[i] + array[j] == 0){
                return true
            }
        }
    }
    return false
}
console.log(sumZero([1, 2, -2, 3, 4, 5, 6, -6]))
// O(n^2) loop inside of loop, both traverse the array 
//kind of slow

//uniquechar
function unique(word){
    let amount = new Set(word).size;
    if(amount === word.length){
        return true
    }
    else{
        return false
    }
}
console.log(unique('pringle'))
// O(n), create set from string, need to iterate over the string
//pretty fast

//pangram sentence
function isPangram(string) {
    var regex = /([a-z])(?!.*\1)/g;
    return (string.match(regex) || []).length === 26;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog!'))
// O(n) regex against a string
//seems fast

//longest word

function longWord(list){
    let word = 0
for(i=0; i<list.length; i++){
    if (word < list[i].length){
        word = list[i].length}
    }
    return word;
}
console.log(longWord(['pringle', 'bubberducky', 'cat']))

// O(n), loops thru array
// pretty short run time