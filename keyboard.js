window.addEventListener("load", function ()
{
    const chat = document.querySelector("#chat");
    const buttons = document.querySelectorAll("input[type=button]");



    buttons.forEach(button =>
        button.addEventListener("click", function ()
        {
            switch(this.value)
            {
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
