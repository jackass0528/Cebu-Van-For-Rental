
const faqs = document.querySelectorAll(".faq");

faqs.forEach(function (faq) {
    faq.addEventListener("click", () => {
        faq.classlist.toggle("active");

    });
});
