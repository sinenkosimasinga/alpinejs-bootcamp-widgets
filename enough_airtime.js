
function enoughAirtime (item, airtime){
    //var item = 'call,call,call,data,sms,sms,call,data';
    let count = 0;
    var newItem = item.split(",");
    for (var i=0; i<newItem.length; i++){
      var currentItem = newItem[i].trim();
      if(!item){
        return "please enter string e.g: call,sms,call and amount below"
      }
      else if (currentItem.startsWith("s")){
        count += 0.75;
      }else if(currentItem.startsWith("d")){
        count +=12;
      }else if(currentItem.startsWith("c")){
        count += 1.88; //count = count +2.75;
      }
    }
    var result =airtime-count;
    var sum = (count > airtime) ? 'R0.00': 'R' + result.toFixed(2)
    return sum;
  }
  //var rr = enoughAirtime ('data,sms,data,sms', 30)
  //console.log(rr)
  //.......................End of Enough airtime?......................//