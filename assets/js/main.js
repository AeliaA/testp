// ----------RESPONSIVE NAVIGATION----------

      var navigation = responsiveNav('.nav-collapse', {
            transition: 400,
            insert: 'after'
        });

// ----------NAVIGATION SCROLL TOP----------

    $(function(){
        $(window).on('scroll', function(){
            if ( $(this).scrollTop() < 220 ) {
                    $('.navigation').removeClass('sticky');
                } else {
                    $('.navigation').addClass('sticky');
                    
                }   
                console.log($(this).scrollTop());
        });
    });
    
// ----------SLIDER----------

$(function() {
            $(".rslides").responsiveSlides({
                auto: true,             // Boolean: Animate automatically, true or false
                speed: 1200,            // Integer: Speed of the transition, in milliseconds
                timeout: 4800,          // Integer: Time between slide transitions, in milliseconds
                pager: true,            // Boolean: Show pager, true or false
                nav: true,              // Boolean: Show navigation, true or false
                random: false,          // Boolean: Randomize the order of the slides, true or false
                pause: false,           // Boolean: Pause on hover, true or false
                pauseControls: false,   // Boolean: Pause when hovering controls, true or false
                prevText: '&#8592;',    // String: Text for the "previous" button
                nextText: '&#8594;',    // String: Text for the "next" button
                maxwidth: '',           // Integer: Max-width of the slideshow, in pixels
                navContainer: '',       // Selector: Where auto generated controls should be appended to, default is after the <ul>
                manualControls: '',     // Selector: Declare custom pager navigation
                namespace: 'rslides',   // String: change the default namespace used
                before: function () {}, // Function: Before callback
                after: function () {}   // Function: After callback
            });
        });

// // ----------GRAPH----------

// (function() {

//  var dataset = [140, 80, 75, 69, 111, 55];

//  d3.select('body').selectAll('div')
//     .data(dataset)
//     .enter()
//     .append('div')
//     .attr('class', 'bar')
//     .style('height', function(d) {
//         return d + 'px';
// });

// })();

// ----------ACTIVE MENU ITEM----------

$("nav li").click(function ( e ) {
    e.preventDefault();
    $("nav li a.active").removeClass("active"); //Remove any "active" class  
    $("a", this).addClass("active"); //Add "active" class to selected tab  

    // $(activeTab).show(); //Fade in the active content  
});