import history from "./assets/data/history.json"

export function MeuHistorico() {
  return (
    <div>
        <h1 className="text-white text-justify text-4xl">Seu histórico</h1>
        <div className="border-white rounded"><p className="text-white">Total de Streams</p></div>
        <p className="text-pink-600">53 291 h</p>
        <h2 className="text-white">Música mais ouvida</h2>
        <p className="text-white">Quim Barreiros</p>
        <h2 className="text-white">Top artistas</h2>
        <img></img><img></img>
        <h2 className="text-white">Top géneros</h2>
        <p className="text-white">Pimba</p><p className="percentagem"></p>
        <p className="text-white">Samba</p><p className="percentagem"></p>
        <p className="text-white">Fado</p><p className="percentagem"></p>
      </div>
  );
}