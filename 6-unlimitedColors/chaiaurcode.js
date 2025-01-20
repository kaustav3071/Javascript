const randomColor = function() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId = null; 

const startChangingColor = function() {
  if (!intervalId) { // Check if interval is not already running
    intervalId = setInterval(changeColor, 1000); 
  }
};

const stopChangingColor = function() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null; 
  }
};

const changeColor = function() {
  document.body.style.backgroundColor = randomColor();
};

document.getElementById("start").addEventListener('click', startChangingColor);
document.getElementById("stop").addEventListener('click', stopChangingColor);
