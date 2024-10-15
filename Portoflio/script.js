// Smooth scroll functionality for 'Get to Know Me' button
document.querySelector('.cta-btn').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#portfolio').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

// Scroll-based fade-in effect
const faders = document.querySelectorAll('.portfolio-item');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
