(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-open-header-form]"),
        closeModalBtn: document.querySelector("[data-close-header-form]"),
        backdrop: document.querySelector("[data-backdrop-header]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.backdrop.addEventListener("click", logBackdropClick);

    function toggleModal() {
        refs.backdrop.classList.toggle("is-hidden-header-form");
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