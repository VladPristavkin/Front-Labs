let currLang = localStorage.getItem("language") || "eng";
const langBtns = document.querySelectorAll("[data-btn]");

const multiLang ={
    "menu__link_1":{
        eng: "Features",
        ru: "Характеристики",
    },
    "menu__link_2":{
        eng: "Pricing & Plans",
        ru: "Цены и планы",
    },
    "menu__link_3":{
        eng: "Support",
        ru: "Поддержка",
    },
    "menu__link_4":{
        eng: "About Us",
        ru: "О нас",
    },
    "menu__link_5":{
        eng: "Contact Us",
        ru: "Свяжитесь с нами",
    },
    "head__button":{
        eng: "Contact Us",
        ru: "Свяжитесь с нами",
    },
    "main-blck__bd":{
        eng: "Best Marketing Digital Agency",
        ru: "Лучшее маркетинговое цифровое агентство",
    },
    "main__textck":{
        eng: "Various versions have evolved over the years, sometimes by accident, sometimes on purpose",
        ru: "За прошедшие годы появились различные версии, иногда случайно, иногда намеренно",
    },
    "main-block__solid-btn":{
        eng: "Get Started",
        ru: "Начало работы",
    },
    "circled__btn":{
        eng: "Watch Video",
        ru: "Смотреть видео",
    },
    "clients__title":{
        eng: "Our trusted clients",
        ru: "Наши надежные клиенты",
    },
    "what__header":{
        eng: "What we do",
        ru: "Что мы делаем",
    },
    "what__title":{
        eng: "We Are Here To Help You Build Your Business ",
        ru: "Мы готовы помочь вам построить свой бизнес",
    },
    "what__button":{
        eng: "Explore all service",
        ru: "Изучить все услуги",
    },
    "card__title":{
        eng: "Digital Marketing",
        ru: "Цифровой маркетинг",
    },
    "card__text":{
        eng: "That is the simply dummy text the printing and typesetting industry. ",
        ru: "Это просто наборный текст, которым пользуется полиграфическая и типографская промышленность.",
    },
    "card__link":{
        eng: "Read more",
        ru: "Читать далее",
    },
    "card__text_1":{
        eng: "That is the simply dummy text the printing and typesetting industry. ",
        ru: "Это просто наборный текст, которым пользуется полиграфическая и типографская промышленность.",
    },
    "card__link_1":{
        eng: "Read more",
        ru: "Читать далее",
    },
    "card__text_2":{
        eng: "That is the simply dummy text the printing and typesetting industry. ",
        ru: "Это просто наборный текст, которым пользуется полиграфическая и типографская промышленность.",
    },
    "card__link_2":{
        eng: "Read more",
        ru: "Читать далее",
    },
    "card__title_1":{
        eng: "Web Development",
        ru: "Веб-разработка",
    },
    "card__text_3":{
        eng: "That is the simply dummy text the printing and typesetting industry. ",
        ru: "Это просто наборный текст, которым пользуется полиграфическая и типографская промышленность.",
    },
    "card__link_3":{
        eng: "Read more",
        ru: "Читать далее",
    },
    "about__header":{
        eng: "About us",
        ru: "О нас",
    },
    "about__title":{
        eng: "We're More Than Digital Agency in the World",
        ru: "Мы больше, чем цифровое агентство в мире",
    },
    "about__button":{
        eng: "Get in touch",
        ru: "Свяжитесь с нами",
    },
    "work__container":{
        eng: "Our work",
        ru: "Наша работа",
    },
    "work__title":{
        eng: "See Our Recent Case Studies",
        ru: "Ознакомьтесь с нашими недавними примерами",
    },
    "work__menu__link":{
        eng: "Development",
        ru: "Разработка",
    },
    "work__menu__link_1":{
        eng: "Graphic Design",
        ru: "Графический дизайн",
    },
    "work__menu__link_2":{
        eng: "Motion",
        ru: "Движение",
    },
    "work__menu__link_3":{
        eng: "Branding",
        ru: "Брендинг",
    },
    "work__menu__link_4":{
        eng: "Business Development",
        ru: "Развитие бизнеса",
    },
    "explore__text":{
        eng: "Explore all",
        ru: "Просмотреть все",
    },
    "testimon":{
        eng: "Testimonial",
        ru: "Отзыв",
    },
    "testimon__title":{
        eng: "What Our Customer Say About Us",
        ru: "Что говорят о нас наши клиенты",
    },
    "review_lng":{
        eng: "Our website is working well for us. Our website was developed beautifully by the proxylab team. We really appreciated the prompt responses and delivery of exactly what we requested, as per our expectations.",
        ru: "Наш сайт работает для нас хорошо. Команда proxylab прекрасно разработала наш сайт. Мы очень ценим быстрые ответы и предоставление именно того, что мы просили, в соответствии с нашими ожиданиями.",
    },
    "get__title":{
        eng: "Have A Project In Mind? Let's Get To Work.",
        ru: "У вас есть проект? Приступим к работе.",
    },
    "custom__name":{
        eng: "Johne Abram",
        ru: "Джон Абрам",
    },
    "get__button":{
        eng: "Get in touch",
        ru: "Свяжитесь с нами",
    },
    "contact__item":{
        eng: "Dhaka, Bangladesh",
        ru: "Дакка, Бангладеш",
    },
    "service__blk":{
        eng: "Service",
        ru: "Сервис",
    },
    "service__link_1":{
        eng: "UI UX Design",
        ru: "UI UX дизайн",
    },
    "service__link_2":{
        eng: "Mobile Design",
        ru: "Мобильный дизайн",
    },
    "service__link_3":{
        eng: "Motion Graphic",
        ru: "Графика движения",
    },
    "service__link_4":{
        eng: "Web Development",
        ru: "Веб-разработка",
    },
    "service__link_5":{
        eng: "Digital Marketing",
        ru: "Цифровой маркетинг",
    },
    "service__link_6":{
        eng: "Business Development",
        ru: "Развитие бизнеса",
    },
    "company":{
        eng: "Company",
        ru: "Компания",
    },
    "company__link_1":{
        eng: "Service",
        ru: "Сервис",
    },
    "company__link_2":{
        eng: "Features",
        ru: "Характеристики",
    },
    "company__link_3":{
        eng: "Our Team",
        ru: "Наша команда",
    },
    "company__link_4":{
        eng: "Portfolio",
        ru: "Портфель",
    },
    "company__link_5":{
        eng: "Blog",
        ru: "Блог",
    },
    "company__link_6":{
        eng: "Contact Us",
        ru: "Свяжитесь с нами",
    },
    "social__media":{
        eng: "Our Social Media",
        ru: "Наши социальные сети",
    },
    "news__letter":{
        eng: "Join a Newsletter",
        ru: "Присоединиться к рассылке",
    },
    "your__email":{
        eng: "Your Email",
        ru: "Ваш e-mail",
    },
    "newsletter__btn":{
        eng: "Subscribe",
        ru: "Подпишитесь",
    },
    "copyright":{
        eng: "© 2021 proxylab - All rights reserved.",
        ru: "© 2021 proxylab - Все права защищены.",
    },
    "company__additional__info__link_1":{
        eng: "Privacy",
        ru: "Конфиденциальность",
    },
    "company__additional__info__link_2":{
        eng: "Security",
        ru: "Безопасность",
    },
    "company__additional__info__link_3":{
        eng: "Terms",
        ru: "Условия",
    },
};

function changeLang() {
    console.log(currLang);
    for (const key in multiLang) {
        const elem = document.querySelector(`[data-lang=${key}]`);
        if(elem) {
            elem.textContent = multiLang[key][currLang];
        }
    }
}
changeLang();

// Вешаем обработчики на каждую кнопку 
langBtns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if (!event.target.classList.contains("header__btn_active")) {
			currLang = event.target.dataset.btn;
			localStorage.setItem("language", event.target.dataset.btn);
			resetActiveClass(langBtns, "header__btn_active");
			btn.classList.add("header__btn_active");
			changeLang();
		}
	});
});

// Сброс активного класса у переданного массива элементов
function resetActiveClass(arr, activeClass) {
	arr.forEach((elem) => {
		elem.classList.remove(activeClass);
	});
}

// Проверка активной кнопки
function checkActiveLangButton() {
	switch (currLang) {
		case "ru":
			document
				.querySelector('[data-btn="ru"]')
				.classList.add("header__btn_active");
			break;
		case "eng":
			document
				.querySelector('[data-btn="eng"]')
				.classList.add("header__btn_active");
			break;
    }        
}
checkActiveLangButton();