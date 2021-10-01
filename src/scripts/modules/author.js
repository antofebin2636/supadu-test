export default function init() {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const btnCloseModal = document.querySelector(".btn--close-modal");
    const btnsOpenModal = document.querySelectorAll(".author--modal");
    const body = document.getElementsByTagName("body")[0];

    const openModal = function(e) {
        e.preventDefault();
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        body.classList.add("stop");
    };

    const closeModal = function() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
        body.classList.remove("stop");
    };

    btnCloseModal.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);

    btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
}