import svgPaths from "./svg-8f4sbi2u8r";

function Icon() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p12dcd500} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[308.8px]" data-name="CardTitle">
      <Icon />
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[20px] left-[28px] text-[#1a4d8f] text-[20px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Review Notes
      </p>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex h-[19.2px] items-start left-0 top-[2.4px] w-[82.175px]" data-name="Label">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Admin Notes
      </p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="absolute h-[64px] left-0 rounded-[6.8px] top-[24px] w-[308.8px]" data-name="Textarea">
      <div className="box-border content-stretch flex h-[64px] items-start overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-[308.8px]">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-neutral-500 text-nowrap whitespace-pre" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Add notes about this application...
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6.8px]" />
    </div>
  );
}

function ApplicationReview() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="ApplicationReview">
      <Label />
      <Textarea />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Nunito_Sans:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Previous Notes:
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Nunito_Sans:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-950" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Counselor - Priya Sharma
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[31.975px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-0 w-[256px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Very motivated student with strong academic background. Recommended for full scholarship.
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[15.988px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Nunito_Sans:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2025-11-04
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-gray-50 h-[103.963px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[103.963px] items-start pb-0 pt-[12px] px-[12px] relative w-full">
          <Paragraph1 />
          <Paragraph2 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function ApplicationReview1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[135.963px] items-start relative shrink-0 w-full" data-name="ApplicationReview">
      <Paragraph />
      <Container />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] h-[263.962px] items-start left-[0.8px] px-[24px] py-0 top-[74.8px] w-[356.8px]" data-name="CardContent">
      <ApplicationReview />
      <ApplicationReview1 />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[16.4px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[0.8px] border-neutral-200 border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <CardTitle />
      <CardContent />
    </div>
  );
}