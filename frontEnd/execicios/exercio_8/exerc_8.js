const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem-Vindo(a) ao Cadastro de Imóveis!\n" +
        "Total de Imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:")
            imovel.quarto = prompt("Quanntos quartos possui o imóvel?")
            imovel.banheiro = prompt("Quantos banheiros possui o imóvel?")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

            const confirmacao = confirm(
                "Salvar este imóvel?\n"+
                "\nProprietário" + imovel.proprietario +
                "\nQuartos:" + imovel.quarto +
                "\nBanheiros:" + imovel.banheiro +
                "\nPossui garagem? " + imovel.garagem
            )

            if (confirmacao){
                imoveis.push(imovel)
                alert("Imóvel salvo com Sucesso!")
            }else {
                alert("Voltando ao menu.")
            }
            break

        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    "Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quarto +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            } 
            break

        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
}while (opcao !== "3")