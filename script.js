// Recupera a quantidade de curtidas salva no navegador
let likes = parseInt(
    localStorage.getItem('aot_blog_likes')
) || 0;


// Verifica se o usuário já curtiu
let jaCurtiu =
    localStorage.getItem('aot_blog_has_liked') === 'true';


// Elementos do HTML
const btn = document.getElementById('btnLike');

const countDisplay =
    document.getElementById('countDisplay');

const likeIcon =
    document.getElementById('likeIcon');

const btnText =
    document.getElementById('btnText');


// Atualiza a aparência do botão
function atualizarInterface() {

    countDisplay.textContent = likes;

    if (jaCurtiu) {

        btn.classList.add('curtido');

        likeIcon.textContent = '💚';

        btnText.textContent = 'Curtido';

    } else {

        btn.classList.remove('curtido');

        likeIcon.textContent = '👍';

        btnText.textContent = 'Curtir';
    }
}


// Função executada quando o botão é clicado
function toggleLike() {

    if (!jaCurtiu) {

        // Adiciona uma curtida
        likes++;

        jaCurtiu = true;

    } else {

        // Remove a curtida
        likes = Math.max(0, likes - 1);

        jaCurtiu = false;
    }


    // Salva os dados no navegador
    localStorage.setItem(
        'aot_blog_likes',
        likes
    );

    localStorage.setItem(
        'aot_blog_has_liked',
        jaCurtiu
    );


    // Atualiza o botão
    atualizarInterface();
}


// Inicializa o botão
// quando a página é carregada
atualizarInterface();
