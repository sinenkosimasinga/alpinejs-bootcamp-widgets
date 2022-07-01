
function longestWord(str) {
    var wordArray = str.split(' ')
    var maxLength = 0
    var result = ''

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length >= maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}

function shortestWord(str1){
    var wordArray = str1.split(' ')
    //var manLength = 0
    var result = wordArray[0]

    for (var i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length <= result.length) {
            //result = wordArray[i].length
            result = wordArray[i]
        }
    }
    return result
}
function wordLengths(str){
  var mystr = str.split(" ");
  var len= mystr.map(w => w.length);
  let sum = 0;

	for (let i = 0; i < len.length; i++) {
     sum += len[i];
}
  return sum;
}

//...........................End of Word game...............................//