$(document).ready(function(){

var webAddress = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
document.getElementById("buttonid").addEventListener("click", function( event){
  $.ajax({
    url: webAddress,
    dataType: "jsonp",
    success: function(res) {

      $("#message").text(res.quoteText);
      
      if (res.quoteAuthor) {
        $("#author").text("- " + res.quoteAuthor);
      } 
      else
        $("#author").text("- " + "Unknown");
    },
    error: function(xhr, status, error) {
		$("#message").text("Error");
		$("#author").text("Error");
	}
  });
}, false);

});


