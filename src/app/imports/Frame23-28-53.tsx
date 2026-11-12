import svgPaths from "./svg-93xsq6anwx";
import img51513BC4E6020F4Ac3450Ab2E26218090D3Be1Mv22 from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] relative shrink-0 w-[222px]">
      <p className="font-['Fraunces:Bold',sans-serif] font-bold relative shrink-0 text-[#a85613] text-[24px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        DOR Foundation
      </p>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal relative shrink-0 text-[#4d4b48] text-[14px] w-full">Scholarship Management System</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
      <div className="h-[60px] relative shrink-0 w-[62.187px]" data-name="51513b_c4e6020f4ac3450ab2e26218090d3be1~mv2 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img51513BC4E6020F4Ac3450Ab2E26218090D3Be1Mv22} />
      </div>
      <Frame />
    </div>
  );
}

function ProfileSvgrepoCom() {
  return (
    <div className="[grid-area:1_/_1] aspect-[800/800] ml-[5px] mt-[5px] overflow-clip relative w-[20px]" data-name="profile-svgrepo-com (1) 1">
      <div className="absolute inset-[8.33%_16.7%_8.34%_16.7%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
          <path clipRule="evenodd" d={svgPaths.p3effaa00} fill="var(--fill-0, #767676)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] aspect-[31/31] ml-0 mt-0 relative w-[30px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #CECECE)" id="Ellipse 2242" r="15" />
        </svg>
      </div>
      <ProfileSvgrepoCom />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[normal] relative shrink-0 text-[14px] w-[89px]">
      <p className="font-['Fraunces:Bold',sans-serif] font-bold relative shrink-0 text-[#a85613] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Koushik Das
      </p>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal relative shrink-0 text-[#4d4b48] w-full">Student</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Group />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1820px]">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-white relative size-full">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[50px] py-[5px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}