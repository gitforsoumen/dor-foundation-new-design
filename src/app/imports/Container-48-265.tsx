function Container() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[637px] left-0 rounded-[10px] top-0 w-[520px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
    </div>
  );
}

function Container1() {
  return <div className="absolute h-[637px] left-0 top-0 w-[520px]" data-name="Container" />;
}

export default function Container2() {
  return (
    <div className="bg-white relative rounded-[10px] size-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}