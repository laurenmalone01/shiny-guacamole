//$ = jquery's way of naming stuff
//$(...) = what's inside () is the "object" we are messing with
// .ready() = method of $jQ
// .ready(...) = argument/parameter passed to that method
// function(){} in the method is an IIFE = Immediate Invoked F/n Expression
$(document).ready(function(){ 
  //alert("page is ready");
  console.log("doc is ready");

    let $start_counter = $( "#event-start" );
      counts = [ 0, 0, 0 ];
      updateCounterStatus = 0;


$( "#dogeDiv" ).draggable(
  {
    start: function() {
      counts[ 0 ]++;
      //updateCounterStatus( $start_counter, counts[ 0 ] );
      console.log(counts[0]);
    }
});


$("#dogePic").draggable();


  let userGreeting = "You are enough, ";
  
  $("button").click(function(){
    userGreeting = userGreeting + $("#fname").val() + "...just as you are.";
    
    $("#greetingOutput").text(userGreeting);
    
    
    //console.log($("#fname").val());


    
  });
});