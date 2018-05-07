var lastItemClicked = '';
$(document).ready(function () {

    var allPanels = $(".accordion").find(".card-body").hide();

    $(".accordion").children().find(".card-header > a").click(function () {
        
        allPanels.slideUp();
        
        if ($(this).text() != lastItemClicked) {
            $(this).parent().next().slideDown();

            // Solving double border problem
            $(".accordion").children().find(".card-body").css("border-top", "1px solid #7788999e");
            lastItemClicked = $(this).text();
        } else {            
            lastItemClicked = '';
        };
        return false;
    });

    $(".accordion").children().find(".card-header > a").mouseover(function()  {
        $(this).css("color", "red");
    })

    $(".accordion").children().find(".card-header > a").mouseout(function(){
        $(this).css("color", "blue");
    })

});