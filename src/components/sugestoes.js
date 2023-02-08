function Sugestao(props) {

    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} alt={props.usuario} />
                <div class="texto">
                    <div class="nome">{props.usuario}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

export default function Sugestoes() {
    const itens =
        [
            <Sugestao img="assets/img/bad.vibes.memes.svg" usuario="bad.vibes.memes" />,
            <Sugestao img="assets/img/chibirdart.svg" usuario="chibirdart" />,
            <Sugestao img="assets/img/razoesparaacreditar.svg" usuario="razoesparaacreditar" />,
            <Sugestao img="assets/img/adorable_animals.svg" usuario="adorable_animals" />,
            <Sugestao img="assets/img/smallcutecats.svg" usuario="smallcutecats" />
        ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {itens.map((sugestao) => sugestao)}
        </div>
    )
}