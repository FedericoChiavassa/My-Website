// SmoothScroll Script
const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});


// Navbar Update on Scroll
const intro = document.getElementById('intro');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const sections = [ intro, skills, projects, contact];

const introMenu = document.getElementById('menu-intro');
const skillsMenu = document.getElementById('menu-skills');
const projectsMenu = document.getElementById('menu-projects');
const contactMenu = document.getElementById('menu-contact');
const menu = [ introMenu, skillsMenu, projectsMenu, contactMenu];

window.addEventListener('scroll', function (e){
    for (i = 0; i < sections.length; i++)  {

        sections[i].posTop = sections[i].getBoundingClientRect().top;
        sections[i].posBottom = sections[i].getBoundingClientRect().bottom;

        if( sections[i].posTop < 1 && sections[i].posBottom > -1) {
            for(x = 0; x < menu.length; x++) {
                menu[x].classList.remove("active");
            }
            menu[i].classList.add("active");
        }
    }
});

// Menu-icon Animation
function iconAnimation(x) {
    const width = window.innerWidth;
    if ( width < 684 ) {
        document.getElementById("menu-icon").classList.toggle("change");
        document.getElementById("navbar").classList.toggle("change");
    } else {
        if ( x.nodeName === "DIV" ) {
            document.getElementById("menu-icon").classList.toggle("change");
            document.getElementById("navbar").classList.toggle("change");
        }
    }
}

// Images Lightbox
function openModal() {
    document.getElementById("lightbox").style.display = "flex";
}
  
function closeModal() {
    document.getElementById("lightbox").style.display = "none";
}
  
let slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

onkeydown = function escFunc(event) {
    const x = event.which || event.keyCode;
    if (x == 27) {  
        document.getElementById("lightbox").style.display = "none";
    }
}


// Languages Translation
const ita = document.getElementById("btn-ita");
const eng = document.getElementById("btn-eng");

ita.onclick = function() {
    window.location.hash = "#ita";
    location.reload();
}

eng.onclick = function() {
    window.location.hash = "#eng";
    location.reload();
}

const language = {
    ita: {
        resume: "Curriculum",
        skills: "Competenze",
        projects: "Progetti",
        contact: "Contatto",
        languages: "Linguaggi",
        others: "Altro",
        lead: "Tre versioni dello stesso progetto create con tecnologie diverse.",
        desc1: "Applicazione Blog dove, registrando un tuo account, puoi...",
        desc1b: "creare, aggiornare e cancellare i tuoi post.",
        desc2: "Frontend e Backend interagiscono attraverso una REST API.",
        desc3: "Scarica uno dei progetti dal suo Github per testarlo.",
        send: "Mandami un'email a"
    }
}

if (window.location.hash) {
    if (window.location.hash === "#ita") {
        txt_resume.textContent = language.ita.resume;
        txt_skills_menu.textContent = language.ita.skills;
        txt_skills_title.textContent = language.ita.skills;
        txt_projects_menu.textContent = language.ita.projects;
        txt_projects_title.textContent = language.ita.projects;
        txt_contact_menu.textContent = language.ita.contact;
        txt_contact_title.textContent = language.ita.contact;
        txt_languages.textContent = language.ita.languages;
        txt_others.textContent = language.ita.others;
        txt_lead.textContent = language.ita.lead;
        txt_desc1.textContent = language.ita.desc1;
        txt_desc1b.textContent = language.ita.desc1b;
        txt_desc2.textContent = language.ita.desc2;
        txt_desc3.textContent = language.ita.desc3;
        txt_send.textContent = language.ita.send;
    }
}