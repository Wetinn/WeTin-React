import "./pagSolucao.css";
import Header from '../componentes/Header2';
import Banner from '../componentes/BannerSolucao';
import Navegador from "../componentes/Navegador";


export default function App() {
    return(
        
        <div className="App">
            <div>
                <Header/>
            </div>
            <div>
                <Banner/>
            </div>
            <div>
                <Navegador/>
            </div>

        </div>
        
    );
}