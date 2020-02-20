
function countDown(){
    var today = new Date();
    var eventDate = new Date("October 31, 2020 00:00:00");

    var currentTime = today.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var sec = Math.floor(remTime/1000);
    var min = Math.floor(sec/60);
    var hour = Math.floor(min/60);
    var days = Math.floor(hour/24);

    hour = hour % 24;
    min%=60;
    sec%=60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    setTimeout(countDown,1000);
}

countDown();