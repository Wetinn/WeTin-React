import Rotas from "./routes";
function App() {
  const idEmpresa = "66536db3c884451828ff2284"
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
