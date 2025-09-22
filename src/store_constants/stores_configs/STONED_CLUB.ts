import { StoreType, ViewModeType } from "store_constants/types";

export const STONED_CLUB = {
  storage_key: "sc_ua",
  active: true, // Поле которое запускает магазин true - работает false - остановлен / по тех. причина
  status: null,
  required_registration: false,
  URL: ["https://stoned-club.netlify.app"],
  web_lang: "uk", // html lang
  store_name: "STONED CLUB",
  store_code: "stoned_club",
  app_lang: "ua",
  supported_countries: [{ code: "UA", country: "ukraine" }],
  telegram_sender: false,
  managers: null,
  options: {
    no_reg_order: true,
    telegram_bot: [
      //MY ALB
      {
        token: "8118561264:AAFxhkoULSi9abzaTt9nHNFM6RCfBbBUV1M",
        chatId: "480774886",
        items: [
          "listing",
          "cocktail",
          "register",
          "feedback_form",
          "price_request",
          "login",
          `order`,
        ],
      },
    ],
    product_image_options: { width: 3.2, height: 4 },
    main_price_multiplication: 1,
    sale_price_multiplication: 1,
    currency_multiplication: 1,
    retail_price_multiplication: 1,
    min_items_to_buy: 1,
    store_type: StoreType?.sales,
    informative_page_active: false,
    custom_currency: null,
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
    store_title: "Stoned Club",
    store_description: `Ласкаво просимо до Alberto Bini — світу вишуканого жіночого верхнього одягу! Дослідіть наш широкий вибір високоякісних стильних пальт, тренчів та курток. Погрузіться в унікальний стиль та комфорт з Alberto Bini! Welcome to Alberto Bini — the world of exquisite women's outerwear! Explore our wide selection of high-quality stylish coats, trenches, and jackets. Immerse yourself in unique style and comfort with Alberto Bini!`,
    google_analytics_id: "G-C4TDRX7K5V",
    google_ads_id: "",
    conversion_id: "",
    store_logo: "alberto_bini_logo.png",
    store_poster: "alb.jpeg",
    keywords: {
      ru: "магазин",

      uk: "магазин",
    },
  },

  user_options: { view_mode: ViewModeType?.card },
  alerts: [],
};
