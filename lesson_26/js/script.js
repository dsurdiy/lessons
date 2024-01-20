// Строгий режим
"use strict"

// ================== Домашня робота № 26 =====================

/*
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елементів додати клас active,
при повторному кліку прибрати клас
*/

const itemsEl = document.querySelectorAll(".item");

if (itemsEl.length) {
	itemsEl.forEach(item => {
		item.addEventListener("click", function () {
			item.classList.toggle("active");
		});
	});
}


// ------------------------------------------------------------------

/*
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/

window.addEventListener("load", windowLoaded);

function windowLoaded() {
	document.body.classList.add("loaded");
}

// ------------------------------------------------------------------

/*
Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/

const headerEl = document.querySelector(".header");
const footerEl = document.querySelector(".footer");

if (headerEl && footerEl) {
	headerEl.addEventListener("mouseenter", onHeaderMouseEnter);
	headerEl.addEventListener("mouseleave", onHeaderMouseLeave);
}

function onHeaderMouseEnter() {
	footerEl.style.backgroundColor = "red";
}

function onHeaderMouseLeave() {
	footerEl.style.backgroundColor = "";
}

// ------------------------------------------------------------------

/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запускатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 1.0
}
const callback = (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			const item = entry.target;
			changeContent(item);
			observer.unobserve(item);
		}
	});
}

const itemEl = document.querySelector("div.item");
if (itemEl) {
	const observer = new IntersectionObserver(callback, options);
	observer.observe(itemEl);
}

function changeContent(element) {
	const delay = parseInt(element.dataset.delay);
	let i = 1;

	setInterval(() => {
		element.textContent = `${i}`
		++i;
	}, delay);
}

