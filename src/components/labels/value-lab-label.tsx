//Label que identifica o título de um campo de formulário
export default function ValueLabLabel({ title }: { title: string }) {
  return (
    <label className="text-black font-semibold text-lg md:whitespace-nowrap  max-sm320:text-[12px] select-none">
      {title}
    </label>
  );
}
