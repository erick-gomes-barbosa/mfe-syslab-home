//Label que identifica o título de um campo de formulário
export default function ListLabLabel({ title }: { title: string }) {
  return (
    <label className="text-black text-lg md:whitespace-nowrap  max-sm320:text-[12px] select-none">
      {title}
    </label>
  );
}
