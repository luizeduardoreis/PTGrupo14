const form = document.getElementById("form")

form.addEventListener('submit', evento => {
    evento.preventDefault();
    
    const login = document.getElementById("txt_login").value;
    const senha = document.getElementById("txt_senha").value;
    

    fetch(`http://localhost:3000/user/${login}/${senha}`)
    .then(res => {
        if(!res.ok){
            alert("Usuário ou senha incorretos")
        }
        return res.json()
    })
    .then((data) => {
        if(data == true){
            fetch(`http://localhost:3000/logado`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "user": login
                })
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            window.location.href = "feed_logado.html"
        }
        if(data == false){
            alert("Usuário ou senha incorretos")
        }
    })
})