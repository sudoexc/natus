export type Lang = "ru" | "uz";

export const landing = {
  ru: {
    nav: {
      features: "Возможности", why: "Почему Natus", finance: "Финансы", reports: "Отчёты", demo: "Запросить демо",
    },
    hero: {
      heading1: "Управляй", heading2: "отелем", heading3: "без хаоса.",
      sub: "Номера, проживания, финансы, аналитика и команда — всё в одном месте. Работает из коробки.",
      demo: "Запросить демо", features: "Возможности",
      pills: ["Анти-овербукинг", "RU / UZ", "Ролевой доступ"],
    },
    stats: [
      { val: "6", label: "Модулей" }, { val: "2", label: "Роли доступа" },
      { val: "RU/UZ", label: "Мультиязычность" }, { val: "ADR", label: "+ RevPAR аналитика" },
    ],
    modules: {
      label: "Модули",
      heading1: "Всё что нужно —", heading2: "в одной системе",
      items: [
        { title: "Дашборд", desc: "Заезды, выезды, загрузка, выручка и сетка статусов номеров — всё в реальном времени.", tags: ["Real-time", "Сетка номеров"] },
        { title: "Номера", desc: "Управление номерным фондом: тип, этаж, вместимость, цена. Быстрый поиск и фильтрация.", tags: ["Поиск", "Фильтры"] },
        { title: "Проживания", desc: "От брони до выезда одной кнопкой. Депозиты, скидки. Двойное бронирование исключено.", tags: ["Чек-ин / Аут", "Анти-овербукинг"] },
        { title: "Финансы", desc: "Мультикасса, приходы от гостей, расходы по категориям. Нельзя уйти в минус.", tags: ["Мультикасса", "Контроль баланса"] },
        { title: "Отчёты", desc: "KPI, ADR, RevPAR. Тренды, топ-10 номеров, закрытие месяца, экспорт в Excel.", tags: ["ADR / RevPAR", "Excel"] },
        { title: "Настройки", desc: "Пользователи, роли, кассы, часовой пояс. Только для администратора.", tags: ["Роли", "Кассы"] },
      ],
    },
    why: {
      label: "Преимущества", heading: "Почему", headingY: "Natus",
      items: [
        { number: "0", suffix: " овербукинга", title: "Защита от двойного бронирования", desc: "Система автоматически проверяет доступность и не позволит заселить в занятый номер." },
        { number: "1", suffix: " клик", title: "Чек-ин и чек-аут", desc: "Весь процесс от брони до выселения — в одно нажатие. Быстрые платежи из карточки проживания." },
        { number: "100", suffix: "%", title: "Прозрачность финансов", desc: "Каждый сум проходит через кассу. Нельзя добавить расход если баланс кассы недостаточен." },
      ],
    },
    finance: {
      label: "Финансы", heading1: "Полный контроль", heading2: "над деньгами отеля",
      sub: "Несколько касс, приходы от гостей, расходы по категориям. Система не даст добавить расход при недостатке баланса.",
      kassaLabel: "Кассы", balanceLabel: "Баланс",
      items: ["Наличные, Терминал, PayMe — любые методы", "Каждая касса — отдельный баланс и история", "Расходы: зарплата, ремонт, маркетинг, прочее", "Фильтры по дате, типу, кассе", "Нельзя уйти в минус — контроль автоматический"],
      income: "↑ Приходы", expense: "↓ Расходы", netto: "= Нетто",
      kassas: [
        { name: "Наличные", balance: "3 200 000", delta: "+820 000", up: true },
        { name: "Терминал", balance: "1 580 000", delta: "+340 000", up: true },
        { name: "PayMe", balance: "420 000", delta: "−150 000", up: false },
      ],
    },
    reports: {
      label: "Отчёты", heading1: "Аналитика", heading2: "международного уровня",
      sub: "ADR, RevPAR, загрузка, закрытие месяца с защитой данных. Только для администратора.",
      kpiLabel: "KPI — текущий месяц",
      kpis: [
        { label: "Выручка", value: "420M сум", up: true }, { label: "Загрузка", value: "87%", up: true },
        { label: "ADR", value: "650 000 сум", up: false }, { label: "RevPAR", value: "565 500 сум", up: true },
      ],
      trendLabel: "Тренд выручки",
      months: ["Сен", "Окт", "Ноя", "Дек", "Янв", "Фев"],
      items: ["Тренд выручки за 6 месяцев", "Топ-10 номеров по доходу", "Разбивка по методам оплаты", "Расходы по категориям", "Закрытие месяца — защита от правок", "Экспорт в Excel одним кликом"],
    },
    roles: {
      label: "Роли доступа", heading1: "Каждый видит только то,", heading2: "что ему нужно",
      admin: "Администратор", manager: "Менеджер",
      adminFeatures: ["Все операции с данными", "Полные отчёты и аналитика", "Управление пользователями", "Создание и удаление касс", "Редактирование в закрытом месяце", "Видит расходы всех сотрудников"],
      managerFeatures: ["Все операции с данными", "Чек-ин и чек-аут", "Приём платежей от гостей", "Добавление расходов", "Видит только свои расходы", "Нет доступа к отчётам"],
    },
    cta: {
      badge: "Для малых и средних отелей",
      heading1: "Готовы навести", heading2: "порядок в отеле?",
      sub: "Покажем Natus в действии на реальных данных вашего отеля.",
      button: "Написать в Telegram",
    },
  },
  uz: {
    nav: {
      features: "Imkoniyatlar", why: "Nega Natus", finance: "Moliya", reports: "Hisobotlar", demo: "Demo so'rash",
    },
    hero: {
      heading1: "Mehmonxonani", heading2: "professional", heading3: "boshqaring.",
      sub: "Xonalar, yashash, moliya, tahlil va jamoa — hammasi bitta joyda. Quticha ichida ishlaydi.",
      demo: "Demo so'rash", features: "Imkoniyatlar",
      pills: ["Anti-overbooking", "RU / UZ", "Rol asosida kirish"],
    },
    stats: [
      { val: "6", label: "Modullar" }, { val: "2", label: "Kirish rollari" },
      { val: "RU/UZ", label: "Ko'p tilli" }, { val: "ADR", label: "+ RevPAR tahlil" },
    ],
    modules: {
      label: "Modullar",
      heading1: "Kerakli hamma narsa —", heading2: "bitta tizimda",
      items: [
        { title: "Boshqaruv paneli", desc: "Kelishlar, ketishlar, band bo'lish, daromad va xonalar holati — real vaqtda.", tags: ["Real-time", "Xonalar sxemasi"] },
        { title: "Xonalar", desc: "Xona fondini boshqarish: turi, qavat, sig'im, narx. Tezkor qidiruv va filtrlash.", tags: ["Qidiruv", "Filtrlar"] },
        { title: "Yashash", desc: "Brondan chiqishgacha bir tugma. Depozitlar, chegirmalar. Ikki bron istisno qilingan.", tags: ["Chek-in / Chek-out", "Anti-overbooking"] },
        { title: "Moliya", desc: "Multikassa, mehmonlardan tushumlar, toifalardagi xarajatlar. Minusga chiqib bo'lmaydi.", tags: ["Multikassa", "Balans nazorati"] },
        { title: "Hisobotlar", desc: "KPI, ADR, RevPAR. Trendlar, top-10 xona, oyni yopish, Excel eksport.", tags: ["ADR / RevPAR", "Excel"] },
        { title: "Sozlamalar", desc: "Foydalanuvchilar, rollar, kassalar, vaqt zonasi. Faqat administrator uchun.", tags: ["Rollar", "Kassalar"] },
      ],
    },
    why: {
      label: "Afzalliklar", heading: "Nega", headingY: "Natus",
      items: [
        { number: "0", suffix: " overbooking", title: "Ikki bron qilishdan himoya", desc: "Tizim avtomatik ravishda mavjudlikni tekshiradi va band xonaga joylashtirmaslikni ta'minlaydi." },
        { number: "1", suffix: " bosish", title: "Chek-in va chek-out", desc: "Brondan chiqarishgacha butun jarayon — bir bosuv. Yashash kartochasidan tezkor to'lovlar." },
        { number: "100", suffix: "%", title: "Moliyaviy shaffoflik", desc: "Har bir so'm kassadan o'tadi. Kassa balansi yetarli bo'lmasa xarajat qo'shib bo'lmaydi." },
      ],
    },
    finance: {
      label: "Moliya", heading1: "Pul ustidan", heading2: "to'liq nazorat",
      sub: "Bir nechta kassa, mehmonlardan tushumlar, toifalardagi xarajatlar. Balans yetarli bo'lmasa xarajat qo'shib bo'lmaydi.",
      kassaLabel: "Kassalar", balanceLabel: "Balans",
      items: ["Naqd, Terminal, PayMe — istalgan usul", "Har bir kassa — alohida balans va tarix", "Xarajatlar: maosh, ta'mirlash, marketing, boshqa", "Sana, tur, kassa bo'yicha filtrlar", "Minusga chiqib bo'lmaydi — nazorat avtomatik"],
      income: "↑ Tushumlar", expense: "↓ Xarajatlar", netto: "= Sof foyda",
      kassas: [
        { name: "Naqd pul", balance: "3 200 000", delta: "+820 000", up: true },
        { name: "Terminal", balance: "1 580 000", delta: "+340 000", up: true },
        { name: "PayMe", balance: "420 000", delta: "−150 000", up: false },
      ],
    },
    reports: {
      label: "Hisobotlar", heading1: "Xalqaro darajadagi", heading2: "tahlil",
      sub: "ADR, RevPAR, band bo'lish, ma'lumotlarni himoya qilish bilan oyni yopish. Faqat administrator uchun.",
      kpiLabel: "KPI — joriy oy",
      kpis: [
        { label: "Daromad", value: "420M so'm", up: true }, { label: "Band bo'lish", value: "87%", up: true },
        { label: "ADR", value: "650 000 so'm", up: false }, { label: "RevPAR", value: "565 500 so'm", up: true },
      ],
      trendLabel: "Daromad trendi",
      months: ["Sen", "Okt", "Noy", "Dek", "Yan", "Fev"],
      items: ["6 oylik daromad trendi", "Daromad bo'yicha top-10 xona", "To'lov usullari bo'yicha taqsimlash", "Toifalar bo'yicha xarajatlar", "Oyni yopish — o'zgartirishdan himoya", "Bir klik bilan Excel eksport"],
    },
    roles: {
      label: "Kirish rollari", heading1: "Har biri faqat", heading2: "o'ziga kerakni ko'radi",
      admin: "Administrator", manager: "Menejer",
      adminFeatures: ["Barcha ma'lumotlar bilan operatsiyalar", "To'liq hisobotlar va tahlil", "Foydalanuvchilarni boshqarish", "Kassalarni yaratish va o'chirish", "Yopiq oyda tahrirlash", "Barcha xodimlar xarajatlarini ko'rish"],
      managerFeatures: ["Barcha ma'lumotlar bilan operatsiyalar", "Chek-in va chek-out", "Mehmonlardan to'lovlarni qabul qilish", "Xarajatlar qo'shish", "Faqat o'z xarajatlarini ko'radi", "Hisobotlarga kirish yo'q"],
    },
    cta: {
      badge: "Kichik va o'rta mehmonxonalar uchun",
      heading1: "Mehmonxonangizda", heading2: "tartib o'rnatishga tayyormisiz?",
      sub: "Natus'ni mehmonxonangiz real ma'lumotlari asosida ko'rsatamiz.",
      button: "Telegramga yozish",
    },
  },
};

