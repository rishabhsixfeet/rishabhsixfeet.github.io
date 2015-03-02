$(document).ready(function() {
    	
    $("#sizeSelector label").click(function(){
        $(this).parent().parent().find("label").css({
            'color' : '#333',
          'background-color' : '#fff'
        });
        $(this).css({
           'background-color' : '#428bca',
           'color' : '#fff'
        });
    })

    $("#positionSelectorPlayer label").click(function(){
        $(this).parent().parent().find("label").css({
            'color' : '#333',
          'background-color' : '#fff'
        });
        $(this).css({
           'background-color' : '#428bca',
           'color' : '#fff'
        });
    })

    $("#positionBarChartSelector label").click(function(){
        $(this).parent().parent().find("label").css({
            'color' : '#333',
            'background-color' : '#fff'
        });
        $(this).css({
           'background-color' : '#428bca',
           'color' : '#fff'
        });
    })

});
