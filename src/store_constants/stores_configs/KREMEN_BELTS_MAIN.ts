import { StoreType, ViewModeType } from 'store_constants/types';

export const KREMEN_BELTS_MAIN = {
    storage_key: 'kb_ua-ws',
    active: true,
    required_registration: false,
    URL: ['https://kremen-belts.netlify.app'],
    web_lang: 'uk', // html lang
    store_name: 'Kremen Belts',
    store_code: 'DEFAULT',
    app_lang: 'ua',
    supported_countries: [{ code: 'UA', country: 'ukraine' }],
    telegram_sender: false,
    managers: null,
    options: {
        no_reg_order: true,
        telegram_bot: [
            //ALB RETAILER
            {
                token: '7115237316:AAFgbrVadLWMkPt3TEdmravEa37jO9N3WSQ',
                chatId: '480774886',
                items: ['listing', 'cocktail', 'register', 'feedback_form', 'price_request', 'login', `order`],
            },
        ],
        product_image_options: { width: 4, height: 3 },
        main_price_multiplication: 1,
        sale_price_multiplication: 1,
        currency_multiplication: 1,
        retail_price_multiplication: 1,
        custom_currency: null,
        min_items_to_buy: 1,
        store_type: StoreType?.sales,
        informative_page_active: false,
        custom_logo: false,
        plan_options: {
            prices: true,
            sizes: false,
            contacts: true,
            feedback: true,
            categories: true,
            productShare: true,
            cart: true,
            favorites: true,
            tableSizes: false,
        },
    },
    web_head_data: {
        store_title: 'Kremen Belts Wholesales Catalog | Kremen Belts Оптовий Каталог',
        store_description: `Ласкаво просимо до Kremen Belts — вашого найкращого джерела стильних ременів та аксесуарів! | Welcome to Kremen Belts — your ultimate source for stylish belts and accessories!`,
        google_analytics_id: 'G-7G98583PY1',
        google_ads_id: '',
        conversion_id: '',
        store_logo: 'kremen_belts_logo.png',
        store_poster: 'belts.jpeg',
        keywords: {},
    },
    user_options: { view_mode: ViewModeType?.card },
    alerts: [],
};
