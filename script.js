document.getElementById('loveButton').addEventListener('click', () => {
    const heartContainer = document.getElementById('heartContainer');

    // Create a heart element
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    // Random position within the container
    heart.style.left = Math.random() * 80 + 10 + '%';
    heart.style.animationDuration = (Math.random() * 1 + 1.5) + 's';

    heartContainer.appendChild(heart);

    // Remove the heart after animation
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
});
