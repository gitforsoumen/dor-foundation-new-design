export default function Button() {
  return (
    <div className="bg-white relative rounded-[100px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20.8px] py-[8.8px] relative size-full">
          <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a4d8f] text-[14px] text-center text-nowrap">Download Profile</p>
        </div>
      </div>
    </div>
  );
}