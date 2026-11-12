import { useState } from "react";
import { Search, Bell, ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface TopBarProps {
  userName: string;
  userRole: string;
  onLogout?: () => void;
  searchPlaceholder?: string;
  /** Called when the user presses Enter in the search box */
  onSearch?: (query: string) => void;
  /** Shows a dot on the bell when greater than 0 */
  notificationCount?: number;
  onBellClick?: () => void;
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "U";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Desktop top bar: search, notifications and the signed-in user.
 * Hidden on small screens, where the mobile header is used instead.
 */
export default function TopBar({
  userName,
  userRole,
  onLogout,
  searchPlaceholder = "Search",
  onSearch,
  notificationCount = 0,
  onBellClick,
}: TopBarProps) {
  const [query, setQuery] = useState("");

  return (
    <div className="topbar hidden lg:flex relative z-30 h-[70px] items-center justify-between gap-[24px] px-[36px] pt-[14px]">
      <form
        className="flex items-center gap-[10px] w-[420px] max-w-[45%] h-[42px] px-[16px] rounded-[12px] bg-[#151c33] border border-[#232c48] focus-within:border-[#14b8a6] transition-colors"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch?.(query.trim());
        }}
      >
        <Search className="size-[18px] text-[#8b93ad] shrink-0" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
          className="flex-1 min-w-0 bg-transparent outline-none border-0 text-[14px] text-[#e8ebf5] placeholder:text-[#6f7894]"
        />
      </form>

      <div className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={onBellClick}
          aria-label="Notifications"
          className="relative size-[42px] rounded-[12px] bg-[#151c33] border border-[#232c48] grid place-items-center text-[#c4c9dc] hover:text-white hover:border-[#2f3a5e] transition-colors"
        >
          <Bell className="size-[19px]" />
          {notificationCount > 0 && (
            <span className="absolute top-[9px] right-[10px] size-[8px] rounded-full bg-[#0ea5e9] ring-2 ring-[#151c33]" />
          )}
        </button>

        <span className="w-px h-[28px] bg-[#232c48]" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex items-center gap-[10px] h-[46px] pl-[5px] pr-[12px] rounded-full bg-[#151c33] border border-[#232c48] hover:border-[#2f3a5e] transition-colors text-left"
            >
              <span className="relative size-[36px] rounded-full grid place-items-center text-[14px] font-semibold text-white bg-gradient-to-br from-[#14b8a6] to-[#0ea5e9]">
                {getInitials(userName)}
                <span className="absolute -right-[1px] -bottom-[1px] size-[10px] rounded-full bg-[#22c58b] border-2 border-[#151c33]" />
              </span>
              <span className="flex flex-col leading-[1.2]">
                <span className="text-[13.5px] font-semibold text-white whitespace-nowrap">{userName}</span>
                <span className="text-[11.5px] text-[#8b93ad] whitespace-nowrap">{userRole}</span>
              </span>
              <ChevronDown className="size-[16px] text-[#8b93ad]" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={10} className="w-[230px] p-[6px]">
            <div className="px-[10px] py-[8px] mb-[4px] border-b border-[#232c48]">
              <p className="text-[13px] font-semibold text-white">{userName}</p>
              <p className="text-[12px] text-[#8b93ad]">Signed in as {userRole}</p>
            </div>
            <DropdownMenuItem
              onClick={onLogout}
              className="flex items-center gap-3 px-3 py-2.5 cursor-pointer rounded-[8px] text-[#ff6b85]"
            >
              <LogOut className="w-4 h-4 text-[#ff6b85]" />
              <span className="text-[14px] font-medium text-[#ff6b85]">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
