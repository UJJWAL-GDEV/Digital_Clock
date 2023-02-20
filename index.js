let dateObj = new Date();
// let date = dateObj.getDate();
// console.log("Date is : "+date);
let h = dateObj.getHours();
let m = dateObj.getMinutes();
let s = dateObj.getSeconds();
// console.log("Time is "+h+":"+m+":"+s);
setInterval(function timeFunc(){
    s++;
    if(s == 60){
        s = 0;
        m++;
        if(m == 60){
            m = 0;
            h++;
            // if(h > 12){
            //     h = 1;
            // }
        }
    }
    document.getElementById("seconds").textContent = s;
    document.getElementById("minutes").textContent = m;
    document.getElementById("hours").textContent = h;
}, 1000);