const clock = document.getElementById('clock')
// document.querySelector('#clock')


setInterval(function(){
  let date = new Date()
  time=date.toLocaleTimeString()
  clock.innerHTML=`${time}`
},1000)
