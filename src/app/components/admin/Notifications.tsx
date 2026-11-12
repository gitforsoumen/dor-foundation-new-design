import svgPaths from "../../imports/svg-oc57qe6p43";

interface NotificationItem {
  icon: "clock" | "document" | "alert";
  title: string;
  description: string;
  date: string;
}

interface NotificationsProps {
  notifications?: NotificationItem[];
}

function Icon({ type }: { type: "clock" | "document" | "alert" }) {
  if (type === "clock") {
    return (
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g clipPath="url(#clip0_148_91)">
            <path d="M8 4V8L10.6667 9.33333" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p39ee6532} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
          <defs>
            <clipPath id="clip0_148_91">
              <rect fill="white" height="16" width="16" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }

  if (type === "document") {
    return (
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d={svgPaths.p19416e00} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p3e059a80} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M6.66667 6H5.33333" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 8.66667H5.33333" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 11.3333H5.33333" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      </div>
    );
  }

  // alert icon
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_148_86)">
          <path d={svgPaths.p39ee6532} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 5.33333V8" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 10.6667H8.00667" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_148_86">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CalendarIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path d="M4 1V3" stroke="#969696" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 1V3" stroke="#969696" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p333d5300} stroke="#969696" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1.5 5H10.5" stroke="#969696" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function NotificationItemComponent({ icon, title, description, date, isLast }: NotificationItem & { isLast?: boolean }) {
  return (
    <div className={`box-border content-stretch flex flex-col ${isLast ? 'h-auto min-h-[90px]' : 'h-auto min-h-[106.8px]'} items-start ${!isLast ? 'pb-[0.8px]' : ''} pt-0 px-0 relative shrink-0 w-full`}>
      {!isLast && (
        <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_0.8px] border-solid inset-0 pointer-events-none" />
      )}
      <div className="content-stretch flex gap-[12px] min-h-[90px] items-start relative shrink-0 w-full">
        {/* Icon Container */}
        <div className="bg-[#ecf4ff] relative rounded-[2.68435e+07px] shrink-0 size-[32px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
            <Icon type={icon} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-[90px] min-w-0 relative">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] min-h-[90px] items-start relative w-full">
            {/* Title */}
            <div className="min-h-[21px] relative shrink-0 w-full">
              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#4d4b48] text-[14px] break-words">
                {title}
              </p>
            </div>

            {/* Description */}
            <div className="min-h-[39px] relative shrink-0 w-full">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[19.5px] text-[#4d4b48] text-[13px] break-words">
                {description}
              </p>
            </div>

            {/* Date */}
            <div className="content-stretch flex gap-[4px] h-[18px] items-center relative shrink-0 w-full">
              <CalendarIcon />
              <div className="h-[18px] relative shrink-0">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative">
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] text-[#969696] text-[12px]">
                    {date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Notifications({ notifications }: NotificationsProps) {
  const defaultNotifications: NotificationItem[] = [
    {
      icon: "clock",
      title: "New Application Received",
      description: "A new scholarship application has been submitted by Rajesh Kumar and is pending review.",
      date: "2025-11-10"
    },
    {
      icon: "document",
      title: "Document Verification Required",
      description: "15 applications are pending document verification and approval.",
      date: "2025-11-09"
    },
    {
      icon: "alert",
      title: "Interview Schedule Deadline",
      description: "Schedule interviews for 8 shortlisted candidates before November 15, 2025.",
      date: "2025-11-08"
    }
  ];

  const items = notifications || defaultNotifications;

  return (
    <div className="bg-white relative rounded-[20px] w-full h-full">
      <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[0.8px] pt-[24.8px] px-[24.8px] relative size-full">
          {/* Heading */}
          <div className="h-[30px] relative shrink-0 w-full">
            <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] left-0 text-[#a85613] text-[20px] text-nowrap top-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Notifications
            </p>
          </div>

          {/* Notification Items */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {items.map((notification, index) => (
              <NotificationItemComponent
                key={index}
                {...notification}
                isLast={index === items.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}