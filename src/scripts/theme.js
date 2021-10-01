/* ----------------------------------------------------------------------
| 💅 CSS - imported here so webpack can compile our CSS to dist
|--------------------------------------------------------------------- */
import "../styles/theme.scss";

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-module]").forEach((el) => {
        const name = el.getAttribute("data-module");
        const moduleInit = require(`./modules/${name}`).default;
        moduleInit({ el });
    });
});