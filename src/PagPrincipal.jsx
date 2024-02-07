import history from "./assets/data/history.json"
export function PagPrincipal() {
  return (
    <div className="flex flex-col justify-between">
        <div>
          <img src="../src/assets/images/logo.svg" className="my-6 text-center"></img>
            <h1 className="mb-10 text-3xl text-center">Estatísticas gerais</h1>
            <div className="flex justify-between bg-[#290F4F] rounded-lg mx-7 my-8 p-4"><p >Total de plays</p><p className="text-[#E600F8]">53 291</p></div>
            <div className="flex justify-between bg-[#290F4F] rounded-lg mx-7 my-8 p-4"><p>Média de tempo diário</p><p className="text-[#E600F8]">53 291 min</p></div>
            <div className="flex justify-start ml-7">
              <div className="flex justify-between gap-10 bg-[#290F4F] rounded-lg p-2"><p className="text-[#E600F8] text-2xl">10000</p><p>Músicas ouvidas</p></div>
            </div>
            <div className="flex justify-end mr-7 mt-5">
              <div className="flex justify-between gap-10 bg-[#290F4F] rounded-lg p-2"><p>Ouviu</p><p className="text-[#E600F8] text-2xl">490000 min</p></div>
            </div>
            <div className="flex justify-between gap-10 bg-[#290F4F] rounded-lg mx-8 my-6 p-2"><p className="text-[#E600F8]">22:00</p><p>É a hora que mais ouve</p></div>
            <div className="flex flex-col items-center rounded-lg mx-30 my-6 p-2"><p>A estação que mais ouve é:</p><p className="text-[#E600F8]">Verão</p></div>
        </div>
        <div className="bg-black flex justify-between px-4 py-4"><button>Geral</button><button className="text-white">Artistas</button><button className="text-white">Músicas</button></div>
    </div>
  );
}