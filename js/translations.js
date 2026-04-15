// Translations file - Makkelijk te beheren NL/EN vertalingen

const translations = {
  // Home Page
  "Bekijk mijn werk": "View my work",
  "Contact": "Contact",
  "Over mij": "About me",
  "Uitgelicht werk": "Featured Work",
  "Een selectie van mijn recente projecten en expertise": "A selection of my recent projects and expertise",
  "Bekijk al mijn werk": "View all my work",
  "Vaardigheden": "Skills",
  "Technologieën en tools waar ik mee werk": "Technologies and tools I work with",
  "2026 Neïel Altmann. Alle rechten voorbehouden.": "2026 Neïel Altmann. All rights reserved.",
  
  // Navigation
  "Home": "Home",
  "Over Mij": "About Me",
  "Werk": "Work",
  "Jinet": "Jinet",
  "Netwerken": "Networking",
  "Software": "Software",
  "Blog": "Blog",
  "Contact": "Contact",
  
  // Index Page Cards
  "Netwerk Engineering": "Network Engineering",
  "Opzetten en onderhouden van netwerken, firewalls, Windows servers, Hypervisors en VPN-oplossingen voor bedrijven.": "Setting up and maintaining networks, firewalls, Windows servers, Hypervisors and VPN solutions for businesses.",
  "Software Development": "Software Development",
  "Ontwikkeling van websites en applicaties. Stage bij Datasur als Junior Software Developer.": "Development of websites and applications. Internship at Datasur as Junior Software Developer.",
  "Jinet Solutions": "Jinet Solutions",
  "Mijn eigen bedrijf voor IT-diensten: hardware/software reparaties, camera installaties en technische support.": "My own company for IT services: hardware/software repairs, camera installations and technical support.",
  "System Admin": "System Admin",
  "Windows Server, Hypervisors, NVR": "Windows Server, Hypervisors, NVR",
  "Web Development": "Web Development",
  "HTML, CSS, JavaScript, React": "HTML, CSS, JavaScript, React",
  
  // Work Page
  "Mijn Werk": "My Work",
  "Een overzicht van al mijn projecten en ervaring": "An overview of all my projects and experience",
  "Jinet Solutions - Mijn Bedrijf": "Jinet Solutions - My Company",
  "Bekijk project": "View project",
  
  // Blog Page
  "Gedachten, ideeën en project updates": "Thoughts, ideas and project updates",
  "Lees meer": "Read more",
  
  // Home Page Hero
  "👋 Welkom op mijn portfolio": "👋 Welcome to my portfolio",
  "Hi, ik ben": "Hi, I'm",
  "Meer over mij": "More about me",
  "Jaar ervaring": "Years experience",
  "Projecten": "Projects",
  "Gecertificeerd": "Certified",
  
  // About Page
  "Dit is mijn verhaal": "This is my story",
  "Van student tot Senior System Engineer & ondernemer in Suriname": "From student to Senior System Engineer & entrepreneur in Suriname",
  "Start opleiding": "Started education",
  "Jinet Solutions": "Jinet Solutions",
  "Senior Engineer": "Senior Engineer",
  "Mijn Verhaal": "My Story",
  "Ervaring": "Experience",
  "Opleiding & Certificaten": "Education & Certificates",
  "Vaardigheden in Detail": "Skills in Detail",
  
  // Contact/Social Page
  "Contact & Socials": "Contact & Socials",
  "Bereik me via social media of email": "Reach me via social media or email",
  "Persoonlijk": "Personal",
  "Bedrijf": "Company",
  "Terug naar blog": "Back to blog",
  "Email": "Email",
  "Locatie": "Location",
  "Beschikbaar voor remote werk en projecten": "Available for remote work and projects",
  "Neem contact met mij op": "Get in touch with me",
  "Contact Informatie": "Contact Information",
  "Vul het formulier in of neem direct contact op via:": "Fill out the form or contact me directly via:",
  
  // Contact Form Validation
  "Vul alle velden in alstublieft.": "Please fill in all fields.",
  "Vul een geldig email adres in.": "Please enter a valid email address.",
  "Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.": "Thank you for your message! I will contact you as soon as possible."
};

// Reverse translations (EN -> NL)
const reverseTranslations = {};
for (const [nl, en] of Object.entries(translations)) {
  reverseTranslations[en] = nl;
}

// Current language
let currentLang = localStorage.getItem('portfolio-language') || 'nl';

// Function to translate entire page
function translatePage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-language', lang);
  
  const allElements = document.querySelectorAll('*');
  
  allElements.forEach(element => {
    // Skip script and style elements
    if (element.tagName === 'SCRIPT' || element.tagName === 'STYLE') return;
    
    // Check if element has direct text content
    if (element.children.length === 0 || (element.children.length === 1 && element.children[0].tagName === 'BR')) {
      const originalText = element.textContent.trim();
      
      if (lang === 'en') {
        // Translate NL -> EN
        if (translations[originalText]) {
          element.textContent = translations[originalText];
        }
      } else {
        // Translate EN -> NL
        if (reverseTranslations[originalText]) {
          element.textContent = reverseTranslations[originalText];
        }
      }
    }
    
    // Check placeholders for inputs
    if (element.placeholder) {
      const originalPlaceholder = element.placeholder;
      if (lang === 'en') {
        if (translations[originalPlaceholder]) {
          element.placeholder = translations[originalPlaceholder];
        }
      } else {
        if (reverseTranslations[originalPlaceholder]) {
          element.placeholder = reverseTranslations[originalPlaceholder];
        }
      }
    }
  });
  
  updateLanguageButtons();
}

// Update language buttons
function updateLanguageButtons() {
  const nlBtn = document.getElementById('lang-nl');
  const enBtn = document.getElementById('lang-en');
  
  if (nlBtn && enBtn) {
    nlBtn.classList.toggle('active', currentLang === 'nl');
    enBtn.classList.toggle('active', currentLang === 'en');
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to language buttons
  const nlBtn = document.getElementById('lang-nl');
  const enBtn = document.getElementById('lang-en');
  
  if (nlBtn) {
    nlBtn.addEventListener('click', () => translatePage('nl'));
  }
  
  if (enBtn) {
    enBtn.addEventListener('click', () => translatePage('en'));
  }
  
  // Initialize buttons
  updateLanguageButtons();
});
