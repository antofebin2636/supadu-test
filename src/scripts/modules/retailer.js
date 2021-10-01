export default function init() {
    const retailerTab = document.querySelector(".Reatiler__col");
    const tabs = document.querySelectorAll(".Retailer__cta");

    const handleOver = function(e) {
        if (e.target.classList.contains("RetailImg")) {
            const link = e.target;

            const siblings = link
                .closest(".Reatiler__col")
                .querySelectorAll(".RetailImg");

            siblings.forEach((el) => {
                if (el !== link) {
                    el.style.opacity = this;
                }
            });
        }
    };

    retailerTab.addEventListener("mouseover", handleOver.bind(0.5));

    retailerTab.addEventListener("mouseout", handleOver.bind(1));
}