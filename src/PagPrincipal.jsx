import history from "./assets/data/history.json"

export function PagPrincipal() {
  return (
    <div className="flex flex-col">
        <div>
            <h1>Estatísticas gerais</h1>
            <p>Total de plays</p><p className="text-pink-">53 291</p>
            <p>Média de tempo diário</p><p>53 291 min</p>
            <p>10000</p><p>Músicas ouvidas</p>
            <p>Ouviu</p><p>490000 min</p>
            <p>22:00</p><p>É a hora que mais ouve</p>
            <p>A estação que mais ouve é:</p><p>Verão</p>

        </div>
        <div className="bg-black"><button>Geral</button><button className="text-white">Artistas</button><button className="text-white">Músicas</button></div>
    </div>
  );
}