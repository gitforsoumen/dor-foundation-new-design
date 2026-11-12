function Icon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function DorCounsellingForm() {
  return (
    <div className="bg-gradient-to-b from-[#10b981] relative rounded-[2.68435e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[80px] to-[#059669]" data-name="DorCounsellingForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function PrimitiveH() {
  return (
    <div className="h-[72px] relative shrink-0 w-[382.4px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d8f] text-[24px] top-[0.2px] w-[235px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Feedback Submitted Successfully!
        </p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[45px] relative shrink-0 w-[382.4px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[22.5px] left-0 text-[#4d4b48] text-[15px] top-[-0.4px] w-[318px]">Your counselling feedback has been recorded successfully.</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[273px] items-center left-[32px] pb-[24px] pt-0 px-0 top-[32px] w-[382.4px]" data-name="DialogHeader">
      <DorCounsellingForm />
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#1a4d8f] h-[50px] items-center justify-center left-[32px] px-[16px] py-[8px] rounded-[100px] to-[#153d73] top-[321px] w-[382.4px]" data-name="Button">
      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[22.5px] relative shrink-0 text-[15px] text-center text-nowrap text-white">Back to Profile</p>
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
    <div className="bg-white border-[#aeaeae] border-[0.8px] border-solid relative rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <Button />
      <PrimitiveButton />
    </div>
  );
}