document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section"); // Get all sections inside <main>

    function updateActiveNav() {
        let scrollPosition = window.scrollY + 200; // Offset to detect section in view

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach((link) => link.classList.remove("active"));
                
                // Add active class to the current section's nav link
                correspondingNavLink.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
});
