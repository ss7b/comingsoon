let countDownDate = new Date();
console.log(countDownDate)
countDownDate = new Date(countDownDate.getFullYear() + 1,countDownDate.getMonth() - 6, 1)
console.log(countDownDate)

let x= setInterval(function(){
    let now = new Date()
    let diff = countDownDate - now;
    // get
    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
    let days = Math.floor(diff % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24))
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 ))
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60 ))
    let seconds = Math.floor(diff % (1000 * 60) / 1000)

    // set
    
    document.getElementById("months").innerHTML= months
    document.getElementById("days").innerHTML= days
    document.getElementById("hours").innerHTML= hours
    document.getElementById("minutes").innerHTML= minutes
    document.getElementById("seconds").innerHTML= seconds
},1000);

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()