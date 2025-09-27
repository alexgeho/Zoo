// js/main.js

// Находим все ссылки категорий и карточки животных
const categoryLinks = document.querySelectorAll('.sidebar a');
const animals = document.querySelectorAll('.animal');

// Вешаем событие на каждую ссылку
categoryLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // отключаем переход по ссылке
    const category = link.dataset.category; // берём значение data-category

    // Перебираем всех животных
    animals.forEach(animal => {
      if (category === 'all' || animal.dataset.category === category) {
        animal.style.display = 'block'; // показываем
      } else {
        animal.style.display = 'none'; // скрываем
      }
    });
  });
});
