import imgImageDorFoundationLogo from "figma:asset/fb85e662a0f2d18cc83f90481c3f2d015fb7e1ed.png";

function Container() {
  return <div className="absolute bg-gradient-to-b from-[#e8d5c4] h-[358px] left-0 to-[#c5d5e8] top-0 w-[1156px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(255,255,255,0)] border-[#e2e8f2] border-[0.8px] border-solid h-[733.175px] left-0 rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] top-0 w-[520px]" data-name="Container" />;
}

function ImageDorFoundationLogo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[120px]" data-name="Image (DOR Foundation Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDorFoundationLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full w-[120px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[42px] left-[93.84px] text-[#a85613] text-[28px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Registration
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] left-[94px] text-[#6a7282] text-[14px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">Create your account to apply</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[62px] relative shrink-0 w-[187.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-[62px] items-start relative w-[187.438px]">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[193.775px] items-center left-[32px] top-[32px] w-[456px]" data-name="Container">
      <ImageDorFoundationLogo />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a4d8f] text-[14px] top-[-0.2px] w-[394px]">Your OTP has been sent to your registered mobile number or email ID.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#e8f4f8] content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[12.8px] px-[16.8px] rounded-[8px] top-0 w-[456px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#a8d5e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[36px] left-0 top-[109px] w-[456px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6a7282] text-[13px] top-[-0.2px] w-[453px]">Please enter the OTP within 10 minutes. A new code can be requested after it expires.</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[456px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Enter 6-Digit OTP</p>
    </div>
  );
}

function TextInput() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container5() {
  return <div className="absolute border-[#aeaeae] border-[0.8px] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput />
      <Container5 />
    </div>
  );
}

function TextInput1() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container7() {
  return <div className="absolute border-[#aeaeae] border-[0.8px] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="absolute h-[56px] left-[78px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput1 />
      <Container7 />
    </div>
  );
}

function TextInput2() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container9() {
  return <div className="absolute border-[#aeaeae] border-[0.8px] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute h-[56px] left-[156px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput2 />
      <Container9 />
    </div>
  );
}

function TextInput3() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container11() {
  return <div className="absolute border-[#aeaeae] border-[0.8px] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute h-[56px] left-[234px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput3 />
      <Container11 />
    </div>
  );
}

function TextInput4() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container13() {
  return <div className="absolute border-[#aeaeae] border-[0.8px] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container" />;
}

function Container14() {
  return (
    <div className="absolute h-[56px] left-[312px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput4 />
      <Container13 />
    </div>
  );
}

function TextInput5() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container15() {
  return <div className="absolute border-[#aeaeae] border-[0.8px] border-solid h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute h-[56px] left-[390px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput5 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[56px] left-0 top-[37px] w-[456px]" data-name="Container">
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[145px] left-0 top-[89.6px] w-[456px]" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
      <Container17 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[456px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-full relative w-[456px]">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[228.2px] text-[16px] text-center text-nowrap text-white top-[-0.4px] translate-x-[-50%] whitespace-pre">{`Verify & Complete Registration`}</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1a4d8f] content-stretch flex flex-col h-[56px] items-start left-0 px-0 py-[16px] rounded-[100px] top-[258.6px] w-[456px]" data-name="Button">
      <Paragraph4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.863px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[81.863px]">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[20px] left-[41px] text-[#1a4d8f] text-[14px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">Resend OTP</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[3.838px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[3.838px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#aeaeae] text-[16px] text-nowrap top-[0.2px] whitespace-pre">|</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[226.775px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[226.775px]">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[20px] left-[113.5px] text-[#1a4d8f] text-[14px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">Change Mobile Number / Email ID</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[24px] items-center justify-center left-0 top-[338.6px] w-[456px]" data-name="Container">
      <Button1 />
      <Paragraph5 />
      <Button2 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[17.6px] left-[102.54px] top-[4px] w-[169.838px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] left-[85px] text-[#4a5565] text-[14px] text-center top-[-1px] translate-x-[-50%] w-[170px]">Already have an account?</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[24px] left-[272.38px] top-[0.8px] w-[81.088px]" data-name="Button">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[41px] text-[#1a4d8f] text-[16px] text-center text-nowrap top-[-0.4px] translate-x-[-50%] whitespace-pre">Login here</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[24.8px] left-0 top-[386.6px] w-[456px]" data-name="Container">
      <Paragraph6 />
      <Button3 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[443.4px] left-[32px] top-[257.77px] w-[456px]" data-name="Form">
      <Container4 />
      <Container18 />
      <Button />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-white h-[733.175px] left-[318px] rounded-[10px] top-[48px] w-[520px]" data-name="Container">
      <Container1 />
      <Container3 />
      <Form />
    </div>
  );
}

function Auth() {
  return (
    <div className="bg-[#f6f8fc] h-[829.175px] relative shrink-0 w-full" data-name="Auth">
      <Container />
      <Container21 />
    </div>
  );
}

export default function ScholarshipManagementSystemWithHindi() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Scholarship Management System with Hindi">
      <Auth />
    </div>
  );
}