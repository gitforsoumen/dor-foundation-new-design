import svgPaths from "./svg-6ocdxqliw6";

function PrimitiveLabel() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px]">Upload Document</p>
    </div>
  );
}

function ImageBlogBannerJpg() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[80px]" data-name="Image (Blog Banner.jpg)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[19.5px] left-0 text-[#4d4b48] text-[13px] text-nowrap top-[-0.4px]">Blog Banner.jpg</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#99a1af] text-[11px] top-[-0.2px] w-[54px]">455.30 KB</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#25c196] text-[12px] text-nowrap top-[-1.2px]">✓ Upload complete</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow h-[62px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
            <path d={svgPaths.pa700300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.pa163480} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[80px] items-start relative shrink-0 w-full" data-name="Container">
      <ImageBlogBannerJpg />
      <Container />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[115.2px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-[1.6px] pt-[17.6px] px-[17.6px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

export default function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Container">
      <PrimitiveLabel />
      <Container2 />
    </div>
  );
}