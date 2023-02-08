export default function Usuario() {
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