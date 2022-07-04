
function totalPhoneBill(item){
    let count = 0;
    var newItem = item.split(",");
    for (var i=0; i<newItem.length; i++){
      var currentItem = newItem[i].trim();
      if(!item){
        return "please enter string e.g: call,sms."
      }
      else if (currentItem.startsWith("s")){
        count += 0.65;
      }else{
        count += 2.75; //count = count +2.75;
      }
    }
    return "R"+count.toFixed(2);
    //console.log("R"+count.toFixed(2))
  }
  //......................End of Total phone bill......................//