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
    {
        id: 3,
        title: 'Post 3',
        content: 'Sou o João!',
        author: 'João'
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Sou o João!',
        author: 'João'
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Sou o João!',
        author: 'João'
    },
    {
        id: 3,
        title: 'Post 3',
        content: 'Sou o João!',
        author: 'João'
    }
]

function renderPosts() {
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

function renderUserName() {
    const nameContainer = document.querySelector('.profile_name_navbar')

    const username = document.createElement('label')

    username.innerHTML = `
        <label for="profile_name_navbar" id="profile_name_navbar">João</label>
    `
    nameContainer.appendChild(username)
}

renderPosts()

// ... (previous code)

// Instead of selecting only the first comment_balloon_button, select all of them
const commentBalloonButtons = document.querySelectorAll('.comment_balloon_button');
const modal = document.querySelector('.criar_comentario');
const closeButton = document.querySelector('.botao_fechar_modal');

// Add event listener to each comment_balloon_button
commentBalloonButtons.forEach(openButton => {
    openButton.addEventListener('click', () => {
        modal.showModal();
    });
});

// Add event listener to the closeButton to close the modal
closeButton.addEventListener('click', () => {
    modal.close();
});