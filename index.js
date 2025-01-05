const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];





let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function passwordGenerator9000() {
    let random = characters.sort(() => .5 - Math.random()).slice(0,15)   
    let random2 = characters.sort(() => .5 - Math.random()).slice(0,15)
    password1El.textContent = random.join('')
    password2El.textContent = random2.join('')
}

    








