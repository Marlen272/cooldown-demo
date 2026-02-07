import { initMenu } from "./modules/menu.js";
import { initSmoothScroll } from "./modules/smoothScroll.js";
import { initYear } from "./modules/year.js";
import { initForm } from "./modules/form.js";
import { initI18n } from "./modules/i18n.js";
import { initTheme } from "./modules/theme.js";

initMenu();
initSmoothScroll();
initYear();
initI18n();   // i18n first, so form messages know the language
initForm();
initTheme();
