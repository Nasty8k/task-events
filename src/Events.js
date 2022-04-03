/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', function () {
        btn.remove();
    });
    document.body.append(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let elemUL = document.createElement('ul');
    for (let str of arr) {
        let elemLI = document.createElement('li');
        elemLI.textContent = str;
        elemLI.addEventListener('mouseover', function () {
            elemLI.title = elemLI.textContent;
        });
        elemUL.append(elemLI);
    }

    document.body.append(elemUL);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.innerHTML = 'tensor';
    function callBack(param) {
        param.preventDefault();
        link.innerHTML = link.textContent + ' ' + link.href;
        link.removeEventListener('click', callBack);
    }

    link.addEventListener('click', callBack);
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let elemUL = document.createElement('ul');
    elemUL.addEventListener('click', function (param) {
        let target = param.target;
        if (target.matches('li')) {
            target.innerHTML += '!';
        }
    });
    let btn = document.createElement('button');
    btn.innerHTML = 'Добавить пункт';
    btn.addEventListener('click', function () {
        let li = document.createElement('li');
        li.innerHTML = 'Пункт';
        elemUL.append(li);
    });

    btn.click();
    document.body.append(elemUL, btn);
}
