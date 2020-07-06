window.addEventListener('load', function OnWindowLoaded() {
    var calculator = document.getElementById('calculator');  // Получаем основу калькулятора
    var area = document.getElementById('area'); // Получаем текстовое поле
    var buttons = // Массив текста на кнопках
    ['mrc', 'm-', 'm+', '/',
      '7', '8', '9' , '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', 'C', '=']
    var memory = 0; // Память MRC

    buttons.forEach(buttonText => {
        let buttonElement = document.createElement('div');
        if (buttonText == '/' || buttonText == '*' || buttonText == '-' || buttonText == '+'){
            buttonElement.className = 'btn red';  
        }else if(buttonText == '='){
            buttonElement.className = 'btn orange';  
        }else if (buttonText == 'mrc' || buttonText == 'm-' || buttonText == 'm+'){
            buttonElement.className = 'btn grey'; 
        }else{
            buttonElement.className = 'btn'; 
        }
        buttonElement.innerHTML = buttonText;
        calculator.appendChild(buttonElement);
    });

    document.querySelectorAll('.btn').forEach(button => {
       button.addEventListener('click', clickOnButton); 
    });

    function clickOnButton(button) {
        if(button.target.innerHTML == 'C')
        {
            area.innerHTML = ' ';
        }else if (button.target.innerHTML == '='){
            area.innerHTML = eval(area.innerHTML);
        }else if (area.innerHTML == ' ' && button.target.innerHTML != 'mrc'){
            area.innerHTML = button.target.innerHTML;
        }else if(button.target.innerHTML == 'm+'){
            if (memory != 0){
                memory += parseInt(area.innerHTML);
            }else{
                memory = parseInt(area.innerHTML); 
            }
            console.log("m+: memory = " + memory);
        }else if(button.target.innerHTML == 'm-'){
            memory -= parseInt(area.innerHTML);
            console.log("m-: memory = " + memory);
        }else if(button.target.innerHTML == 'mrc'){
            area.innerHTML = memory;
            console.log("mrc: memory = " + memory);
        }else{
            area.innerHTML += button.target.innerHTML;
        }


    }
});


