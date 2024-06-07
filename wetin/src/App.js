import Rotas from "./routes";
function App() {
  const idEmpresa = "6653542ba7c08d5171246144"

  sessionStorage.setItem("idEmpresa", idEmpresa)

  return (
    <>
      <Rotas />
    </>
  );
}
export default App;
