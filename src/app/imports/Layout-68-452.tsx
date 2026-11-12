import svgPaths from "./svg-afes6kphn7";
import imgImageDorFoundationLogo from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";

function ImageDorFoundationLogo() {
  return (
    <div className="aspect-[62.175/60] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Image (DOR Foundation Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDorFoundationLogo} />
      <div className="aspect-[62.175/60] bg-clip-padding border-0 border-[transparent] border-solid box-border size-full" />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] items-start relative w-[52px]">
        <ImageDorFoundationLogo />
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

function Container1() {
  return (
    <div className="absolute bg-[#cecece] content-stretch flex items-center justify-center left-[0.95px] rounded-[2.68435e+07px] size-[30px] top-[6.6px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[21px] left-[-0.05px] text-[#a85613] text-[14px] text-nowrap top-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Koushik Das
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-[-0.05px] text-[#4d4b48] text-[14px] text-nowrap top-[-0.8px] whitespace-pre">Student</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[40.95px] top-[0.6px] w-[89px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[43px] relative shrink-0 w-[130px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[130px]">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

export default function Layout() {
  return (
    <div className="bg-white relative size-full" data-name="Layout">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[10.8px] pt-[10px] px-[20px] relative size-full">
          <Container />
          <Container3 />
        </div>
      </div>
    </div>
  );
}