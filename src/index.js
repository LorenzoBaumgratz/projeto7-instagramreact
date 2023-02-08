import ReactDOM from "react-dom";

function NavBar() {
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" alt="logo" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="compass-outline"></ion-icon>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="person-outline"></ion-icon>
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
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

function Stories() {

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

function Posts() {
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

function Sugestoes() {
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

function Usuario() {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" alt="imagem de perfil" data-test="profile-image" onclick="editarImg()" />
            <div class="texto">
                <span>
                    <strong data-test="name">catanacomics</strong>
                    <ion-icon name="pencil" data-test="edit-name" onclick="editarNome()"></ion-icon>
                </span>
            </div>
        </div>
    )
}

function SideBar() {
    return (
        <div class="sidebar">

            <Usuario/>
            <Sugestoes />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar />
        </div>
    )
}

function Load() {
    return (
        <div class="root">
            <NavBar />
            <Corpo />
        </div>
    )
}

ReactDOM.render(Load(), document.querySelector("body"));