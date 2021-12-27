let counter = 0;
const counter_display = document.querySelector('#value');
const counter_buttons = document.querySelectorAll('.btn');
counter_buttons.forEach(function (button)  { 
    button.addEventListener('click', function (e) {
        console.log(e);
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            counter--;
            console.log(counter);
            counter_display.textContent = counter;
        }
        else if (styles.contains('increase')){
            counter++;
            counter_display.textContent = counter;
        }
        else {
            counter = 0;
            counter_display.textContent = counter;
        }

    })
} 
);
