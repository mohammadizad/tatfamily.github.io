var frameNow = 0,
  flag = true,
  frameChanger,
  frameEnd = -59400,
  isRunning = false,
  whichImg = 1;
document.querySelector("#tree-gif2").style.display = "none";
document.querySelector("#tree-gif3").style.display = "none";
document.querySelector("#tree-gif4").style.display = "none";

function checkboxClickAll(elem) {
  let allCheckbox = document.querySelectorAll(".checkboxGif");

  if (elem.checked) {
    allCheckbox.forEach((element) => {
      element.checked = true;
      draw(element, "checkmark");
    });
    function showTillEnd() {
      if (!isRunning) {
        isRunning = true;
        firstWhichImg = whichImg;
        console.log(firstWhichImg);
        // if (frameNow == 0) {
        for (let i = 0; i <= 4 - firstWhichImg; i++) {
          forwardFrame();
          // }
        }
        isRunning = false;
      } else {
        setTimeout(() => {
          showTillEnd();
        }, 3000);
      }
    }
    showTillEnd();
  } else {
    allCheckbox.forEach((element) => {
      element.checked = false;
      reset(element);
    });
    // backward
    function hideTillStart() {
      if (!isRunning) {
        isRunning = true;
        firstWhichImg = whichImg;
        console.log(firstWhichImg);
        // if (frameNow != 0) {
        for (let i = 0; i < 4; i++) {
          backwardFrame();
        }
        // }
        isRunning = false;
      } else {
        setTimeout(() => {
          hideTillStart();
        }, 6000);
      }
    }
    hideTillStart();
  }
}
function checkboxClick(elem) {
  document.querySelector(".checkboxAll").checked = false;
  reset(document.querySelector(".checkboxAll"));
  if (elem.checked) forwardFrame();
  else backwardFrame();
}

function forwardFrame() {
  if (!isRunning) {
    if (whichImg == 1) {
      frameNow = 0;
      if (!isRunning) {
        isRunning = true;
        frameChanger = setInterval(() => {
          if (frameNow > frameEnd) {
            frameNow -= 600;
            document.querySelector("#tree-gif1").style.top = frameNow + "px";
          } else {
            clearInterval(frameChanger);
            isRunning = false;
            whichImg = whichImg + 1;
            frameNow = 0;
            document.querySelector("#tree-gif2").style.top = frameNow + "px";
            document.querySelector("#tree-gif2").style.display = "block";
            document.querySelector("#tree-gif1").style.display = "none";

            return null;
          }
        }, 24);
      }
    } else if (whichImg == 2) {
      frameNow = 0;
      if (!isRunning) {
        isRunning = true;

        frameChanger = setInterval(() => {
          if (frameNow > frameEnd) {
            frameNow -= 600;
            document.querySelector("#tree-gif2").style.top = frameNow + "px";
          } else {
            clearInterval(frameChanger);
            isRunning = false;
            whichImg = whichImg + 1;
            frameNow = 0;

            document.querySelector("#tree-gif3").style.top = frameNow + "px";
            document.querySelector("#tree-gif3").style.display = "block";
            document.querySelector("#tree-gif2").style.display = "none";
          }
        }, 24);
      }
    } else if (whichImg == 3) {
      frameNow = 0;
      if (!isRunning) {
        isRunning = true;
        frameChanger = setInterval(() => {
          if (frameNow > frameEnd) {
            frameNow -= 600;
            document.querySelector("#tree-gif3").style.top = frameNow + "px";
          } else {
            clearInterval(frameChanger);
            isRunning = false;
            whichImg = whichImg + 1;
            frameNow = 0;

            document.querySelector("#tree-gif4").style.top = frameNow + "px";
            document.querySelector("#tree-gif4").style.display = "block";
            document.querySelector("#tree-gif3").style.display = "none";
          }
        }, 24);
      }
    } else if (whichImg == 4) {
      frameNow = 0;
      if (!isRunning) {
        isRunning = true;
        frameChanger = setInterval(() => {
          if (frameNow > frameEnd) {
            frameNow -= 600;
            document.querySelector("#tree-gif4").style.top = frameNow + "px";
          } else {
            clearInterval(frameChanger);
            isRunning = false;
            // document.querySelector("#tree-gif4").style.top = frameNow + "px";
            // document.querySelector("#tree-gif4").style.display = "block";
            // document.querySelector("#tree-gif3").style.display = "none";
          }
        }, 24);
      }
    }
  } else {
    setTimeout(() => {
      forwardFrame();
    }, 500);
  }
}

