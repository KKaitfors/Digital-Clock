setInterval(setClock, 1000);

function setClock() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (hours > 11 && hours < 24) {
    document.querySelector(".am").style.color=dark;
    document.querySelector(".pm").style.color=light;
  } else {
    document.querySelector(".am").style.color=light;
    document.querySelector(".pm").style.color=dark;
  }
  if (hours > 12) {
    hours -= 12;
  }

  if (hours.toString().length == 2) {
  configure("hour-tens", "1");
  configure("hour-ones", hours.toString()[1]);
  } else {
    configure("hour-tens", "x");
    configure("hour-ones", hours.toString());
  }

  if (minutes.toString().length == 2) {
    configure("minute-tens", minutes.toString()[0]);
    configure("minute-ones", minutes.toString()[1]);
  } else {
    configure("minute-tens", "0");
    configure("minute-ones", minutes.toString());
  }

  if (seconds.toString().length == 2) {
    configure("second-tens", seconds.toString()[0]);
    configure("second-ones", seconds.toString()[1]);
  } else {
    configure("second-tens", "0");
    configure("second-ones", seconds.toString());
  }
}

//DIGIT CONFIGURATIONS

let dark = getComputedStyle(document.querySelector(':root')).getPropertyValue('--dark');
let light = getComputedStyle(document.querySelector(':root')).getPropertyValue('--light');

function configure(digit, num) {
  switch(num) {
    case '0':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=dark; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light;
      break; 
    case '1':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=dark;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=dark; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light; 
      break;   
    case '2':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=light; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=dark; 
      break; 
    case '3':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=light; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light; 
      break; 
    case '4':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=dark;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=light; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light; 
      break; 
    case '5':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=dark; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=light; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light; 
      break; 
    case '6':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=dark; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=light; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light; 
      break; 
    case '7':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=dark; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light; 
      break; 
    case '8':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=light; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light; 
      break; 
    case '9':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=light;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=light; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=light; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=light; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=light; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=light;
      break;
    case 'x':
      document.getElementById(digit).querySelector(".top").style.borderTopColor=dark;
      document.getElementById(digit).querySelector(".top-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".top-right").style.borderRightColor=dark; 
      document.getElementById(digit).querySelector(".middle-top").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".middle-bottom").style.borderTopColor=dark; 
      document.getElementById(digit).querySelector(".bottom").style.borderBottomColor=dark; 
      document.getElementById(digit).querySelector(".bottom-left").style.borderLeftColor=dark; 
      document.getElementById(digit).querySelector(".bottom-right").style.borderRightColor=dark;
      break;
  }
}

setClock();
