import svgPaths from "./svg-napj0nrbq6";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 10.6667V16" id="Vector_2" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 21.3334H16.0133" id="Vector_3" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function DorCounsellingForm() {
  return (
    <div className="bg-[#fff5f5] relative rounded-[2.68435e+07px] shrink-0 size-[64px]" data-name="DorCounsellingForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function PrimitiveH() {
  return (
    <div className="h-[36px] relative shrink-0 w-[198.588px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d8f] text-[24px] text-nowrap top-[0.2px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Incomplete Form
        </p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[45px] relative shrink-0 w-[382.4px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#969696] text-[15px] top-[-0.4px] w-[375px]">Please fill in all required fields (Status and Comments) before submitting the form.</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[209px] items-center left-[32px] pb-[24px] pt-0 px-0 top-[32px] w-[382.4px]" data-name="DialogHeader">
      <DorCounsellingForm />
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1a4d8f] content-stretch flex h-[48px] items-center justify-center left-[32px] px-[16px] py-[8px] rounded-[100px] top-[257px] w-[382.4px]" data-name="Button">
      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[15px] text-center text-nowrap text-white">Got it</p>
    </div>
  );
}

function Icon1() {
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
    <div className="absolute left-[414.4px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon1 />
      <DialogContent />
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white border-[#aeaeae] border-[0.8px] border-solid relative rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <Button />
      <PrimitiveButton />
    </div>
  );
}