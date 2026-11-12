import { useState } from "react";
import { Eye, EyeOff, Info } from "lucide-react";
import svgPaths from "../imports/svg-5f383htm3l";
import logoImg from "figma:asset/fb85e662a0f2d18cc83f90481c3f2d015fb7e1ed.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface AuthProps {
  onAuthSuccess: (user: { name: string; email: string; mobile: string }) => void;
  onBackToHome: () => void;
  onForgotPassword?: () => void;
}

export default function Auth({ onAuthSuccess, onBackToHome, onForgotPassword }: AuthProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    otp: ['', '', '', '', '', '']
  });

  const isPasswordValid = formData.password.length > 0;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - redirect to dashboard
    onAuthSuccess({
      name: formData.name || 'Koushik Das',
      email: formData.email || 'koushik@example.com',
      mobile: formData.mobile || '9876543210'
    });
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOTP = [...formData.otp];
      newOTP[index] = value;
      setFormData({ ...formData, otp: newOTP });

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    // Show OTP screen for registration
    setStep('otp');
  };

  const handleVerifyRegistrationOTP = (e: React.FormEvent) => {
    e.preventDefault();
    // After OTP verification, redirect to login page
    setMode('login');
    setStep('credentials');
    // Reset form data
    setFormData({
      name: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      otp: ['', '', '', '', '', '']
    });
  };

  const handleResendOTP = () => {
    // Mock resend OTP functionality
    alert('OTP has been resent to ' + formData.mobile);
  };

  const handleChangeContact = () => {
    // Go back to credentials step
    setStep('credentials');
  };

  return (
    <div className="auth-screen min-h-screen bg-[#f6f8fc] relative overflow-hidden flex items-center justify-center px-4 py-12">
      {/* Gradient Background at Top */}
      <div className="auth-top-band absolute bg-gradient-to-b from-[#e8d5c4] h-[358px] left-0 to-[#c5d5e8] top-0 w-full" />
      
      {/* Back to Home Button - Hide on Registration OTP Screen */}
      {!(mode === 'register' && step === 'otp') && (
        <button
          onClick={onBackToHome}
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
        <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] sm:text-[16px] hidden sm:inline">Back to Home</p>
        <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] sm:hidden">Back</p>
        </button>
      )}

      {/* Main Auth Card */}
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
              {mode === 'login' ? 'Login' : 'Registration'}
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6a7282] text-[13px] sm:text-[14px] leading-[20px]">
              {mode === 'login' ? 'Access your application portal' : 'Create your account to apply'}
            </p>
          </div>
        </div>

        {/* Login Form */}
        {mode === 'login' && (
          <form onSubmit={handleLogin} className="flex flex-col gap-[24px] pb-[32px] relative">
            {/* Demo hint: this is a portfolio demo, so any login works */}
            <div className="demo-hint flex items-start gap-[10px] rounded-[12px] px-[14px] py-[12px] text-[13px] leading-[19px]">
              <span className="demo-hint-dot mt-[6px] size-[8px] shrink-0 rounded-full" />
              <span><b>Demo login:</b> enter any mobile number and any password.</span>
            </div>
            {/* Mobile Number */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">
                  Mobile Number
                </p>
              </div>
              <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696]"
                      required
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Password */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">
                  Password
                </p>
              </div>
              <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="ml-2 text-[#969696] hover:text-[#4d4b48] transition-colors flex-shrink-0"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              {formData.password && !isPasswordValid && (
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#fb2c36] text-[12px] leading-[18px]">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={!isPasswordValid}
              className={`h-[56px] w-full rounded-[100px] relative transition-colors ${
                isPasswordValid 
                  ? 'bg-[#1a4d8f] hover:bg-[#153d73] cursor-pointer' 
                  : 'bg-[#aeaeae] cursor-not-allowed'
              }`}
            >
              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-center text-nowrap text-white whitespace-pre">
                Login
              </p>
            </button>

            {/* Forgot Password Link */}
            <div className="text-center -mt-3">
              <button
                type="button"
                onClick={() => onForgotPassword && onForgotPassword()}
                className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] leading-[20px] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4a5565] text-[14px] leading-[20px] inline">
                Don't have an account?{' '}
              </p>
              <button
                type="button"
                onClick={() => setMode('register')}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[16px] leading-[24px] hover:underline"
              >
                Register here
              </button>
            </div>
          </form>
        )}

        {/* Login Form - OTP Step */}
        {mode === 'login' && step === 'otp' && (
          <form onSubmit={handleLogin} className="flex flex-col gap-[24px] pb-[32px] relative">
            {/* OTP Sent Message */}
            <div className="bg-[#e8f4f8] border-[0.8px] border-[#a8d5e8] rounded-[8px] px-[16px] py-[12px]">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[14px] leading-[20px]">
                Your OTP has been sent to your registered mobile number or email ID.
              </p>
            </div>

            {/* OTP Input */}
            <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">
                  Enter 6-Digit OTP
                </p>
              </div>
              <div className="h-[56px] relative shrink-0 w-full flex gap-[8px] sm:gap-[12px]">
                {formData.otp.map((digit, index) => (
                  <div key={index} className="h-[56px] rounded-[8px] flex-1 relative">
                    <input
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      className="absolute inset-0 w-full h-full text-center bg-white border-none outline-none text-[#4d4b48] text-[18px] sm:text-[20px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold rounded-[8px]"
                    />
                    <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                ))}
              </div>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6a7282] text-[13px] leading-[18px]">
                Please enter the OTP within 10 minutes. A new code can be requested after it expires.
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-[#1a4d8f] h-[56px] w-full rounded-[100px] relative hover:bg-[#153d73] transition-colors"
            >
              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-center text-nowrap text-white whitespace-pre">
                Login
              </p>
            </button>

            {/* OTP Action Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[12px] sm:gap-[24px]">
              <button
                type="button"
                onClick={handleResendOTP}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] leading-[20px] hover:underline"
              >
                Resend OTP
              </button>
              <span className="hidden sm:inline text-[#aeaeae]">|</span>
              <button
                type="button"
                onClick={handleChangeContact}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] leading-[20px] hover:underline"
              >
                Change Mobile Number / Email ID
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4a5565] text-[14px] leading-[20px] inline">
                Don't have an account?{' '}
              </p>
              <button
                type="button"
                onClick={() => {
                  setMode('register');
                  setStep('credentials');
                }}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[16px] leading-[24px] hover:underline"
              >
                Register here
              </button>
            </div>
          </form>
        )}

        {/* Registration Form */}
        {mode === 'register' && step === 'credentials' && (
          <form onSubmit={handleCreateAccount} className="flex flex-col gap-[24px] pb-[32px] relative">
            {/* Full Name */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">
                  Full Name
                </p>
                <div className="absolute h-[21px] left-[74.21px] top-0 w-[5.8px]">
                  <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">*</p>
                </div>
              </div>
              <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696]"
                      required
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Email Address */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">
                  Email Address
                </p>
              </div>
              <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696]"
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#4d4b48] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">
                  Mobile Number
                </p>
                <div className="absolute h-[21px] left-[111.13px] top-0 w-[5.8px]">
                  <p className="absolute font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[#fb2c36] text-[14px] text-nowrap top-[-0.4px] whitespace-pre">*</p>
                </div>
              </div>
              <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696]"
                      required
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Password */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full flex items-center justify-between">
                <div className="flex items-center gap-[6px]">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#4d4b48] text-[14px] text-nowrap whitespace-pre">
                    Password
                  </p>
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#fb2c36] text-[14px] text-nowrap whitespace-pre">*</p>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" className="flex items-center">
                        <Info className="w-4 h-4 text-[#1a4d8f] hover:text-[#a85613] transition-colors" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white border border-[#e2e8f2] shadow-lg max-w-[250px] p-4">
                      <div className="space-y-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                          Password Requirements:
                        </p>
                        <ul className="space-y-1">
                          <li className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px] flex items-start">
                            <span className="mr-2">•</span>
                            <span>Minimum 8 characters</span>
                          </li>
                          <li className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px] flex items-start">
                            <span className="mr-2">•</span>
                            <span>At least one uppercase letter</span>
                          </li>
                          <li className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px] flex items-start">
                            <span className="mr-2">•</span>
                            <span>At least one number</span>
                          </li>
                          <li className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px] flex items-start">
                            <span className="mr-2">•</span>
                            <span>At least one special character</span>
                          </li>
                        </ul>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696] pr-[40px]"
                      required
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#969696] hover:text-[#4d4b48] transition-colors z-10"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="content-stretch flex flex-col gap-[8px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full flex items-center gap-[6px]">
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#4d4b48] text-[14px] text-nowrap whitespace-pre">
                  Confirm Password
                </p>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#fb2c36] text-[14px] text-nowrap whitespace-pre">*</p>
              </div>
              <div className="bg-white h-[56px] relative rounded-[8px] shrink-0 w-full">
                <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex h-[56px] items-center px-[15px] py-[4px] relative w-full">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[normal] w-full bg-transparent border-none outline-none text-[#4d4b48] text-[14px] placeholder:text-[#969696] pr-[40px]"
                      required
                    />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[15px] top-1/2 -translate-y-1/2 text-[#969696] hover:text-[#4d4b48] transition-colors z-10"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
                <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#fb2c36] text-[12px] leading-[18px]">
                  Passwords do not match
                </p>
              )}
            </div>

            {/* OTP Information Message */}
            <div className="bg-[#e8f4f8] border-[0.8px] border-[#a8d5e8] rounded-[8px] px-[16px] py-[12px]">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[14px] leading-[20px]">
                After clicking Create Account, you will receive an OTP on your registered mobile number and email. You need to validate your mobile and email using this OTP.
              </p>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="bg-[#1a4d8f] h-[56px] w-full rounded-[100px] relative hover:bg-[#153d73] transition-colors"
            >
              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-center text-nowrap text-white whitespace-pre">
                Create Account
              </p>
            </button>

            {/* Login Link */}
            <div className="text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4a5565] text-[14px] leading-[20px] inline">
                Already have an account?{' '}
              </p>
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setStep('credentials');
                }}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[16px] leading-[24px] hover:underline"
              >
                Login here
              </button>
            </div>
          </form>
        )}

        {/* Registration OTP Verification */}
        {mode === 'register' && step === 'otp' && (
          <form onSubmit={handleVerifyRegistrationOTP} className="flex flex-col gap-[24px] pb-[32px] relative">
            {/* OTP Sent Message */}
            <div className="bg-[#e8f4f8] border-[0.8px] border-[#a8d5e8] rounded-[8px] px-[16px] py-[12px]">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] text-[#1a4d8f] text-[14px]">
                Your OTP has been sent to your registered mobile number or email ID.
              </p>
            </div>

            {/* OTP Input Section */}
            <div className="content-stretch flex flex-col gap-[16px] items-start w-full">
              <div className="h-[21px] relative shrink-0 w-full">
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#4d4b48] text-[14px] text-nowrap">
                  Enter 6-Digit OTP
                </p>
              </div>
              
              {/* OTP Input Boxes */}
              <div className="h-[56px] relative shrink-0 w-full flex gap-[12px]">
                {formData.otp.map((digit, index) => (
                  <div key={index} className="h-[56px] rounded-[8px] flex-1 relative">
                    <input
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOTPChange(index, e.target.value)}
                      className="absolute inset-0 w-full h-full text-center bg-white border-none outline-none text-[#4d4b48] text-[20px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold rounded-[8px]"
                    />
                    <div aria-hidden="true" className="absolute border-[#aeaeae] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  </div>
                ))}
              </div>
              
              {/* OTP Expiry Notice */}
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] text-[#6a7282] text-[13px]">
                Please enter the OTP within 10 minutes. A new code can be requested after it expires.
              </p>
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="bg-[#1a4d8f] box-border content-stretch flex flex-col items-start h-[56px] pb-0 pt-[16px] px-0 rounded-[100px] w-full hover:bg-[#153d73] transition-colors"
            >
              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] text-[16px] text-center text-white w-full">
                Verify & Complete Registration
              </p>
            </button>

            {/* OTP Action Links */}
            <div className="content-stretch flex gap-[24px] items-center justify-center w-full">
              <button
                type="button"
                onClick={handleResendOTP}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[20px] text-[#1a4d8f] text-[14px] text-nowrap hover:underline"
              >
                Resend OTP
              </button>
              <div className="h-[24px] w-[3.838px]">
                <p className="font-['Arimo:Regular',sans-serif] font-normal leading-[24px] text-[#aeaeae] text-[16px] text-nowrap">|</p>
              </div>
              <button
                type="button"
                onClick={handleChangeContact}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[20px] text-[#1a4d8f] text-[14px] text-nowrap hover:underline"
              >
                Change Mobile Number / Email ID
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[20px] text-[#4a5565] text-[14px] text-center inline">
                Already have an account?{' '}
              </p>
              <button
                type="button"
                onClick={() => {
                  setMode('login');
                  setStep('credentials');
                }}
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold leading-[24px] text-[#1a4d8f] text-[16px] text-nowrap hover:underline"
              >
                Login here
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}