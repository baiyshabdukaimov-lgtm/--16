// 1. Изменение цвета шапки при скролле
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Случайные советы от шефа
const adviceBtn = document.getElementById('advice-btn');
const mainBtn = document.getElementById('main-action');
const heroText = document.getElementById('hero-text');

const tips = [
    "Добавь щепотку соли в шоколад, чтобы усилить вкус!",
    "Всегда прогревай сковороду перед тем, как жарить мясо.",
    "Храни помидоры при комнатной температуре, а не в холодильнике.",
    "Чтобы лук не щипал глаза, охлади его перед резкой.",
    "Добавь немного сахара в соус для спагетти, чтобы убрать кислинку."
];

function showAdvice() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    heroText.innerText = tips[randomIndex];
    heroText.style.color = "#ffcc00";
    heroText.style.fontWeight = "bold";
}

// Вешаем события на кнопки
mainBtn.addEventListener('click', showAdvice);
adviceBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Чтобы страница не прыгала вверх при нажатии на ссылку
    showAdvice();
});