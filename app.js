document.addEventListener('DOMContentLoaded', () => {
    const btnMode = document.getElementById('boton-mode');
    const body = document.body;

    btnFosc = btnMode; // Per seguretat si recordaves el nom anterior

    btnMode.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        // Canvia l'icona i el text segons el mode
        if (body.classList.contains('light-mode')) {
            btnMode.textContent = "☀️ Mode Clar";
            btnMode.classList.replace('btn-outline-primary', 'btn-outline-dark');
        } else {
            btnMode.textContent = "🌙 Mode Fosc";
            btnMode.classList.replace('btn-outline-dark', 'btn-outline-primary');
        }
    });
});
