import svgPaths from "../imports/svg-ap974f0hpm";
import logoImg from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";

interface HeaderProps {
  userName: string;
}

export default function Header({ userName }: HeaderProps) {
  return (
    <div className="bg-white relative w-full">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[0.8px] pt-0 px-[20px] md:px-[50px] relative size-full">
          {/* Left side - Logo and Title */}
          <div className="content-stretch flex gap-[15px] items-center relative shrink-0">
            <div className="h-[60px] relative shrink-0 w-[62.175px]">
              <img alt="DOR Foundation Logo" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={logoImg} />
            </div>
            {/* Title - hidden on mobile, shown on md+ screens */}
            <div className="hidden md:flex content-stretch flex-col items-start leading-[normal] relative shrink-0 w-[222px]">
              <p className="font-['Fraunces:Bold',sans-serif] font-bold relative shrink-0 text-[#a85613] text-[36px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                DOR Foundation
              </p>
              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold relative shrink-0 text-[#4d4b48] text-[14px] w-full">Scholarship Management System</p>
            </div>
          </div>
          
          {/* Right side - User Profile */}
          <div className="h-[43px] relative shrink-0">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative flex items-center gap-[10px]">
              {/* Avatar Container */}
              <div className="relative size-[30px] shrink-0">
                <div className="absolute bg-[#cecece] rounded-full size-[30px] flex items-center justify-center">
                  <div className="h-[17px] w-[14px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                      <g clipPath="url(#clip0_12_1307)">
                        <path clipRule="evenodd" d={svgPaths.p3effaa00} fill="#767676" fillRule="evenodd" />
                      </g>
                      <defs>
                        <clipPath id="clip0_12_1307">
                          <rect fill="white" height="17" width="14" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              {/* User Info */}
              <div className="content-stretch flex flex-col items-start h-[42px] justify-center">
                <div className="h-[21px] relative w-full">
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold leading-[21px] text-[#a85613] text-[14px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {userName}
                  </p>
                </div>
                <div className="h-[21px] relative w-full">
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] text-[#4d4b48] text-[14px] text-nowrap whitespace-pre">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
