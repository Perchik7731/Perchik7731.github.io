let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

// Event listeners for each button
let buttons = [btn1, btn2, btn3, btn4, btn5, btn6];
buttons.forEach((btn, index) => {
    btn.addEventListener("click", function(){
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.setText(`Вы выбрали товар ${index + 1}!`);
            item = `${index + 1}`;
            tg.MainButton.show();
        }
    });
});

// Function to handle mainButtonClicked event
Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});

// Display user's name
let username = document.getElementById("username");
username.innerText = `Ваше имя: "${tg.initDataUnsafe.user.first_name}"`;
