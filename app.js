//*navbar
const navbar = document.getElementById('nav')
window.addEventListener('scroll', function(e) {
  const lastPosition = window.scrollY
  if (lastPosition > 30 ) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky')
  }
} 
)

//*send mail
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_nanea9v';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


