// for radio buttons; value="10" for correct, value="0" for wrong

//BUSINESS LOGIC : DRY CODE
var score = 0;
var complete = 0;
var calculate = function(){
  for (i = 1; i <= 5; i++) {
    var response = $("input:radio[name=js"+i+"]:checked").val();
    score += parseInt(response);
    if (response != undefined) {
      complete += 1
    }
  } // end for
}// END BUSINESS LOGIC

// USER INTERFACE
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    calculate();
    var message = ""
    var remark =""
    if (complete === 5) {
      message = "Your score is:";
      $("#display").text(score+"%").fadeIn();
      if (score <= 20) {
        $("#remark").append("<img src='images/bad.png' alt='Bad'>");
      } else if (score <= 60) {
        $("#remark").append("<img src='images/average.png' alt='Average'>");
      } else if (score <= 80) {
        $("#remark").append("<img src='images/good.png' alt='Good'>");
      } else {
        $("#remark").append("<img src='images/excellent.png' alt='Excellent!'>");
      }
    } else {
      message = "Please answer all the questions and submit again!";
    }
    $("#message").text(message);
    $(".carousel").remove();
    $("button.bg-success").fadeOut("slow");
    $("div.your-score").slideUp(50);
    $("div.your-score").slideDown(1500);
  }) // end submit
}) //END USER INTERFACE
function reload() {
  location.reload();
}
