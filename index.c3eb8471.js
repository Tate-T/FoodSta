!function(){var e={openModalBtn:document.querySelector("[data-open-form]"),closeModalBtn:document.querySelector("[data-close-form]"),backdrop:document.querySelector("[data-backdrop]")};function o(){e.backdrop.classList.toggle("is-hidden-form"),"hidden"==document.body.style.overflow?document.body.style.overflow="visible":document.body.style.overflow="hidden"}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o),e.backdrop.addEventListener("click",(function(){console.log("Це клік в бекдроп")}))}();
//# sourceMappingURL=index.c3eb8471.js.map
