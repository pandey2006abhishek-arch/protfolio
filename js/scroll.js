const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    sections.forEach(function(section){

        const top = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(top < screenHeight - 150){

            section.classList.add("active");

        }

    });

});