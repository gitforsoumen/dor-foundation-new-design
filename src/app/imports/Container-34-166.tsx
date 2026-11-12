function Container() {
  return (
    <div className="absolute h-[116px] left-0 rounded-tl-[10px] rounded-tr-[10px] top-0 w-[1302px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="bg-[#f6f8fc] relative rounded-tl-[10px] rounded-tr-[10px] size-full" data-name="Container">
      <Container />
    </div>
  );
}