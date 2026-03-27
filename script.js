// ================= MENU TOGGLE =================

function toggleMenu(){
const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menu.classList.toggle("active");
overlay.classList.toggle("active");
}

function closeMenu(){
document.getElementById("sideMenu").classList.remove("active");
document.getElementById("overlay").classList.remove("active");
}


// ================= CLOSE MENU ON LINK CLICK =================

document.querySelectorAll(".side-menu a").forEach(link => {
link.addEventListener("click", () => {
closeMenu();
});
});


// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(
'.info-section, .services-section, .team-grid, .contact-section'
);

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:0.15
});

sections.forEach(section=>{
section.classList.add("section");
observer.observe(section);
});


// ================= CLOSE MENU WHEN CLICK OUTSIDE =================

document.addEventListener("click", function(e){
const menu = document.getElementById("sideMenu");
const toggle = document.querySelector(".menu-toggle");

if(
menu.classList.contains("active") &&
!menu.contains(e.target) &&
!toggle.contains(e.target)
){
closeMenu();
}
});
// ABOUT SECTION ANIMATION

const aboutSections = document.querySelectorAll('.about-section');

window.addEventListener('scroll', () => {
aboutSections.forEach(sec => {
const top = sec.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
sec.classList.add('show');
}
});
});