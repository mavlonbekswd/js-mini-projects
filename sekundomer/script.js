const display = document.getElementById("display")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let timer = null;
let seconds = 0;

function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    hrs = hrs.toString().padStart(2, "0");
    mins = mins.toString().padStart(2, "0");
    secs = secs.toString().padStart(2, "0");
    display.textContent = `${hrs}:${mins}:${secs}`;
}


startBtn.addEventListener("click", function() {
    if (timer === null) {            // Faqat bitta interval ishlasin!
        timer = setInterval(function() {
            seconds++;
            // Ekranga chiroyli chiqarish uchun:
            updateDisplay()
        }, 1000);
        // Start disable, stop enable (keyingi bosqichda)
    }
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener("click" , function(){
     clearInterval(timer);
    timer = null;
     startBtn.disabled = false;
     stopBtn.disabled = true;
     stopBtn.style.color = "red"
})

resetBtn.addEventListener("click", function(){
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();

    startBtn.disabled = false;
     stopBtn.disabled = true;
})
