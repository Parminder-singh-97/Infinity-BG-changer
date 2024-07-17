let bg = document.body
let start = document.getElementById("start");
let stop = document.querySelector('#stop');


  let hexNumber = ()=> {

    return '#' + Math.random().toString(16).slice(2, 8);
     
 };



 let intervalStart;
start.addEventListener('click', (e) => {
  
    intervalStart = setInterval(function () {
     
        bg.style.backgroundColor = hexNumber();
       
    }, 2000);
  
});



stop.addEventListener('click', (e) => {
    
    clearInterval(intervalStart);
   
   
});
