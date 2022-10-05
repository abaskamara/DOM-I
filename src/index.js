const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//IMAGES
const logoImg = document.querySelector('#logo-img')
logoImg.src = siteContent.images['logo-img']

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.images['cta-img']

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent.images['accent-img']

//FOOTER SECTION
const footer = document.querySelector('footer a')
footer.textContent = siteContent.footer.copyright
footer.classList.add('bold')

//CONTACTS SECTION
const contacts = document.querySelector('section.contact')
contacts.querySelector('h4').textContent = siteContent.contact['contact-h4']
contacts.querySelector('p').textContent = siteContent.contact['address']
contacts.children[2].textContent = siteContent.contact['phone']
contacts.children[3].textContent = siteContent.contact['email']

//TOP CONTENT
const topCont = document.querySelector('.top-content')
topCont.children[0].children[0].textContent = siteContent['main-content']['features-h4']
topCont.children[0].children[1].textContent = siteContent['main-content']['features-content']
topCont.children[1].children[0].textContent = siteContent['main-content']['about-h4']
topCont.children[1].children[1].textContent = siteContent['main-content']['about-content']

//BOTTOM CONTENT
const bottomCont = document.querySelector('.bottom-content')
const h4Bottoms = bottomCont.querySelectorAll('h4')
h4Bottoms[0].textContent = siteContent['main-content']['services-h4']
h4Bottoms[1].textContent = siteContent['main-content']['product-h4']
h4Bottoms[2].textContent = siteContent['main-content']['vision-h4']

const bottomParas = bottomCont.querySelectorAll('p')
bottomParas[0].textContent = siteContent['main-content']['services-content']
bottomParas[1].textContent = siteContent['main-content']['product-content']
bottomParas[2].textContent = siteContent['main-content']['vision-content']

//SECTION CTA
const h1 = document.querySelector('.cta h1')
h1.textContent = siteContent.cta.h1
const button = document.querySelector('button')
button.textContent = siteContent.cta.button

//NAV
const navLinks = document.querySelectorAll('header nav a')
const navText = Object.values(siteContent.nav)
navLinks.forEach((link, index) => {
  link.textContent = navText[index]
  link.classList.add('italic')
})