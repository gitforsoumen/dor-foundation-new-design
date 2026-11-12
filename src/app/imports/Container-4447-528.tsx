function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[26.5px] text-[#4d4b48] text-[16px] text-center text-nowrap top-[-0.4px] translate-x-[-50%]">Cancel</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[48px] relative rounded-[100px] shrink-0 w-[117.938px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] pt-[12px] px-[32.8px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1a4d8f] h-[48px] relative rounded-[100px] shrink-0 w-[192.675px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[96.5px] text-[16px] text-center text-nowrap text-white top-[11.6px] translate-x-[-50%]">Save Documents</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}