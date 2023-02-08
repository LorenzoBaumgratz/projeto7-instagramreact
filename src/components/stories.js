export default function Stories() {

    const itens =
        [
            <Story img="assets/img/9gag.svg" alt="9gag" usuario="9gag" />,
            <Story img="assets/img/meowed.svg" alt="meowed" usuario="meowed" />,
            <Story img="assets/img/barked.svg" alt="barked" usuario="barked" />,
            <Story img="assets/img/nathanwpylestrangeplanet.svg" alt="nathanwpylestrangeplanet" usuario="nathanwpylestrangeplanet" />,
            <Story img="assets/img/wawawicomics.svg" alt="wawawicomics" usuario="wawawicomics" />,
            <Story img="assets/img/respondeai.svg" alt="respondeai" usuario="respondeai" />,
            <Story img="assets/img/filomoderna.svg" alt="filomoderna" usuario="filomoderna" />,
            <Story img="assets/img/memeriagourmet.svg" alt="memeriagourmet" usuario="memeriagourmet" />
        ];
    return (
        <div class="stories">
            {itens.map((story) => story)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.img} alt={props.alt} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    )
}