import svgPaths from "../../imports/svg-n0aysca6ry";
import SidebarBrand from "../shell/SidebarBrand";
import { LayoutDashboard, FileText, UserCog, Users, UserCheck, Calendar, BarChart3 } from "lucide-react";

interface AdminSidebarProps {
  currentView: "dashboard" | "review" | "users" | "volunteers" | "mapping" | "slots" | "seats" | "reports";
  onNavigate: (view: "dashboard" | "review" | "users" | "volunteers" | "mapping" | "slots" | "seats" | "reports") => void;
  onBrandClick?: () => void;
}

export default function AdminSidebar({ currentView, onNavigate, onBrandClick }: AdminSidebarProps) {
  const menuItems = [
    {
      id: "dashboard" as const,
      label: "Dashboard",
      icon: (isActive: boolean) => (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d={svgPaths.pff0fc00} stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p1d76d410} stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p2f091200} stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d={svgPaths.p39897300} stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      )
    },
    {
      id: "review" as const,
      label: "Application Review",
      icon: (isActive: boolean) => (
        <FileText className="w-full h-full" color={isActive ? "white" : "#1A202C"} strokeWidth={1.5} />
      )
    },
    {
      id: "users" as const,
      label: "Manage Admin",
      icon: (isActive: boolean) => (
        <UserCog className="w-full h-full" color={isActive ? "white" : "#1A202C"} strokeWidth={1.5} />
      )
    },
    {
      id: "volunteers" as const,
      label: "Manage Volunteers",
      icon: (isActive: boolean) => (
        <Users className="w-full h-full" color={isActive ? "white" : "#1A202C"} strokeWidth={1.5} />
      )
    },
    {
      id: "mapping" as const,
      label: "Assign Volunteers",
      icon: (isActive: boolean) => (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d="M14 2L8 8" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M14 2L10 14L8 8L2 6L14 2Z" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      )
    },
    {
      id: "slots" as const,
      label: "Slot Management",
      icon: (isActive: boolean) => (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 1.33333V3.33333" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 1.33333V3.33333" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M2 5.33333H14" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M6.66667 8.66667H6.67333" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M8 8.66667H8.00667" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            <path d="M9.33333 8.66667H9.34" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </g>
        </svg>
      )
    },
    {
      id: "seats" as const,
      label: "Seats Management",
      icon: (isActive: boolean) => (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d="M3.33333 6.66667V3.33333C3.33333 2.59695 3.93029 2 4.66667 2H11.3333C12.0697 2 12.6667 2.59695 12.6667 3.33333V6.66667" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M2 6.66667H14V11.3333C14 12.0697 13.403 12.6667 12.6667 12.6667H3.33333C2.59695 12.6667 2 12.0697 2 11.3333V6.66667Z" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M2.66667 12.6667V14" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M13.3333 12.6667V14" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      )
    },
    {
      id: "reports" as const,
      label: "Reports",
      icon: (isActive: boolean) => (
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g>
            <path d="M13.3333 2H2.66667C2.29848 2 2 2.29848 2 2.66667V13.3333C2 13.7015 2.29848 14 2.66667 14H13.3333C13.7015 14 14 13.7015 14 13.3333V2.66667C14 2.29848 13.7015 2 13.3333 2Z" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M5.33333 10.6667V7.33333" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M8 10.6667V5.33333" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            <path d="M10.6667 10.6667V8.66667" stroke={isActive ? "white" : "#1A202C"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </g>
        </svg>
      )
    }
  ];

  return (
    <div className="app-sidebar fixed left-0 top-0 w-[260px] h-full bg-[#0f1529] border-r border-[#1c2440] z-40 overflow-y-auto flex flex-col">
      <SidebarBrand subtitle="Admin Console" onClick={onBrandClick} />
      <div className="flex flex-col gap-[6px] px-[16px] pt-[16px] lg:pt-0 pb-[16px]">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`h-[42px] w-full rounded-[10px] flex items-center px-[14px] transition-colors ${
                isActive ? "bg-[#a85613] shadow-[0_8px_20px_rgba(20,184,166,0.25)]" : "hover:bg-[#182039]"
              }`}
            >
              <div className="size-[18px] shrink-0">
                {item.icon(isActive)}
              </div>
              <p className={`ml-[12px] font-['Wix_Madefor_Text:Medium',sans-serif] font-medium text-[14px] leading-[20px] whitespace-nowrap ${
                isActive ? "text-white" : "text-[#1a202c]"
              }`}>
                {item.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}