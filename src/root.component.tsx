import ButtonAddLab from "./components/buttons/button-add-lab";
import CardLabs from "./components/card/card-labs";
import SearchbarMain from "./components/searchbar/search-bar-main";
import { MockLabs } from "./mockData/labs-mock";
import { LaboratorySchema } from "./schemas/laboratory-schema";
import { LaboratoryType } from "./types/laboratory-type";
interface Labs {
  id: number;
  name: string;
  horario_inicio: string;
  horario_fim: string;
}

export default function Root(props) {
  const laboratory: LaboratoryType = {
    name: "Erick",
    enviroment: "Aeric",
  };
  // console.log(LaboratorySchema.parse(laboratory));

  return (
    <>
      <SearchbarMain />
      <div className=" flex flex-col w-full items-center">
        <div className="grid justify-items-center min-[1200px]:grid-cols-3 min-[768px]:grid-cols-2  max-md:w-full gap-16  max-w-7xl max-md:overflow-y-auto my-7 py-3">
          {MockLabs.map((lab: Labs) => {
            return (
              <CardLabs
                key={lab.id}
                id={lab.id}
                name={lab.name}
                horario_inicio={lab.horario_inicio}
                horario_fim={lab.horario_fim}
              />
            );
          })}
        </div>
        <div className="sticky flex bottom-8 justify-end px-14 min-[1200px]:w-[1120px] min-[768px]:w-[720px] max-md:w-full max-w-7xl min-[768px]:mt-10">
          <ButtonAddLab />
        </div>
      </div>
    </>
  );
}
