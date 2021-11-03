const timeLeft = document.getElementById('time-left')


const birthday = new Date('11/16/2021')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timeId


function cronometro(){
    const today = new Date()
    const timeSpan = birthday - today
    
    if (timeSpan <= -day){
        timeLeft.innerHTML("Hope you had a nice Birthday!!")
        clearInterval(timeId)
        return
    }

    if(timeSpan <= 0){
        timeLeft.innerHTML = "Happy Birthday!!!"
        clearInterval(timeId)
        return 
    }

    const days  = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML = days + ' dias ' + hours + ' horas ' + minutes + ' minutos ' + seconds + ' segundos '
}

timerId = setInterval(cronometro, second)
