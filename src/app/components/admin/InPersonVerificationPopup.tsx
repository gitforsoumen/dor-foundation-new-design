import { useState, useRef } from "react";
import { X, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Progress } from "../ui/progress";
import svgPaths from "../../imports/svg-yadn9thm77";
import uploadIcon from "../../imports/svg-2x1gog6pne";
import deleteIcon from "../../imports/svg-97o5pd8irn";

interface InPersonVerificationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    status: string;
    comments: string;
    documents: File[];
  }) => void;
  studentName: string;
}

export default function InPersonVerificationPopup({
  isOpen,
  onClose,
  onSubmit,
  studentName
}: InPersonVerificationPopupProps) {
  const [status, setStatus] = useState("");
  const [comments, setComments] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>({});
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files);
    const currentLength = uploadedFiles.length;
    
    newFiles.forEach((file, idx) => {
      const fileIndex = currentLength + idx;
      const fileId = `${file.name}-${fileIndex}`;
      
      // Simulate upload progress
      setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
      
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[fileId] || 0;
          if (currentProgress >= 100) {
            clearInterval(interval);
            return prev;
          }
          return { ...prev, [fileId]: Math.min(currentProgress + 10, 100) };
        });
      }, 100);

      // Create preview for image files
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setFilePreviews(prev => ({ ...prev, [fileId]: event.target?.result as string }));
        };
        reader.readAsDataURL(file);
      }
    });
    
    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (index: number) => {
    const fileToRemove = uploadedFiles[index];
    const fileId = `${fileToRemove.name}-${index}`;
    
    // Clean up related state
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
    setFilePreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[fileId];
      return newPreviews;
    });
    
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleSubmit = () => {
    if (!status || !comments) {
      return;
    }
    
    onSubmit({
      status,
      comments,
      documents: uploadedFiles
    });
    
    // Reset form
    setStatus("");
    setComments("");
    setUploadedFiles([]);
    setUploadProgress({});
    setFilePreviews({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white border-[#e2e8f2] border-[0.8px] border-solid overflow-hidden relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-[596.4px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="content-stretch flex flex-col gap-[8px] pb-[0.8px] pl-[24px] pr-0 pt-[24px] border-b border-[#e2e8f2]">
          <div>
            <p
              className="font-['Fraunces:Bold',sans-serif] font-bold leading-[36px] text-[#1a4d8f] text-[24px]"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Submit In-Person Verification
            </p>
          </div>
          <div>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[21px] text-[#4d4b48] text-[14px]">
              Please provide the final status and feedback for this verification
            </p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[16px] top-[16px] opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="w-4 h-4 text-[#4d4b48]" />
        </button>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto flex-1 px-[24px] pt-[16px]">
          <div className="flex flex-col gap-[24px]">
            {/* Update Status */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#4d4b48] text-[14px]">
                Update Status<span className="text-[#ef4444]">*</span>
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="bg-white h-[36px] border-[#e2e8f2] border-[0.8px] rounded-[8px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Recommend">Recommend</SelectItem>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Comments */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#4d4b48] text-[14px]">
                Comments<span className="text-[#ef4444]">*</span>
              </label>
              <Textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Enter your comments or feedback"
                className="bg-white min-h-[109.6px] border-[#e2e8f2] border-[0.8px] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none"
                rows={4}
              />
            </div>

            {/* Document Upload */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#4d4b48] text-[14px]">
                Document Upload{" "}
                <span className="text-[#9ca3af]">(Optional)</span>
              </label>
              
              {/* Upload Area */}
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`bg-white border-[#e2e8f2] border-[1.6px] border-solid rounded-[10px] p-[25.6px] cursor-pointer transition-colors ${
                  isDragging ? "bg-[#f0f7ff] border-[#1a4d8f]" : ""
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileSelect(e.target.files)}
                  className="hidden"
                />
                
                <div className="flex flex-col gap-[8px] items-center">
                  {/* Upload Icon */}
                  <div className="relative size-full h-[32px] w-[32px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                      <g>
                        <path d="M16 4V20" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={uploadIcon.p171a9480} stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                        <path d={uploadIcon.p110a37f0} stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      </g>
                    </svg>
                  </div>
                  
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#1a4d8f] text-[14px] text-center">
                    Click to upload or drag and drop
                  </p>
                  
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] text-[#99a1af] text-[12px] text-center">
                    PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                  </p>
                </div>
              </div>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-3">
                  {uploadedFiles.map((file, index) => {
                    const fileId = `${file.name}-${index}`;
                    const progress = uploadProgress[fileId] || 0;
                    const preview = filePreviews[fileId];
                    
                    return (
                      <div key={fileId} className="bg-[#f6f8fc] rounded-[12px] p-4">
                        <div className="flex gap-3">
                          {/* File Icon/Preview */}
                          <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                            {preview ? (
                              <img
                                src={preview}
                                alt={file.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <FileText className="w-6 h-6 text-[#1a4d8f]" />
                            )}
                          </div>

                          {/* File Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] truncate">
                                {file.name}
                              </p>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleRemoveFile(index);
                                }}
                                className="hover:opacity-80 transition-opacity flex-shrink-0 w-5 h-5 relative rounded-[4px]"
                                title="Delete document"
                              >
                                <div className="size-full">
                                  <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
                                    <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                                      <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]">
                                        <div className="absolute inset-[-16.67%_-0.83px]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.6667">
                                            <path d="M0.833335 0.833335V5.83337" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]">
                                        <div className="absolute inset-[-16.67%_-0.83px]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.6667">
                                            <path d="M0.833335 0.833335V5.83337" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4">
                                        <div className="absolute inset-[-6.25%_-7.14%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
                                            <path d={deleteIcon.p18132880} stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4">
                                        <div className="absolute inset-[-0.83px_-5.56%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
                                            <path d="M0.833335 0.833335H15.8333" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]">
                                        <div className="absolute inset-[-25%_-12.5%]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.3333 5">
                                            <path d={deleteIcon.p33095180} stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                            
                            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mb-2">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>

                            {/* Progress Bar */}
                            {progress < 100 ? (
                              <div className="space-y-1">
                                <Progress value={progress} className="h-1.5" />
                                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[11px]">
                                  Uploading... {progress}%
                                </p>
                              </div>
                            ) : (
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#10b981] text-[12px]">
                                ✓ Upload complete
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-[12px] items-center justify-end px-[24px] py-[16.8px] border-t border-[#e2e8f2]">
          <Button
            onClick={onClose}
            className="bg-white hover:bg-[#f8fafc] text-[#4d4b48] h-[44px] rounded-[100px] border border-[#e2e8f2] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] px-[24px]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!status || !comments}
            className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[44px] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] px-[24px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Form
          </Button>
        </div>
      </div>
    </div>
  );
}
