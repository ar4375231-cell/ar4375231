// MENU MOBILE
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// CERRAR MENU AL HACER CLICK EN UN ENLACE
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// SCROLL ANIMATIONS
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.atractivo-card, .actividad-item, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// NAVBAR SCROLL EFFECT
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// COUNTER ANIMATION (si se agregan estadísticas)
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// GALERIA LIGHTBOX (simple)
const galeriaItems = document.querySelectorAll('.galeria-item');
galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const src = img.src;
        const title = item.querySelector('.overlay p').textContent;
        
        // Crear modal simple
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 10px;
        `;
        
        modal.appendChild(modImg);
        document.body.appendChild(modal);
        
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});

// FORM VALIDATION (si se agrega formulario)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#e53e3e';
            isValid = false;
        } else {
            input.style.borderColor = '#cbd5e0';
        }
    });
    
    return isValid;
}

// LOADING ANIMATION
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    console.log('Jiquipilco Turismo - Sitio cargado correctamente');
});