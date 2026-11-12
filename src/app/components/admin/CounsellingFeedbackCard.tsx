import { useState } from "react";
import { ChevronDown, Eye, Download, Trash2 } from "lucide-react";
import svgPaths from "../../imports/svg-kbiczddtqn";

interface CounsellingFeedbackCardProps {
  status: string;
  comments: string;
  document: {
    name: string;
    uploadedBy: string;
    uploadDate: string;
    uploadTime: string;
    type: string;
    size: string;
  };
  submittedBy: string;
  submittedDate: string;
  onViewPreviousFeedback: () => void;
  onSubmitForm: () => void;
  onViewDocument?: () => void;
  onDownloadDocument?: () => void;
  onDeleteDocument?: () => void;
}

export default function CounsellingFeedbackCard({
  status,
  comments,
  document,
  submittedBy,
  submittedDate,
  onViewPreviousFeedback,
  onSubmitForm,
  onViewDocument,
  onDownloadDocument,
  onDeleteDocument,
}: CounsellingFeedbackCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusStyles = () => {
    switch (status) {
      case "Recommend":
        return "bg-[#d1fae5] text-[#065f46]";
      case "On Hold":
        return "bg-[#fef3c7] text-[#92400e]";
      case "Need Review":
        return "bg-[#dbeafe] text-[#1e40af]";
      default:
        return "bg-[#d1fae5] text-[#065f46]";
    }
  };

  return (
    <div className="bg-white border-[#e2e8f2] border-[0.8px] border-solid rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] overflow-hidden">
      {/* Header - Always Visible */}
      <div
        className="flex items-center justify-between px-6 py-6 cursor-pointer hover:bg-[#f6f8fc] transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-col gap-1">
          <h2
            className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] leading-[30px]"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Counselling Feedback
          </h2>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] leading-[19.5px]">
            Provide feedback on counselling session
          </p>
        </div>
        <div className={`transition-transform duration-200 ${isExpanded ? "" : "rotate-180"}`}>
          <ChevronDown className="w-6 h-6 text-[#1a4d8f]" strokeWidth={2} />
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-6 pb-6">
          {/* Status Badge */}
          <div className={`inline-flex items-center px-3 py-1.5 rounded-[6px] mb-4 ${getStatusStyles()}`}>
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] leading-[16.5px]">
              {status}
            </p>
          </div>

          {/* Comments Section */}
          <div className="flex flex-col gap-1 mb-4">
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] leading-[18px]">
              Comments
            </p>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[22.75px]">
              {comments}
            </p>
          </div>

          {/* Attached Documents Section */}
          <div className="flex flex-col gap-2 mb-4">
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] leading-[18px]">
              Attached Documents
            </p>
            
            {/* Document Card */}
            <div className="bg-[#f6f8fc] rounded-[12px] p-4">
              <div className="flex items-start gap-4">
                {/* File Icon */}
                <div className="shrink-0 w-5 h-5 mt-0.5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                    <path 
                      d={svgPaths.p35af0300} 
                      stroke="#1A4D8F" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.66667" 
                    />
                    <path 
                      d={svgPaths.pe9c54e0} 
                      stroke="#1A4D8F" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="1.66667" 
                    />
                  </svg>
                </div>

                {/* File Details */}
                <div className="flex-1 flex flex-col gap-1">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px]">
                    {document.name}
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[13px] leading-[19.5px]">
                    Volunteer: {document.uploadedBy}
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] leading-[18px]">
                    {document.uploadDate} at {document.uploadTime} • {document.type} • {document.size}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewDocument?.();
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white transition-colors"
                      title="View document"
                    >
                      <Eye className="w-4 h-4 text-[#1a4d8f]" strokeWidth={1.33} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDownloadDocument?.();
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white transition-colors"
                      title="Download document"
                    >
                      <Download className="w-4 h-4 text-[#1a4d8f]" strokeWidth={1.33} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteDocument?.();
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white transition-colors"
                      title="Delete document"
                    >
                      <Trash2 className="w-4 h-4 text-[#e7000b]" strokeWidth={1.33} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submitted Info */}
          <div className="border-t border-[#e2e8f2] pt-2.5 flex flex-col gap-1 mb-4">
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] leading-[18px]">
              Submitted by: {submittedBy}
            </p>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] leading-[18px]">
              {submittedDate}
            </p>
          </div>

          {/* View Previous Feedback Link */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewPreviousFeedback();
            }}
            className="w-full mb-3 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center hover:underline"
          >
            View Previous Feedback
          </button>

          {/* Submit Form Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSubmitForm();
            }}
            className="w-full h-[44px] bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff] transition-colors"
          >
            Submit Form
          </button>
        </div>
      )}
    </div>
  );
}