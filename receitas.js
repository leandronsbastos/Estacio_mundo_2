const dadosReceitas = [
    {
        titulo:"Arroz de couve-flor "
        ,imagem:"img/couve-flor.jpeg"
        ,preparo:" Deixe a couve-flor picada. Adicione os ingredientes e refogue bem.Adicione sal, tampe a panela e deixe cozinhar."
        ,ingredientes:[ "Arroz","couve-flor","Cebola Média","Azeite"]
    },
    {
        titulo:"Bolo de café"
        ,imagem:"img/bolo-de-chocolate-com-cafe.jpg"
        ,preparo:"Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura."
        ,ingredientes:[ "Farinha de Trigo", "Açúcar", "Café Coado","Chocolate em Pó","Ovos"]
    },
    {
        titulo:"Coxinha de Brigadeiro"
        ,imagem:"img/coxinha-brigadeiro.jpeg"
        ,preparo:"Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe no granulado."
        ,ingredientes:[ "Leite Condensado", "Chocolate em Pó", "Manteiga", "Morango", "Chocolate Granulado" ]
    }
];

const getListaIngredientes= receita => {
    let lista = "<ul>";
    receita.ingredientes.map( ingrediente =>{
        lista += `<li>${ ingrediente }</li>`
    });
    lista += "</ul>";

    return lista;
};

const getCard = receita => 
`<div class="card m-3" style="width:250px;">
    <img src="${ receita.imagem }" class="card-img-top" alt=""></img>
    <div class="card-body text-start font-size-12">
        <p class="card-title"><strong>${ receita.titulo }</strong></p> 
        <div class="card-text">
            ${getListaIngredientes( receita )}
            <hr>
            <p>${ receita.preparo }</p>
        </div>
    </div>
</div>`;
    


const preencheCatalogo=()=> {
    const pnlCatalogo = document.getElementById( "pnlCatalogo" );   
    pnlCatalogo.innerHTML = dadosReceitas.map( receita => getCard( receita ) );    
};

preencheCatalogo( dadosReceitas );