window.addEventListener('load', function OnWindowLoaded() {
    var calculator = document.getElementById('calculator');  // Получаем основу калькулятора
    var area = document.getElementById('area'); // Получаем текстовое поле
        area.innerHTML = '0'; // Выставляем стандартно ноль
    var buttons = // Массив текста на кнопках
    ['mrc', 'm-', 'm+', '/',
      '7', '8', '9' , '*',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', 'C', '=']
    var memory = 0; // Память MRC

    buttons.forEach(buttonText => {
        let buttonElement = document.createElement('div'); // Создаем шаблон дива
        if (buttonText == '/' || buttonText == '*' || buttonText == '-' || buttonText == '+'){
            buttonElement.className = 'btn red';  // Добавляем класс для красных кнопок
        }else if(buttonText == '='){
            buttonElement.className = 'btn orange';  // Добавляем класс для оранжевых кнопок
        }else if (buttonText == 'mrc' || buttonText == 'm-' || buttonText == 'm+'){
            buttonElement.className = 'btn grey'; // Добавляем класс для тёмно-серых кнопок
        }else{
            buttonElement.className = 'btn';  // Добавляем класс для кнопок
        }
        buttonElement.innerHTML = buttonText; // Берём текст для дива из массива
        calculator.appendChild(buttonElement);  // Создаём кнопку в калькуляторе
    });

    document.querySelectorAll('.btn').forEach(button => {
       button.addEventListener('click', clickOnButton); // Добавляем всем .btn ивенты
    });

    function clickOnButton(button) {
        if(button.target.innerHTML == 'C') // Очистка при С
        {
            area.innerHTML = '0';
        }else if (button.target.innerHTML == '='){ // Результат при =
            area.innerHTML = eval(area.innerHTML).toFixed(3);
        }else if (area.innerHTML == '0' && button.target.innerHTML != 'mrc' && button.target.innerHTML != 'm+' && button.target.innerHTML != 'm-'){ // Первая цифра при нуле и фиксим отображение текста кнопок
            area.innerHTML = button.target.innerHTML;
        }else if(button.target.innerHTML == 'm+'){ // Добавление в память
            if (memory != 0){
               memory += parseInt(area.innerHTML); // Если память не равна нулю, то прибавляем число в поле к числу в памяти
            }else{
                memory = parseInt(area.innerHTML);  // Если равна нулю, то просто добавляем в память значение с поля
            }
            console.log("m+: memory = " + memory);
        }else if(button.target.innerHTML == 'm-'){ // Отнимаем от памяти значение с поля
            memory -= parseInt(area.innerHTML);
            console.log("m-: memory = " + memory);
        }else if(button.target.innerHTML == 'mrc'){ // Вывод памяти в поле
            area.innerHTML = memory;
            console.log("mrc: memory = " + memory);
        }else{
            if(area.innerText.length > 10) // Запрещаем вводить больше 10 цифр
                return;
            area.innerHTML += button.target.innerHTML; // Ввод остальныъ символов
        }


    }
});


