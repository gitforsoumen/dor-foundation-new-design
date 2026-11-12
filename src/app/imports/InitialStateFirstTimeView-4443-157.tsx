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

function Button() {
  return (
    <div className="absolute bg-white content-stretch flex h-[44px] items-center justify-center left-[24.8px] px-[20.8px] py-[8.8px] rounded-[100px] top-[104px] w-[340px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a4d8f] text-[14px] text-center text-nowrap">View Full Form</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[178px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <StudentProfileDetails />
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

function Paragraph1() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] left-0 text-[#969696] text-[13px] text-nowrap top-[0.4px]">Verify student documents in person</p>
    </div>
  );
}

function StudentProfileDetails1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[53.5px] items-start left-[24.8px] top-[24.8px] w-[340px]" data-name="StudentProfileDetails">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[44px] items-center justify-center left-[24.8px] px-[20.8px] py-[8.8px] rounded-[100px] top-[103px] w-[340px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a4d8f] text-[14px] text-center text-nowrap">View Full Form</p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white h-[172px] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <StudentProfileDetails1 />
      <Button1 />
    </div>
  );
}

export default function InitialStateFirstTimeView() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="Initial state (first-time view)">
      <Card />
      <Card1 />
    </div>
  );
}