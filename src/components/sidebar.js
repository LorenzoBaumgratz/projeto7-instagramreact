import Sugestoes from "./sugestoes";
import Usuario from "./usuario";


export default function SideBar() {
    const usuarioObj = [{ imagem: "assets/img/catanacomics.svg", nome: "catanacomics" }];
    return (
        <div className="sidebar">

            {usuarioObj.map((u) =><Usuario imagem={u.imagem} nome={u.nome} />)}
            <Sugestoes />

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}