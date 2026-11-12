import { useState, useRef } from "react";
import { X, Upload, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Progress } from "../ui/progress";
import svgPaths from "../../imports/svg-g93tz6ou45";
import trashIconPaths from "../../imports/svg-sbtrf0mqod";

interface CounsellingFeedbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    status: string;
    comments: string;
    documents: File[];
  }) => void;
  studentName: string;
}

export default function CounsellingFeedbackPopup({
  isOpen,
  onClose,
  onSubmit,
  studentName
}: CounsellingFeedbackPopupProps) {
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

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleSubmit = () => {
    if (!status || !comments) {
      alert("Please fill in all required fields");
      return;
    }
    onSubmit({ status, comments, documents: uploadedFiles });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white border-[#e2e8f2] border border-solid relative rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] w-full max-w-[598px] max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex flex-col gap-4 px-6 pt-6 pb-4 border-b border-[#e2e8f2]">
          <h2
            className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[24px] leading-[36px]"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Submit Counselling Feedback
          </h2>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[21px]">
            Please provide the final status and feedback for this counselling session
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-[#4d4b48]" />
        </button>

        {/* Form Content */}
        <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="flex flex-col gap-6">
            {/* Update Status */}
            <div className="flex flex-col gap-2">
              <label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px]">
                Update Status <span className="text-[#ef4444]">*</span>
              </label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="h-[36px] bg-white border-[#e2e8f2] border rounded-[8px] px-3 font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Recommend">Recommend</SelectItem>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                  <SelectItem value="Need Review">Need Review</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Comments */}
            <div className="flex flex-col gap-2">
              <label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px]">
                Comments <span className="text-[#ef4444]">*</span>
              </label>
              <Textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Enter your comments or feedback"
                className="min-h-[64px] bg-white border-[#e2e8f2] border rounded-[8px] px-4 py-3 font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none"
              />
            </div>

            {/* Document Upload */}
            <div className="flex flex-col gap-2">
              <label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px]">
                Document Upload <span className="text-[#9ca3af]">(Optional)</span>
              </label>
              <div
                className={`bg-white border-[#e2e8f2] ${isDragging ? 'border-[#1a4d8f] bg-[#f0f7ff]' : 'border-[1.6px]'} border-solid rounded-[10px] p-6 cursor-pointer transition-all`}
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileSelect(e.target.files)}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8">
                    <svg className="w-full h-full" fill="none" viewBox="0 0 32 32">
                      <path d="M16 4V20" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d={svgPaths.p171a9480} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                      <path d={svgPaths.p110a37f0} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                    </svg>
                  </div>
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] leading-[21px] text-center">
                    Click to upload or drag and drop
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99a1af] text-[12px] leading-[18px] text-center">
                    PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                  </p>
                </div>
              </div>
              
              {/* Display uploaded files */}
              {uploadedFiles.length > 0 && (
                <div className="mt-2 space-y-2">
                  {uploadedFiles.map((file, index) => {
                    const fileId = `${file.name}-${index}`;
                    const progress = uploadProgress[fileId];
                    const isUploading = progress !== undefined && progress < 100;
                    const isUploaded = progress === 100;
                    const preview = filePreviews[fileId];

                    return (
                      <div key={index} className="bg-white border-[1.6px] border-[#e2e8f2] rounded-[10px] p-[17.6px]">
                        {isUploading && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                                Uploading...
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px]">
                                {progress}%
                              </p>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>
                        )}

                        <div className="flex items-start gap-[16px]">
                          {/* Preview Thumbnail */}
                          <div className="shrink-0">
                            {preview ? (
                              <img 
                                src={preview} 
                                alt={file.name}
                                className="w-[80px] h-[80px] object-cover rounded-[8px] border-[0.8px] border-[#e2e8f2]"
                              />
                            ) : (
                              <div className="w-[80px] h-[80px] bg-[#f6f8fc] rounded-[8px] border-[0.8px] border-[#e2e8f2] flex items-center justify-center">
                                <FileText className="w-8 h-8 text-[#1a4d8f]"/>
                              </div>
                            )}
                          </div>

                          {/* File Info */}
                          <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
                            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] leading-[19.5px] truncate">
                              {file.name}
                            </p>
                            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99a1af] text-[11px] leading-[16.5px]">
                              {(file.size / 1024).toFixed(2)} KB
                            </p>
                            {isUploaded && (
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[12px] leading-[18px]">
                                ✓ Upload complete
                              </p>
                            )}
                          </div>

                          {/* Remove Button */}
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="shrink-0 rounded-[4px] p-[4px] hover:bg-[#fee] transition-colors"
                            title="Remove file"
                          >
                            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                              <path d="M8.33333 9.16667V14.1667" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M11.6667 9.16667V14.1667" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={trashIconPaths.p3bbb0f80} stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M2.5 5H17.5" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={trashIconPaths.p3ba73400} stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#e2e8f2]">
          <Button
            onClick={onClose}
            className="h-[44px] px-6 bg-white border border-[#e2e8f2] text-[#4d4b48] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#f6f8fc]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="h-[44px] px-6 bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#153d73]"
          >
            Submit Form
          </Button>
        </div>
      </div>
    </div>
  );
}