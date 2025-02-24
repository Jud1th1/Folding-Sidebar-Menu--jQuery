//really nice beneifts of jQuery for this assignemtn is we have helper functions so we don't need to write if..else statments and we also do not need to use loops 

(function(){
    "use strict";

    $('ul li ul').hide()

    $('.menulink').click(function(){
            const thisMenu = $(this).next('ul');

            $('ul li ul').not(thisMenu).hide(); 

            thisMenu.toggle();
        });


     
        
    //$("h2").css({ "font-size": "24px", "color": "red" });
        
    //$("h2").css("font-size:24px", ).css("color:red");
        
    //$("h2").css("font-size", "24px").css("color", "red");
        
         
})();