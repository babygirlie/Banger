// 1. BALLOON GENERATOR (Runs automatically when page loads)
function createBalloons() {
    const symbols = ['🎈', '💖', '✨', '🌸'];
    for (let i = 0; i < 20; i++) {
        let b = document.createElement('div');
        b.className = 'balloon';
        b.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        b.style.left = Math.random() * 100 + 'vw';
        b.style.animationDelay = Math.random() * 10 + 's';
        b.style.fontSize = (Math.random() * 20 + 20) + 'px';
        document.body.appendChild(b);
    }
}
createBalloons();

// 2. START BUTTON (Plays music and scrolls to Page 2)
function startExperience() {
    const song = document.getElementById('mySong');
    song.play().catch(e => console.log("Music needs a click to play!"));
    window.location.hash = "s2";
}

// 3. SURPRISE POP-UP (Page 11)
function showSurprise() {
    const container = document.getElementById('popImg');
    container.classList.add('active');
}

// 4. CAKE CUTTING & FIREWORKS (Page 12)
function handleCake() {
    const cake = document.getElementById('cakeDisplay');
    const msg = document.getElementById('cakeMsg');
    
    cake.innerHTML = "🍰"; 
    msg.innerHTML = "HAPPY 2nd ANNIVERSARY WOMAN! ❤️";
    msg.style.color = "#ff00ff";
    msg.style.textShadow = "0 0 15px #ff00ff";

    // Launch 50 firework particles from the center
    for (let i = 0; i < 60; i++) {
        createFirework();
    }
}

// 5. FIREWORK ENGINE
function createFirework() {
    const f = document.createElement('div');
    f.className = 'firework';
    
    // Spawn from the center of the screen
    f.style.left = '50vw';
    f.style.top = '50vh';
    
    // Random Neon Color
    const color = `hsl(${Math.random() * 360}, 100%, 60%)`;
    f.style.backgroundColor = color;
    f.style.boxShadow = `0 0 10px ${color}`;
    
    // Random explosion direction
    const x = (Math.random() - 0.5) * 500 + 'px';
    const y = (Math.random() - 0.5) * 500 + 'px';
    f.style.setProperty('--x', x);
    f.style.setProperty('--y', y);
    
    document.body.appendChild(f);
    
    // Remove particle after animation ends
    setTimeout(() => f.remove(), 1000);
}

// 6. SCROLL ANIMATION TRIGGER (Paragraphs slide in)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));
