//обращаемся через JS к нашему HTML и остлеживаем через событие "форму"

document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
    
// обращаемся к элементу так, или вот так:
//1) var name = document.getElementById('name').value;
// проверка
//1) console.log(name);


//2)
    event.preventDefault(); //с помощью метода preventDefault отключаем стандартное поведение страницы (перезагрузку страницы)
    var el = document.getElementById('main-form');

    var name = el.name.value;
    var pass = el.pass.value;
    var repass = el.repass.value;
    var state = el.state.value;

//2) проверка что работает и данные получаем 
//console.log(name + "-" + state + "-" + pass + "-" + repass);

//3) проверка пользователя на введение данных в поля верно
    
    var fail = "";
//3.1 Если поля имя, пароль, стать будут пустыми (равны пустой строке) - то юзер получит ошибку "Заполните все обязательные поля". 
    if (name == "" || pass == "" || state == "")
        fail = "Заполните все обязатаельные поля";
//3.2 Проверка длины имени. Если меньше 1 символа или больше 50 - выдаем ошибку "Введите корректное имя".
    else if(name.length <=1 || name.length > 50)
        fail = "Введите корректное имя";
//3.3 Поля пароль и повтор пароля должны совпадать, если не совпадают отдаем ошибку "Проверьте правильность введенных паролей. Пароли должны совпадать".
    else if(pass != repass)
        fail = "Проверьте правильность введенных паролей. Пароли должны совпадать";
//3.4 Проверяем на невалидные символы в пароле, если есть невалидный символ отдаем ошибку "Некорректный пароль. Используется запрещенный символ".
    else if(pass.split("&").length > 1)
        fail = "Некорректный пароль. Используется запрещенный символ";


 //4 Показываем пользователю ошибку если что-то не верно, или если верно, переводим на другую страницу.    
    if(fail != "")
        document.getElementById('error').innerHTML = fail;
    else {
        alert("Все данные заполнены верно!");
        window.location = 'https://www.google.com';
    }
}





//материал для изучения брал вот тут https://www.youtube.com/watch?v=1nzH6WCEonQ&ab_channel=%D0%A8%D0%BA%D0%BE%D0%BB%D0%B0itProger%2F%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5