import { StoreType, ViewModeType } from 'store_constants/types';

export const ALBERTO_BINI_KZ_WS = {
    storage_key: 'ab_kz-ws',
    active: true, // Поле которое запускает магазин true - работает false - остановлен / по тех. причина
    status: null,
    required_registration: false,
    URL: ['https://albertobini-kz.com', 'https://albertobini-kz.netlify.app'],
    web_lang: 'kz', // html lang
    store_name: 'Alberto Bini KZ',
    store_code: 'alberto_bini_europe',
    base_url: 'https://kremen-belts.com/api',
    app_lang: 'kz',
    supported_countries: null,
    telegram_sender: true,
    managers: [
        {
            firstName: 'Alberto Bini Manager',
            lastName: '',
            emailAddress: '',
            options: { manager: true },
            contacts: {
                emailAddress: '',
                phone:'+905367979030',
                viber:'+905367979030',
                whatsapp: '',
                telegram: '',
            },
        },

    ],
    options: {
        no_reg_order: true,
        telegram_bot: [
            //MY ALB
            {
                token: '8118561264:AAFxhkoULSi9abzaTt9nHNFM6RCfBbBUV1M',
                chatId: '480774886',
                items: ['listing', 'cocktail', 'register', 'feedback_form', 'price_request', 'login', `order`],
            },
            //LENA ALB
            {
                chatId: '6227152193',
                token: '7926269233:AAFOApI-YISLrblBEfrogo22aiBuf_QV5gQ',
                items: [
                    // 'listing', 'cocktail', 'register', 'feedback_form', 'price_request', 'login',
                    `order`,
                ],
            },
            //NATASHA ALB
            {
                token: '7501048516:AAFGRXP3nw7z0UWr4t-Dvz_oFt_98CFXX2k',
                chatId: '6221489796',
                items: [
                    // 'listing',
                    // 'cocktail', 'register', 'feedback_form', 'price_request', 'login',
                    `order`,
                ],
            },
        ],
        product_image_options: { width: 6, height: 9 },
        main_price_multiplication: 1,
        sale_price_multiplication: 1,
        currency_multiplication: 1,
        retail_price_multiplication: 1,
        custom_currency: '$',
        min_items_to_buy: 1,
        store_type: StoreType?.sales,
        informative_page_active: true,
        custom_logo: true,
        plan_options: {
            prices: true,
            sizes: true,
            contacts: true,
            feedback: true,
            categories: true,
            productShare: true,
            cart: true,
            favorites: true,
            tableSizes: true,
        },
    },
    web_head_data: {
        store_title: 'Alberto Bini Оптовый каталог | Alberto Bini Wholesales Catalog',
        store_description: `Добро пожаловать в мир изысканной женской верхней одежды от Alberto Bini! Ознакомьтесь с нашим широким ассортиментом стильных и качественных пальто, тренчей и курток. Погрузитесь в уникальный стиль и комфорт с Alberto Bini! | Қош келдіңіз Alberto Bini - жарлы жігерлі әйелдер үшін қонақтардың еліне! Біздің жанындағы көбінесе мол, артық өлшемдердің қолайлы қызметті көптық кепіл таңбаларын, тренчи, және жакеттерді зерттеңіз. Alberto Bini менің ерекше стильім мен комфорттық көріңіз! | Welcome to Alberto Bini — the world of exquisite women's outerwear! Explore our wide selection of high-quality stylish coats, trenches, and jackets. Immerse yourself in unique style and comfort with Alberto Bini!`,
        google_analytics_id: 'G-NFQK29FTWM',
        google_ads_id: 'AW-16545719098',
        conversion_id: 'moafCJ7O0qoZELrGztE9',
        store_logo: 'alberto_bini_logo.png',
        store_poster: 'alb.jpeg',
        keywords: {
            en: "women's outerwear, wholesale, retail, great prices, high quality, worldwide shipping",
            ru: 'женская верхняя одежда, оптом, в розницу, хорошие цены, высочайшее качество, продажа по всему миру',
            kk: 'әйелдер киімі, көтерме сауда, бөлшек сауда, жақсы бағалар, жоғары сапа, дүние жүзі бойынша жеткізу',
            uk: 'жіночий верхній одяг, оптом, у роздріб, гарні ціни, висока якість, продаж по всьому світу',
            pl: 'odzież damska, hurt, detal, dobre ceny, wysoka jakość, sprzedaż na całym świecie',
            cs: 'dámské svrchní oděvy, velkoobchod, maloobchod, dobré ceny, vysoká kvalita, prodej po celém světě',
            es: 'ropa exterior para mujeres, al por mayor, al por menor, buenos precios, alta calidad, venta en todo el mundo',
            fr: "vêtements d'extérieur pour femmes, en gros, au détail, bons prix, haute qualité, vente dans le monde entier",
        },
    },
    user_options: { view_mode: ViewModeType?.card },
    alerts: [],
};
