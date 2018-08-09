function randNDigits(repeat){
  let nDigits = 1;
  let randNum = 0;
  try{
    for(i=0;i<repeat;i++){
      nDigits *= 10;
    }
    do{
      randNum = Math.round(Math.random() * nDigits);
    }while(randNum < (nDigits/10));
    return randNum;
  }
  catch(exception){
    console.log(exception);
    return 0;
  }
}

function rand5Digits(){
  return randNDigits(5);
}

function rand36idx(){
  let randNum = Math.round(Math.random() * 100);
  return randNum % 36;
}

function randNChNum(num){
  let uId='';
  let chNNum = "abcdefghijklmnopqrstuvwxyz1234567890";// index 0 ~35
  let idx;
  for(i=0;i<num;i++){
    idx = rand36idx();
    uId += chNNum[idx];
  }
  return uId;
}

function randNNum(num){
  let aId = '';
  for(i=0;i<num;i++){
    aId += Math.round(Math.random() * 10);
  }
  return aId;
}

exports.randNDigits = randNDigits;
exports.rand5Digits = rand5Digits;
exports.randNChNum = randNChNum;
exports.randNNum = randNNum;
