import { Users, GraduationCap, Shield, ArrowRight } from "lucide-react";
import logoImg from "figma:asset/fb85e662a0f2d18cc83f90481c3f2d015fb7e1ed.png";

interface PersonaSelectorProps {
  onSelectPersona: (persona: 'student' | 'counselor' | 'admin') => void;
}

const roles = [
  {
    id: 'student' as const,
    title: 'Student',
    description: 'Apply for scholarships and track your application status',
    icon: GraduationCap,
    featured: true,
  },
  {
    id: 'counselor' as const,
    title: 'Volunteer',
    description: 'Review and guide student applications',
    icon: Users,
  },
  {
    id: 'admin' as const,
    title: 'Admin',
    description: 'Manage applications and scholarship programs',
    icon: Shield,
  },
];

export default function PersonaSelector({ onSelectPersona }: PersonaSelectorProps) {
  return (
    <div className="persona-screen min-h-screen relative overflow-hidden bg-[#0b1020]">
      {/* Background glows */}
      <div className="absolute -left-40 -top-40 size-[640px] rounded-full bg-[#14b8a6]/25 blur-[120px]" aria-hidden="true" />
      <div className="absolute -right-40 -bottom-48 size-[620px] rounded-full bg-[#f59e0b]/20 blur-[130px]" aria-hidden="true" />

      <div className="relative min-h-screen max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16 px-6 py-12 sm:px-10">
        {/* Left: brand */}
        <div className="text-center lg:text-left">
          <img
            alt="DOR Foundation Logo"
            className="w-[120px] sm:w-[150px] h-auto mx-auto lg:mx-0 mb-6"
            src={logoImg}
          />
          <h1 className="text-white font-bold text-[36px] sm:text-[46px] md:text-[54px] leading-[1.05] tracking-[-0.01em]">
            DOR Foundation
          </h1>
          <p className="text-[#aab1c8] text-[16px] sm:text-[19px] mt-3">
            Scholarship Management System
          </p>
          <p className="text-[#2dd4bf] font-semibold text-[20px] sm:text-[22px] mt-6">उड़ान की ओर</p>
          <p className="hidden sm:block text-[#8b93ad] text-[15px] leading-[1.6] mt-2 max-w-[420px] mx-auto lg:mx-0">
            Helping students reach new heights through scholarships, mentoring and guidance.
          </p>
        </div>

        {/* Right: role cards */}
        <div className="w-full max-w-[520px] mx-auto lg:ml-auto">
          <p className="text-[#8b93ad] text-[12.5px] font-semibold uppercase tracking-[0.14em] mb-4 text-center lg:text-left">
            Select your role to continue
          </p>
          <div className="flex flex-col gap-4">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => onSelectPersona(role.id)}
                  className={`group w-full flex items-center gap-5 text-left rounded-[20px] px-6 py-5 transition-all ${
                    role.featured
                      ? 'bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] shadow-[0_18px_40px_rgba(14,165,233,0.25)] hover:brightness-110'
                      : 'bg-white/[0.05] border border-white/[0.12] backdrop-blur-md hover:bg-white/[0.09] hover:border-[#14b8a6]/60'
                  }`}
                >
                  <span className={`size-[56px] rounded-[16px] grid place-items-center shrink-0 ${role.featured ? 'bg-white/20' : 'bg-white/10'}`}>
                    <Icon className="size-[26px] text-white" />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-white font-semibold text-[20px]">{role.title}</span>
                    <span className={`block text-[14px] mt-0.5 ${role.featured ? 'text-white/85' : 'text-[#aab1c8]'}`}>
                      {role.description}
                    </span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1.5 text-white text-[14px] font-semibold shrink-0">
                    Continue
                    <ArrowRight className="size-[16px] transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
