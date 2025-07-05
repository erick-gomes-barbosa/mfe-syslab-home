import IconAdd from "../../assets/image/icon-add.svg";

// Componente de botão para adicionar novo laboratório
export default function ButtonAddLab() {
  return (
    <button className="flex bg-white items-center text-blueMedium font-bold border-2 border-blueMedium px-7 py-1 rounded-3xl">
      <img src={IconAdd} alt="icon-add" className="h-5 w-5 mr-2" />
      Adicionar Novo
    </button>
  );
}
