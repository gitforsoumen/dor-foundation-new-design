import svgPaths from "./svg-kbiczddtqn";

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#a85613] text-[20px] text-nowrap top-[0.4px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Counselling Feedback
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[-0.4px]">Provide feedback on counselling session</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[53.5px] relative shrink-0 w-[244.775px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function StudentProfileDetails() {
  return (
    <div className="h-[101.5px] relative shrink-0 w-[388px]" data-name="StudentProfileDetails">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-0 pt-[24px] px-[24px] relative size-full">
        <Container />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg]">
            <Icon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[16.5px] left-[12px] top-[6px] w-[65.425px]" data-name="Text">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#065f46] text-[11px] text-nowrap top-[-0.2px]">Recommend</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#d1fae5] h-[28.5px] left-[24px] rounded-[6px] top-[0.4px] w-[89.425px]" data-name="Container">
      <Text />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-1.2px]">Comments</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4d4b48] text-[14px] top-[-0.6px] w-[336px]">Student showed excellent communication skills and clear understanding of course objectives. Highly motivated and ready for higher education.</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[90.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-1.2px]">Attached Documents</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[4.17%_29.17%_12.5%_4.17%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3333">
            <path d={svgPaths.p35af0300} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[4.17%_70.83%_70.83%_4.17%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.pe9c54e0} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[2px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Counselling_Notes.pdf</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#1a4d8f] text-[13px] top-[-0.4px] w-[163px]">Volunteer: Volunteer Name</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#969696] text-[12px] top-[-1.2px] w-[219px]">12 Jan 2024 at 04:20 PM • PDF • 512 KB</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 10V2" id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p23ad1400} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p19411800} id="Vector_3" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[110.5px] items-start left-[32px] top-0 w-[276px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Paragraph6 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[110.5px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f6f8fc] h-[142.5px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[168.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Container7 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#969696] text-[12px] top-[-1.2px] w-[172px]">Submitted by: Volunteer Name</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-1.2px]">12 Jan 2024</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48.8px] items-start pb-0 pt-[8.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[339.55px] items-start left-[24px] top-[44.9px] w-[340px]" data-name="Container">
      <Container2 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[21px] left-[24px] top-[402.85px] w-[340px]" data-name="Button">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] left-[169.65px] text-[#1a4d8f] text-[14px] text-center text-nowrap top-[-0.4px] translate-x-[-50%]">View Previous Feedback</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white border-[#1a4d8f] border-[0.8px] border-solid h-[44px] left-[24px] rounded-[100px] top-[435.85px] w-[340px]" data-name="Button">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] left-[169.91px] text-[#1a4d8f] text-[14px] text-center text-nowrap top-[10.3px] translate-x-[-50%]">Submit Form</p>
    </div>
  );
}

function StudentProfileDetails1() {
  return (
    <div className="h-[503.85px] relative shrink-0 w-[388px]" data-name="StudentProfileDetails">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container1 />
        <Container10 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[0.8px] relative rounded-[inherit] size-full">
        <StudentProfileDetails />
        <StudentProfileDetails1 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
    </div>
  );
}