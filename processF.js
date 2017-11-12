var genNumber="";
firebase.database().ref('Code').once('value').then(function(snapshot) {
       username = snapshot.val();
       genNumber=username.genNumber;
        console.log(genNumber);
});
function checkValidate(genNumber){
  var input = document.getElementById('inputKey');
  if(input.value==genNumber){
    alert("Corrected");
    firebase.database().ref('Code/status').set(1);
  }else {
    alert("KEY FAILED!");
    alert("Plesase Input Again!");
  }
}
function runWhenClick(){
  checkValidate(genNumber);
}
