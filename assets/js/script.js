
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const sidebarItems = document.querySelectorAll(".sidebar li");
    const contentSections = document.querySelectorAll(".content-section");

    sidebarItems.forEach(item => {
        item.addEventListener("click", () => {

            sidebarItems.forEach(i => i.classList.remove("active"));

            item.classList.add("active");

            contentSections.forEach(section => section.classList.add("d-none"));

            const targetId = item.getAttribute("data-target");
            document.getElementById(targetId).classList.remove("d-none");
        });
    });
});
