import iconClock from "../../assets/image/icon-clock.svg";
import { CardSchema } from "../../schemas/card-labs-schema";
import { CardType } from "../../types/card-labs-type";

export default function CardLabs({
  enviroment,
  name,
  closing_time,
  opening_time,
}: CardType) {
  const props: CardType = {
    closing_time,
    enviroment,
    name,
    opening_time,
  };

  //Caso os dados estiverem errados o componente não será retornado.
  const propsValidation = CardSchema.safeParse(props);
  if (!propsValidation.success) {
    return null;
  }

  return (
    <div
      key={enviroment}
      className="flex items-center justify-between bg-blueLight w-10/12 min-w-[330px] rounded-3xl px-7 min-h-28 shadow-md shadow-[#00000040]"
    >
      <div>
        <label className="text-base font-bold ">{name}</label>

        <div className="flex items-center mt-2">
          <img src={iconClock} alt="icon-clock" className="w-5 h-5 mr-2" />
          <p className="">
            {opening_time} - {closing_time}
          </p>
        </div>
      </div>
      <button className="bg-blueMedium px-5 py-1 rounded-xl text-blueLight">
        Acessar
      </button>
    </div>
  );
}
