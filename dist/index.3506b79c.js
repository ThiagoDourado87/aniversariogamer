// Defina a data do aniversário (15 de junho de 2024)
const birthday = new Date("2024-06-15");
function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = birthday - now;
    const days = Math.floor(timeDifference / 86400000);
    const hours = Math.floor(timeDifference % 86400000 / 3600000);
    const minutes = Math.floor(timeDifference % 3600000 / 60000);
    const seconds = Math.floor(timeDifference % 60000 / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
// Atualize o contador a cada segundo
setInterval(updateCountdown, 1000);

//# sourceMappingURL=index.3506b79c.js.map
