export default function Rectangle() {
  return (
    <button className="block cursor-pointer relative size-full">
      <div className="absolute bg-white inset-0 rounded-[3px]">
        <div aria-hidden="true" className="absolute border border-[#aeaeae] border-solid inset-0 pointer-events-none rounded-[3px]" />
      </div>
    </button>
  );
}