import svgPaths from "./svg-ifzh26tyx2";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[8px] top-0 w-[151.663px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[20px] left-[92.5px] text-[#1a4d8f] text-[14px] text-center text-nowrap top-[7.8px] translate-x-[-50%]">Back to Profile</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[54px] left-0 top-[52px] w-[1216.8px]" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[54px] left-0 text-[#a85613] text-[36px] text-nowrap top-[-0.2px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Counselling Feedback
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[22.75px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.6px]">Please provide your feedback on the counselling session to help us understand and support the students better.</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[19.5px] left-0 text-[#1a4d8f] text-[13px] text-nowrap top-[-0.4px]">1 = Needs Improvement | 2 = Below Average | 3 = Satisfactory | 4 = Good | 5 = Excellent</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#ecf4ff] content-stretch flex flex-col gap-[8px] h-[83.85px] items-start left-0 pb-[0.8px] pt-[16.8px] px-[16.8px] rounded-[10px] top-[114px] w-[1216.8px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(26,77,143,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[197.85px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Heading />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a4d8f] text-[18px] text-nowrap top-[-0.4px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Student Information
      </p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Name of the student</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4d4b48] text-[14px] text-nowrap">Priya Sharma</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73px] items-start left-0 top-0 w-[565.6px]" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Application No</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[4px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#969696] text-[14px] text-nowrap">APP-2024-001</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73px] items-start left-[585.6px] top-0 w-[565.6px]" data-name="Container">
      <PrimitiveLabel1 />
      <Input1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[116px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a4d8f] text-[18px] text-nowrap top-[-0.4px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Rating Sections
      </p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Course Awareness</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[-0.4px]">Does the candidate understand the course they are interested in?</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3357 28.0961">
            <path d={svgPaths.p1343a100} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Button1 key={i} />
      ))}
    </div>
  );
}

function StarRating() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[96.5px] items-start relative shrink-0 w-full" data-name="StarRating">
      <PrimitiveLabel2 />
      <Paragraph2 />
      <Container6 />
    </div>
  );
}

function PrimitiveLabel3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Communication Efficiency</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[-0.4px]">How well does the candidate express their thoughts during the session?</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3357 28.0961">
            <path d={svgPaths.p1343a100} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Button2 key={i} />
      ))}
    </div>
  );
}

function StarRating1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[96.5px] items-start relative shrink-0 w-full" data-name="StarRating">
      <PrimitiveLabel3 />
      <Paragraph3 />
      <Container7 />
    </div>
  );
}

function PrimitiveLabel4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Spoken English</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[-0.4px]">How fluent and comfortable is the candidate in speaking English?</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3357 28.0961">
            <path d={svgPaths.p1343a100} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Button3 key={i} />
      ))}
    </div>
  );
}

function StarRating2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[96.5px] items-start relative shrink-0 w-full" data-name="StarRating">
      <PrimitiveLabel4 />
      <Paragraph4 />
      <Container8 />
    </div>
  );
}

function PrimitiveLabel5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Adaptability (School to Private College)</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[-0.4px]">Can the candidate adjust from a government/budget private school to a private college environment? (1 = Very Difficult, 5 = Very Easy)</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3357 28.0961">
            <path d={svgPaths.p1343a100} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Button4 key={i} />
      ))}
    </div>
  );
}

function StarRating3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[96.5px] items-start relative shrink-0 w-full" data-name="StarRating">
      <PrimitiveLabel5 />
      <Paragraph5 />
      <Container9 />
    </div>
  );
}

function PrimitiveLabel6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Overall Confidence</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[-0.4px]">{`What is your impression of the candidate's confidence?`}</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_12.2%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.24%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.3357 28.0961">
            <path d={svgPaths.p1343a100} id="Vector" stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Button5 key={i} />
      ))}
    </div>
  );
}

function StarRating4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[96.5px] items-start relative shrink-0 w-full" data-name="StarRating">
      <PrimitiveLabel6 />
      <Paragraph6 />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[578.5px] items-start relative shrink-0 w-full" data-name="Container">
      <StarRating />
      <StarRating1 />
      <StarRating2 />
      <StarRating3 />
      <StarRating4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[621.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container11 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a4d8f] text-[18px] text-nowrap top-[-0.4px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Descriptive Questions
      </p>
    </div>
  );
}

