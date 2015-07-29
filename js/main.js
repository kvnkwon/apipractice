$(document).ready(function(){

  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  //Receive data from the server. The request is passed to the function as a parameter.
    console.log(data);
  });

});