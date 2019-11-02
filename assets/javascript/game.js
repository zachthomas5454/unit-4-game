
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
        console.log(userTotalNumber);

        if (userTotalNumber === newRandomNumber) {
            wins++;
            console.log(wins);
            $("#p1").text("Wins:   " + wins);
            reset();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            console.log(loses);
            $("#p2").text("Loses:   " + loses);
            reset();
        }

    });

    $("#crystalb").on("click", function () {
        userTotalNumber = userTotalNumber + bRandomNumber;
        $("#finalscore").text(userTotalNumber);
        console.log(userTotalNumber);

        if (userTotalNumber === newRandomNumber) {
            wins++;
            console.log(wins);
            $("#p1").text("Wins:   " + wins);
            reset();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            console.log(loses);
            $("#p2").text("Loses:   " + loses);
            reset();
        }

    });

    $("#crystalc").on("click", function () {
        userTotalNumber = userTotalNumber + cRandomNumber;
        $("#finalscore").text(userTotalNumber);
        console.log(userTotalNumber);

        if (userTotalNumber === newRandomNumber) {
            wins++;
            console.log("wins");
            $("#p1").text("Wins:   " + wins);
            reset();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            console.log("loses");
            $("#p2").text("Loses:   " + loses);
            reset();
        }

    });

    $("#crystald").on("click", function () {
        userTotalNumber = userTotalNumber + dRandomNumber;
        $("#finalscore").text(userTotalNumber);
        console.log(userTotalNumber);

        if (userTotalNumber === newRandomNumber) {
            wins++;
            console.log(wins);
            $("#p1").text("Wins:   " + wins);
            reset();
        }
        if (userTotalNumber > newRandomNumber) {
            loses++;
            console.log(loses);
            $("#p2").text("Loses:   " + loses);
            reset();
        }

    });

    function reset() {
        userTotalNumber = 0;
        $('#finalscore').text(userTotalNumber);
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

















