export default function init() {
    const tabContainer = document.querySelector(".ProTab__btn--group");
    const tabs = document.querySelectorAll(".Btn--tab");
    const tabContent = document.querySelectorAll(".ProTab__content");

    const proSelect = document.querySelector(".Pro__select");

    tabContainer.addEventListener("click", function(e) {
        const clicked = e.target.closest(".Btn--tab");

        if (!clicked) return;
        tabs.forEach((t) => t.classList.remove("Btn--tab--active"));
        clicked.classList.add("Btn--tab--active");

        // Active content area
        const activeTab = clicked.dataset.tab;
        tabContent.forEach((tab) =>
            tab.classList.remove("ProTab__content--active")
        );
        document
            .querySelector(`.ProTab__content--${activeTab}`)
            .classList.add("ProTab__content--active");
    });

    proSelect.addEventListener("change", function(e) {
        const activeTab = e.target.value;
        tabContent.forEach((tab) =>
            tab.classList.remove("ProTab__content--active")
        );
        document
            .querySelector(`.ProTab__content--${activeTab}`)
            .classList.add("ProTab__content--active");
    });
}