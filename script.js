const potatoBtn = document.getElementById('potato-btn');

potatoBtn.addEventListener('click', () => {
    for (let i = 0; i < 80; i++) {
        setTimeout(() => spawnPotato(), i * 40);
    }
});

function spawnPotato() {
    const potato = document.createElement('div');
    potato.classList.add('potato-flood');
    potato.textContent = '🥔';
    potato.style.left = Math.random() * 100 + 'vw';
    potato.style.fontSize = (25 + Math.random() * 45) + 'px';
    const duration = 2 + Math.random() * 3;
    potato.style.animationDuration = duration + 's';
    document.body.appendChild(potato);

    setTimeout(() => {
        potato.remove();
    }, duration * 1000);
}
