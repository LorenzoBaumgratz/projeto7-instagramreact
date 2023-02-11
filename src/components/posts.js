import { useState } from "react"

export default function Posts() {
    const itens =
        [
            <Post img="assets/img/meowed.svg" usuario="meowed" imgPost="assets/img/gato-telefone.svg" imgPostAlt="gato-telefone" curtida="assets/img/respondeai.svg" curtidaAlt="respondeai" likes="101523" />,
            <Post img="assets/img/barked.svg" usuario="barked" imgPost="assets/img/dog.svg" imgPostAlt="dog" curtida="assets/img/adorable_animals.svg" curtidaAlt="adorable_animals" likes="99159"/>
        ]

    return (
        <div className="posts">
            {itens.map((post) => post)}
        </div>

    )
}

function Post(props) {

    const [like,setLike]=useState(false);
    const [save,setSave]=useState(false);

function doubleClickLike(){
    setLike(!like);
}

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.img} alt={props.usuario} />
                    {props.usuario}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.imgPost} alt={props.imgPostAlt} data-test="post-image" onDoubleClick={()=>(like? "":doubleClickLike())} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={(like? "heart":"heart-outline")} class={(like? "heart-icon":"")} data-test="like-post" onClick={()=>setLike(!like)}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={(save? "bookmark":"bookmark-outline")} data-test="save-post" onClick={()=>setSave(!save)}></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.curtida} alt={props.curtidaAlt} />
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{props.curtidaAlt}</strong> e <strong>outras {(like? (Number(props.likes)+1):(props.likes))} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}