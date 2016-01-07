; (function ($) {
  $.fn.rotator = function (options) {
    var defaults = {
      container: '.rotator-wrapper',
      animationDuration: 1000,
      slideWidth: 960
    };

    var mergedOptions = $.extend(defaults, options);

    var slideCount = 0;
    var element = $(this);
    var pageIndex = 0;
    var sliderContainer = null;
    var preBtn = null;
    var nextBtn = null;

    init();

    function init() {
      preBtn = element.find("a.prev");
      nextBtn = element.find("a.next");
      sliderContainer = element.find(mergedOptions.container);
      slideCount = sliderContainer.children().children().length;
      sliderContainer.children().width(mergedOptions.slideWidth * slideCount);
      bindEvents();
      updatePager();
    }

    function bindEvents() {
      preBtn.on("click", prev);
      nextBtn.on("click", next);
    }

    function prev(e) {
      e.preventDefault();
      if (pageIndex < slideCount) {
        pageIndex--;
        sliderContainer.children().animate({
          left: "+=" + mergedOptions.slideWidth
        }, mergedOptions.animationDuration);
      }

      updatePager();
    }

    function next(e) {
      e.preventDefault();
      if (pageIndex >= 0 && pageIndex < slideCount - 1) {
        pageIndex++;
        sliderContainer.children().animate({
          left: "-=" + mergedOptions.slideWidth
        }, mergedOptions.animationDuration);
      }

      updatePager();
    }

    function updatePager() {
      if (pageIndex >= slideCount - 1) {
        nextBtn.hide();
      } else {
        nextBtn.show();
      }

      if (pageIndex <= 0) {
        preBtn.hide();
      } else {
        preBtn.show();
      }
    }


    return $(this);
  };
})(jQuery);