export const pitch = {
  ru: {
    slides: ["Natus", "Проблема", "Решение", "Финансы", "Роли", "Почему Natus", "Контакт"],
    s1: { badge: "Hotel Management System", sub: "Профессиональная система управления отелем — всё в одном интерфейсе", tags: ["Номера", "Проживания", "Финансы", "Аналитика", "Роли"] },
    s2: {
      label: "Проблема", heading: "Как отели работают сегодня",
      problems: ["Excel-таблицы с историей проживаний теряются и путаются", "Нет единого учёта финансов — всё на бумаге или в блокноте", "Сотрудники путают номера, двойные бронирования", "Руководитель не видит реальную картину по отелю онлайн", "Нет аналитики — не ясно какие номера прибыльнее", "Отчёты формируются вручную часами"],
    },
    s3: {
      label: "Решение", heading: "Natus — всё в одном месте",
      modules: [
        { title: "Номера", desc: "Визуальная карта всех номеров с реальным статусом" },
        { title: "Гости", desc: "Полная история проживаний каждого гостя" },
        { title: "Финансы", desc: "Доходы, расходы, нетто в реальном времени" },
        { title: "Аналитика", desc: "Загруженность, выручка, тренды по периодам" },
        { title: "Отчёты", desc: "Автоматические отчёты одной кнопкой" },
        { title: "Роли", desc: "Администратор и менеджер с разными правами" },
      ],
    },
    s4: {
      label: "Финансы & Аналитика", heading: "Полный контроль над деньгами", thisMonth: "Текущий месяц",
      finance: [{ label: "Доходы", value: "124M сум", color: "#22c55e", pct: 80 }, { label: "Расходы", value: "31M сум", color: "#ef4444", pct: 25 }, { label: "Нетто", value: "93M сум", color: "#F5C100", pct: 60 }],
      stats: [{ label: "Заполняемость", value: "87%", sub: "выше среднего по рынку" }, { label: "Средний чек", value: "420K сум", sub: "за ночь / номер" }, { label: "Активных гостей", value: "24", sub: "прямо сейчас" }],
    },
    s5: {
      label: "Роли сотрудников", heading: "Каждый видит только своё",
      roles: [
        { role: "Администратор", color: "#F5C100", perms: ["Полный доступ ко всем модулям", "Управление сотрудниками и ролями", "Финансовые отчёты и аналитика", "Настройки системы и номерного фонда", "Просмотр всей истории операций"] },
        { role: "Менеджер", color: "#60a5fa", perms: ["Управление номерами и бронированиями", "Регистрация заезда и выезда гостей", "Базовая кассовая операция", "Просмотр расписания номеров", "Без доступа к финансовым итогам"] },
      ],
    },
    s6: {
      label: "Почему Natus", heading: "Конкретные результаты",
      advantages: [
        { title: "Быстрый старт", desc: "Настройка и запуск за 1 день. Обучение персонала — 2 часа." },
        { title: "-70% времени", desc: "На рутинные операции: заезд, выезд, отчёты." },
        { title: "Рост выручки", desc: "Аналитика помогает заполнять номера и управлять ценами." },
        { title: "Безопасность", desc: "Разграничение прав — никто не видит лишнего." },
        { title: "Отчёты мгновенно", desc: "Любой отчёт за любой период — одна кнопка." },
        { title: "Один экран", desc: "Весь отель на одном дашборде в реальном времени." },
      ],
    },
    s7: {
      label: "Начать работу", heading: "Готовы запустить Natus в вашем отеле?",
      sub: "Покажем систему вживую на демо-данных.\nПервый месяц — бесплатно.",
      button: "Написать в Telegram",
      stats: [{ num: "1 день", label: "быстрый запуск" }, { num: "24/7", label: "работает без остановок" }, { num: "∞", label: "номеров и гостей" }],
    },
  },
  uz: {
    slides: ["Natus", "Muammo", "Yechim", "Moliya", "Rollar", "Nega Natus", "Aloqa"],
    s1: { badge: "Hotel Management System", sub: "Mehmonxona uchun professional boshqaruv tizimi — hammasi bitta interfeysda", tags: ["Xonalar", "Yashash", "Moliya", "Tahlil", "Rollar"] },
    s2: {
      label: "Muammo", heading: "Mehmonxonalar bugun qanday ishlaydi",
      problems: ["Excel jadvallari yo'qoladi va chalkashib ketadi", "Moliyaning yagona hisobi yo'q — hammasi qog'ozda", "Xodimlar xonalarni adashtiradi, ikki bron bo'ladi", "Rahbar onlayn real holatni ko'ra olmaydi", "Tahlil yo'q — qaysi xonalar daromadliroq aniqlanmaydi", "Hisobotlar soatlab qo'lda tuziladi"],
    },
    s3: {
      label: "Yechim", heading: "Natus — hammasi bitta joyda",
      modules: [
        { title: "Xonalar", desc: "Barcha xonalarning real holatini ko'rsatuvchi vizual xarita" },
        { title: "Mehmonlar", desc: "Har bir mehmonning to'liq yashash tarixi" },
        { title: "Moliya", desc: "Daromadlar, xarajatlar, sof foyda — real vaqtda" },
        { title: "Tahlil", desc: "Band bo'lish, daromad, davr bo'yicha trendlar" },
        { title: "Hisobotlar", desc: "Bir tugma bilan avtomatik hisobotlar" },
        { title: "Rollar", desc: "Administrator va menejer turli huquqlar bilan" },
      ],
    },
    s4: {
      label: "Moliya & Tahlil", heading: "Pul ustidan to'liq nazorat", thisMonth: "Joriy oy",
      finance: [{ label: "Daromadlar", value: "124M so'm", color: "#22c55e", pct: 80 }, { label: "Xarajatlar", value: "31M so'm", color: "#ef4444", pct: 25 }, { label: "Sof foyda", value: "93M so'm", color: "#F5C100", pct: 60 }],
      stats: [{ label: "Band bo'lish", value: "87%", sub: "bozor o'rtachasidan yuqori" }, { label: "O'rtacha narx", value: "420K so'm", sub: "kecha / xona" }, { label: "Faol mehmonlar", value: "24", sub: "hozir" }],
    },
    s5: {
      label: "Xodimlar rollari", heading: "Har biri faqat o'ziga kerakni ko'radi",
      roles: [
        { role: "Administrator", color: "#F5C100", perms: ["Barcha modullarga to'liq kirish", "Xodimlar va rollarni boshqarish", "Moliyaviy hisobotlar va tahlil", "Tizim va xona fondi sozlamalari", "Barcha operatsiyalar tarixini ko'rish"] },
        { role: "Menejer", color: "#60a5fa", perms: ["Xonalar va bronlarni boshqarish", "Mehmonlarni chek-in va chek-out qilish", "Asosiy kassa operatsiyasi", "Xonalar jadvalini ko'rish", "Moliyaviy yakunlarga kirish yo'q"] },
      ],
    },
    s6: {
      label: "Nega Natus", heading: "Aniq natijalar",
      advantages: [
        { title: "Tez ishga tushish", desc: "Sozlash va ishga tushirish — 1 kun. Xodimlarni o'rgatish — 2 soat." },
        { title: "-70% vaqt", desc: "Rutin operatsiyalarga: kelish, ketish, hisobotlar." },
        { title: "Daromad o'sishi", desc: "Tahlil xonalarni to'ldirish va narxlarni boshqarishga yordam beradi." },
        { title: "Xavfsizlik", desc: "Huquqlarni ajratish — hech kim keragidan ko'proq ko'rmaydi." },
        { title: "Tezkor hisobotlar", desc: "Istalgan davr uchun istalgan hisobot — bir tugma." },
        { title: "Bitta ekran", desc: "Butun mehmonxona real vaqtda bitta boshqaruv panelida." },
      ],
    },
    s7: {
      label: "Ishni boshlash", heading: "Natus'ni mehmonxonangizda ishga tushirishga tayyormisiz?",
      sub: "Tizimni demo-ma'lumotlarda jonli ko'rsatamiz.\nBirinchi oy — bepul.",
      button: "Telegramga yozish",
      stats: [{ num: "1 kun", label: "tez ishga tushish" }, { num: "24/7", label: "to'xtamasdan ishlaydi" }, { num: "∞", label: "xonalar va mehmonlar" }],
    },
  },
};
