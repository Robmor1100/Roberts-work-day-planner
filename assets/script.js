$(document).ready(function() {
    let currentDay = moment().format('dddd, MMMM Do');
    let displaydate = $("#currentDay");
    displaydate.text(currentDay);
    let currentTime = moment().format('H');

    $(".time-block").each(function() {
        let hour = parseInt($(this).attr("id"));
        if (hour < currentTime) {
            $(this).addClass("past");
        } else if (hour === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    }
    );
    $(".saveBtn").on("click", function() {
        let value = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    }
    );
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
});


