function RadioGroupItem() {
  return <div className="bg-[#1a4d8f] h-[13.063px] rounded-[2.68435e+07px] shrink-0 w-full" data-name="RadioGroupItem" />;
}

export default function PrimitiveButton() {
  return (
    <div className="bg-white relative rounded-[2.68435e+07px] size-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[2.68435e+07px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[0.8px] pl-[5.462px] pr-[5.475px] pt-[5.463px] relative size-full">
          <RadioGroupItem />
        </div>
      </div>
    </div>
  );
}