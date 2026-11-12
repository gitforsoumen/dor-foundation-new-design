import svgPaths from "./svg-5z6iptt9iw";

function Checkbox() {
  return (
    <div className="h-[7px] relative shrink-0 w-[10.5px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
        <g id="Checkbox">
          <path d={svgPaths.p2e525300} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[7px] relative shrink-0 w-full" data-name="Primitive.span">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center relative size-full">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}

export default function PrimitiveButton() {
  return (
    <div className="bg-[#1a4d8f] relative rounded-[3px] size-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[0.8px] pt-[8.5px] px-[0.8px] relative size-full">
          <PrimitiveSpan />
        </div>
      </div>
    </div>
  );
}