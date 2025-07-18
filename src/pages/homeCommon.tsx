import { useEffect, useState } from "react";
import ButtonAddLab from "../components/buttons/button-add-lab";
import CardLabs from "../components/card/card-labs";
import SearchbarMain from "../components/searchbar/search-bar-main";
import { MockLabs } from "../mockData/labs-mock";
import { CardLabsType } from "../types/card-labs-type";
import { nhost } from "../api/nhost";

// Componente raiz da aplicação, responsável por renderizar a lista de laboratórios e o botão de adicionar laboratório
export default function HomeCommon() {
  return (
    <>
      <div className="mt-28">
        <SearchbarMain />
      </div>
      <div className=" flex flex-col w-full items-center">
        <div className="grid justify-items-center min-[1200px]:grid-cols-3 min-[768px]:grid-cols-2  max-md:w-full gap-16  max-w-7xl max-md:overflow-y-auto my-7 py-3">
          {MockLabs.map((lab) => {
            return (
              <CardLabs
                key={lab.enviroment_id}
                enviroment_id={lab.enviroment_id}
                lab_name={lab.lab_name}
                opening_time={lab.opening_time}
                closing_time={lab.closing_time}
                air_conditioner={lab.air_conditioner}
                fan={lab.fan}
                qty_chairs={lab.qty_chairs}
                qty_computers={lab.qty_computers}
                television={lab.television}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
