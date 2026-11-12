import SidebarBrand from "../shell/SidebarBrand";
import { LayoutDashboard, Users, ClipboardList } from "lucide-react";

interface CounsellorSidebarProps {
  currentView: "dashboard" | "students" | "profile" | "summary";
  onNavigate: (view: "dashboard" | "students" | "profile" | "summary") => void;
  onBrandClick?: () => void;
}

export default function CounsellorSidebar({ currentView, onNavigate, onBrandClick }: CounsellorSidebarProps) {
  const menuItems = [
    {
      id: "dashboard" as const,
      label: "Dashboard",
      icon: LayoutDashboard
    },
    {
      id: "students" as const,
      label: "Assigned Students",
      icon: Users
    }
  ];

  return (
    <div className="app-sidebar fixed left-0 top-0 w-[260px] h-full bg-[#0f1529] border-r border-[#1c2440] z-40 overflow-y-auto flex flex-col">
      <SidebarBrand subtitle="Volunteer Portal" onClick={onBrandClick} />
      <div className="flex flex-col gap-[6px] px-[16px] pt-[16px] lg:pt-0 pb-[16px]">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`h-[42px] w-full rounded-[10px] flex items-center px-[14px] transition-colors ${
                isActive ? "bg-[#a85613] shadow-[0_8px_20px_rgba(20,184,166,0.25)]" : "hover:bg-[#182039]"
              }`}
            >
              <Icon className={`size-[18px] shrink-0 ${isActive ? "text-white" : "text-[#1a202c]"}`} />
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
