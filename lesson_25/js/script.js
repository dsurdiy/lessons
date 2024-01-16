"use strict"

// ================== Домашня робота № 25 =====================

/*
Задача №1
Отримати в константу елемент <body>
*/

const bodyElement = document.body;

// ------------------------------------------------------------------

/*
Задача №2
Написати функцію, яка додає в <body> список UL з певною кількістю LI 
(кількість має передаватись як параметр функції, також мати значення за замовченням)
*/

function addListToBody(listItems = 3) {
	const list = document.createElement("ul");
	let listElements = ``;

	for (let i = 1; i <= listItems; ++i) {
		listElements += `<li>Елемент списку № ${i}</li>`;
	}

	list.insertAdjacentHTML("afterbegin", listElements);
	bodyElement.insertAdjacentElement("afterbegin", list);
}

addListToBody(8);

// ------------------------------------------------------------------

/*
Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тексту зелений.
*/

bodyElement.classList.add("loaded");

if (bodyElement.classList.contains("loaded")) {
	bodyElement.style.color = "green";
}

// ------------------------------------------------------------------

/*
Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".
*/

const itemsEl = document.querySelectorAll(".item");

if (itemsEl.length) {
	itemsEl.forEach((item, index) => {
		item.classList.add("active");
		item.textContent = `Елемент № ${index + 1}`;
	});
}

// ------------------------------------------------------------------

/*
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/

const buttonEl = document.querySelector(".button");

if (buttonEl) {
	buttonEl.scrollIntoView({ behavior: "smooth" });
}

// ------------------------------------------------------------------

/*
Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Потім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/

const linkEl = document.querySelector(".link");

if (linkEl) {
	linkEl.dataset.value = 100;
	if (linkEl.dataset.value < 200) linkEl.style.color = "red";
}
