function createsoundbite(e){var t=document.createElement("audio");if(t.canPlayType){for(var n=0;n<arguments.length;n++){var r=document.createElement("source");r.setAttribute("src",arguments[n]);if(arguments[n].match(/\.(\w+)$/i))r.setAttribute("type",html5_audiotypes[RegExp.$1]);t.appendChild(r)}t.load();t.playclip=function(){t.pause();t.currentTime=0;t.play()};return t}else{return{playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}}}var html5_audiotypes={wav:"audio/mpeg",mp4:"audio/mp4",ogg:"audio/ogg",wav:"audio/wav"};

var anjing=createsoundbite("suara/anjeeng.wav");
var ayam=createsoundbite("suara/ayam.wav");
var bebek=createsoundbite("suara/bebek.wav");
var burung=createsoundbite("suara/burung.wav");
var kucing=createsoundbite("suara/cat.wav");
var kambing=createsoundbite("suara/kambing.wav");
var kodok=createsoundbite("suara/kodok.wav");
var kuda=createsoundbite("suara/kuda.wav");
var sapi=createsoundbite("suara/sapi.wav");
