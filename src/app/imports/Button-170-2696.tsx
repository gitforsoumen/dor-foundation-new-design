export default function Button() {
  return (
    <div className="bg-white relative rounded-[100px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[20.8px] py-[8.8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1a4d8f] text-[14px] text-nowrap whitespace-pre">View All</p>
        </div>
      </div>
    </div>
  );
}