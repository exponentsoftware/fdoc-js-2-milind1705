

// first want the first element of the array
function createArrayOfArrays(arr){
    var arrayOfArray = [];
    var  infoArray = [];
  for(let i =0; i < arr.length; i++){
    var word = arr[i];
    var wordLength = arr[i].length;
    var word1 = arr[i].substring(0,3);
    infoArray.push(word, word1, wordLength)
  }
  while (infoArray.length > 0) {
    var newArray = infoArray.splice(0, 3);
    arrayOfArray.push(newArray);
  }
  return arrayOfArray;
}





const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

  console.log(createArrayOfArrays(countries))