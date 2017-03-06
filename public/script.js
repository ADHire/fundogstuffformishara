$(document).ready(function() {

  $.get('/ab', function(response) {
    console.log(response);
    var doggy = response;

    $('body').append("<img src=" + doggy + ">");

  });

});
