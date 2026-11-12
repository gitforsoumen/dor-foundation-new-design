export default function Selected() {
  return (
    <button className="block cursor-pointer relative size-full" data-name="Selected">
      <div className="absolute bg-white inset-0 rounded-[12px]">
        <div aria-hidden="true" className="absolute border border-[#1a4d8f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      </div>
      <div className="absolute aspect-[24/24] bg-[#1a4d8f] left-[20.83%] right-[20.83%] rounded-[12px] top-1/2 translate-y-[-50%]" />
    </button>
  );
}