function backwardFrame() {
  if (!isRunning) {
    if (whichImg == 1) {
      frameNow = frameEnd;
      if (!isRunning) {
        isRunning = true;
        // whichImg = whichImg -1;
        document.querySelector("#tree-gif1").style.top = frameNow + "px";
        document.querySelector("#tree-gif1").style.display = "block";
        document.querySelector("#tree-gif2").style.display = "none";

        frameChanger = setInterval(() => {
          if (frameNow <= 0) {
            frameNow += 600;
            document.querySelector("#tree-gif1").style.top = frameNow + "px";
          } else {
            clearInterval(frameChanger);
            isRunning = false;

            return null;
          }
        }, 24);
      }
    } else if (whichImg == 2) {
      frameNow = frameEnd;
      if (!isRunning) {
        isRunning = true;
        whichImg = whichImg - 1;
        document.querySelector("#tree-gif1").style.top = frameNow + "px";
        document.querySelector("#tree-gif1").style.display = "block";
        document.querySelector("#tree-gif2").style.display = "none";

        frameChanger = setInterval(() => {
          if (frameNow < -600) {
            frameNow += 600;
            document.querySelector("#tree-gif1").style.top = frameNow + "px";
          } else {
            clearInterval(frameChanger);
            isRunning = false;
            return null;
          }
        }, 24);
      }
    } else if (whichImg == 3) {
      frameNow = frameEnd;
      if (!isRunning) {
        isRunning = true;
        whichImg = whichImg - 1;
        document.querySelector("#tree-gif2").style.top = frameNow + "px";
        document.querySelector("#tree-gif2").style.display = "block";
        document.querySelector("#tree-gif3").style.display = "none";

        frameChanger = setInterval(() => {
          if (frameNow < -600) {
            frameNow += 600;
            document.querySelector("#tree-gif2").style.top = frameNow + "px";
          } else {
            clearInterval(frameChanger);
            isRunning = false;

            return null;
          }
        }, 24);
      }
    } else if (whichImg == 4) {
      if (frameNow == 0) {
        // اول تصویر چهارم
        whichImg = whichImg - 1;
        frameNow = frameEnd;
        document.querySelector("#tree-gif3").style.top = frameNow + "px";
        document.querySelector("#tree-gif3").style.display = "block";
        document.querySelector("#tree-gif4").style.display = "none";
        if (!isRunning) {
          isRunning = true;
          document.querySelector("#tree-gif3").style.top = frameNow + "px";
          frameChanger = setInterval(() => {
            if (frameNow < -600) {
              frameNow += 600;
              document.querySelector("#tree-gif3").style.top = frameNow + "px";
            } else {
              clearInterval(frameChanger);
              isRunning = false;

              return null;
            }
          }, 24);
        }
      } else {
        // آخر تصویر چهارم
        frameNow = frameEnd;

        if (!isRunning) {
          isRunning = true;
          document.querySelector("#tree-gif4").style.top = frameNow + "px";
          frameChanger = setInterval(() => {
            if (frameNow < -600) {
              frameNow += 600;
              document.querySelector("#tree-gif4").style.top = frameNow + "px";
            } else {
              clearInterval(frameChanger);
              isRunning = false;
              frameNow = 0;
              return null;
            }
          }, 24);
        }
      }
    }
  } else {
    setTimeout(() => {
      backwardFrame();
    }, 500);
  }
}
