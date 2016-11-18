// LoanCalc Page JS File


$(document).ready(function() {

    $("#loanCalc").accrue({

        mode: "amortization"

    });

    $('#amortButton').click(function() {

        $('#amortization').slideToggle();

        $('#amortButton').toggleClass('.hideSchedule');

    });


});
