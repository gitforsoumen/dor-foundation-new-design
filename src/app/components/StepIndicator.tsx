import svgPaths from "../imports/svg-ov2c9izxss";

interface Step {
  number: number;
  title: string;
  status: 'completed' | 'current' | 'locked';
}

interface StepIndicatorProps {
  steps: Step[];
}

export default function StepIndicator({ steps }: StepIndicatorProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 lg:gap-[50px] items-start sm:items-center overflow-x-auto pb-2">
      {steps.map((step, index) => (
        <div key={step.number} className="flex gap-3 sm:gap-4 md:gap-[20px] items-center flex-shrink-0">
          <div className="size-[40px] sm:size-[46px] md:size-[52px] relative shrink-0">
            {step.status === 'completed' && (
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
                <circle cx="26" cy="26" fill="#25C196" r="25.5" stroke="#25C196" />
                <path d={svgPaths.p3f4e1780} fill="white" />
              </svg>
            )}
            {step.status === 'current' && (
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
                <circle cx="26" cy="26" fill="#ECF4FF" r="25.5" stroke="#1A4D8F" />
                <path d={svgPaths.p19c78380} fill="#1A4D8F" />
              </svg>
            )}
            {step.status === 'locked' && (
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
                <circle cx="26" cy="26" fill="#EEEEEE" r="25.5" stroke="#969696" />
                <path d={svgPaths.p3d2c1e80} fill="#969696" />
              </svg>
            )}
          </div>
          <div className="flex flex-col items-start min-w-0">
            <p className={`font-['Wix_Madefor_Text:Regular',sans-serif] text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[24px] ${step.status === 'locked' ? 'text-[#969696]' : 'text-[#4d4b48]'}`}>
              Step {step.number}
            </p>
            <p className={`font-['Fraunces:Bold',sans-serif] font-bold text-[14px] sm:text-[15px] md:text-[16px] leading-normal ${step.status === 'locked' ? 'text-[#969696]' : 'text-[#4d4b48]'}`} style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              {step.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
