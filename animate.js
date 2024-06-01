function animateProject(project) {
    project.classList.add('animate');
}


$(document).ready(function(){
    $(".titulo-animate").each(function(){
        animateProject(this);
    });
});
$(document).ready(function(){
    animateProject(document.querySelector('header img'));
    animateProject(document.querySelector('header h1'));
});
// JavaScript para controlar la animación
document.querySelectorAll('.team-member p').forEach(description => {
    description.addEventListener('mouseenter', () => {
        description.classList.add('hidden');
    });

    description.addEventListener('mouseleave', () => {
        description.classList.remove('hidden');
    });
});
