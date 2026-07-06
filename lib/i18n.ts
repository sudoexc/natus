export type Lang = "ru" | "uz";

export const landing = {
  ru: {
    nav: {
      features: "Возможности", why: "Почему Natus", finance: "Финансы", reports: "Отчёты", pricing: "Цены", demo: "Начать бесплатно",
    },
    hero: {
      heading1: "Управляй", heading2: "отелем", heading3: "без хаоса.",
      sub: "Номера, проживания, финансы, аналитика и команда — всё в одном месте. Работает из коробки.",
      register: "Зарегистрировать отель", demo: "Попробовать демо", features: "Возможности",
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
    pricing: {
      label: "Цены", heading1: "Простые тарифы —", heading2: "без сюрпризов",
      featured: "Популярный", period: "сум/мес", cta: "Начать бесплатно",
      note: "Первый месяц — бесплатно. Без карты.",
      plans: [
        { name: "Старт", price: "299 000", features: ["До 10 номеров", "2 пользователя", "Все модули", "Telegram-отчёты"] },
        { name: "Стандарт", price: "499 000", features: ["До 30 номеров", "5 пользователей", "Всё из «Старт»", "Приоритетная поддержка"] },
        { name: "Про", price: "899 000", features: ["Без лимита номеров", "Безлимит пользователей", "Всё из «Стандарт»", "Внедрение под ключ"] },
      ],
    },
    cta: {
      badge: "Для малых и средних отелей",
      heading1: "Готовы навести", heading2: "порядок в отеле?",
      sub: "Покажем Natus в действии на реальных данных вашего отеля.",
      primary: "Создать отель бесплатно",
      button: "Или напишите нам в Telegram",
    },
  },
  uz: {
    nav: {
      features: "Imkoniyatlar", why: "Nega Natus", finance: "Moliya", reports: "Hisobotlar", pricing: "Narxlar", demo: "Bepul boshlash",
    },
    hero: {
      heading1: "Mehmonxonani", heading2: "professional", heading3: "boshqaring.",
      sub: "Xonalar, yashash, moliya, tahlil va jamoa — hammasi bitta joyda. Quticha ichida ishlaydi.",
      register: "Mehmonxonani ro'yxatdan o'tkazish", demo: "Demo ko'rish", features: "Imkoniyatlar",
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
    pricing: {
      label: "Narxlar", heading1: "Oddiy tariflar —", heading2: "kutilmagan xarajatlarsiz",
      featured: "Ommabop", period: "so'm/oy", cta: "Bepul boshlash",
      note: "Birinchi oy — bepul. Kartasiz.",
      plans: [
        { name: "Start", price: "299 000", features: ["10 tagacha xona", "2 foydalanuvchi", "Barcha modullar", "Telegram-hisobotlar"] },
        { name: "Standart", price: "499 000", features: ["30 tagacha xona", "5 foydalanuvchi", "«Start»dagi hammasi", "Ustuvor qo'llab-quvvatlash"] },
        { name: "Pro", price: "899 000", features: ["Xonalar soni cheklanmagan", "Cheksiz foydalanuvchi", "«Standart»dagi hammasi", "To'liq joriy etish"] },
      ],
    },
    cta: {
      badge: "Kichik va o'rta mehmonxonalar uchun",
      heading1: "Mehmonxonangizda", heading2: "tartib o'rnatishga tayyormisiz?",
      sub: "Natus'ni mehmonxonangiz real ma'lumotlari asosida ko'rsatamiz.",
      primary: "Mehmonxonani bepul yarating",
      button: "Yoki bizga Telegramda yozing",
    },
  },
};

export const pitch = {
  ru: {
    slides: ["Natus", "Проблема", "Решение", "Traction", "Рынок", "Конкуренты", "Бизнес-модель", "Go-to-market", "Roadmap", "Команда", "Ask", "Контакты"],
    s1: {
      badge: "Hotel Management System",
      sub: "Система управления отелём для малых и средних отелей Узбекистана",
      tags: ["Номера", "Проживания", "Финансы", "Аналитика", "Роли"],
      footer: "natus.uz · t.me/sqd_dev",
    },
    s2: {
      label: "Проблема", heading: "Как отели работают сегодня",
      problems: ["Учёт проживаний в Excel-таблицах — данные теряются и путаются", "Финансы на бумаге или в блокноте — единого учёта нет", "Двойные бронирования — гостей заселяют в занятый номер", "Отчёты формируются вручную часами", "Нет контроля кассы — деньги «утекают» незаметно", "Владелец не видит бизнес удалённо"],
    },
    s3: {
      label: "Решение", heading: "Natus — всё в одном месте",
      modules: [
        { title: "Дашборд", desc: "Заезды, выезды, загрузка и статусы номеров — в реальном времени" },
        { title: "Номера", desc: "Весь номерной фонд: типы, этажи, вместимость, цены" },
        { title: "Проживания", desc: "От брони до выезда. Анти-овербукинг: двойные брони исключены" },
        { title: "Финансы", desc: "Мультикасса: наличные, терминал, PayMe. Нельзя уйти в минус" },
        { title: "Отчёты", desc: "ADR, RevPAR, загрузка, закрытие месяца, экспорт в Excel" },
        { title: "Роли", desc: "Администратор и менеджер — каждый видит только своё" },
      ],
    },
    s4: {
      label: "Traction", heading: "Не идея, а работающий продукт",
      sub: "Первый клиент: TAHT HOTEL — Ташкент, 8 номеров",
      stats: [
        { value: "6 месяцев", label: "в системе" },
        { value: "350+", label: "заездов проведено" },
        { value: "300+ млн", label: "сум оборота через систему" },
        { value: "47% → 69%", label: "рост загрузки" },
      ],
      demo: "Живое демо: taht.natus.uz — реальные данные отеля",
    },
    s5: {
      label: "Рынок", heading: "Огромный и быстрорастущий рынок",
      stats: [
        { value: "6 900", label: "средств размещения в Узбекистане (185 600 мест)" },
        { value: "+962", label: "новых объекта только за 2025 год" },
        { value: "11,6 млн", label: "иностранных туристов в 2025" },
        { value: "Топ мира", label: "Узбекистан — в топе самых быстрорастущих tourism-рынков (UN Tourism)" },
      ],
      conclusion: "Тысячи новых отелей и гестхаусов — и почти все ведут учёт в Excel.",
    },
    s6: {
      label: "Конкуренты", heading: "С кем мы конкурируем",
      cols: [
        { title: "Excel и тетрадь", sub: "большинство отелей", points: ["Бесплатно — но хаос", "Двойные брони, потерянная история", "Нет контроля кассы и отчётов"] },
        { title: "Российские / западные PMS", sub: "Bnovo, TravelLine, Cloudbeds", points: ["От 2 000 ₽ до $100+/мес", "Нет UZS, нет PayMe / Click / Humo", "Нет узбекского языка", "Поддержка не здесь"] },
        { title: "Natus", sub: "создан в Ташкенте", points: ["Интерфейс RU / UZ", "Мультикасса под местные оплаты", "Telegram-отчёты", "От 299 000 сум/мес"] },
      ],
    },
    s7: {
      label: "Бизнес-модель", heading: "SaaS-подписка", featured: "Популярный", period: "сум/мес",
      plans: [
        { name: "Старт", price: "299 000", feat: "до 10 номеров" },
        { name: "Стандарт", price: "499 000", feat: "до 30 номеров" },
        { name: "Про", price: "899 000", feat: "без лимитов" },
      ],
      note: "Первый месяц — бесплатно",
      mrr: "100 отелей ≈ 45 млн сум MRR. Потенциал рынка ~40 млрд сум/год.",
    },
    s8: {
      label: "Go-to-market", heading: "Как мы получаем отели",
      points: [
        { title: "Прямые продажи", desc: "Отелям из листингов OLX и Booking — контакты уже открыты" },
        { title: "Гестхаусы Самарканда, Бухары, Хивы", desc: "Взрыв рынка: +528 гестхаусов только за 2025 год" },
        { title: "Telegram-каналы и ассоциации", desc: "Каналы и ассоциации отельеров Узбекистана" },
        { title: "Онбординг за 1 день", desc: "Обучение персонала — 2 часа. Низкий порог входа" },
      ],
    },
    s9: {
      label: "Roadmap", heading: "Куда мы идём",
      steps: [
        { when: "Q3 2026", title: "Первые 20 платящих отелей", desc: "Прямые продажи + пилоты в туристических городах" },
        { when: "Q4 2026", title: "Channel manager + онлайн-оплата", desc: "Интеграции Booking и OLX, оплата Click / PayMe" },
        { when: "2027", title: "Масштабирование", desc: "Сети отелей, EN-версия, выход в Центральную Азию" },
      ],
    },
    s10: {
      label: "Команда", heading: "Продукт построен отельером",
      members: [
        { name: "Javohir", role: "Фаундер", desc: "Фаундер и разработчик. Продукт построен в плотной связке с первым клиентом — отелем TAHT HOTEL (Ташкент): полгода ежедневной работы системы в реальной операционке, от кассы до закрытия месяца.", hiring: false },
        { name: "Hiring", role: "Sales", desc: "Открыта позиция: первый сейлз для прямых продаж отелям.", hiring: true },
      ],
    },
    s11: {
      label: "Ask", heading: "Что нам даст UZ Combinator",
      asks: [
        { title: "Менторство и нетворк", desc: "в узбекском tech-сообществе" },
        { title: "2 сейлза + маркетинг", desc: "инвестиции в команду продаж" },
        { title: "Channel-manager интеграции", desc: "Booking, OLX, онлайн-оплата Click / PayMe" },
        { title: "Поддержка 24/7", desc: "для растущей базы отелей" },
      ],
      goalValue: "20",
      goalLabel: "платящих отелей — цель на программу",
    },
    s12: {
      label: "Контакты", heading: "Свяжитесь с нами",
      links: [
        { url: "natus.uz", label: "сайт" },
        { url: "app.natus.uz", label: "регистрация за 5 минут" },
        { url: "taht.natus.uz", label: "живое демо" },
        { url: "t.me/sqd_dev", label: "Telegram" },
      ],
      button: "Написать в Telegram",
      note: "Первый месяц — бесплатно.",
    },
  },
  uz: {
    slides: ["Natus", "Muammo", "Yechim", "Traction", "Bozor", "Raqobatchilar", "Biznes-model", "Go-to-market", "Roadmap", "Jamoa", "Ask", "Aloqa"],
    s1: {
      badge: "Hotel Management System",
      sub: "O'zbekistondagi kichik va o'rta mehmonxonalar uchun boshqaruv tizimi",
      tags: ["Xonalar", "Yashash", "Moliya", "Tahlil", "Rollar"],
      footer: "natus.uz · t.me/sqd_dev",
    },
    s2: {
      label: "Muammo", heading: "Mehmonxonalar bugun qanday ishlaydi",
      problems: ["Yashash hisobi Excel jadvallarida — ma'lumotlar yo'qoladi va chalkashadi", "Moliya qog'ozda yoki daftarda — yagona hisob yo'q", "Ikki marta bron — mehmonlar band xonaga joylashtiriladi", "Hisobotlar soatlab qo'lda tuziladi", "Kassa nazorati yo'q — pul sezdirmay «oqib ketadi»", "Egasi biznesni masofadan ko'ra olmaydi"],
    },
    s3: {
      label: "Yechim", heading: "Natus — hammasi bitta joyda",
      modules: [
        { title: "Dashbord", desc: "Kelishlar, ketishlar, band bo'lish va xonalar holati — real vaqtda" },
        { title: "Xonalar", desc: "Butun xona fondi: turlari, qavatlar, sig'im, narxlar" },
        { title: "Yashash", desc: "Brondan chiqishgacha. Anti-overbooking: ikki bron istisno qilingan" },
        { title: "Moliya", desc: "Multikassa: naqd, terminal, PayMe. Minusga chiqib bo'lmaydi" },
        { title: "Hisobotlar", desc: "ADR, RevPAR, band bo'lish, oyni yopish, Excel eksport" },
        { title: "Rollar", desc: "Administrator va menejer — har biri faqat o'zinikini ko'radi" },
      ],
    },
    s4: {
      label: "Traction", heading: "G'oya emas — ishlayotgan mahsulot",
      sub: "Birinchi mijoz: TAHT HOTEL — Toshkent, 8 xona",
      stats: [
        { value: "6 oy", label: "tizimda ishlamoqda" },
        { value: "350+", label: "chek-in o'tkazildi" },
        { value: "300+ mln", label: "so'm aylanma tizim orqali" },
        { value: "47% → 69%", label: "band bo'lish o'sishi" },
      ],
      demo: "Jonli demo: taht.natus.uz — mehmonxonaning real ma'lumotlari",
    },
    s5: {
      label: "Bozor", heading: "Ulkan va tez o'sayotgan bozor",
      stats: [
        { value: "6 900", label: "joylashtirish vositasi O'zbekistonda (185 600 o'rin)" },
        { value: "+962", label: "yangi obyekt faqat 2025 yilda" },
        { value: "11,6 mln", label: "xorijiy turist 2025 yilda" },
        { value: "Jahon topi", label: "O'zbekiston — eng tez o'sayotgan turizm bozorlari qatorida (UN Tourism)" },
      ],
      conclusion: "Minglab yangi mehmonxona va gestxauslar — deyarli barchasi hisobni Excelda yuritadi.",
    },
    s6: {
      label: "Raqobatchilar", heading: "Biz kim bilan raqobatlashamiz",
      cols: [
        { title: "Excel va daftar", sub: "aksariyat mehmonxonalar", points: ["Bepul — lekin xaos", "Ikki bron, yo'qolgan tarix", "Kassa nazorati va hisobotlar yo'q"] },
        { title: "Rossiya / G'arb PMS", sub: "Bnovo, TravelLine, Cloudbeds", points: ["2 000 ₽ dan $100+/oygacha", "UZS yo'q, PayMe / Click / Humo yo'q", "O'zbek tili yo'q", "Qo'llab-quvvatlash bu yerda emas"] },
        { title: "Natus", sub: "Toshkentda yaratilgan", points: ["RU / UZ interfeys", "Mahalliy to'lovlar uchun multikassa", "Telegram-hisobotlar", "299 000 so'm/oydan"] },
      ],
    },
    s7: {
      label: "Biznes-model", heading: "SaaS-obuna", featured: "Ommabop", period: "so'm/oy",
      plans: [
        { name: "Start", price: "299 000", feat: "10 tagacha xona" },
        { name: "Standart", price: "499 000", feat: "30 tagacha xona" },
        { name: "Pro", price: "899 000", feat: "cheklovlarsiz" },
      ],
      note: "Birinchi oy — bepul",
      mrr: "100 mehmonxona ≈ 45 mln so'm MRR. Bozor salohiyati ~40 mlrd so'm/yil.",
    },
    s8: {
      label: "Go-to-market", heading: "Mehmonxonalarni qanday topamiz",
      points: [
        { title: "To'g'ridan-to'g'ri sotuvlar", desc: "OLX va Booking ro'yxatlaridagi mehmonxonalarga — kontaktlar allaqachon ochiq" },
        { title: "Samarqand, Buxoro, Xiva gestxauslari", desc: "Bozor portlashi: faqat 2025 yilda +528 gestxaus" },
        { title: "Telegram-kanallar va assotsiatsiyalar", desc: "O'zbekiston mehmonxona egalari kanallari va assotsiatsiyalari" },
        { title: "1 kunda onboarding", desc: "Xodimlarni o'rgatish — 2 soat. Kirish ostonasi past" },
      ],
    },
    s9: {
      label: "Roadmap", heading: "Qayerga ketyapmiz",
      steps: [
        { when: "Q3 2026", title: "Birinchi 20 ta to'lovchi mehmonxona", desc: "To'g'ridan-to'g'ri sotuvlar + turistik shaharlarda pilotlar" },
        { when: "Q4 2026", title: "Channel manager + onlayn to'lov", desc: "Booking va OLX integratsiyalari, Click / PayMe to'lovi" },
        { when: "2027", title: "Masshtablash", desc: "Mehmonxona tarmoqlari, EN-versiya, Markaziy Osiyoga chiqish" },
      ],
    },
    s10: {
      label: "Jamoa", heading: "Mahsulotni mehmonxona egasi qurgan",
      members: [
        { name: "Javohir", role: "Faunder", desc: "Faunder va dasturchi. Mahsulot birinchi mijoz — TAHT HOTEL (Toshkent) bilan yaqin hamkorlikda qurilgan: yarim yildan beri tizim real operatsiyalarda har kuni ishlamoqda — kassadan oy yopilishigacha.", hiring: false },
        { name: "Hiring", role: "Sales", desc: "Ochiq lavozim: mehmonxonalarga to'g'ridan-to'g'ri sotuvlar uchun birinchi seylz.", hiring: true },
      ],
    },
    s11: {
      label: "Ask", heading: "UZ Combinator bizga nima beradi",
      asks: [
        { title: "Mentorlik va netvork", desc: "o'zbek tech-hamjamiyatida" },
        { title: "2 ta seylz + marketing", desc: "sotuv jamoasiga investitsiyalar" },
        { title: "Channel-manager integratsiyalari", desc: "Booking, OLX, Click / PayMe onlayn to'lovi" },
        { title: "24/7 qo'llab-quvvatlash", desc: "o'sib borayotgan mehmonxonalar bazasi uchun" },
      ],
      goalValue: "20",
      goalLabel: "to'lovchi mehmonxona — dastur davomidagi maqsad",
    },
    s12: {
      label: "Aloqa", heading: "Biz bilan bog'laning",
      links: [
        { url: "natus.uz", label: "sayt" },
        { url: "app.natus.uz", label: "5 daqiqada ro'yxatdan o'tish" },
        { url: "taht.natus.uz", label: "jonli demo" },
        { url: "t.me/sqd_dev", label: "Telegram" },
      ],
      button: "Telegramga yozish",
      note: "Birinchi oy — bepul.",
    },
  },
};
