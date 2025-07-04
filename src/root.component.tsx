import ButtonAddLab from "./components/buttons/button-add-lab";
import CardLabs from "./components/card/card-labs";
import SearchbarMain from "./components/searchbar/search-bar-main";
import { MockLabs } from "./mockData/labs-mock";
import { CardType } from "./types/card-labs-type";

export default function Root(props) {
  return (
    <>
      <SearchbarMain />
      <div className=" flex flex-col w-full items-center">
        <div className="grid justify-items-center min-[1200px]:grid-cols-3 min-[768px]:grid-cols-2  max-md:w-full gap-16  max-w-7xl max-md:overflow-y-auto my-7 py-3">
          {MockLabs.map((lab: CardType) => {
            return (
              <CardLabs
                key={lab.enviroment}
                enviroment={lab.enviroment}
                name={lab.name}
                opening_time={lab.opening_time}
                closing_time={lab.closing_time}
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
