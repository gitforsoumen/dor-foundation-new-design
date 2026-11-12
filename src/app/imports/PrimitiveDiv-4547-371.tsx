import svgPaths from "./svg-g93tz6ou45";

function PrimitiveH() {
  return (
    <div className="h-[36px] relative shrink-0 w-[550.4px]" data-name="Primitive.h2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d8f] text-[24px] text-nowrap top-[0.2px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Submit Counselling Feedback
        </p>
      </div>
    </div>
  );
}

function PrimitiveP() {
  return (
    <div className="h-[21px] relative shrink-0 w-[550.4px]" data-name="Primitive.p">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Please provide the final status and feedback for this counselling session</p>
      </div>
    </div>
  );
}

function DialogHeader() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[113px] items-start left-0 pb-0 pl-[24px] pr-0 pt-[24px] top-0 w-[598.4px]" data-name="DialogHeader">
      <PrimitiveH />
      <PrimitiveP />
    </div>
  );
}

function DorCounsellingForm() {
  return (
    <div className="absolute h-[21px] left-[103.66px] top-0 w-[5.8px]" data-name="DorCounsellingForm">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#ef4444] text-[14px] text-nowrap top-[-0.4px]">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Update Status</p>
      <DorCounsellingForm />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[21px] relative shrink-0 w-[85.013px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#969696] text-[14px] text-center text-nowrap">Select status</p>
      </div>
    </div>
  );
}

function SelectTrigger() {
  return (
    <div className="h-[6.55px] overflow-clip relative shrink-0 w-full" data-name="SelectTrigger">
      <div className="absolute inset-[0_7.08%_6.43%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 7">
          <path d={svgPaths.p3dd89c70} fill="var(--fill-0, #AEAEAE)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="h-[6.55px] relative shrink-0 w-[11.15px]" data-name="SlotClone">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <SelectTrigger />
      </div>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12.8px] py-[0.8px] relative size-full">
          <PrimitiveSpan />
          <SlotClone />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[65px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <PrimitiveButton />
    </div>
  );
}

function DorCounsellingForm1() {
  return (
    <div className="absolute h-[21px] left-[80.75px] top-0 w-[5.8px]" data-name="DorCounsellingForm">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#ef4444] text-[14px] text-nowrap top-[-0.4px]">*</p>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Comments</p>
      <DorCounsellingForm1 />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[64px] relative rounded-[8px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">Enter your comments or feedback</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[93px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Textarea />
    </div>
  );
}

function DorCounsellingForm2() {
  return (
    <div className="absolute h-[21px] left-[128.45px] top-0 w-[67.65px]" data-name="DorCounsellingForm">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#9ca3af] text-[14px] text-nowrap top-[-0.4px]">(Optional)</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Document Upload</p>
      <DorCounsellingForm2 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[233.6px] size-[32px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 4V20" id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p171a9480} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p110a37f0} id="Vector_3" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-0 top-[40px] w-[499.2px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-[250.4px] text-[#1a4d8f] text-[14px] text-center text-nowrap top-[-0.4px] translate-x-[-50%]">Click to upload or drag and drop</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[18px] left-0 top-[65px] w-[499.2px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-[249.95px] text-[#99a1af] text-[12px] text-center text-nowrap top-[-1.2px] translate-x-[-50%]">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[83px] relative shrink-0 w-full" data-name="Label">
      <Icon />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[134.2px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pt-[25.6px] px-[25.6px] relative size-full">
          <Label />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[163.2px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel2 />
      <Container2 />
    </div>
  );
}

function DorCounsellingForm3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[385.2px] items-start left-0 overflow-clip px-[24px] py-0 top-[129px] w-[598.4px]" data-name="DorCounsellingForm">
      <Container />
      <Container1 />
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[44px] relative rounded-[100px] shrink-0 w-[94.725px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24.8px] py-[8.8px] relative size-full">
        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#4d4b48] text-[14px] text-center text-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1a4d8f] h-[44px] relative rounded-[100px] shrink-0 w-[133.575px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[14px] text-center text-nowrap text-white">Submit Form</p>
      </div>
    </div>
  );
}

function DorCounsellingForm4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[85.6px] items-start justify-end left-0 pb-[0.8px] pl-[0.8px] pr-[24.8px] pt-[16.8px] top-[530.2px] w-[598.4px]" data-name="DorCounsellingForm">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
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

function PrimitiveButton1() {
  return (
    <div className="absolute left-[566.4px] opacity-70 rounded-[2px] size-[16px] top-[16px]" data-name="Primitive.button">
      <Icon1 />
      <DialogContent />
    </div>
  );
}

export default function PrimitiveDiv() {
  return (
    <div className="bg-white border-[#e2e8f2] border-[0.8px] border-solid relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Primitive.div">
      <DialogHeader />
      <DorCounsellingForm3 />
      <DorCounsellingForm4 />
      <PrimitiveButton1 />
    </div>
  );
}