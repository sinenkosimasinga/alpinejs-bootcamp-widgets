
var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];
function findItemsOver20(itemList){
  	var arr =[];
	for(var i=0;i<itemList.length;i++){
    	var listItem = itemList[i];
      if (listItem.qty> 20){
        arr.push(listItem)
      }
    }
  return arr
}
console.log(findItemsOver20(itemList))

var itemList = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];
function findItemsOver(itemList,threshold){
  var arr2 =[];
  for(var i=0;i<itemList.length;i++){
    	var listItem = itemList[i];
      if (listItem.qty> threshold){
        arr2.push(listItem)
      }
    }
  return arr2
}
console.log(findItemsOver(itemList,0))
//...............................End of Expensive items..............//