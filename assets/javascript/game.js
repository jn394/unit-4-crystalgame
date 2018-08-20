$(document).ready(function () {

    var winCount = 0;
    var loseCount = 0;
    var score = 0;

    //A function that randomizes all the numbers
    function myRandom() {
        $("#random-number").val(Math.floor(Math.random() * (120 - 19 + 1)) + 19);
        $("#button1").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        $("#button2").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        $("#button3").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
        $("#button4").val(Math.floor(Math.random() * (12 - 1 + 1)) + 1);
    }

    myRandom();

    //Sets the target value to a number and puts the wins/loses/score on HTML
    var targetValue = parseInt($("#random-number").val());
    $("#random-number").text(targetValue);
    $("#wins").text(winCount);
    $("#loses").text(loseCount);
    $("#score").text(score);

    //Checks if it works
    console.log(typeof targetValue); 
    console.log($("#button1").val());
    console.log($("#button2").val());
    console.log($("#button3").val());
    console.log($("#button4").val());

    //A function that resets the game
    function myReset() {
        targetValue = parseInt($("#random-number").val());
        $("#random-number").text(targetValue);
        score = 0;
        $("#score").text(score);
        myRandom()
    }

    //A function that checks win/lose and then resets the game
    function didIwin() {
        if (score == targetValue) {
            winCount = winCount + 1;
            alert("i won");
            $("#wins").text(winCount);

            //Resets the game
            myReset();

            //Checks if it works
            console.log(typeof targetValue); 
            console.log($("#button1").val());
            console.log($("#button2").val());
            console.log($("#button3").val());
            console.log($("#button4").val());
        }

        else if (score > targetValue) {
            loseCount = loseCount + 1;
            alert("i lost");
            $("#loses").text(loseCount);

            //Resets the game
            myReset();

            //Checks if it works
            console.log(typeof targetValue); 
            console.log($("#button1").val());
            console.log($("#button2").val());
            console.log($("#button3").val());
            console.log($("#button4").val());
        };
    };

    //Buttons with on click event listeners
    $("#button1").on("click", function () {
        score += parseInt($(this).val());
        $("#score").text(score);
        didIwin()
    })

    $("#button2").on("click", function () {
        score += parseInt($(this).val());
        $("#score").text(score);
        didIwin()
    })

    $("#button3").on("click", function () {
        score += parseInt($(this).val());
        $("#score").text(score);
        didIwin()
    })

    $("#button4").on("click", function () {
        score += parseInt($(this).val());
        $("#score").text(score);
        didIwin()
    })


});