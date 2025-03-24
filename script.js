function setActiveLink() {
    const scrollPosition = window.scrollY;
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        const sectionId = link.getAttribute('href').split("#")[1]; 
        const section = document.getElementById(sectionId);
        
        if (section) {
            const sectionTop = section.offsetTop - window.innerHeight * 0.3; 
            const sectionBottom = sectionTop + section.offsetHeight;

            // Remove active class from all links
            links.forEach(link => link.classList.remove('active'));

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                link.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
