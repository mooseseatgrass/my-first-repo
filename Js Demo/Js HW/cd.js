function updateTimer(deadline){
    var time = deadline - new Date();
    return {
        // maybe could add weeks and months with 1000*60*60*24*7 days in week, 52 weeks in year, 12 months in year, use %?
        'days': Math.floor( time/(1000*60*60*24) ),
        'hours': Math.floor( (time/(1000*60*60)) %24 ),
        'minutes': Math.floor((time/100/60)%60),
        'seconds': Math.floor((time/1000)%60),
        'total': time
    };
}

function startTimer(id, deadline){
    var timerInterval = setInterval(function(){
    var input = document.getElementById(id);
    var timer = updateTimer(deadline);

    // clock.innerHTML = '<span>' + timer.days + '</span>'
    //                 + '<span>' + timer.hours + '</span>'
    //                 + '<span>' + timer.minutes + '</span>'
    //                 + '<span>' + timer.seconds + '</span>'
    if(input.id == "days")
    input.innerHTML = timer.days

    if(input.id == "hours")
    input.innerHTML = timer.hours

    if(input.id == "minutes")
    input.innerHTML = timer.minutes

    if(input.id == "seconds")
    input.innerHTML = timer.seconds

    }, 1000);
}

window.onload = function(){
    var deadline = new Date("October 31, 2020 00:00:00");
    startTimer("days", deadline);
    startTimer("hours", deadline);
    startTimer("minutes", deadline);
    startTimer("seconds", deadline);
};

