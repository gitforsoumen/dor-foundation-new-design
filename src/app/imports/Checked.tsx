import svgPaths from "./svg-xylny2xtib";

function Check24Dp1F1F1FFill0Wght400Grad0Opsz() {
  return (
    <div className="absolute inset-[26.56%_17.81%_26.67%_17.76%]" data-name="check_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="check_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
          <path d={svgPaths.p34dbb470} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Checked() {
  return (
    <button className="block cursor-pointer relative size-full" data-name="Checked">
      <Check24Dp1F1F1FFill0Wght400Grad0Opsz />
      <div className="absolute bg-[#1a4d8f] inset-0 rounded-[3px]">
        <div aria-hidden="true" className="absolute border border-[#1a4d8f] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
    </button>
  );
}