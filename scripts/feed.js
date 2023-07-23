const mockedposts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Suárez deixou claro ao Grêmio o desejo de sair e ficou descontente com a postura do clube, que não abre mão de mantê-lo. O uruguaio sofre com as dores no joelho. Há também o interesse do Inter Miami, que faria a reedição da dupla com Messi.',
        author: 'José'
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Eu sou a Maria!',
        author: 'Maria'
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Sou o João!',
        author: 'João'
    },
   
]

const renderPosts = () => {
    const postContainer = document.querySelector('.feed_background')

    mockedposts.forEach(post => {
        const postElement = document.createElement('div')

        postElement.innerHTML = `
            <div class="post">
                <div class="profile">
                    <div class="profile_pic">
                        <img class="profile_pic_image" src="/imagens/perfil.png" alt="foto_de_perfil">
                    </div>
                    <div class="profile_name">
                        <label for="profile_name" id="profile_name">${post.author}</label>
                        <label for="separador" id="separador">·</label>
                        <label for="data" id="data">22 de jun</label>
                    </div>
                </div>
                <div class="post_content">${post.content}</div>
                <div class="comment_balloon">
                    <button class="comment_balloon_button">
                        <img src="/imagens/commentballoon.png" alt="comment_balloon">
                    </button>
                </div>
            </div>
        `
        postContainer.appendChild(postElement)

    })
}

renderPosts()

const openButton = document.querySelector('.botao_cria_post');
const modal = document.querySelector('.post_box');
const closeButton = document.querySelector('.botao_fechar_modal');

openButton.addEventListener('click', () => {
    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

function updateCharCount() {
    const textarea = document.getElementById('comment_text');
    const charCountSpan = document.getElementById('char-count');
    const maxChars = 250;
    const remainingChars = maxChars - textarea.value.length;
    
    charCountSpan.textContent = `${remainingChars} ${remainingChars === 1 ? 'character' : 'characters'} left`;
}