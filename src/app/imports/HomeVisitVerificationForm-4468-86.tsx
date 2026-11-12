function PrimitiveLabel() {
  return (
    <div className="content-stretch flex h-[21px] items-center relative shrink-0 w-full" data-name="Primitive.label">
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#4d4b48] text-[14px] text-nowrap">If the candidate has a shop or land, you are required to verify how much income is generated from it.</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[100px] relative rounded-[10px] shrink-0 w-full" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[12px] py-[8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#969696] text-[14px] text-nowrap">Describe shop/land ownership and estimated income generated</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#d0d5dd] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function HomeVisitVerificationForm() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="HomeVisitVerificationForm">
      <PrimitiveLabel />
      <Textarea />
    </div>
  );
}