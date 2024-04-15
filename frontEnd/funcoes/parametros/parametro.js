function dobro(x) {
    alert("O dobro de " + x + " é " (x * 2))
}

// dobro()
// dobro(7)

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!")
}

// dizerOla("Alex")
// dizerOla()

function soma(a, b) {
    alert("O resultado da soma é " + (a + b))
}

// soma(6, 7)

function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }

    console.log(usuario)
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

function objetoComoParametro(usuario) {
    //...
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario)