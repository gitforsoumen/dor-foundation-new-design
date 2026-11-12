import svgPaths from "./svg-oby21uuesm";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

export default function ButtonViewDetails() {
  return (
    <div className="bg-[#ecf4ff] relative rounded-[100px] size-full" data-name="Button View Details">
      <div aria-hidden="true" className="absolute border border-[#1a4d8f] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[5px] items-center px-[30px] py-[14px] relative size-full">
          <Icon />
          <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#1a4d8f] text-[16px] text-nowrap whitespace-pre">View Details</p>
        </div>
      </div>
    </div>
  );
}