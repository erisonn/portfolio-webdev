let darkmode_click = document.getElementById('darkmode_click');

darkmode_click.addEventListener('click', function() {
    let doc = document.body;
    let header = document.getElementsByTagName('HEADER')[0]
    doc.classList.toggle('dark_mode');
    header.classList.toggle('dark_mode');
})