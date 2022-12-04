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
    },
    {
        img: 'images/gabinete-01.webp',
        nome: 'Gabinete Mancer',
        descricao: 'Gabinete Black Gamer',
        preco: 450.99
    },
    {
        img: 'images/gabinete-02.jpg',
        nome: 'Gabinete Mancer',
        descricao: 'Mancer Goblin',
        preco: 639.99
    },
    {
        img: 'images/microfone-01.jpg',
        nome: 'Microfone HyperX',
        descricao: 'Microfone RGB Preto',
        preco: 750.00
    },
    {
        img: 'images/placamae-02.jpg',
        nome: 'Placa Mãe GIGABYTE',
        descricao: 'Placa Mãe',
        preco: 460.00
    },
    {
        img: 'images/ryzen55600g-01.jpg',
        nome: 'Processador Ryzen5',
        descricao: 'Ryzen5 5600G',
        preco: 939.99
    },
    {
        img: 'images/ryzen75700g-01.jpg',
        nome: 'Processador Ryzen7',
        descricao: 'Ryzen7 5700G',
        preco: 1550.00
    }
]


produtosProGaming = () => {
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

produtosProGaming()