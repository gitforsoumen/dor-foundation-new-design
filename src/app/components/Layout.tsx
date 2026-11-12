import { LogOut, LayoutDashboard, FileText, Upload, CalendarCheck, Bell } from "lucide-react";
import TopBar from "./shell/TopBar";
import SidebarBrand from "./shell/SidebarBrand";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import img51513BC4E6020F4Ac3450Ab2E26218090D3Be1Mv22 from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  user?: {
    name: string;
    role: string;
  };
  onLogout?: () => void;
  onLogoClick?: () => void;
  /** Which page is active in the student sidebar */
  activePage?: 'dashboard' | 'application' | 'documents' | 'slots';
  onNavigateDashboard?: () => void;
  onNavigateApplication?: () => void;
  onNavigateDocuments?: () => void;
  onNavigateSlots?: () => void;
}

export default function Layout({
  children,
  user,
  onLogout,
  onLogoClick,
  activePage = 'dashboard',
  onNavigateDashboard,
  onNavigateApplication,
  onNavigateDocuments,
  onNavigateSlots,
}: LayoutProps) {
  const navItems = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard, onClick: onNavigateDashboard },
    { id: 'application' as const, label: 'My Application', icon: FileText, onClick: onNavigateApplication },
    { id: 'documents' as const, label: 'Documents', icon: Upload, onClick: onNavigateDocuments },
    { id: 'slots' as const, label: 'Slot Booking', icon: CalendarCheck, onClick: onNavigateSlots },
    {
      id: 'notifications' as const,
      label: 'Notifications',
      icon: Bell,
      onClick: () => {
        // Go to the dashboard, then scroll to its Notifications card
        onNavigateDashboard?.();
        setTimeout(() => {
          document.getElementById('student-notifications')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      },
    },
  ];

  return (
    <div className="bg-[#f6f8fc] min-h-screen flex flex-col">
      {/* Desktop sidebar */}
      <aside className="app-sidebar hidden lg:flex flex-col fixed left-0 top-0 w-[260px] h-full bg-[#0f1529] border-r border-[#1c2440] z-40 overflow-y-auto">
        <SidebarBrand subtitle="Student Portal" onClick={onLogoClick} />
        <nav className="flex flex-col gap-[6px] px-[16px] pb-[16px]">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={item.onClick}
                className={`h-[42px] w-full rounded-[10px] flex items-center gap-[12px] px-[14px] text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] text-white shadow-[0_8px_20px_rgba(20,184,166,0.25)]'
                    : 'text-[#c4c9dc] hover:bg-[#182039]'
                }`}
              >
                <Icon className="size-[18px] shrink-0" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile header - Fixed */}
      <div className="lg:hidden bg-white border-b border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] fixed top-0 left-0 right-0 z-50">
        <div className="px-[20px] md:px-[50px] py-[5px] flex items-center justify-between">
          {/* Logo (click to go to the dashboard) */}
          <div className="flex gap-[15px] items-center cursor-pointer" onClick={onLogoClick} role="button" title="Go to dashboard">
            <div className="h-[60px] w-[62.187px]">
              <img 
                alt="DOR Foundation Logo" 
                className="w-full h-full object-cover" 
                src={img51513BC4E6020F4Ac3450Ab2E26218090D3Be1Mv22} 
              />
            </div>
            {/* Title - hidden on mobile, shown on md+ screens */}
            <div className="hidden md:flex flex-col whitespace-nowrap leading-[1.25] gap-[2px]">
              <p className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[22px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                DOR Foundation
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                Scholarship Management System
              </p>
            </div>
          </div>

          {/* User Profile */}
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-[10px] items-center cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="size-[30px] bg-[#cecece] rounded-full flex items-center justify-center relative">
                    <svg className="absolute left-[5px] top-[5px] w-[20px] h-[20px]" fill="none" viewBox="0 0 14 17">
                      <path 
                        clipRule="evenodd" 
                        d="M10.4103 4.21917C10.4103 6.88167 8.802 9.16667 6.66034 9.16667C4.517 9.16667 2.91034 6.88167 2.91034 4.21833C2.91034 1.55667 4.29367 0 6.66034 0C9.027 0 10.4103 1.55583 10.4103 4.21917ZM0.0786713 15.1183C0.399505 15.5 1.78117 16.6667 6.66034 16.6667C11.5395 16.6667 12.9203 15.5 13.242 15.1192C13.2718 15.0826 13.2939 15.0403 13.3068 14.9948C13.3197 14.9494 13.3232 14.9018 13.317 14.855C13.2437 14.12 12.582 10.8333 6.66034 10.8333C0.738671 10.8333 0.0770046 14.12 0.0028379 14.855C-0.00319717 14.9019 0.00041655 14.9495 0.0134575 14.9949C0.0264984 15.0403 0.0486911 15.0818 0.0786713 15.1183Z" 
                        fill="#767676" 
                        fillRule="evenodd" 
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[14px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                      {user.name}
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      {user.role}
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
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pt-[70px] lg:pt-0 lg:ml-[260px]">
        {user && (
          <TopBar
            userName={user.name}
            userRole={user.role}
            onLogout={onLogout}
            searchPlaceholder="Search"
            notificationCount={5}
            onBellClick={() => {
              onNavigateDashboard?.();
              setTimeout(() => {
                document.getElementById('student-notifications')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 150);
            }}
          />
        )}
        {children}
      </div>

      {/* Footer */}
      <div className="lg:ml-[260px]">
        <Footer />
      </div>
    </div>
  );
}
