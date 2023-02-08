export default function Posts() {
    const itens =
        [
            <Post img="assets/img/meowed.svg" usuario="meowed" imgPost="assets/img/gato-telefone.svg" imgPostAlt="gato-telefone" curtida="assets/img/respondeai.svg" curtidaAlt="respondeai" />,
            <Post img="assets/img/barked.svg" usuario="barked" imgPost="assets/img/dog.svg" imgPostAlt="dog" curtida="assets/img/adorable_animals.svg" curtidaAlt="adorable_animals" />
        ]

    return (
        <div class="posts">
            {itens.map((post) => post)}
        </div>

    )
}

function Post(props) {
    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.img} alt={props.usuario} />
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgPost} alt={props.imgPostAlt} data-test="post-image" onclick="likePost()" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline" data-test="like-post" onclick="likePost()"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" data-test="save-post" onclick="savePost()"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtida} alt={props.curtidaAlt} />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.curtidaAlt}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}