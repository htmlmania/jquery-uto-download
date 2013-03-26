(function ($) {

    $.fn.autodownload = function (options) {
        var settings = $.extend({
            'delay': 5,
            'wraperclass': 'autodowload',
            'countdownclass': 'countdown'
        }, options);

        var delay = settings["delay"], wraperclass = settings["wraperclass"], countdownclass = settings["countdownclass"], obj = $(this)

        return this.each(function () {
            obj.wrap(function () {
                return "<div class=\"" + wraperclass + "\"></div>"
            });
            obj.after(function () {
                return "<div class=\"" + countdownclass + "\"><p style=\"width: 100%; text-align: center;\"></p></div>"
            });
            var count = delay
            var interfal = setInterval(function () {
                if (count == 0) {
                    obj.after("<iframe src=\"" + obj.attr("href") + "\" width=\"0\" height=\"0\"></iframe>");
                    clearInterval(interfal);
                    obj.parent().find("div p").html("Download should be starting. If not <a href=\"" + obj.attr("href") + "\">click here</a>")
                } else {
                    obj.parent().find("div p").html(count + " seconds to download")
                }
                count--
            }, 1000);
        });
    }

})(jQuery);