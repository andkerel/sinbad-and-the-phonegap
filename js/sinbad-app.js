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

        //DRAG AND DROP

        //initialize dragging
        $("#watercolor").draggable( {
            revert: true,
            cursor: 'move',
        } );
        $("#leaves").draggable( {
            revert: true,
            cursor: 'move',
        } );
        $("#bubbles").draggable( {
            revert: true,
            cursor: 'move',
        } );

        //initialize droppable callback
        $("#spritesheet").droppable({
            tolerance: "pointer",
            drop: sinbadChange
        });

        //event handler for drop event
        function sinbadChange(event, ui) {
            var currentBrush = ui.draggable.attr('id');
            if (currentBrush == "watercolor") {
                $("#spritesheet").removeClass();
                $("#spritesheet").addClass("brushfish");
            } else if (currentBrush == "leaves") {
                $("#spritesheet").removeClass();
                $("#spritesheet").addClass("leaffish");
            } else if (currentBrush == "bubbles") {
                $("#spritesheet").removeClass();
                $("#spritesheet").addClass("bubblefish");
            } else {
                $("#spritesheet").removeClass();
                $("#spritesheet").addClass("plainfish");
            }
        } 

    }); //end document ready event

} //end appRun