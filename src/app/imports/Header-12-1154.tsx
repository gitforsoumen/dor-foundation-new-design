import svgPaths from "./svg-76xg6cqams";
import imgImageDorFoundationLogo from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";

function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[70px] left-0 top-0 w-[1152px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
    </div>
  );
}

function ImageDorFoundationLogo() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[62.175px]" data-name="Image (DOR Foundation Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDorFoundationLogo} />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[29.6px] items-start left-0 top-0 w-[222px]" data-name="Paragraph">
      <p className="basis-0 font-['Fraunces:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#a85613] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        DOR Foundation
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-0 top-[29.6px] w-[222px]" data-name="Paragraph">
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4d4b48] text-[14px] text-nowrap whitespace-pre">Scholarship Management System</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[47.2px] left-[77.17px] top-[6.4px] w-[222px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[60px] left-0 top-0 w-[299.175px]" data-name="Container">
      <ImageDorFoundationLogo />
      <Container1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <path d={svgPaths.p7c58b00} fill="var(--fill-0, #CECECE)" id="Vector" />
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[30px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16.675px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[1.96%] left-0 right-[4.86%] top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 17">
          <path clipRule="evenodd" d={svgPaths.p2abb4a80} fill="var(--fill-0, #767676)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[16.675px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-[5px] overflow-clip pb-0 pl-[3.338px] pr-[3.337px] pt-[1.662px] size-[20px] top-[5px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute left-0 size-[30px] top-[2.2px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[16.8px] items-start left-0 top-0 w-[89px]" data-name="Paragraph">
      <p className="font-['Fraunces:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#a85613] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Koushik Das
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[17.6px] items-start left-0 top-[16.8px] w-[89px]" data-name="Paragraph">
      <p className="basis-0 font-['Wix_Madefor_Text:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px relative shrink-0 text-[#4d4b48] text-[14px]">Student</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[34.4px] left-[40px] top-0 w-[89px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[34.4px] left-[923px] top-[12.8px] w-[129px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[60px] left-[50px] top-[5px] w-[1052px]" data-name="Container">
      <Container2 />
      <Container8 />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-white relative size-full" data-name="Header">
      <Container />
      <Container9 />
    </div>
  );
}