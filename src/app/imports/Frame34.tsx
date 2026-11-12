import svgPaths from "./svg-coryb6u04b";

function Frame() {
  return (
    <div className="content-stretch flex font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold gap-[5px] items-center leading-[24px] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#4d4b48]">Gender</p>
      <p className="relative shrink-0 text-[red]">*</p>
    </div>
  );
}

function KeyboardArrowDown24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="h-[6.55px] relative shrink-0 w-[11.15px]" data-name="keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
        <g id="keyboard_arrow_down_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p3bdb6080} fill="var(--fill-0, #AEAEAE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#aeaeae] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[56px] items-center justify-between px-[15px] py-[16px] relative w-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#969696] text-[14px] text-nowrap whitespace-pre">Select</p>
          <KeyboardArrowDown24Dp1F1F1FFill0Wght400Grad0Opsz />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}