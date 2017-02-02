let myArr = [1, 2, 3]
let newArr = []

function sumArr (myArr) {
    for (let i = 0; i <= 2; i++){
        myArr[i] += 2;
        newArr.push(myArr[i])
    }
}

sumArr(myArr)
console.log(newArr)

