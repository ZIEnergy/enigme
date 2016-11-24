if ($(window).width() < 1140) {
  $(function () {
    $(window).bind('resize', function () {
        resizeMe();
    }).trigger('resize');
  });
};




var resizeMe = function () {
    //Standard width, for which the body font size is correct
    var preferredWidth = 1230;
    //Base font size for the page
    var fontsize = 10;

    var displayWidth = $(window).width();
    var percentage = displayWidth / preferredWidth;
    var newFontSize = fontsize * percentage;
    $("html").css("font-size", newFontSize);
}