import BarraPesquisa from '../../components/BarraPesquisa/BarraPesquisa';

export default function Teste() {

    const handleSearch = (term) => {
        console.log('Termo de pesquisa:', term);
        
    }

    return (
        <div>
            <BarraPesquisa placeholder="Pesquisar..." onSearch={handleSearch} />
        </div>
    );
}