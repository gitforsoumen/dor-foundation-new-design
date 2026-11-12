import { useState } from "react";
import svgPaths from "../imports/svg-5f383htm3l";
import logoImg from "figma:asset/fb85e662a0f2d18cc83f90481c3f2d015fb7e1ed.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface ForgotPasswordProps {
  onBackToLogin: () => void;
}

export default function ForgotPassword({ onBackToLogin }: ForgotPasswordProps) {
  const [formData, setFormData] = useState({
    mobile: ''
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessDialog(true);
  };

  const handleDialogClose = () => {
    setShowSuccessDialog(false);
    onBackToLogin();
  };

  return (
    <div className="auth-screen min-h-screen bg-[#f6f8fc] relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Gradient Background at Top */}
      <div className="auth-top-band absolute bg-gradient-to-b from-[#e8d5c4] h-[358px] left-0 to-[#c5d5e8] top-0 w-full" />
      
      {/* Back to Login Button */}
      <button
        onClick={onBackToLogin}
        className="absolute left-[16px] sm:left-[24px] top-[16px] sm:top-[24px] flex items-center gap-[6px] sm:gap-[8px] h-[24px] z-10"
      >
        <div className="relative shrink-0 size-[18px] sm:size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g>
              <path d={svgPaths.p33f6b680} stroke="#1a4d8f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              <path d="M15.8333 10H4.16667" stroke="#1a4d8f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </g>
          </svg>
        </div>
        <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] sm:text-[16px] hidden sm:inline">Back to Login</p>
        <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] sm:hidden">Back</p>
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-[10px] relative w-full max-w-[520px] p-[20px] sm:p-[32px] pb-0 z-10">
        <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
        
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-[24px] sm:mb-[32px] relative">
          <div className="w-[90px] sm:w-[120px] h-auto mb-[12px] sm:mb-[16px]">
            <img 
              alt="DOR Foundation Logo" 
              className="w-full h-auto" 
              src={logoImg}
            />
          </div>
          <div className="text-center">
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[22px] sm:text-[28px] mb-0" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Forgot Password?
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6a7282] text-[13px] sm:text-[14px] leading-[20px]">
              Access your application portal
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-[24px] pb-[32px] relative">
          {/* Info Message */}
          <div className="bg-[#e8f4f8] border-[0.8px] border-[#a8d5e8] rounded-[8px] px-[16px] py-[12px]">
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[14px] leading-[20px]">
              Enter your registered mobile number. The password will be sent to your registered mobile.
            </p>
          </div>

          {/* Mobile Number Field */}
          <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
            <div className="h-[21px] relative shrink-0 w-full">
              <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">
                Mobile Number <span className="text-red-600">*</span>
              </p>
            </div>
            <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="Enter your registered mobile number"
                    required
                    pattern="[0-9]{10}"
                    className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696]"
                  />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="h-[56px] w-full rounded-[100px] relative bg-[#1a4d8f] hover:bg-[#153d73] transition-colors"
          >
            <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-center text-nowrap text-white whitespace-pre">
              Submit
            </p>
          </button>

          {/* Back to Login Link */}
          <div className="text-center -mt-3">
            <button
              type="button"
              onClick={onBackToLogin}
              className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] leading-[20px] hover:underline"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={handleDialogClose}>
        <AlertDialogContent className="bg-white rounded-[16px] max-w-[400px] p-6">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[22px] text-center" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Password Recovery Successful
            </AlertDialogTitle>
            <AlertDialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px] leading-[24px] text-center pt-2">
              Your password has been sent to your registered mobile number.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4 sm:justify-center">
            <AlertDialogAction 
              onClick={handleDialogClose}
              className="bg-[#1a4d8f] hover:bg-[#153d73] text-white rounded-[100px] h-[48px] px-[32px] font-['Wix_Madefor_Text:Bold',sans-serif]"
            >
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}