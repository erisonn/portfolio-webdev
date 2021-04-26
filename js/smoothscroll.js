// home
let home_click = document.getElementById('home_click');
let dropdown_home = document.getElementById('dropdown_home');

home_click.addEventListener('click', home);
dropdown_home.addEventListener('click', home);
function home() {
    document.getElementById('home').scrollIntoView();
}

// sobre
let sobre_click = document.getElementById('sobre_click');
let dropdown_sobre = document.getElementById('dropdown_sobre');
let arrow_click = document.getElementById('continuar');

dropdown_sobre.addEventListener('click', sobre)
sobre_click.addEventListener('click', sobre)
arrow_click.addEventListener('click', sobre)
function sobre() {
    document.getElementById('sobre').scrollIntoView();
}

// conhecimentos
let conhecimentos_click = document.getElementById('conhecimentos_click');
let dropdown_conhecimentos = document.getElementById('dropdown_conhecimentos');

conhecimentos_click.addEventListener('click', conhecimentos);
dropdown_conhecimentos.addEventListener('click', conhecimentos);
function conhecimentos() {
    document.getElementById('conhecimentos').scrollIntoView();
}

// contato
let contato_click = document.getElementById('contato_click');
let dropdown_contato = document.getElementById('dropdown_contato');

contato_click.addEventListener('click', contato);
dropdown_contato.addEventListener('click', contato);
function contato() {
    document.getElementById('contato').scrollIntoView();
}

/* active */
let sections = document.querySelectorAll('section');

onscroll = function() {
    let elems = document.querySelectorAll('.active')
    let scrollPosition = document.documentElement.scrollTop;
    
    sections.forEach( section => {
        if(scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
            for(i in elems) {
                if(section.attributes.id.value == 'home') {
                    let elems = document.querySelectorAll('.active');
                    elems[i].classList.remove('active');
                    home_click.classList.add('active');
                }
                if (section.attributes.id.value == 'sobre') {
                    let elems = document.querySelectorAll('.active');
                    elems[i].classList.remove('active');
                    sobre_click.classList.add('active');
                } else if (section.attributes.id.value == 'conhecimentos') {
                    let elems = document.querySelectorAll('.active');
                    elems[i].classList.remove('active');
                    conhecimentos_click.classList.add('active');
                } else if (section.attributes.id.value == 'contato') {
                    let elems = document.querySelectorAll('.active');
                    elems[i].classList.remove('active');
                    contato_click.classList.add('active');
                }
            }
        }
    })
}