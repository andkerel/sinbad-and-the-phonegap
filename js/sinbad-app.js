appRun();

function appRun() {

    $(document).ready(function() {
        console.log("READY");

        $(".loading").hide();
        $(".complete").show();

    //PAGE SWIPES
    $(document).on('pageinit', function(event){
        $('.pages').on("swipeleft", function () {
            var nextpage = $(this).next('div[data-role="page"]');
            if (nextpage.length > 0) {
                $.mobile.changePage(nextpage, {transition: "slide", changeHash:false });
            }
        });

        $('.pages').on("swiperight", function () {
            var prevpage = $(this).prev('div[data-role="page"]');
            if (prevpage.length > 0) {
                $.mobile.changePage(prevpage, { transition: "slide", reverse: true, changeHash: false });
            }
        });
    });



    }); 

}