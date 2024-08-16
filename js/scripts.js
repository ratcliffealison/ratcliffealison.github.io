//menu toggler

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    navbar.classList.toggle('active')
}

//darkmode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () =>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
         document.getElementById("profile-image").src = document.getElementById("profile-image").src.replace("_light", "_dark");
         document.body.classList.add('active');
        }else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.getElementById("profile-image").src = document.getElementById("profile-image").src.replace("_dark", "_light");
        document.body.classList.remove('active')
    }
}
 // Get elements
 const lightbox = document.getElementById('lightbox');
 const lightboxImg = document.getElementById('lightboxImg');
 const closeBtn = document.querySelector('.close');
 const galleryImages = document.querySelectorAll('.gallery-img img');

 // Open lightbox
 galleryImages.forEach((img, index) => {
     img.addEventListener('click', () => {
         lightbox.style.display = 'flex';
         lightboxImg.src = img.src;
         lightboxImg.alt = img.alt;
         currentIndex = index;
     });
 });

 // Close lightbox
 closeBtn.addEventListener('click', () => {
     lightbox.style.display = 'none';
 });

 // Close lightbox on clicking outside the image
 lightbox.addEventListener('click', (e) => {
     if (e.target === lightbox) {
         lightbox.style.display = 'none';
     }
 });

 // Variables to keep track of current image index
 let currentIndex;

 // Navigate to previous image
 document.querySelector('.prev').addEventListener('click', () => {
     if (currentIndex > 0) {
         currentIndex--;
         lightboxImg.src = galleryImages[currentIndex].src;
         lightboxImg.alt = galleryImages[currentIndex].alt;
     }
 });

 // Navigate to next image
 document.querySelector('.next').addEventListener('click', () => {
     if (currentIndex < galleryImages.length - 1) {
         currentIndex++;
         lightboxImg.src = galleryImages[currentIndex].src;
         lightboxImg.alt = galleryImages[currentIndex].alt;
     }
 });

 // Close on 'Escape' key press
 document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape') {
         lightbox.style.display = 'none';
     }
 });