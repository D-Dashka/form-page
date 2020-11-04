window.onload = function () {
    let full_name = document.getElementsByClassName('layout-form__input');
    full_name[0].addEventListener('keypress', function (event) {
        let number = parseInt(event.key);
        if (!isNaN(number)) {
            event.preventDefault();
        }
    })

    full_name[1].addEventListener('keydown', function (event) {
        if (event.code === "Period" || event.code === "Comma" || event.keyCode === 190 || event.keyCode === 188) {
            event.preventDefault();
        }
    })

    let checkbox = document.getElementsByClassName('layout-form__checkbox')[0];
    checkbox.addEventListener('click', function () {
        if (checkbox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    })

    let button = document.getElementsByClassName('layout-form__button')[0];
    let input = document.getElementsByTagName('input');
    let input_text = document.getElementsByClassName('layout-form__input-text');


    button.addEventListener('click', function checkForm() {
        for (let i = 0; i < input.length; i++) {
            input[i].setAttribute('required', 'required');
            if (!input[i].value) {
                alert('Заполните поле:' + ' ' + input_text[i].innerText);
                return;
            }
        }
        if (input[3].value !== input[4].value) {
            alert('Пароли не совпадают');
            return;
        }
        if (checkbox.checked === false) {
            alert('Нет подтверждения соглашения с условиями');
            return;
        }
        alert('OKAY');
    })


    let left_title = document.getElementsByClassName('layout-left__title')[0];
    let layout_form_child = document.getElementsByClassName('layout-form__label');
    let check_box_label = document.getElementsByClassName('layout-form__checkbox-label')[0];

    let account_submit = document.getElementsByClassName('layout-form__account-exists')[0];
    account_submit.addEventListener('click', function () {
        left_title.innerText = 'Log in to the system';
        layout_form_child[0].innerHTML = '';
        layout_form_child[2].innerHTML = '';
        layout_form_child[4].innerHTML = '';
        check_box_label.innerHTML = '';
        button.innerText = 'Sign In';
        account_submit.innerHTML = '';
    })

}








