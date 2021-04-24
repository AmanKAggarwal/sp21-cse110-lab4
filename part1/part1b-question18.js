function printTimeCallback(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}
// Prints the time every second infinitely until stopped
setInterval(printTimeCallback, 1*1000) 