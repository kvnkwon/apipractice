$(document).ready(function(){

  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });

  function getRequest(searchTerm){
    var url = 'http://www.omdbapi.com';
    var params = {
      s: searchTerm,
      r: 'json'
    };

    $.getJSON(url, params, function(data){
    //Receive data from the server. The request is passed to the function as a parameter.
      showResults(data.Search); //data.Search isolates just the Search array.
    });
  }

  function showResults(results){
    var html = "";
    for(var i=0,j=results.length;i<j;i++) {
      html += '<p>' + results[i].Title + '</p>';
    }
    $('#search-results').html(html);
  }

});