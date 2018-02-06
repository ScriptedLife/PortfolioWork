/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 2
   Case Problem 3

   Author: 
   Date:   

   Function List:
   addTime(oldtime, milliseconds)
      Used to add a specified number of milliseconds to a date object named oldtime.
      A new date object with the new time value is returned by the function.

   showTime(time)
      Displays a time value in the format:
      hh:mm AM/PM
*/
function worldClock(){
    //alert("function worldClock");
    currentTime = new Date();
    offset = currentTime.getTimezoneOffset();
    londonTime = addTime(currentTime,offset);
    document.zones.place2.value = showTime(londonTime);
    
    NYTime = addTime(londonTime,-240);
    document.zones.place3.value = showTime(NYTime);
    
    TXTime = addTime(londonTime,-300);
    document.zones.place1.value = showTime(TXTime);
    
    document.zones.place4.value=showTime(addTime(londonTime, -420));
    document.zones.place5.value=showTime(addTime(londonTime, -480));
    document.zones.place6.value=showTime(addTime(londonTime, -540));
}


function addTime(oldTime, minutes){
    //alert("old time = "+oldTime+" minutes = "+minutes);
    //convert date variable into int holding milliseconds
    oldTime = oldTime-0;/* turns date into milliseconds*/
   // alert("old time = "+oldTime+" minutes = "+minutes);
    //convert minutes to milliseconds and add together
    oldTime = oldTime + (minutes*60*1000);
    //convert milliseconds back to Date
    oldTime = new Date(oldTime);
    //alert("old time = "+oldTime+" minutes = "+minutes);
    return oldTime;
}

function showTime(oldTime){
    hours = oldTime.getHours();
    minutes = oldTime.getMinutes();
    // set AM/PM
    ampm = "AM";
    if(hours > 12){
       hours = hours - 12;
       ampm = "PM";
    }
    if(minutes<10){
        minutes = "0"+minutes;
    }
    //assemble the string
    timeString = hours+":"+minutes+ampm;
    return timeString;
}