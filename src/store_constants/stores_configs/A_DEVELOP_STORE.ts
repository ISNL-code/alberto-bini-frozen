import { ALBERTO_BINI_KZ_WS } from "./ALBERTO_BINI_KZ_WS"; // eslint-disable-line
import { ALBERTO_BINI_MAIN } from "./ALBERTO_BINI_MAIN"; // eslint-disable-line
import { ALBERTO_BINI_SALES } from "./ALBERTO_BINI_SALES"; // eslint-disable-line
import { KREMEN_BELTS_MAIN } from "./KREMEN_BELTS_MAIN"; // eslint-disable-line
import { RETAIL_ALBERTO_BINI } from "./RETAIL_ALBERTO_BINI";
import { STONED_CLUB } from "./STONED_CLUB";

export const DEVELOP_STORE = {
  // ...ALBERTO_BINI_MAIN,
  // ...ALBERTO_BINI_KZ_WS,
  // ...ALBERTO_BINI_SALES,
  // ...KREMEN_BELTS_MAIN,
  // ...STONED_CLUB,
  ...RETAIL_ALBERTO_BINI,

  URL: ["http://localhost:3000", "http://localhost:3001"],

  telegram_sender: true,
};
