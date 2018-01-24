$(document).ready(function () {

    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('#defaultCountdown').countdown({ until: austDay, format: 'odHMS' });
        $('#year').text(austDay.getFullYear());
    });

    var wow = new WOW({
        mobile: false
    });
    wow.init();


    // Form Validation
    $(function () {

        $('.form-control').blur(function () {
            var x = document.forms["myForm"]["email"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                $(this).parent().find(".alert.alert-danger").fadeIn(200);
            }
            else {
                $(this).parent().find(".alert.alert-success").fadeIn(200);
            }
        });

        $('.form-control').blur(function () {
            var x = document.forms["myForm2"]["email2"].value;
            var atpos = x.indexOf("@");
            var dotpos = x.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
                $(this).parent().find(".alert.alert-danger").fadeIn(200);
            }
            else {
                $(this).parent().find(".alert.alert-success").fadeIn(200);
            }
        });
    });
});