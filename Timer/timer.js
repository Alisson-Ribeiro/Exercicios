var sec = 0
var min = 0
var hr = 0

var interval

function TwoDigits(digit){
    if(digit<10){
        return('0'+digit)
    } else{
        return(digit)
    }
}

function start(){
    watch()
    interval = setInterval(watch, 1000)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00'
}

function watch(){
    sec++
    if(sec == 60){
    min++
    sec=0
        
    if(min == 60){
    hr++
    min=0}
    
    if(hr == 24){
    hr = 0}}
    
    document.getElementById('watch').innerText=TwoDigits(hr)+':'+TwoDigits(min)+':'+TwoDigits(sec)
}
