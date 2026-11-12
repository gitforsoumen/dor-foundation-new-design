import logoImg from "figma:asset/8ee65f750c57f7a11f0ef51d04c0b03a95c2061a.png";

interface SidebarBrandProps {
  subtitle: string;
  /** Clicking the logo goes back to the dashboard */
  onClick?: () => void;
}

/** Logo block at the top of the desktop sidebar. */
export default function SidebarBrand({ subtitle, onClick }: SidebarBrandProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title="Go to dashboard"
      className="hidden lg:flex items-center gap-[12px] w-full px-[24px] pt-[22px] pb-[22px] text-left"
    >
      <img src={logoImg} alt="DOR Foundation Logo" className="w-[46px] h-[44px] object-contain shrink-0" />
      <span className="flex flex-col leading-[1.25]">
        <span className="text-[16px] font-bold text-white whitespace-nowrap">DOR Foundation</span>
        <span className="text-[12.5px] text-[#8b93ad] whitespace-nowrap">{subtitle}</span>
      </span>
    </button>
  );
}
