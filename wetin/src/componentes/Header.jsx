import Logo from "../assets/imgs/imgLogo.png"

export default function Header() {
    return (
        <header>
            <div className="div_container_header">
                <div className="div_header">
                    <img src={Logo} alt="" className="img_logo"/>
                    <button className="bt_entrar" >Entrar</button>
                </div>
            </div>
        </header>
    );
}
