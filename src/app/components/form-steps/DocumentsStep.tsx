import { useState } from "react";
import { Upload, X, FileText, Image as ImageIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import type { FormData } from "../ApplicationForm";

interface DocumentsStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

interface UploadProgress {
  [key: string]: number;
}

export default function DocumentsStep({ formData, setFormData }: DocumentsStepProps) {
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>({});
  const [dragActive, setDragActive] = useState<{ [key: string]: boolean }>({});

  const handleFileChange = (field: keyof FormData['documents'], file: File | null) => {
    if (!file) return;

    // Simulate upload progress
    setUploadProgress(prev => ({ ...prev, [field]: 0 }));
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev[field] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [field]: Math.min(currentProgress + 10, 100) };
      });
    }, 100);

    // Create preview for image files
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreviews(prev => ({ ...prev, [field]: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }

    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [field]: file
      }
    });
  };

  const handleRemoveFile = (field: keyof FormData['documents']) => {
    setFormData({
      ...formData,
      documents: {
        ...formData.documents,
        [field]: null
      }
    });
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[field];
      return newProgress;
    });
    setFilePreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[field];
      return newPreviews;
    });
  };

  const handleDrag = (e: React.DragEvent, field: string) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent, field: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [field]: true }));
  };

  const handleDragLeave = (e: React.DragEvent, field: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [field]: false }));
  };

  const handleDrop = (e: React.DragEvent, field: keyof FormData['documents']) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [field]: false }));
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(field, files[0]);
    }
  };

  const DocumentUpload = ({ 
    label, 
    field, 
    required = false 
  }: { 
    label: string; 
    field: keyof FormData['documents']; 
    required?: boolean;
  }) => {
    const file = formData.documents[field];
    const progress = uploadProgress[field];
    const isUploading = progress !== undefined && progress < 100;
    const isUploaded = file && progress === 100;
    const preview = filePreviews[field];

    return (
      <div>
        <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
        
        {!file ? (
          <div 
            className={`mt-2 border-2 border-dashed rounded-[10px] p-8 flex flex-col items-center justify-center transition-colors ${
              dragActive[field] 
                ? 'border-[#1a4d8f] bg-[#ecf4ff]' 
                : 'border-[#aeaeae] bg-white'
            }`}
            onDragEnter={(e) => handleDragEnter(e, field)}
            onDragOver={(e) => handleDrag(e, field)}
            onDragLeave={(e) => handleDragLeave(e, field)}
            onDrop={(e) => handleDrop(e, field)}
          >
            <Upload className="w-6 h-6 text-[#99A1AF] mb-2" />
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-bold text-[#4d4b48] text-[13px] text-center mb-1">
              Click to upload or drag and drop
            </p>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[11px] text-center mb-3">
              PDF or image. Max 1 MB.
            </p>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileChange(field, e.target.files?.[0] || null)}
              className="hidden"
              id={`${field}-upload`}
            />
            <label
              htmlFor={`${field}-upload`}
              className="px-5 py-2 bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] cursor-pointer hover:bg-[#153d73]"
            >
              Choose File
            </label>
          </div>
        ) : (
          <div className="mt-2 border-2 border-[#e2e8f2] rounded-[10px] p-4 bg-white">
            {/* Upload Progress */}
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

            {/* File Preview */}
            <div className="flex items-start gap-4">
              {/* Preview Thumbnail */}
              <div className="shrink-0">
                {preview ? (
                  <img 
                    src={preview} 
                    alt={file.name}
                    className="w-20 h-20 object-cover rounded-[8px] border border-[#e2e8f2]"
                  />
                ) : (
                  <div className="w-20 h-20 bg-[#f6f8fc] rounded-[8px] border border-[#e2e8f2] flex items-center justify-center">
                    <FileText className="w-8 h-8 text-[#1a4d8f]" />
                  </div>
                )}
              </div>

              {/* File Info */}
              <div className="flex-1 min-w-0">
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] truncate">
                  {file.name}
                </p>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[11px] mt-1">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
                {isUploaded && (
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[12px] mt-1">
                    ✓ Upload complete
                  </p>
                )}
              </div>

              {/* Remove Button */}
              <button
                type="button"
                onClick={() => handleRemoveFile(field)}
                className="shrink-0 p-1 hover:bg-[#f6f8fc] rounded-[4px] transition-colors"
                title="Remove file"
              >
                <X className="w-5 h-5 text-[#99A1AF] hover:text-red-500" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Documents
        </h2>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
          Upload required documents for your application
        </p>
      </div>

      {/* Document Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DocumentUpload
          label="9th Class Marksheet"
          field="marksheet9th"
          required
        />
        <DocumentUpload
          label="10th Class Marksheet"
          field="marksheet10th"
          required
        />
        <DocumentUpload
          label="11th Class Marksheet"
          field="marksheet11th"
          required
        />
        <DocumentUpload
          label="12th Class Marksheet"
          field="marksheet12th"
          required
        />
        <DocumentUpload
          label="Family Income Proof"
          field="incomeProof"
          required
        />
        <DocumentUpload
          label="Caste Certificate"
          field="casteCertificate"
        />
      </div>

      {/* Important Note */}
      <div className="bg-[#ecf4ff] border border-[#1a4d8f] rounded-[10px] p-6 mt-8">
        <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[16px] mb-3">
          Important Guidelines:
        </h3>
        <ul className="space-y-2 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
          <li>• All documents must be clear and readable</li>
          <li>• Accepted formats: PDF, JPG, PNG</li>
          <li>• Maximum file size: 1 MB per document</li>
          <li>• Ensure all marksheets are attested by your school</li>
          <li>• Income proof should be recent (within 6 months)</li>
        </ul>
      </div>
    </div>
  );
}
