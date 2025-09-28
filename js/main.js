
const categoryLinks = document.querySelectorAll('.sidebar a');
const animals = document.querySelectorAll('.animal');

categoryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const category = link.dataset.category;

    animals.forEach(animal => {
      if (category === 'all' || animal.dataset.category === category) {
        animal.style.display = 'block';
      } else {
        animal.style.display = 'none';
      }
    });
  });
});



animals.forEach(animal => {
  animal.addEventListener('click', () => {
    const nameParagraph = animal.querySelector('p'); 
    const nameText = nameParagraph.innerText.replace("Namn:", "").trim();
    alert(`📢 ${nameText}: detaljerad information kommer snart!`);
  });
});




window.addEventListener("scroll", function() {
  let scrollPos = window.scrollY;
  let hero = document.querySelector(".hero");
  hero.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
});

