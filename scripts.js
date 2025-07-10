const ptBtn = document.getElementById('pt-btn');
const enBtn = document.getElementById('en-btn');
const traducao = document.querySelectorAll('.lang');

// Função que aplica o idioma
function aplicarIdioma(idioma) {
  traducao.forEach(el => {
    el.textContent = el.getAttribute('data-' + idioma);
  });
}

// Detecta idioma padrão ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("pt"); // ou "en" se quiser começar em inglês
});

// Eventos de clique nas bandeiras
ptBtn.addEventListener('click', () => aplicarIdioma("pt"));
enBtn.addEventListener('click', () => aplicarIdioma("en"));