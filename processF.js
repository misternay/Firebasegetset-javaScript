var genNumber="";
firebase.database().ref('Code').once('value').then(function(snapshot) {
       username = snapshot.val();
       genNumber=username.genNumber;
        console.log(genNumber);
});
function checkValidate(genNumber){
  var input = document.getElementById('inputKey');
  if(input.value==genNumber){
    alert("ยืนยันเรียบร้อยแล้ว");
    alert("ประตูกำลังเปิด");
    firebase.database().ref('Code/status').set(1);
  }else {
    alert("ยืนยันผิดพลาด กรุณาลองใหม่อีกที");
    firebase.database().ref('Code/status').set(0);
  }
}
function runWhenClick(){
  checkValidate(genNumber);
}
