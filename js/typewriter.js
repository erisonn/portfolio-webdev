let i = 0;
let speed = 100;
let nome = 'Desenvolvedor Front-end'

window.onload = typeWriter();

function typeWriter() {
    if (i < nome.length) {
        document.getElementById('typewriter').innerHTML += nome.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}