//1. Создаем перемиенную нужного блока и обращаемся к элементу block
let block = document.querySelector('.block')

//2. Проверка обращения
// console.log(block.style.backgroundColor)

//3. Меняем цвет данного беграунда через обращение к нему
block.style.backgroundColor = 'red'


//4. Чтобы поменять любое другое css свойство, необходимо через style в консоли посмотреть какие другие значения бывают у 
// css свойста, и если хотим его поменять - то записываем его в style тега html, смотрим как оно отображается в консоли, 
// копируем из консоли и вставляем в js по примеру выше и приравниваем ему нужное значение. 


//5. Меняем css свойство по клику

block.addEventListener('click', ()=> {
    if (block.style.backgroundColor === 'black') {
        block.style.backgroundColor = 'red'
    }
    else if (block.style.backgroundColor === 'red') {
        block.style.backgroundColor = 'black'
    }
})





