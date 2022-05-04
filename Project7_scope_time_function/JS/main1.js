
// Function gets local time from computer
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    
    // Display Morning 
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning!";
    }

    // Display Afternoon
    else if (Time > 12 == Time < 18) {
        Reply = "Good Afternoon!";
    }

    // Display Evening
    else {
        Reply = "Good Evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}