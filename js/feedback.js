$( document ).ready(function() {
    $('#feedback').click(() => {
        $('.feedback_wrapper').addClass('open');
      });
      $('.close-button').click(() => {
        $('.feedback_wrapper').removeClass('open');
      });
});
