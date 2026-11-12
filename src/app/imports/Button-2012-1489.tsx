export default function Button() {
  return (
    <div className="bg-white relative rounded-[100px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[64.3px] text-[#4d4b48] text-[16px] text-center text-nowrap top-[13.4px] translate-x-[-50%] whitespace-pre">Cancel</p>
    </div>
  );
}