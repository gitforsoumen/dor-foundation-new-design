function PrimitiveLabel() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Primitive.label">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-[212.3px] text-[#4d4b48] text-[14px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre">Enter 6-Digit OTP</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[56px] left-[32px] rounded-[8px] top-0 w-[50px]" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[56px] left-[94px] rounded-[8px] top-0 w-[50px]" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute h-[56px] left-[156px] rounded-[8px] top-0 w-[50px]" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="absolute h-[56px] left-[218px] rounded-[8px] top-0 w-[50px]" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="absolute h-[56px] left-[280px] rounded-[8px] top-0 w-[50px]" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="absolute h-[56px] left-[342px] rounded-[8px] top-0 w-[50px]" data-name="Text Input">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <TextInput3 />
      <TextInput4 />
      <TextInput5 />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Container">
      <PrimitiveLabel />
      <Container />
    </div>
  );
}