function PrimitiveLabel7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Any specific family/financial situation of the student that is worth mentioning separately</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[100px] relative rounded-[10px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">{`Describe any specific family or financial circumstances that may impact the student's education`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[129px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel7 />
      <Textarea />
    </div>
  );
}

function PrimitiveLabel8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Hobbies/interests/passions worth pursuing academically or professionally?</p>
    </div>
  );
}

function Textarea1() {
  return (
    <div className="bg-white h-[100px] relative rounded-[10px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">{`List the student's hobbies, interests, or passions that could be pursued academically or professionally`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[129px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel8 />
      <Textarea1 />
    </div>
  );
}

function PrimitiveLabel9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Any areas where the candidate needs support (discipline, emotional strength, etc.)?</p>
    </div>
  );
}

function Textarea2() {
  return (
    <div className="bg-white h-[100px] relative rounded-[10px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">Identify areas where the candidate may need additional support or guidance</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[129px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel9 />
      <Textarea2 />
    </div>
  );
}

function PrimitiveLabel10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Course suggestions</p>
    </div>
  );
}

function Textarea3() {
  return (
    <div className="bg-white h-[100px] relative rounded-[10px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">{`Suggest suitable courses or academic paths based on the student's profile and interests`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[129px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel10 />
      <Textarea3 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[576px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[619px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container17 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a4d8f] text-[18px] text-nowrap top-[-0.4px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Recommendation
      </p>
    </div>
  );
}

function PrimitiveLabel11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Should this candidate move to the next stage (home visit)?</p>
    </div>
  );
}

function RadioButton() {
  return <div className="shrink-0 size-[20px]" data-name="Radio Button" />;
}

function Text() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Strongly Recommended</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[21px] items-center left-0 top-0 w-[190.988px]" data-name="Label">
      <RadioButton />
      <Text />
    </div>
  );
}

function RadioButton1() {
  return <div className="shrink-0 size-[20px]" data-name="Radio Button" />;
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[162.825px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Needs further discussion</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[21px] items-center left-[206.99px] top-0 w-[194.825px]" data-name="Label">
      <RadioButton1 />
      <Text1 />
    </div>
  );
}

function RadioButton2() {
  return <div className="shrink-0 size-[20px]" data-name="Radio Button" />;
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[127.35px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Not Recommended</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[21px] items-center left-[417.81px] top-0 w-[159.35px]" data-name="Label">
      <RadioButton2 />
      <Text2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[97px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <PrimitiveLabel11 />
      <Container19 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a4d8f] text-[18px] text-nowrap top-[-0.4px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Final Remarks
      </p>
    </div>
  );
}

function PrimitiveLabel12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Remarks or any final thoughts or observations?</p>
    </div>
  );
}

function Textarea4() {
  return (
    <div className="bg-white h-[100px] relative rounded-[10px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">Provide any final remarks, thoughts, or observations about the student and the counselling session</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[172px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <PrimitiveLabel12 />
      <Textarea4 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[27px] left-0 text-[#1a4d8f] text-[18px] text-nowrap top-[-0.4px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Counselor Details
      </p>
    </div>
  );
}

function PrimitiveLabel13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Name of the Counselor</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73px] items-start left-0 top-0 w-[565.6px]" data-name="Container">
      <PrimitiveLabel13 />
      <Input2 />
    </div>
  );
}

function PrimitiveLabel14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Date</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[73px] items-start left-[585.6px] top-0 w-[565.6px]" data-name="Container">
      <PrimitiveLabel14 />
      <Input3 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[116px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container24 />
    </div>
  );
}

function DorCounsellingForm() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1151.2px]" data-name="DorCounsellingForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative size-full">
        <Container5 />
        <Container12 />
        <Container18 />
        <Container20 />
        <Container21 />
        <Container25 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[1967.1px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[32.8px] pr-[0.8px] py-[32.8px] relative size-full">
          <DorCounsellingForm />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full">
      <Container1 />
      <Card />
    </div>
  );
}