import Rotas from "./routes";
function App() {
  const idEmpresa = "666ce1dc6fc26a2110446fb9"
  const cep = "09541-300"

  sessionStorage.setItem("idEmpresa", idEmpresa)  
  sessionStorage.setItem("cep", cep)

  return (
    <>
      <Rotas />
    </>
  );
}
export default App;
