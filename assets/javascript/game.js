
$(document).ready(function () {

    var newRandomNumber = Math.floor(Math.random() * 102) + 19;

    var aRandomNumber = Math.floor(Math.random() * 12) + 1;
    var bRandomNumber = Math.floor(Math.random() * 12) + 1;
    var cRandomNumber = Math.floor(Math.random() * 12) + 1;
    var dRandomNumber = Math.floor(Math.random() * 12) + 1;

    var wins = 0;
    var loses = 0;
    var userTotalNumber = 0;

    $("#currentpoints").text(newRandomNumber);

    // Crystal Button on click adds the respective random value to total points
    $("#crystala").on("click", function () {
        userTotalNumber = userTotalNumber + aRandomNumber;
        $("#finalscore").text(userTotalNumber);
        
        if (userTotalNumber === newRandomNumber) {
            wins++;
            $("#p1").text("Wins:   " + wins);
            reset();
            giveRandomNumber();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            $("#p2").text("Loses:   " + loses);
            reset();
            giveRandomNumber();
        }

    });

    $("#crystalb").on("click", function () {
        userTotalNumber = userTotalNumber + bRandomNumber;
        $("#finalscore").text(userTotalNumber);
        
        if (userTotalNumber === newRandomNumber) {
            wins++;
            $("#p1").text("Wins:   " + wins);
            reset();
            giveRandomNumber();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            $("#p2").text("Loses:   " + loses);
            reset();
            giveRandomNumber();
        }

    });

    $("#crystalc").on("click", function () {
        userTotalNumber = userTotalNumber + cRandomNumber;
        $("#finalscore").text(userTotalNumber);
        
        if (userTotalNumber === newRandomNumber) {
            wins++;
            $("#p1").text("Wins:   " + wins);
            reset();
            giveRandomNumber();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            $("#p2").text("Loses:   " + loses);
            reset();
            giveRandomNumber();
        }

    });

    $("#crystald").on("click", function () {
        userTotalNumber = userTotalNumber + dRandomNumber;
        $("#finalscore").text(userTotalNumber);
        
        if (userTotalNumber === newRandomNumber) {
            wins++;
            $("#p1").text("Wins:   " + wins);
            reset();
            giveRandomNumber();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            $("#p2").text("Loses:   " + loses);
            reset();
            giveRandomNumber();
        }

    });

    function reset() {
        userTotalNumber = 0;
        $('#finalscore').text(userTotalNumber);
    }

    function giveRandomNumber() {
        newRandomNumber = Math.floor(Math.random() * 102) + 19;
        aRandomNumber = Math.floor(Math.random() * 12) + 1;
        bRandomNumber = Math.floor(Math.random() * 12) + 1;
        cRandomNumber = Math.floor(Math.random() * 12) + 1;
        dRandomNumber = Math.floor(Math.random() * 12) + 1;
    }




    // When point total is greater than random total number, we lose

});

// When point total is equal to random total number, we win
//Total wins increment
//Total loses increment
//
//
//
//
//

















