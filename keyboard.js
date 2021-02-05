window.addEventListener("load", function ()
{
    const chat = document.querySelector("#chat");
    const buttons = document.querySelectorAll("input[type=button]");
    const capsLock = document.querySelector(".caps");
    let isCapsLock = false;

    const minAzerty = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p","q", "s", "d", "f", "g", "h", "j", "k", "l", "m","<", "w", "x", "c", "v", "b", "n"];

    const majAzerty = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P", "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M", "W", "X", "C", "V","B", "N"] 


    function capsLocked(boolean) {
        if (boolean === true) {
            for (let i = 0; i < majAzerty.length; i++) {
                    buttons[i].value = majAzerty[i];
                }
            } 
    
        if (isCapsLock === false) {
             for (let i = 0; i < minAzerty.length; i++) {
                    buttons[i].value = minAzerty[i];
                }
        }
    }


    buttons.forEach(button =>
        button.addEventListener("click", function ()
        {
            switch(this.value)
            {
                case "CAPS":
                    isCapsLock = !isCapsLock;
                    capsLocked(isCapsLock);
                break;
                case "SPACE":
                    chat.value += " ";
                break;
                case "DEL":
                    chat.value = chat.value.substring(0, chat.value.lenght - 1);
                break;
                case "ENTER":
                    chat.value += "\n";
                break;
                default:
                    chat.value += this.value;
                }                
        }))
})


