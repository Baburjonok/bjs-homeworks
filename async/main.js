"use strict"

function goodMorning(time) {
  let a = new Date();
  let b = a.toLocaleTimeString();
  let h = a.getHours();
  let m = a.getMinutes();

  if (h < 10) {
    h = "0" + a.getHours();
  };

  if (m < 10) {
    m = "0" + a.getMinutes();
  };
  let t = `${h}:${m}`;
 
  if (t === time) {
      alert("Доброе утро!");
    } 
}

function goodNight(time) {
  let a = new Date();
  let b = a.toLocaleTimeString();
  let h = a.getHours();
  let m = a.getMinutes();
  
  if (h < 10) {
    h = "0" + a.getHours();
  };

  if (m < 10) {
    m = "0" + a.getMinutes();
  };
  let t = `${h}:${m}`;
  
  if (t === time) {
      alert("Спокойной ночи!");
    } 
}

function setAlarm(options, callback) {
  callback(options);
}

function checkTime(timeee) {
  setAlarm(timeee, goodMorning);
  
}

function checkTime2(timeee) {
  setAlarm(timeee, goodNight);
  
}

//checkTime("16:33");
//checkTime2("16:38");

function setDailyRhythm(wakeUpTime, bedTime){
  setInterval(function(){checkTime(wakeUpTime)}, 1000);
  setInterval(function(){checkTime2(bedTime)}, 1000);
}

setDailyRhythm("04:35", "11:28");