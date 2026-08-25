<script>
    let likes = parseInt(localStorage.getItem('aot_blog_likes')) || 0;
    let jaCurtiu = localStorage.getItem('aot_blog_has_liked') === 'true';

    const btn = document.getElementById('btnLike');
    const countDisplay = document.getElementById('countDisplay');
    const likeIcon = document.getElementById('likeIcon');
    const btnText = document.getElementById('btnText');

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

    function toggleLike() {
        if (!jaCurtiu) {
            likes++;
            jaCurtiu = true;
        } else {
            likes = Math.max(0, likes - 1);
            jaCurtiu = false;
        }

        localStorage.setItem('aot_blog_likes', likes);
        localStorage.setItem('aot_blog_has_liked', jaCurtiu);

        atualizarInterface();
    }

    // Inicializa o botão no estado correto
    atualizarInterface();
</script>
