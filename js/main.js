// js/main.js

// === ФИЛЬТРАЦИЯ ПО КАТЕГОРИЯМ ===
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

// === АЛЕРТ ПРИ КЛИКЕ НА ЖИВОТНОЕ ===
animals.forEach(animal => {
  animal.addEventListener('click', () => {
    const name = animal.querySelector('h3').innerText;
    alert(`📢 ${name}: detaljerad information kommer snart!`);
  });
});
