import svgPaths from "./svg-vfpfqffagi";

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#a85613] text-[20px] text-nowrap top-[1.2px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Home Visit Verification
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[0.4px]">Verify student information through home visit</p>
    </div>
  );
}

function StudentProfileDetails() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[53.5px] items-start left-[24.8px] top-[24.8px] w-[340px]" data-name="StudentProfileDetails">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[16.5px] left-[12px] top-[6px] w-[62.362px]" data-name="Text">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#065f46] text-[11px] text-nowrap top-[0.6px]">Recommend</p>
    </div>
  );
}

function StudentProfileDetails1() {
  return (
    <div className="absolute bg-[#d1fae5] h-[28.5px] left-[24.8px] rounded-[6px] top-[119.5px] w-[86.363px]" data-name="StudentProfileDetails">
      <Text />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-0.4px]">Comments</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[91px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4d4b48] text-[14px] top-[0.2px] w-[320px]">{`Home visit confirmed the student's financial need. Family living in modest conditions. Student has a dedicated study space. Neighbors provided positive feedback.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[113px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-0.4px]">Attached Documents</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[135.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#4d4b48] text-[13px] text-nowrap top-[0.4px]">Home_Visit_Photos.pdf</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#f6f8fc] h-[35.5px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <Icon />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[61.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Container1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[162.775px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#969696] text-[12px] top-[-0.4px] w-[163px]">Submitted by: Volunteer Name</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[66.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-0.4px]">18 Jan 2024</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[26.8px] items-center justify-between pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text2 />
      <Text3 />
    </div>
  );
}

function StudentProfileDetails2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[233.3px] items-start left-[24.8px] top-[188px] w-[340px]" data-name="StudentProfileDetails">
      <Container />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex h-[44px] items-center justify-center left-[24.8px] px-[20.8px] py-[8.8px] rounded-[100px] top-[461.3px] w-[340px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a4d8f] text-[14px] text-center text-nowrap">View Full Form</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[530.1px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <StudentProfileDetails />
      <StudentProfileDetails1 />
      <StudentProfileDetails2 />
      <Button />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#a85613] text-[20px] text-nowrap top-[1.2px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        In-Person Verification
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[0.4px]">Verify student documents in person</p>
    </div>
  );
}

function StudentProfileDetails3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[53.5px] items-start left-[24.8px] top-[24.8px] w-[340px]" data-name="StudentProfileDetails">
      <Heading1 />
      <Paragraph4 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[16.5px] left-[12px] top-[6px] w-[62.362px]" data-name="Text">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#065f46] text-[11px] text-nowrap top-[0.6px]">Recommend</p>
    </div>
  );
}

function StudentProfileDetails4() {
  return (
    <div className="absolute bg-[#d1fae5] h-[28.5px] left-[24.8px] rounded-[6px] top-[119.5px] w-[86.363px]" data-name="StudentProfileDetails">
      <Text4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-0.4px]">Comments</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4d4b48] text-[14px] top-[0.2px] w-[325px]">Student demonstrated strong academic commitment and clear career goals. Family is very supportive. Recommended for scholarship.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[90.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-0.4px]">Attached Documents</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[131.525px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#4d4b48] text-[13px] text-nowrap top-[0.4px]">Verification_Report.pdf</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f6f8fc] h-[35.5px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <Icon1 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[119.975px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#4d4b48] text-[13px] text-nowrap top-[0.4px]">Additional_Notes.pdf</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f6f8fc] h-[35.5px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[8px] pr-0 py-0 relative size-full">
          <Icon2 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[79px] items-start relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[105px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
      <Container7 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[162.775px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#969696] text-[12px] top-[-0.4px] w-[163px]">Submitted by: Volunteer Name</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[18px] relative shrink-0 w-[66.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#969696] text-[12px] text-nowrap top-[-0.4px]">15 Jan 2024</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[26.8px] items-center justify-between pb-0 pt-[0.8px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text7 />
      <Text8 />
    </div>
  );
}

function StudentProfileDetails5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[254.05px] items-start left-[24.8px] top-[188px] w-[340px]" data-name="StudentProfileDetails">
      <Container4 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[44px] items-center justify-center left-[24.8px] px-[20.8px] py-[8.8px] rounded-[100px] top-[482.05px] w-[340px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a4d8f] text-[14px] text-center text-nowrap">View Full Form</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[550.85px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <StudentProfileDetails3 />
      <StudentProfileDetails4 />
      <StudentProfileDetails5 />
      <Button1 />
    </div>
  );
}

export default function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Container">
      <Card />
      <Card1 />
    </div>
  );
}