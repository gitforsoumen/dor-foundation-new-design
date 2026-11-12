import svgPaths from "./svg-aubixvey17";

function Icon() {
  return (
    <div className="h-[96px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
            <path d={svgPaths.p35e09600} id="Vector" stroke="var(--stroke-0, #A85613)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_54.17%_54.17%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p3df61e80} id="Vector" stroke="var(--stroke-0, #A85613)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[47.2%]" data-name="Vector">
        <div className="absolute inset-[-10.34%_-6.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 46.6863">
            <path d={svgPaths.p2b966fe0} id="Vector" stroke="var(--stroke-0, #A85613)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Container">
      <Icon />
    </div>
  );
}