import styles from './criarSenha.module.css';
import Header from '../../components/Header/Header';
import Logo from "../../utils/assets/imgLogoPreta.svg";
import Senha from '../../components/inputSenha/InputSenha'
import BtLogin from '../../components/botaoLogin/BtLogin';

export default function criarSenha() {
    return (
        <>

            <div className={styles["fundoPag"]}>
                <Header Logo={Logo} />
                <div className={styles["containner_login"]}>
                    <div className={styles["blocoLogin"]}>
                        <div className={styles["tituloBloco"]}>
                            <span>
                                Criar uma nova senha
                            </span>
                        </div>

                        <div className={styles["textoExplicativo"]}>
                            <span>
                                Para trocar a sua senha precisamos que você informe uma nova para substituir ela!
                            </span>
                        </div>

                        <div className={styles["inputsBloco"]}>
                            <Senha textoLabel={"Nova Senha:"} />

                            <Senha textoLabel={"Confirmar Nova Senha:"} />
                        </div>
                        
                        <BtLogin textoBotao="Trocar Senha" />
                    </div>
                </div>
            </div>
        </>
    );
}