//wrap in document.ready 
jQuery(document).ready(function ($) {

     // Call Gridder
    $(".gridder").gridderExpander({
        scrollOffset: 60,
        scrollTo: "panel", // "panel" or "listitem"
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        onStart: function () {
            console.log("Gridder Inititialized");
            },
        onExpanded: function (object) {
            console.log("Gridder Expanded");
            $(".carousel").carousel();
            },
        onChanged: function (object) {
            console.log("Gridder Changed");
            },
        onClosed: function () {
            console.log("Gridder Closed");
                        
                    }
                });
            });

(function($) {
    $(document).ready(function() {
        $.slidebars();
    });
    }) (jQuery);



/*var table = document.getElementsByClassName("table-one");

for (var i = 0; i < table.length ; i++) {
    table[i];
}

var goTo = function () {
    location.href = document.getElementById('link_id').value;
}*/