const form = document.getElementById("form")

form.addEventListener('submit', evento => {
    evento.preventDefault();
    
    const nome = document.getElementById("txt_nome").value;
    const cargo = document.getElementById("txt_cargo").value;
    const email = document.getElementById("txt_nome").value;
    const senha = document.getElementById("txt_cargo").value;
    const genero = document.getElementById("select_genero").value;

    
    fetch(`http://localhost:3000/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "user": nome,
            "senha": senha,
            "genero": 'm',
            "email": email,
            "cargo": cargo
        })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    
})