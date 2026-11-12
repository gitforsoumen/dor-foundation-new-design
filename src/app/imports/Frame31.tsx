import svgPaths from "./svg-3ia9fx7yh0";

function Frame() {
  return (
    <div className="content-stretch flex font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold gap-[5px] items-center leading-[24px] relative shrink-0 text-[14px] text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[#4d4b48]">Date of Birth</p>
      <p className="relative shrink-0 text-[red]">*</p>
    </div>
  );
}

function CalendarToday24Dp1F1F1FFill0Wght300Grad0Opsz() {
  return (
    <div className="h-[22.488px] relative shrink-0 w-[20px]" data-name="calendar_today_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23">
        <g id="calendar_today_24dp_1F1F1F_FILL0_wght300_GRAD0_opsz24 1">
          <path d={svgPaths.p39a07700} fill="var(--fill-0, #AEAEAE)" id="Vector" />
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
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#969696] text-[14px] text-nowrap whitespace-pre">DD/MM/YYYY</p>
          <CalendarToday24Dp1F1F1FFill0Wght300Grad0Opsz />
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