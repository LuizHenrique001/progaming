const produtos = [
    {
        img: 'images/placamae-01.jpg',
        nome: 'Placa de Video',
        descricao: 'Placa mãe',
        preco: 790
    },
    {
        img: 'images/placadevideo-nvidia-3080ti.png',
        nome: 'RTX Nvidia 3080 TI',
        descricao: 'Placa de video',
        preco: 5678
    },
    {
        img: 'images/img2-3-1000x1000.png',
        nome: 'GIGABYTE 3080',
        descricao: 'Placa de Video',
        preco: 7899.99
    }
]


duplicarItem = () => {
    let saidaInput = document.querySelector('div.container_produtos')
        produtos.map((value)=>{
            saidaInput.innerHTML += `
                <div class="produtos">
                    <div class="img_produto">
                        <img src="${value.img}" alt="Img">
                    </div>
                    <div class="text_produto">
                        <h1>${value.nome}</h1>
                        <p>${value.descricao}</p>
                        <p>R$ ${value.preco.toFixed(2).replace('.',',')}</p>
                    </div>
                    <div class="img_avaliacao">
                        <img src="images/img-5-estrelas.png" alt="Img Avaliação">
                    </div>
                    <div class="bloco_button">
                        <button class="btn_adicionar">Adicionar</button>
                    </div>
                </div>`
        })
}

duplicarItem()