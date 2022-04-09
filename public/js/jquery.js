jQuery('button').click(function(){
  jQuery('button').toggleClass('active');
  jQuery('.title').toggleClass('active');
  jQuery('nav').toggleClass('active');
});

var iphone= jQuery('#computer');
var camera= jQuery('#skills');
var about = jQuery('#about');
var work = jQuery('.icon-cards');
var header = jQuery('.container-header');

var layer= jQuery('#main');


layer.mousemove(function(e){
  if (jQuery(window).width() >= 800 ){
  var ivalueX= (e.pageX * -1 / 60);
  var ivalueY= (e.pageY * -1 / 60);
  var cvalueX= (e.pageX * -1 / 70);
  var cvalueY= (e.pageY * -1 / 90);
  iphone.css('transform', 'translate3d('+ivalueX+'px,'+ivalueY+'px, 0)');
  camera.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
  about.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
  work.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
  header.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
}
});



(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Jadan Jones
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = jQuery(window);

var allMods = jQuery(".module");

console.log("bbbb");
allMods.each(function(i, el) {
  var el = jQuery(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
    
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = jQuery(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    } 
  });
  
});

jQuery(document).ready(function(){       
        var scroll_pos = 0;
        var e = jQuery('.p-item1');
        var d = jQuery('.p-item2');
        jQuery(document).scroll(function() {
            scroll_pos = jQuery(this).scrollTop();
            if (jQuery(window).width() >= 1000 ){
            if(scroll_pos > 2500) {
                e.addClass("jj");
            } 

            if(scroll_pos < 2500) {
                e.removeClass("jj");
              }

            }
            else
            {
               if(scroll_pos > 900) {
                e.addClass("jj");
            } 

            if(scroll_pos < 900) {
                e.removeClass("jj");
              }
            }

            if(scroll_pos > 1000){
              d.addClass("op");
            }
            if(scroll_pos < 1000){
              d.removeClass("op");
            }
            
        });
    });

