import { Eye, Download, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import svgPaths from "../../imports/svg-m88z1osr9i";

interface Document {
  name: string;
  uploadedBy: string;
  uploadDate: string;
  uploadTime: string;
  type: string;
  size: string;
}

interface VerificationReportCardProps {
  title: string;
  subtitle: string;
  status: "Recommend" | "On Hold";
  comments: string;
  documents: Document[];
  submittedBy: string;
  submittedDate: string;
  onUpdateClick: () => void;
  onViewFormClick: () => void;
  onViewDocument?: (doc: Document) => void;
  onDownloadDocument?: (doc: Document) => void;
  onDeleteDocument?: (doc: Document) => void;
}

export default function VerificationReportCard({
  title,
  subtitle,
  status,
  comments,
  documents,
  submittedBy,
  submittedDate,
  onUpdateClick,
  onViewFormClick,
  onViewDocument,
  onDownloadDocument,
  onDeleteDocument,
}: VerificationReportCardProps) {
  const getStatusColor = () => {
    return status === "Recommend"
      ? "bg-[#d1fae5] text-[#065f46]"
      : "bg-[#fef3c7] text-[#92400e]";
  };

  return (
    <Card className="bg-white rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] p-6">
      {/* Header */}
      <div className="flex flex-col gap-1 mb-10">
        <h2
          className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px]"
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          {title}
        </h2>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px]">
          {subtitle}
        </p>
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        <Badge
          className={`${getStatusColor()} font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px] border-0`}
        >
          {status}
        </Badge>
      </div>

      {/* Comments Section */}
      <div className="flex flex-col gap-1 mb-4">
        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
          Comments
        </p>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[22.75px]">
          {comments}
        </p>
      </div>

      {/* Attached Documents Section */}
      {documents.length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
            Attached Documents
          </p>

          {/* Documents List */}
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="bg-[#f6f8fc] rounded-[12px] p-4"
              >
                <div className="flex gap-4">
                  {/* Document Icon */}
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 20 24"
                    >
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

                  {/* Document Details */}
                  <div className="flex-1 flex flex-col gap-1">
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      {doc.name}
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[13px]">
                      Volunteer: {doc.uploadedBy}
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                      {doc.uploadDate} at {doc.uploadTime} • {doc.type} • {doc.size}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => onViewDocument?.(doc)}
                        className="w-8 h-8 rounded-[8px] hover:bg-[#e2e8f2] transition-colors flex items-center justify-center"
                        title="View document"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d={svgPaths.p26b72c80}
                            stroke="#1A4D8F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d={svgPaths.p28db2b80}
                            stroke="#1A4D8F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => onDownloadDocument?.(doc)}
                        className="w-8 h-8 rounded-[8px] hover:bg-[#e2e8f2] transition-colors flex items-center justify-center"
                        title="Download document"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 10V2"
                            stroke="#1A4D8F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d={svgPaths.p23ad1400}
                            stroke="#1A4D8F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d={svgPaths.p19411800}
                            stroke="#1A4D8F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => onDeleteDocument?.(doc)}
                        className="w-8 h-8 rounded-[8px] hover:bg-[#fee2e2] transition-colors flex items-center justify-center"
                        title="Delete document"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.66667 7.33333V11.3333"
                            stroke="#E7000B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d="M9.33333 7.33333V11.3333"
                            stroke="#E7000B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d={svgPaths.p37e28100}
                            stroke="#E7000B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d="M2 4H14"
                            stroke="#E7000B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                          <path
                            d={svgPaths.p2ffbeb80}
                            stroke="#E7000B"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submission Info */}
      <div className="flex flex-col gap-1 pt-2 border-t border-[#e2e8f2] mb-4">
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] pt-2">
          Submitted by: {submittedBy}
        </p>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
          {submittedDate}
        </p>
      </div>

      {/* Update Link */}
      <div className="text-center mb-3">
        <button
          onClick={onUpdateClick}
          className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] hover:underline cursor-pointer"
        >
          Update status, comments & documents
        </button>
      </div>

      {/* View Form Button */}
      <Button
        onClick={onViewFormClick}
        className="w-full bg-white hover:bg-[#f8fafc] text-[#1a4d8f] h-[44px] rounded-[100px] border border-[#1a4d8f] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px]"
      >
        View Previous Feedback
      </Button>
    </Card>
  );
}