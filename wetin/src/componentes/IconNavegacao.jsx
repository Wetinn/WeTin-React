

export default function IconNavegacao(props) {
    return (
        <div class="item">
            <div class="bolinha" style={{ backgroundColor: props.cor }}>
                <img src={props.icon} alt="" class="imgIcon" />
            </div>
            <span class="descricao_menu">
                {props.descricao}
            </span>
        </div>
    );
}