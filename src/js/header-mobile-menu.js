(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-header-mobile-menu]"),
        closeModalBtn: document.querySelector("[data-close-header-mobile-menu]"),
        backdrop: document.querySelector("[data-backdrop-header-mobile-menu]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden-header-mobile-menu");
        if (document.body.style.overflow == "hidden") {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "hidden";
        }
    }

    function logBackdropClick() {
        console.log("Це клік в бекдроп");
    }
})();