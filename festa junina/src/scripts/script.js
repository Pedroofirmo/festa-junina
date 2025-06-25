function updateJuninaCountdown() {
    const now = new Date();
    const year = now.getFullYear();
    const endOfJune = new Date(year, 5, 30, 23, 59, 59); 
    const diff = endOfJune - now;

if (diff <= 0) {
document.querySelector(".junina-timer").textContent = "00";
document.getElementById("junina-days").textContent = "00";
document.getElementById("junina-hours").textContent = "00";
document.getElementById("junina-minutes").textContent = "00";
document.getElementById("junina-seconds").textContent = "00";
return;
}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("junina-days").textContent = String(days).padStart(2, '0');
document.getElementById("junina-hours").textContent = String(hours).padStart(2, '0');
document.getElementById("junina-minutes").textContent = String(minutes).padStart(2, '0');
document.getElementById("junina-seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateJuninaCountdown, 1000);

updateJuninaCountdown();
