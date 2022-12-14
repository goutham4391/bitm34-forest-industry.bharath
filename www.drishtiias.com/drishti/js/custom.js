
$(document).ready(function(){
    $('.anouncements-slider').slick({ autoplay: true, arrows: false });
    //
    $('.top-bar button[rel=close]').click(function(){
        $(this).parents('.top-bar').slideUp();
    });
    //
    $('button[rel=close-popup]').click(function(){
        $(this).parents('.popup-box').removeClass('open');
    });
    //
    $('.search a').click(function(){
        
        $('.search-popup').addClass('open');
        $("#search").focus();
        
    });
    //
    $('nav button').click(function(){
        $('nav button').toggleClass('opened');
        $('#menu').toggleClass('open');
        $('.overlay').toggleClass('active');
    });	
    //
    $(document).mouseup(function(e){
    	var container = $("#menu");
		if(!container.is(e.target) && container.has(e.target).length === 0){
			container.removeClass('open');
			container.prev().removeClass('active');
            $('nav button').removeClass('opened');
		}
	});
    $('a.fullmenu').click(function(){
        $('body').addClass('overflow');
        $('.megamenu').toggleClass('open');
        
    });
    $('.megamenu button.close-btn').click(function(){
        $('body').removeClass('overflow');
        $('.megamenu').toggleClass('open');
        
    });	
    //
    $('.description a.read-opening').click(function(){
        //$('.description a.read-opening').next().slideUp();
        $(this).next().slideToggle();
    });

    $('.after-login').click(function(){
        $('ul.top-links').slideToggle();
    });
	
	

});
if(screen.width > 1000){
    $('a.fullmenu').click(function(){
        $('.overlay').addClass('active');
    });
}
if(screen.width < 1000){
    $(document).ready(function(){
        $('a.toggle').click(function(){
            //$('a.toggle').next().slideUp('fast');
            $(this).next().slideToggle('fast');
            $(this).toggleClass('open');
        });
    });
    $('.make-note').click(function(){
        $('.make-note-sec').slideToggle();
    });
}

if(screen.width < 768){
    $(document).ready(function(){
        $('.footer-container h4').click(function(){
            //$('a.toggle').next().slideUp('fast');
            $(this).next().slideToggle('fast');
            $(this).toggleClass('open');
        });
    });
}

//button ripple effect
(function (window, $) {
  $(function() {
    $('.ripple').on('click', function (event) {
      //event.preventDefault();
      var $div = $('<div/>'),
      btnOffset = $(this).offset(),
      xPos = event.pageX - btnOffset.left,
      yPos = event.pageY - btnOffset.top;
      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");
      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));
      window.setTimeout(function(){
        $div.remove();
      }, 2000);
    });
  });
})(window, jQuery);

function team_tab(){
	$('.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
    $('.subtabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.subtabs li').removeClass('active');
		$('.subtab-content').removeClass('active');
		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
}

if(screen.width < 768){
    //$('.tab-content').removeClass('active');
    //$('.subtab-content').removeClass('active');
    $('.accordion-btn').click(function(){
        $(this).toggleClass('current');
	    $(this).next().slideToggle('active');
    });
    $('.sub-accordion-btn').click(function(){
        $(this).toggleClass('current');
	    $(this).next().slideToggle('active');
    });
}

function strip_tags (str, allowed_tags)
{

    var key = '', allowed = false;
    var matches = [];    var allowed_array = [];
    var allowed_tag = '';
    var i = 0;
    var k = '';
    var html = ''; 
    var replacer = function (search, replace, str) {
        return str.split(search).join(replace);
    };
    // Build allowes tags associative array
    if (allowed_tags) {
        allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
    }
    str += '';

    // Match tags
    matches = str.match(/(<\/?[\S][^>]*>)/gi);
    // Go through all HTML tags
    for (key in matches) {
        if (isNaN(key)) {
                // IE7 Hack
            continue;
        }

        // Save HTML tag
        html = matches[key].toString();
        // Is tag not in allowed list? Remove from str!
        allowed = false;

        // Go through all allowed tags
        for (k in allowed_array) {            // Init
            allowed_tag = allowed_array[k];
            i = -1;

            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
            if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
            if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}

            // Determine
            if (i == 0) {                allowed = true;
                break;
            }
        }
        if (!allowed) {
            str = replacer(html, "", str); // Custom replace. No regexing
        }
    }
    return str;
}
