import svgPaths from "./svg-rcid6hphij";

function PrimitiveH() {
  return (
    <div className="h-[36px] relative shrink-0 w-[650.4px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d8f] text-[24px] text-nowrap top-[0.2px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Photograph of Student
        </p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[21px] relative shrink-0 w-[650.4px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">JPG • 89 KB</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[65px] items-start left-[24px] top-[24px] w-[650.4px]" data-name="DialogHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

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

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[160.79px] size-[96px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[112px] w-[417.587px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[24px] left-[208.98px] text-[#4d4b48] text-[16px] text-center text-nowrap top-[-0.4px] translate-x-[-50%]">Image Preview</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[21px] left-0 top-[144px] w-[417.587px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-[209px] text-[#969696] text-[14px] text-center text-nowrap top-[-0.4px] translate-x-[-50%]">In a production environment, the image would be displayed here</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[165px] relative shrink-0 w-[417.587px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container />
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function ApplicationReview() {
  return (
    <div className="absolute bg-[#f6f8fc] content-stretch flex flex-col h-[400px] items-center justify-center left-[24px] rounded-[12px] top-[121px] w-[650.4px]" data-name="ApplicationReview">
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[44px] relative rounded-[100px] shrink-0 w-[102.838px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32.8px] py-[8.8px] relative size-full">
        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#4d4b48] text-[14px] text-center text-nowrap">Close</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1a4d8f] h-[44px] relative rounded-[100px] shrink-0 w-[122.6px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[20px] left-[77px] text-[14px] text-center text-nowrap text-white top-[11.8px] translate-x-[-50%]">Download</p>
      </div>
    </div>
  );
}

function ApplicationReview1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[44px] items-start justify-end left-[24px] top-[553px] w-[650.4px]" data-name="ApplicationReview">
      <Button />
      <Button1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, #4D4B48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, #4D4B48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function DialogContent() {
  return (
    <div className="absolute left-[7px] overflow-clip size-px top-[15px]" data-name="DialogContent">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[19.5px] not-italic text-[#4d4b48] text-[16px] text-center text-nowrap top-[-2.2px] translate-x-[-50%]">Close</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute left-[666.4px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon2 />
      <DialogContent />
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white border-[#e2e8f2] border-[0.8px] border-solid relative rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <ApplicationReview />
      <ApplicationReview1 />
      <PrimitiveButton />
    </div>
  );
}