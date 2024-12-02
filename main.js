let Menuicon = document.querySelector('#Menu=icon');
let Navbar = document.querySelector('.Navbar');
let Section = document.querySelectorAll('.Section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  Section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}
MenuIcon.onclick =() => {
  MenuIcon.classList.toggle('bx-x');
  Navbar.classList.toggle('active');
}