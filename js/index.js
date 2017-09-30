var quote = '';
var author ='';

$(document).ready(function() {
  getQuote();
  $('#next-quote').on('click', getQuote);
   $('#tweet-quote').on('click', function() {
 window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + author));
  });
});

function getQuote() {
  $.ajax({
    jsonp: 'jsonp',
    dataType: 'jsonp',
    url: 'https://api.forismatic.com/api/1.0/',
    contentType: 'application/jsonp',
    data: {
      lang: 'en',
      method: 'getQuote',
      format: 'jsonp'
    },
    success: function(data) {
      quote = data.quoteText;
      author = data.quoteAuthor;
      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#text').text(data.quoteText);
        });
      $('#author').html(data.quoteAuthor);
    }

  });
}