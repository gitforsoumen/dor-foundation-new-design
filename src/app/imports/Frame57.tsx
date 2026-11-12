export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[815px] py-[26px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#4d4b48] text-[14px] text-center text-nowrap whitespace-pre">© 2025 DOR Foundation. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}