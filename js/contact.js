// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Get current language
      const currentLang = localStorage.getItem('portfolio-language') || 'nl';
      
      // Simple validation
      if (!name || !email || !subject || !message) {
        const errorMsg = currentLang === 'en' ? 'Please fill in all fields.' : 'Vul alle velden in alstublieft.';
        alert(errorMsg);
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        const errorMsg = currentLang === 'en' ? 'Please enter a valid email address.' : 'Vul een geldig email adres in.';
        alert(errorMsg);
        return;
      }
      
      // Show success message (in a real application, you would send this to a server)
      const successMsg = currentLang === 'en' 
        ? 'Thank you for your message! I will contact you as soon as possible.' 
        : 'Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.';
      alert(successMsg);
      
      // Reset form
      contactForm.reset();
    });
  }
});
