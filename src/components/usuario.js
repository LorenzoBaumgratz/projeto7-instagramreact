import { useState } from "react";




export default function Usuario(props) {

    const [userImg, setUserImg] = useState(props.imagem)
    const [userName, setUserName] = useState(props.nome)

    function changeName() {
        let newName = prompt("Novo nome");
        (newName ? setUserName(newName) : setUserName(userName));
    }

    function changeImg() {
        let newImg = prompt("URL da img");
        (newImg ? setUserImg(newImg) : setUserImg(userImg));
    }

    return (
        <div className="usuario">
            <img src={userImg} alt="imagem de perfil" data-test="profile-image" onClick={() => changeImg()} />
            <div className="texto">
                <span>
                    <strong data-test="name">{userName}</strong>
                    <ion-icon name="pencil" data-test="edit-name" onClick={() => changeName()}></ion-icon>
                </span>
            </div>
        </div>
    )
}