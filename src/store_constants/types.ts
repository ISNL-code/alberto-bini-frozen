export enum StoreType {
    sales = 'sales',
    wholesales = 'wholesales',
    default = 'default',
}

export enum ViewModeType {
    grid_m = 'grid_m',
    card = 'card',
}

export enum AppAlertNameType {
    REGISTRATION = 'REGISTRATION',
}

export enum AppAlertSubjectType {
    PROMO = 'PROMO',
}
export interface STORE_CONFIG_Interface {
    STORAGE_KEY: string; // local storage key
    ACTIVE: boolean; // Show is web active or stopped
    STATUS?: string | null;
    REQUIRED_REGISTRATION: boolean; // use for stores with required registration
    STORE_NAME: string; // Real store name
    STORE_CODE: string; // use for get current store data
    APP_LANGUAGE: string; // init app language
    SUPPORTED_COUNTRIES: { code: string; country: string }[] | null; // use for limitation of supported countries
    HTML_LANG: string; // web html lang
    TELEGRAM_SENDER: boolean; // use for telegram send events
    MANAGERS?:
        | {
              firstName: string;
              lastName: string;
              emailAddress: string;
              options: { manager: boolean };
              contacts: {
                  emailAddress: string;
                  phone: string;
                  viber: string;
                  whatsapp: string;
                  telegram: string;
              };
          }[]
        | null;
    OPTIONS: {
        NO_REG_ORDER: boolean;
        TELEGRAM_BOT: { token: string; chatId: string; items: string[] }[] | null; //use for telegram message send
        PRODUCT_IMAGE_OPTIONS: { width: number; height: number }; // use for identification of product image size
        MAIN_PRICE_MULTIPLICATION: number; // use in custom catalogs for multiple main prices
        SALE_PRICE_MULTIPLICATION: number; // use in custom catalogs for multiple sales prices
        CURRENCY_MULTIPLICATION: number; // use in custom catalogs for multiple  prices if use different from default currency
        RETAIL_PRICE_MULTIPLICATION: number; // use for custom catalog when use wholesales prices for retail
        CUSTOM_CURRENCY: string | null; // use in custom catalogs  if use different from default currency
        MIN_ITEMS_TO_BUY: number; // use to set min items for ordering
        STORE_TYPE: StoreType; // use in custom catalogs for identification of store type
        INFORMATION_PAGE_ACTIVE: boolean; // use for info page (privacy policy....etc)
        CUSTOM_LOGO: boolean; // use for custom header logo
        PLAN_OPTIONS: {
            prices: boolean;
            sizes: boolean;
            contacts: boolean;
            feedback: boolean;
            categories: boolean;
            productShare: boolean;
            cart: boolean;
            favorites: boolean;
            tableSizes: boolean;
        };
    };
    WEB_HEAD_DATA: {
        STORE_TITLE: string;
        STORE_DESCRIPTION: string;
        GOOGLE_ANALYTICS_ID: string;
        GOOGLE_ADS_ID: string;
        CONVERSION_ID: string;
        STORE_LOGO: string;
        STORE_POSTER: string;
        KEYWORDS: {};
    };
    USER_OPTIONS: { VIEW_MODE: ViewModeType }; // use for product list view}
    ALERTS: { name: AppAlertNameType; description: string; subject: AppAlertSubjectType; active: boolean }[] | [];
}
