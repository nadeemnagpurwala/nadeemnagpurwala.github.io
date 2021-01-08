/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */

(function($){"use strict";$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$("[name="+this.hash.slice(1)+"]");if(target.length){$("html, body").animate({scrollTop:target.offset().top,},1000,"easeInOutExpo");return!1}}});$(".js-scroll-trigger").click(function(){$(".navbar-collapse").collapse("hide")});$("body").scrollspy({target:"#sideNav",})})(jQuery)

let yearsofExperience = new Date().getFullYear() - new Date(2017,10,1).getFullYear() - 1;
jQuery('#experience').html(yearsofExperience);
