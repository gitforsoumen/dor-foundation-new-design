import svgPaths from "./svg-zjtc7533rt";

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-[173.4px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[173.4px]">
        <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#a85613] text-[20px] text-nowrap top-[0.8px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Scheduled Exams
        </p>
      </div>
    </div>
  );
}

function ApplicationReview() {
  return (
    <div className="h-[30px] relative shrink-0 w-[218.4px]" data-name="ApplicationReview">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[30px] items-center justify-between relative w-[218.4px]">
        <Heading />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M7.80078 5.26562V14.599" id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2fc88400} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[101.238px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-[101.238px]">
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[-0.2px] text-[#1a4d8f] text-[13px] text-nowrap top-[0.2px] whitespace-pre">Exam Scheduled</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[20px] relative shrink-0 w-[218px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[20px] items-center relative w-[218px]">
        <Icon />
        <Paragraph />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start pb-[0.8px] pl-[24.8px] pr-[0.8px] pt-[24.8px] relative size-full">
          <ApplicationReview />
          <Container />
        </div>
      </div>
    </div>
  );
}