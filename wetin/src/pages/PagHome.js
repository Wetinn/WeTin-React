import "./style.css";
import Header from '../componentes/Header';
import Banner from '../componentes/Banner';
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
                <Navegador ativo= "bolinhaAzul"/>
            </div>

        </div>
        
    );
}