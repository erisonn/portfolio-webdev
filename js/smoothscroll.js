// home
let home_click = document.getElementById('home_click');
home_click.addEventListener('click', function() {
    document.getElementById('home').scrollIntoView();
})

// sobre
let sobre_click = document.getElementById('sobre_click');
sobre_click.addEventListener('click', continuar)

let arrow_click = document.getElementById('continuar');
arrow_click.addEventListener('click', continuar)

function continuar() {
    document.getElementById('sobre').scrollIntoView();
}

// conhecimentos
let conhecimentos_click = document.getElementById('conhecimentos_click');
conhecimentos_click.addEventListener('click', function() {
    document.getElementById('conhecimentos').scrollIntoView();
})

// contato
let contato_click = document.getElementById('contato_click');
contato_click.addEventListener('click', function() {
    document.getElementById('contato').scrollIntoView();
})

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