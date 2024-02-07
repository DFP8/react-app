//Linha que importa o histórico
import history from "./assets/data/history.json"
import { MeuHistorico } from "./MeuHistorico";
import { PagPrincipal } from "./PagPrincipal";
function App() {

  //Como podes ver na consola, é um array de objetos
  console.log(history)

  return (
    <div className="App">
      <PagPrincipal/>
    </div>
  );
}

export default App;
