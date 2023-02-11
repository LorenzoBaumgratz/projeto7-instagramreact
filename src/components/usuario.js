import { useState } from "react";




export default function Usuario(props) {

    const [userImg, setUserImg] = useState(props.imagem)
    const [userName, setUserName] = useState(props.nome)

    return (
        <div className="usuario">
            <img src={userImg} alt="imagem de perfil" data-test="profile-image" onClick={() => {
                let newImg = prompt("URL da img");
                (newImg ? setUserImg(newImg) : setUserImg(userImg));
            }} />
            <div className="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon name="pencil" data-test="edit-name" onClick={() => {
                        let newName = prompt("Novo nome");
                        (newName ? setUserName(newName) : setUserName(userName));
                    }}></ion-icon>
                </span>
            </div>
        </div>
    )
}