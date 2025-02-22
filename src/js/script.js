// btns para url do wpp,instagram e facebook
let btnWpp = document.getElementById('btn-wpp');
let btnInstagram = document.getElementById('btn-instagram');
let btnFacebook = document.getElementById('btn-facebook');

//wpp
btnWpp.addEventListener('click', () => {
    window.open('https://api.whatsapp.com/send?phone=5511917244874',);
})

//instagram
btnInstagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/studio_karinacabral/',);
})


// funcionalidade no botão de linkar o wpp
document.getElementById('btn-agendar').addEventListener('click', () => {
    const phoneNumber = '5511917244874';
    const message = 'Olá, Quero Agendar um Horário?';

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappLink);
})