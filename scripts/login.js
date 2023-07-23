const form = document.getElementById("form")

form.addEventListener('submit', evento => {
    evento.preventDefault();
    
    const login = document.getElementById("txt_login").value;
    const senha = document.getElementById("txt_senha").value;
    

    fetch(`http://localhost:3000/user/${login}/${senha}`)
    .then(res => {
        if(!res.ok){
            alert("Usuário inexistente")
        }
        return res.json()
    })
    .then((data) => {
        if(data == true){
            window.location.href = "feed.html"
        }
        if(data == false){
            alert("Senha incorreta")
        }
    })
})