import svgPaths from "../../imports/svg-rymuu0675j";
import logoImg from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";
import { LogOut } from "lucide-react";
import { motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";

interface CounsellorHeaderProps {
  counsellorUser: {
    name: string;
    role: string;
  } | null;
  onLogout: () => void;
  onLogoClick?: () => void;
  onToggleMobileMenu?: () => void;
}

export default function CounsellorHeader({ counsellorUser, onLogout, onToggleMobileMenu, onLogoClick }: CounsellorHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50" data-name="Top Header">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      
      {/* Mobile Layout (hidden on desktop) */}
      <div className="lg:hidden size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[10.8px] pt-[10px] px-[20px] relative size-full">
          {/* Left side - Menu and Logo */}
          <div className="relative shrink-0 w-[96px]">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[20px] items-center relative w-[96px]">
              {/* Menu Icon */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative shrink-0 size-[24px] p-0 bg-transparent border-0 cursor-pointer"
                onClick={() => {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                  if (onToggleMobileMenu) {
                    onToggleMobileMenu();
                  }
                }}
              >
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g>
                    <path d={svgPaths.p194f5a80} fill="#4D4B48" />
                  </g>
                </svg>
              </motion.button>
              
              {/* Logo */}
              <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[52px] cursor-pointer" onClick={onLogoClick} role="button" title="Go to dashboard">
                <div className="aspect-[62.175/60] basis-0 grow min-h-px min-w-px relative shrink-0">
                  <img 
                    alt="DOR Foundation Logo" 
                    className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                    src={logoImg} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="h-[43px] relative shrink-0 w-[130px] cursor-pointer hover:opacity-80 transition-opacity">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[43px] relative w-[130px]">
                  {/* Avatar Circle */}
                  <div className="absolute bg-[#cecece] content-stretch flex items-center justify-center left-[0.95px] rounded-[2.68435e+07px] size-[30px] top-[6.6px]">
                    <div className="h-[17px] relative shrink-0 w-[14px]">
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
                  
                  {/* Name and Role */}
                  <div className="absolute content-stretch flex flex-col h-[42px] items-start left-[40.95px] top-[0.6px] w-[89px]">
                    <div className="h-[21px] relative shrink-0 w-full">
                      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[21px] left-[-0.05px] text-[#a85613] text-[14px] text-nowrap top-[-0.8px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                        {counsellorUser?.name || "Amit Das"}
                      </p>
                    </div>
                    <div className="h-[21px] relative shrink-0 w-full">
                      <p className="absolute font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] left-[-0.05px] text-[#4d4b48] text-[14px] text-nowrap top-[-0.8px] whitespace-pre">
                        {counsellorUser?.role || "Volunteer"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={10} className="w-[220px] bg-white border border-[#e2e8f2] rounded-[12px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] p-1">
              <DropdownMenuItem 
                onClick={onLogout}
                className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-[#f6f8fc] rounded-[8px] focus:bg-[#f6f8fc]"
              >
                <LogOut className="w-4 h-4 text-[#fb2c36]" />
                <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">
                  Logout
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Desktop Layout (hidden on mobile) */}
      <div className="hidden lg:block size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[50px] py-[5px] relative size-full">
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            {/* Left side - Logo and Title (click to go to the dashboard) */}
            <div className="content-stretch flex gap-[15px] items-center relative shrink-0 cursor-pointer" onClick={onLogoClick} role="button" title="Go to dashboard">
              <div className="h-[60px] relative shrink-0 w-[62.187px]">
                <img 
                  alt="DOR Foundation Logo" 
                  className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
                  src={logoImg} 
                />
              </div>
              <div className="content-stretch flex flex-col items-start leading-[1.25] gap-[2px] relative shrink-0 w-auto whitespace-nowrap">
                <p className="font-['Fraunces:Bold',sans-serif] font-bold relative shrink-0 text-[#a85613] text-[22px] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  DOR Foundation
                </p>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal relative shrink-0 text-[#4d4b48] text-[14px] w-full">
                  Scholarship Management System
                </p>
              </div>
            </div>

            {/* Right side - User Profile with Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="content-stretch flex gap-[10px] items-center relative shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
                    <div className="[grid-area:1_/_1] aspect-[31/31] ml-0 mt-0 relative w-[30px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                        <circle cx="15" cy="15" fill="#CECECE" r="15" />
                      </svg>
                    </div>
                    <div className="[grid-area:1_/_1] aspect-[800/800] ml-[5px] mt-[5px] overflow-clip relative w-[20px]">
                      <div className="absolute inset-[8.33%_16.7%_8.34%_16.7%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                          <path clipRule="evenodd" d={svgPaths.p3effaa00} fill="#767676" fillRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start leading-[normal] relative shrink-0 text-[14px]">
                    <p className="font-['Fraunces:Bold',sans-serif] font-bold relative shrink-0 text-[#a85613] w-full" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                      {counsellorUser?.name || "Amit Das"}
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal relative shrink-0 text-[#4d4b48] w-full">
                      {counsellorUser?.role || "Volunteer"}
                    </p>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={10} className="w-[220px] bg-white border border-[#e2e8f2] rounded-[12px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] p-1">
                <DropdownMenuItem 
                  onClick={onLogout}
                  className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-[#f6f8fc] rounded-[8px] focus:bg-[#f6f8fc]"
                >
                  <LogOut className="w-4 h-4 text-[#fb2c36]" />
                  <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">
                    Logout
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}