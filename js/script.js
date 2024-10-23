const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');
const stars = [];
const numStars = 100;  // Number of stars

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createStars() {
    stars.length = 0;  // Clear existing stars
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: Math.random() * 2 + 0.5  // Random speed between 0.5 and 2.5
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.beginPath();
    stars.forEach(star => {
        ctx.moveTo(star.x, star.y);
        ctx.arc(star.x, star.y, 1, 0, Math.PI * 2, true);
    });
    ctx.fill();

    stars.forEach(star => {
        star.x += star.speed;
        if (star.x > canvas.width) {
            star.x = 0;
        }
    });
}

function animate() {
    draw();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();  // Recreate stars on resize
});

resizeCanvas();
createStars();
animate();
