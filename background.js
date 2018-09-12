let sounds = ['do', 're', 'mi', 'fa', 'so', 'ra', 'si'];
let keyList =[[9, 17, 20, 27, 49, 65, 81, 90, 192],
              [50, 51, 67, 68, 69, 83, 87, 88, 91],
              [52, 53, 66, 70, 71, 82, 84, 86],
              [54, 55, 72, 74, 77, 78, 85, 89],
              [18, 56, 57, 73, 75, 76, 79, 93, 188, 190],
              [48, 80, 186, 189, 191, 219, 222]];
var i = 0;
$(function(){
  $(document).keyup(function(e){
    var keycode = e.keyCode, code = 6;

    for(var j=0; j<6; j++)
      if(keyList[j].indexOf(keycode) >= 0) code = j;

    $("body").append(`<audio id="piano_${i}"> <source src="` + chrome.extension.getURL(`sounds/${sounds[code]}.mp3`) + '" type="audio/mp3"> </audio>');

    var audio = $(`#piano_${i}`)[0];
    audio.play();
    setTimeout(function(){
     audio.remove();
    },3000);

    if(i++ > 2000) i = 0;
  });
});
