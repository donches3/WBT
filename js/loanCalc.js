// LoanCalc Page JS File


$(document).ready(function() {

    $("#loanCalc").accrue({

        mode: "amortization"

    });

    $('#amortButton').click(function() {

        $('#amortButton').toggleClass("hideSchedule", "showSchedule");

        $('#amortization').slideToggle();



    });


});
