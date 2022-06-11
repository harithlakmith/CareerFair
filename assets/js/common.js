
// Set the date we're counting down to
/*var countDownDate = new Date("May 27, 2022 21:00:00").getTime();


// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("tronicElextron").innerHTML ="Open in : "+ days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("tronicElextron").style.color="red";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("tronicElextron").style.color="gray";
    document.getElementById("tronicElextron").innerHTML = "Deadline : 12:59 PM 31/05/2022";
    document.getElementById("elextronButton").classList.remove('disabled');
  }

}, 1000);*/


// Set the date we're counting down to
var countDownDate1 = new Date("Jun 07, 2022 08:00:00").getTime();
var countDownDate2 = new Date("Jun 12, 2022 23:59:59").getTime();


// Update the count down every 1 second
var y = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var dist = countDownDate1 - now;
  var dist2 = countDownDate2 - now;

    
  // If the count down is over, write some text 
  if (dist < 0) {
    clearInterval(y);
    
    document.getElementById("dead1").classList.add('disabled');
    document.getElementById("dead2").classList.add('disabled');
    document.getElementById("dead3").classList.add('disabled');
  }

  if (dist2 < 0) {
    clearInterval(y);
    
    document.getElementById("dead4").classList.add('disabled');
    document.getElementById("dead5").classList.add('disabled');
    document.getElementById("dead6").classList.add('disabled');
    
  }

}, 1000);


