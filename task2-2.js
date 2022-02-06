function clickButton(push) {
  let screen = document.getElementById("screen");
  let pushButton = push.innerHTML;
  let lastLetter = screen.innerHTML.slice(-1);
  let point = document.getElementById("point");
  
  push.classList.add("blue");
 
  if (pushButton == "AC") {
    screen.innerHTML = "0";
    point.disabled = false;
  } else if (pushButton == "=") {
    screen.innerHTML = eval(screen.innerHTML);
  } else {
      if (screen.innerHTML == "0") {
        if (pushButton == "00" || pushButton == "+" || pushButton == "-" || pushButton == "*" || pushButton == "/") {
          screen = "0";
        } else if (pushButton == ".") {
          screen.innerHTML = "0.";
          point.disabled = true;
        } else {
          screen.innerHTML = pushButton;
        }
      } else {
          if (pushButton == ".") {
            point.disabled = true;
          }
          if (pushButton == "+" || pushButton == "-" || pushButton == "*" || pushButton == "/") {
            point.disabled = false;
          }
            if (lastLetter == "+" || lastLetter == "-" || lastLetter == "*" || lastLetter == "/" || lastLetter == ".") {
              if (pushButton == "+" || pushButton == "-" || pushButton == "*" || pushButton == "/"  || pushButton == "00" || pushButton == ".") {
                screen.innerHTML = screen.innerHTML.slice(0, -1);
              } 
            }
        screen.innerHTML += pushButton;
    }
  }
}

