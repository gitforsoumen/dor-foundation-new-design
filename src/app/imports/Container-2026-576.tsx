import svgPaths from "./svg-tqz5qskvqw";

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-[176.35px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[176.35px]">
        <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#a85613] text-[20px] text-nowrap top-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Documents
        </p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33398 8H12.6673" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33301V12.6663" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1a4d8f] h-[40px] relative rounded-[100px] shrink-0 w-[178.125px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[178.125px]">
        <Icon />
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[19.5px] left-[101px] text-[13px] text-center text-nowrap text-white top-[9.85px] translate-x-[-50%] whitespace-pre">Add New Document</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[40px] items-center justify-between relative w-full">
          <Heading />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Upload required documents for your application</p>
    </div>
  );
}

function DocumentUpload() {
  return (
    <div className="absolute h-[21px] left-[112.82px] top-0 w-[5.8px]" data-name="DocumentUpload">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Document Type</p>
      <DocumentUpload />
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-105.6px] size-0 top-[-1250.5px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute bg-white h-[48px] left-0 rounded-[10px] top-0 w-[434.4px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(226,232,242,0.97)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      {[...Array(8).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7">
            <path d={svgPaths.p1b1fa300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[398.4px] size-[20px] top-[14px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel />
      <Container2 />
    </div>
  );
}

function DocumentUpload1() {
  return (
    <div className="absolute h-[21px] left-[161.85px] top-0 w-[5.8px]" data-name="DocumentUpload">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Other Document Name</p>
      <DocumentUpload1 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[48px] items-center px-[12px] py-[4px] relative w-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#969696] text-[14px] text-nowrap whitespace-pre">Enter custom document name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.8px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <PrimitiveLabel1 />
      <Input />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[178px] items-start left-0 top-0 w-[434.4px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function DocumentUpload2() {
  return (
    <div className="absolute h-[21px] left-[128.45px] top-0 w-[5.8px]" data-name="DocumentUpload">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Upload Document</p>
      <DocumentUpload2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 2.5V12.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29a183c0} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3053b100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[83.188px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[83.188px]">
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-[42px] text-[#4d4b48] text-[12px] text-center text-nowrap top-[-1.2px] translate-x-[-50%] whitespace-pre">Click to upload</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#1a4d8f] h-[30px] relative rounded-[100px] shrink-0 w-[97.363px]" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[97.363px]">
        <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[18px] left-[16px] text-[12px] text-nowrap text-white top-[4.8px] whitespace-pre">Choose File</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] h-[120px] items-center justify-center p-[1.6px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon2 />
      <Paragraph1 />
      <Label />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[178px] items-start left-[458.4px] top-0 w-[434.4px]" data-name="Container">
      <PrimitiveLabel2 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 grow h-[178px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[178px] relative w-full">
        <Container5 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
            <path d="M0.833333 0.833333V5.83333" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.84%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-6.25%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
            <path d={svgPaths.pa700300} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-0.83px_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 2">
            <path d="M0.833333 0.833333H15.8333" id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.34%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
            <path d={svgPaths.pa163480} id="Vector" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[36px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[178px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Button1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#f6f8fc] h-[243.6px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[243.6px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative w-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[344.6px] items-start left-[48.8px] top-[60px] w-[994.4px]" data-name="Container">
      <Container />
      <Paragraph />
      <Container10 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a4d8f] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Important Guidelines:</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">• All documents must be clear and readable</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">• Accepted formats: PDF, JPG, PNG</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">• Maximum file size: 1 MB per document</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">• Ensure all marksheets are attested by your school</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">• Income proof should be recent (within 6 months)</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[137px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#ecf4ff] box-border content-stretch flex flex-col gap-[12px] h-[222.6px] items-start left-[48.8px] pb-[0.8px] pt-[24.8px] px-[24.8px] rounded-[10px] top-[436.6px] w-[994.4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading1 />
      <List />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#1a4d8f] h-[48px] left-[801.72px] rounded-[100px] top-0 w-[192.675px]" data-name="Button">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[96.5px] text-[16px] text-center text-nowrap text-white top-[11.6px] translate-x-[-50%] whitespace-pre">Save Documents</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[26.5px] text-[#4d4b48] text-[16px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre">Cancel</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[48px] items-start left-0 pb-[0.8px] pt-[12px] px-[32.8px] rounded-[100px] top-0 w-[117.938px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Paragraph2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[48px] left-[48.8px] top-[691.2px] w-[994.4px]" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

export default function Container14() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}