import svgPaths from "./svg-eskg11a90w";
import imgImageDorFoundationLogo from "figma:asset/fb85e662a0f2d18cc83f90481c3f2d015fb7e1ed.png";

function Container() {
  return <div className="absolute bg-gradient-to-b from-[#e8d5c4] h-[358px] left-0 to-[#c5d5e8] top-0 w-[1520.8px]" data-name="Container" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[107.088px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a4d8f] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Back to Home</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute left-[-24px] size-0 top-[-24px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1a4d8f] text-[14px] top-[-2px] w-0">Back</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[20.83%]" data-name="Group">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p7308120} id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M12.5 0.833335H0.833335" id="Vector" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Group />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[20px] top-[2px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[24px] w-[135.088px]" data-name="Button">
      <Paragraph />
      <Paragraph1 />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[733.175px] left-0 rounded-[10px] top-0 w-[520px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
    </div>
  );
}

function ImageDorFoundationLogo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[120px]" data-name="Image (DOR Foundation Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDorFoundationLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[120px]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[42px] left-[98.05px] text-[#a85613] text-[28px] text-center text-nowrap top-[0.2px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Login
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] left-[98px] text-[#6a7282] text-[14px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">Access your application portal</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[62px] relative shrink-0 w-[195.925px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[62px] items-start relative w-[195.925px]">
        <Heading />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[193.775px] items-center left-[32px] top-[32px] w-[456px]" data-name="Container">
      <ImageDorFoundationLogo />
      <Container3 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#1a4d8f] text-[14px] top-[-0.2px] w-[394px]">Your OTP has been sent to your registered mobile number or email ID.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#e8f4f8] box-border content-stretch flex flex-col h-[65.6px] items-start left-0 pb-[0.8px] pt-[12.8px] px-[16.8px] rounded-[8px] top-0 w-[456px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#a8d5e8] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[36px] left-0 top-[109px] w-[456px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#6a7282] text-[13px] top-[-0.2px] w-[453px]">Please enter the OTP within 10 minutes. A new code can be requested after it expires.</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[21px] left-0 top-[-0.4px] w-[116.388px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">Enter 6-Digit OTP</p>
    </div>
  );
}

function TextInput() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container6() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput />
      <Container6 />
    </div>
  );
}

function TextInput1() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container8() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[56px] left-[78px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput1 />
      <Container8 />
    </div>
  );
}

function TextInput2() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container10() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[56px] left-[156px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput2 />
      <Container10 />
    </div>
  );
}

function TextInput3() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container12() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[56px] left-[234px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput3 />
      <Container12 />
    </div>
  );
}

function TextInput4() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container14() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute h-[56px] left-[312px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput4 />
      <Container14 />
    </div>
  );
}

function TextInput5() {
  return <div className="absolute bg-white h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Text Input" />;
}

function Container16() {
  return (
    <div className="absolute h-[56px] left-0 rounded-[8px] top-0 w-[66px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[56px] left-[390px] rounded-[8px] top-0 w-[66px]" data-name="Container">
      <TextInput5 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[56px] left-0 top-[37px] w-[456px]" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[145px] left-0 top-[89.6px] w-[456px]" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
      <Container18 />
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[81.863px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[81.863px]">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1a4d8f] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">Resend OTP</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[3.838px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[3.838px]">
        <p className="absolute font-['Arimo:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#aeaeae] text-[16px] text-nowrap top-[-2.2px] whitespace-pre">|</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[226.775px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[226.775px]">
        <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#1a4d8f] text-[14px] text-nowrap top-[-0.2px] whitespace-pre">Change Mobile Number / Email ID</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[24px] items-center justify-center left-0 top-[338.6px] w-[456px]" data-name="Container">
      <Button1 />
      <Text />
      <Button2 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[17.6px] left-[99.29px] top-[4px] w-[154.762px]" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] left-[77.5px] text-[#4a5565] text-[14px] text-center top-[-1px] translate-x-[-50%] w-[155px]">{`Don't have an account?`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[24px] left-[254.05px] top-[0.8px] w-[102.65px]" data-name="Button">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#1a4d8f] text-[16px] text-nowrap top-[-0.4px] whitespace-pre">Register here</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[24.8px] left-0 top-[386.6px] w-[456px]" data-name="Container">
      <Paragraph6 />
      <Button3 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] left-[228px] text-[16px] text-center text-nowrap text-white top-[-0.4px] translate-x-[-50%] whitespace-pre">Login</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#1a4d8f] box-border content-stretch flex flex-col h-[56px] items-start left-0 pb-0 pt-[16px] px-0 rounded-[100px] top-[258.6px] w-[456px]" data-name="Button">
      <Paragraph7 />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[443.4px] left-[32px] top-[257.77px] w-[456px]" data-name="Form">
      <Container5 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Button4 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white h-[733.175px] left-[500.4px] rounded-[10px] top-[48px] w-[520px]" data-name="Container">
      <Container2 />
      <Container4 />
      <Form />
    </div>
  );
}

function Auth() {
  return (
    <div className="bg-[#f6f8fc] h-[829.175px] relative shrink-0 w-full" data-name="Auth">
      <Container />
      <Button />
      <Container22 />
    </div>
  );
}

export default function ScholarshipManagementSystem() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Scholarship Management System">
      <Auth />
    </div>
  );
}