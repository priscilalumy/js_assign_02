let myArr = [1, 'dog', 'one']
function arrayValues(element, index) {
  console.log(index + ':' + element);
}
console.log('index: value')
myArr.forEach(arrayValues)