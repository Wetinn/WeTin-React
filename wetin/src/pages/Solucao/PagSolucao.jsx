import "./pagSolucao.css";
import Banner from '../../components/BannerSolucao';
import Navegador from "../../components/MenuNavegador/Navegador";


export default function App() {
    return(
        
        <div className="App">
            <div>
                <Banner/>
            </div>
            <div>
                <Navegador/>
            </div>

        </div>
        
    );
}