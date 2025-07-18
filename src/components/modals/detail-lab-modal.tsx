import ButtonClose from "../../assets/image/button-close.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ListLabLabel from "../labels/list-lab-label";
import ValueLabLabel from "../labels/value-lab-label";
import ListLabContainer from "../containers/list-lab-container";
import ListBooleanFieldsLab from "../card/list-boolean-fields-lab";

export default function DetailLabModal({
  isOpen,
  onClickClose,
  defaultValues,
}: {
  isOpen: boolean;
  onClickClose: () => void;
  defaultValues;
}) {
  const { register, reset, handleSubmit, clearErrors } = useForm({
    shouldFocusError: false,
    defaultValues,
  });

  if (isOpen) {
    return (
      <div className="fixed inset-0  flex items-center justify-center bg-white bg-opacity-35">
        <form className="flex flex-col sm400:w-[400px] max-w-[500px] md:w-full justify-center p-6 md:p-6 bg-white gap-2 rounded-[2rem] shadow-lg shadow-[#00000040] animate-fade-up animate-duration-[500ms] animate-delay-200 animate-ease-out">
          <div className="flex w-full justify-end ">
            <button
              onClick={() => {
                onClickClose();
                clearErrors();
                reset();
              }}
            >
              <img
                src={ButtonClose}
                alt="button-close"
                className="w-7 cursor-pointer hover:scale-110"
              />
            </button>
          </div>
          <div className="flex w-full justify-center">
            <h1 className="font-bold text-2xl mb-10">
              {defaultValues.lab_name}
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <ListLabContainer>
              <ListLabLabel title="Nome do laboratório:" />
              <ValueLabLabel title={defaultValues.lab_name} />
            </ListLabContainer>
            <ListLabContainer>
              <ListLabLabel title="Identificador do ambiente:" />
              <ValueLabLabel title={defaultValues.enviroment_id} />
            </ListLabContainer>

            <ListLabContainer>
              <ListLabLabel title="Quantidade de computadores:" />
              <ValueLabLabel title={defaultValues.qty_computers} />
            </ListLabContainer>

            <ListLabContainer>
              <ListLabLabel title="Quantidade de cadeiras:" />
              <ValueLabLabel title={defaultValues.qty_chairs} />
            </ListLabContainer>
            <ListLabContainer>
              <ListLabLabel title="Período de funcionamento:" />
              <ValueLabLabel
                title={`${defaultValues.opening_time} - ${defaultValues.closing_time}`}
              />
            </ListLabContainer>
            <p className="mt-6 font-bold">Contém:</p>
            <div className="flex w-full flex-wrap gap-2">
              {defaultValues.television && <ListBooleanFieldsLab text="TV" />}
              {defaultValues.fan && <ListBooleanFieldsLab text="ventilador" />}
              {defaultValues.air_conditioner && (
                <ListBooleanFieldsLab text="Ar-condicionado" />
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }

  return null;
}
