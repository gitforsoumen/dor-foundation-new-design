function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[228.24px] text-[16px] text-center text-nowrap text-white top-[-0.4px] translate-x-[-50%] whitespace-pre">Create Account</p>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#1a4d8f] box-border content-stretch flex flex-col items-start pb-0 pt-[16px] px-0 relative rounded-[100px] size-full" data-name="Button">
      <Paragraph />
    </div>
  );
}