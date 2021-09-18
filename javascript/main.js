
let mystring = "576";
// let stringArr = mystring.split("");
// let ascending = stringArr.sort((a,b) => b - a);
// console.log(ascending)
// let remove = ascending.toLocaleString()
// console.log(remove)
// let change = ascending.toString();
// console.log(change)
// let arr = []
let arr = [];
// const arrange = (a,b) => {
    

// }

for(let i = 0; i < mystring.length; i++){
    // arr.push(mystring[i])
let index = i;
let numbers = {
    id: 1,
    number: mystring[i]
}
numbers.id = i;

arr.push(numbers)
 index = i + 1;
 index--;
// console.log(mystring[i])
// console.log(mystring[index])
}

// console.log(arr)

let result = []

if(arr[0].number > arr[1].number && arr[0].number > arr[2].number && arr[1].number > arr[2].number){
    result.push(arr)
} if(arr[0].number > arr[1].number && arr[0].number < arr[2].number) {
    result[0] = arr[2]
    result[1] = arr[0]
    result[2] = arr[1]
} if(arr[0].number < arr[1].number && arr[0].number < arr[2].number && arr[1] > arr[2]){
    result[0] = arr[1]
    result[1] = arr[2]
    result[2] = arr[0]
} if(arr[0].number > arr[1].number && arr[0].number > arr[0].number && arr[1].number < arr[2].number){
    result[0] = arr[0]
    result[1] = arr[2]
    result[2] = arr[1]
}
//  if(arr[1].number > arr[0].number && arr[1].number > arr[2].number){
//     result[0] = arr[1]
// } if(arr[1].number > arr[0].number && arr[1].number < arr[2].number){
//     result[1] = arr[1]
// } if(arr[1].number < arr[0].number && arr[1].number < arr[2].number){
//    result[2] = arr[1]
// } if(arr[2].number > arr[1].number && arr[2].number > arr[0].number){
//     result[0] = arr[2]
// } if(arr[2].number > arr[1].number && arr[2].number < arr[0].number){
//     result[1] = arr[2]
// } if(arr[2].number < arr[1].number && arr[2].number < arr[0].number){
//     result[2] = arr[2]
// }

// console.log(result)

let sorting = 123;
let numArr = []
for(let k = 0; k < sorting.length; k++) {
    console.log(sorting[k])
    numArr.push(sorting[k])
}
let newString = sorting.toLocaleString()
let d = sorting.toString()
console.log(d)
console.log(newString)
let s = 'ddfjks'

// console.log(f)

let a = "1,3,4,1,3,4"
let splitA = a.split(",")
console.log(splitA)
for(let i = 0; i < splitA.length; i++){
    // splitA[i] = +splitA[i]   //same as
    splitA[i] = parseInt(splitA[i], 20) 
    
}
console.log(splitA)


let greetings = "good morning developers"

let greetArr = []
let good = []
let mn =[]
let dv = []
let text = ""
let text2 = ''
let final = []
let textArr =[]

function show(greetings) {
    let me = ""
    for(let i = 0; i < greetings.length; i++) {
        if(i < 4){
            
            // good.push(greetings[i])
            me += greetings[i]
            return me;
            // // text = good[0] + good[1] + good[2] + good[3]
            // for(let k = 0; k < good.length; k++) {
            //     // if(k > 1) {
            //         text += good[k] 
            //     // }
            //     // text = text + good[k]
            //     // textArr.push(text += good[k])
            // }
            // return text
            // //  console.log(good.length)
            
    
        } if(i > 4 && i < 12){
            mn.push(greetings[i])
            
        }if(i > 12){
            dv.push(greetings[i])
             text2 = dv
        }
        greetArr.push(greetings[i])
    }
}

console.log(show(greetings))
final.push(text)
// console.log(greetings)
// console.log(greetArr)
// console.log(good)
// console.log(mn)
// console.log(text)
// console.log(final)
// console.log(textArr)
// console.log(greetings[i].length)
// console.log(text2)

// console.log(dv)
// let h = []
// h.push(good)
// h.push(mn)
// h.push(dv)
// console.log(h)
// console.log(g)

// let text = ["this is good"]
// let t = text[0]
// console.log(t)

let revs = "good morning developers"
// rev(revs)
console.log(rev(revs))

function rev(str) {
    ma =""
    man = ""
    man1 = ""
    man2 = ""
    let non = []
    let result = []
    // for(let i = str.length -1; i >= 0; i--) {
        for(let i = 0; i <str.length; i++){
         ma += str[i]
         non.push(str[i])
         if(i < 4){
             man += str[i]
            
         } if(i > 4 && i < 12) {
             man1 += str[i]
            
         } if(i > 12) {
             man2 += str[i]
             
         }
    }
    result.push(man)
    result.push(man1)
    result.push(man2)
    console.log(non)
    return result;
}
