function digitalTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var am_pm = hours >= 12 ? 'PM' : 'AM';
    if (hours > 12){
        hours = time.getHours()-12
    }
    if(hours<10){hours="0"+hours}
    if(minutes<10){minutes="0"+minutes}
    if(seconds<10){seconds="0"+seconds}

    document.getElementById('container').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + am_pm;
    var t = setTimeout(digitalTime, 100);
}

digitalTime()