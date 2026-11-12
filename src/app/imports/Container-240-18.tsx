function FamilyFinanceStep() {
  return (
    <div className="absolute h-[21px] left-[103.55px] top-0 w-[5.8px]" data-name="FamilyFinanceStep">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">*</p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">{`Father's Name`}</p>
      <FamilyFinanceStep />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#969696] text-[14px] text-nowrap whitespace-pre">{`Enter father's name`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Container">
      <PrimitiveLabel />
      <Input />
    </div>
  );
}