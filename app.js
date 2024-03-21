

//      Quick Question #1
//      What does the following code return?
// new Set([1,1,2,2,3,4])              

//      [ 1 , 2 , 3 , 4 ] 






//      Quick Question #2
//      What does the following code return?
[...new Set("referee")].join("")

//      [ "ref" ]






//      Quick Questions #3
//      What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);           
m.set([1,2,3], false);

//  { [1,2,3] => true , [1,2,3] => false }








function hasDuplicate(arr){
    const removeDupes =  [ ...new Set(arr) ];
    if (removeDupes.length < arr.length ){
        return true ;
    }
    return false ;
}

console.log(hasDuplicate([1,2,3,1,1])) //   true
console.log(hasDuplicate([1,2,3,4,5])) //   false










function vowelCount(str){
    const vowels = 'aeiouAEIOU' ;
    const vowelMap = new Map() ;

    [...str].forEach((char ) => {
        if (vowels.includes(char)) {
            const count = vowelMap.get(char) || 0 ;
            vowelMap.set( char , count + 1 );
        }
    });
    return vowelMap 
}

console.log(vowelCount('Hello'));   //  Map(2) {'e' => 1, 'o' => 1}