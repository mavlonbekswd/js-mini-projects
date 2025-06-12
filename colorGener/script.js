const generateBtn = document.getElementById("generateBtn")

generateBtn.addEventListener("click",  function(){
    const codeBox = document.getElementById("colorBox")
    const colorCode = document.getElementById("colorCode")

    let signs = "0123456789abcdef"
    let hex = "#"

    for (let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * 16)
       hex += signs[randomIndex]
    }
    colorCode.textContent = hex;
    codeBox.style.background = hex;
})