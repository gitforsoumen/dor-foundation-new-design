import { BookOpen, HelpCircle, FileText, Phone, ExternalLink } from "lucide-react";
import { Card } from "../ui/card";

export default function ResourceCentre() {
  const resources = [
    {
      icon: BookOpen,
      title: "Application Guide",
      description: "Step-by-step instructions",
      link: "#"
    },
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Frequently asked questions",
      link: "#"
    },
    {
      icon: FileText,
      title: "Document Checklist",
      description: "List of required documents",
      link: "#"
    },
    {
      icon: Phone,
      title: "Contact Support",
      description: "Get help from our team",
      link: "#"
    }
  ];

  return (
    <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
      <div className="p-6">
        <h2 
          className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] leading-[30px] mb-4" 
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Resource Centre
        </h2>
        
        <div className="space-y-3">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="bg-[#f6f8fc] rounded-[12px] px-4 py-4 flex items-center justify-between hover:bg-[#ecf4ff] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#ecf4ff] rounded-full size-[40px] flex items-center justify-center shrink-0">
                  <resource.icon className="w-5 h-5 text-[#1a4d8f]" />
                </div>
                <div>
                  <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px]">
                    {resource.title}
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] leading-[18px]">
                    {resource.description}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#969696] shrink-0 group-hover:text-[#1a4d8f] transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
