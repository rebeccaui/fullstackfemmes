//Of course I can code this more programatically, but this seems good to me.
$(document).ready(function() {
    console.log("I'm a real boy!!!");
    $('.send').click(function() {
        console.log("Sending");
        console.log(this);
        $('.message, .send').addClass('disappearing');
        setTimeout(function() {
            console.log("first ST");
            $('#plate').removeClass('front');
            $('#plane-container').removeClass('beginning');
            $('.curvable').addClass('curved');
            setTimeout(function() {
                console.log("second ST");
                $('#plane-container').addClass('hover');
                setTimeout(function() {
                    console.log("third ST");
                    $('#plane-container').addClass('fly_away_first');
                    setTimeout(function() {
                        console.log("fourth ST");
                        $('#plane-container').addClass('fly_away');
                        setTimeout(function(){
                            console.log("fifth ST");
                            $('#plate').addClass('front');
                            $('#plane-container').removeClass('fly_away fly_away_first hover').addClass('beginning');
                            $('.message, .send').removeClass('disappearing');
                            $('.curvable').removeClass('curved');
                        },3000);
                    }, 600);
                }, 2000);
            }, 2800);
        }, 200);
    });

});