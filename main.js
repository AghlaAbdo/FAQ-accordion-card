let index = 0;
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq, i) => {
    faq.addEventListener("click", () => {
        if (index !== i && faqs[index].classList.contains("active")) {
            faqs[index].classList.remove("active");
        }
        faq.classList.toggle("active");
        index = i;
    })

})