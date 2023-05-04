// https://www.codewars.com/kata/5aa736a455f906981800360d
// The Feast of Many Beasts
/*
All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's 
name. For example, the great blue heron is bringing garlic naan and the chickadee is 
bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns 
true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two 
letters. beast and dish may contain hyphens and spaces, but these will not appear at the 
beginning or end of the string. They will not contain numerals.
*/
// function feast(beast, dish){                            // First solution
//     return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]
// }

// function feast(beast, dish){                            // Second solution
//     // console.log(`beast: ${beast[0]} and dish: ${dish[0]}`)
//     for(let i = 0; i < 1; i++){
//         // console.log(`i is ${i}`)
//         if (beast[i] !== dish[i]){
//             // console.log(`beast: ${beast[i]} and dish: ${dish[i]}`)
//             return false
//         }
//     }
//     for(let j = beast.length-1; j > beast.length-2; j--){
//         // console.log(`j is ${j}`)
//         if( beast[j] !== dish[dish.length-1]){
//             return false
//         }
//     }
//     return true
// }


function feast(beast, dish){                                    // Learned solutions
    // return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length-1])
    return dish.slice(0,1) === beast.slice(0,1) && dish.slice(-1) === beast.slice(-1)
}



console.log(feast("great blue heron", "garlic naan"))
console.log(feast("chickadee", "chocolate cake"))
console.log(feast("brown bear", "bear claw"))
