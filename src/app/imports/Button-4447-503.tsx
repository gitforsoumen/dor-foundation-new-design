function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[26.5px] text-[#4d4b48] text-[16px] text-center text-nowrap top-[-0.4px] translate-x-[-50%]">Cancel</p>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-white relative rounded-[100px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[12px] px-[32.8px] relative size-full">
          <Paragraph />
        </div>
      </div>
    </div>
  );
}