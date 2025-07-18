import iconClock from "../../assets/image/icon-clock.svg";
import { useState } from "react";
import DetailLabModal from "../modals/detail-lab-modal";

// Componente de card para listagem de laboratórios na página home
export default function CardLabs({
  enviroment_id,
  lab_name,
  qty_chairs,
  qty_computers,
  television,
  fan,
  air_conditioner,
  closing_time,
  opening_time,
}) {
  const [showDetailLabModal, setShowDetailLabModal] = useState<boolean>(false);
  return (
    <>
      <div
        key={enviroment_id}
        className="flex items-center justify-between bg-blueLight w-10/12 min-w-[330px] rounded-3xl px-7 min-h-28 shadow-md shadow-[#00000040]"
      >
        <div>
          <label className="text-base font-bold ">{lab_name}</label>

          <div className="flex items-center mt-2">
            <img src={iconClock} alt="icon-clock" className="w-5 h-5 mr-2" />
            <p className="">
              {opening_time} - {closing_time}
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowDetailLabModal(true)}
          className="bg-blueMedium px-5 py-1 rounded-xl text-blueLight"
        >
          Acessar
        </button>
      </div>
      <DetailLabModal
        isOpen={showDetailLabModal}
        defaultValues={{
          enviroment_id,
          lab_name,
          qty_chairs,
          qty_computers,
          television,
          fan,
          air_conditioner,
          closing_time,
          opening_time,
        }}
        onClickClose={() => setShowDetailLabModal(false)}
      />
    </>
  );
}
