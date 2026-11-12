export default function Button() {
  return (
    <div className="bg-[#ecf4ff] relative rounded-[100px] size-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[81.8px] text-[#1a4d8f] text-[16px] text-center text-nowrap top-[13.4px] translate-x-[-50%] whitespace-pre">Save as Draft</p>
    </div>
  );
}