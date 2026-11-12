import svgPaths from "./svg-0bb2ucrc35";
import imgImageDorFoundationLogo from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";

function ImageDorFoundationLogo() {
  return (
    <div className="h-[60px] relative shrink-0 w-[62.175px]" data-name="Image (DOR Foundation Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDorFoundationLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[60px] w-[62.175px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#a85613] text-[24px] text-nowrap top-[0.2px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        DOR Foundation
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Scholarship Management System</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[57px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[57px] items-start relative w-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[296.975px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[15px] h-[60px] items-center relative w-[296.975px]">
        <ImageDorFoundationLogo />
        <Container />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[17px] relative shrink-0 w-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
        <g clipPath="url(#clip0_12_1307)" id="Icon">
          <path clipRule="evenodd" d={svgPaths.p3effaa00} fill="var(--fill-0, #767676)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_12_1307">
            <rect fill="white" height="17" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#cecece] relative rounded-[2.68435e+07px] shrink-0 size-[30px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[30px]">
        <Icon />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#a85613] text-[14px] text-nowrap top-[-0.4px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Koushik Das
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Student</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[42px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start relative w-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[42px] relative shrink-0 w-[123.05px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[42px] items-center relative w-[123.05px]">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

export default function Container5() {
  return (
    <div className="bg-white relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.8px] border-black border-solid inset-0 pointer-events-none shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[0.8px] pt-0 px-[50px] relative size-full">
          <Container1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}