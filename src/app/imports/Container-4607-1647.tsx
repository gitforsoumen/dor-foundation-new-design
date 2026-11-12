import svgPaths from "./svg-3nvldibk6s";

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[548.4px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1a4d8f] text-[24px] text-nowrap top-[0.2px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Submit Counselling Feedback
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[548.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Please provide the final status and feedback for this counselling session</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[113.8px] items-start left-0 pb-[0.8px] pl-[24px] pr-0 pt-[24px] top-0 w-[596.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[97.04px] top-[1.6px] w-[5.575px]" data-name="Text">
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#ef4444] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-[548.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Update Status</p>
        <Text />
      </div>
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
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[548.4px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[12.8px] py-[0.8px] relative size-full">
        <PrimitiveSpan />
        <SlotClone />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[65px] relative shrink-0 w-[548.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Label />
        <PrimitiveButton />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[75.42px] top-[1.6px] w-[5.575px]" data-name="Text">
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#ef4444] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[548.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Comments</p>
        <Text1 />
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[548.4px]" data-name="Textarea">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip px-[16px] py-[12px] relative rounded-[inherit] size-full">
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">Enter your comments or feedback</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[93px] relative shrink-0 w-[548.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Label1 />
        <Textarea />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-[122.15px] top-[1.6px] w-[65.713px]" data-name="Text">
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#9ca3af] text-[14px] text-nowrap">(Optional)</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[548.4px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Document Upload</p>
        <Text2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-1.33px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.66667 18.6667">
            <path d="M1.33334 1.33334V17.3333" id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_29.17%_66.67%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 9.33337">
            <path d={svgPaths.p201ebb00} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 10.6667">
            <path d={svgPaths.p789b600} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[209.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-[105.5px] text-[#1a4d8f] text-[14px] text-center text-nowrap top-[-0.4px] translate-x-[-50%]">Click to upload or drag and drop</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[228.288px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-[114.5px] text-[#99a1af] text-[12px] text-center text-nowrap top-[-1.2px] translate-x-[-50%]">PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[87px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-[548.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.6px] pt-[25.6px] px-[25.6px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[167.2px] relative shrink-0 w-[548.4px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Label2 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[373.2px] items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[421.2px] items-start left-0 overflow-clip pb-0 pt-[24px] px-[24px] top-[113.8px] w-[596.4px]" data-name="Container">
      <Container7 />
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

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[76.8px] items-center justify-end left-0 pb-0 pl-0 pr-[24px] pt-[0.8px] top-[535px] w-[596.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Button />
      <Button1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p48af40} id="Vector" stroke="var(--stroke-0, #4D4B48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
            <path d={svgPaths.p30908200} id="Vector" stroke="var(--stroke-0, #4D4B48)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[564.4px] opacity-70 size-[16px] top-[16px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

export default function Container10() {
  return (
    <div className="bg-white border-[#e2e8f2] border-[0.8px] border-solid overflow-clip relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <Container />
      <Container8 />
      <Container9 />
      <Button2 />
    </div>
  );
}