$( document ).ready(function() {
    $('#feedback').click(() => {
        $('.feedback_wrapper').addClass('open');
      });
      $('.close-button').click(() => {
        $('.feedback_wrapper').removeClass('open');
      });
      $('.mobile_menu-button').click(() => {
        $('.mobile_menu-list').addClass('open_menu');
      });
      $('.close_button').click(() => {
        $('.mobile_menu-list').removeClass('open_menu');
      });
});
