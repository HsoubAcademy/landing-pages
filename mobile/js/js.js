$(document).ready(function() {
    
    var wow = new WOW({
        mobile:false
    });
    wow.init();

    $(function () {
        $("#emailForm").validate();
    });

});