function Button() {
  return (
    <div className="h-[44px] relative rounded-[100px] shrink-0 w-[95.863px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] left-[47.6px] text-[#4d4b48] text-[14px] text-center text-nowrap top-[11.1px] translate-x-[-50%]">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b from-[#1a4d8f] h-[44px] relative rounded-[100px] shrink-0 to-[#153d73] w-[169.313px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] left-[85px] text-[14px] text-center text-nowrap text-white top-[11.1px] translate-x-[-50%]">Create Mapping</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-start justify-between pb-0 pt-[24.8px] px-0 relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}