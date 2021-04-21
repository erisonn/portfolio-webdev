
// home
let home_click = document.getElementById('home_click');
home_click.addEventListener('click', function() {
    document.getElementById('home').scrollIntoView();
    let elems = document.querySelectorAll('.active');
    for(i in elems) {
        elems[i].classList.remove('active');
        home_click.classList.add('active');
    }
})

// sobre
let sobre_click = document.getElementById('sobre_click');
sobre_click.addEventListener('click', function() {
    document.getElementById('sobre').scrollIntoView();
    let elems = document.querySelectorAll('.active');
    for(i in elems) {
        elems[i].classList.remove('active');
        sobre_click.classList.add('active');
    }
})

// conhecimentos
let conhecimentos_click = document.getElementById('conhecimentos_click');
conhecimentos_click.addEventListener('click', function() {
    document.getElementById('conhecimentos').scrollIntoView();
    let elems = document.querySelectorAll('.active');
    for(i in elems) {
        elems[i].classList.remove('active');
        conhecimentos_click.classList.add('active');
    }
})

// contato
let contato_click = document.getElementById('contato_click');
contato_click.addEventListener('click', function() {
    document.getElementById('contato').scrollIntoView();
    let elems = document.querySelectorAll('.active');
    for(i in elems) {
        elems[i].classList.remove('active');
        contato_click.classList.add('active');
    }
})