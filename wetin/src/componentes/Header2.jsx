import Logo from "../assets/imgs/imgLogoPreta.svg"

export default function Header() {
    return (
        <header>
            <div className="div_container_header">
                <div className="div_header">
                    <img src={Logo} alt="" className="img_logo" />
                    <div className="botoes">
                        <button className="bt_entrar" >Entrar</button>
                        <button className="bt_cadastrar" >Se Cadastrar</button>
                    </div>
                </div>
            </div>
        </header>
    );
}
