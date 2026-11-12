import { useState } from "react";
import { ChevronLeft, Upload, X, FileText, Plus, Trash2, ChevronDown } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import uploadIcon from "figma:asset/53e621f2c3190feab23f11abf7875b16fbf86ad9.png";

interface DocumentUploadProps {
  onBack: () => void;
}

interface OtherDocument {
  id: string;
  documentType: string;
  customName: string;
  file: File | null;
}

interface UploadProgress {
  [key: string]: number;
}

export default function DocumentUpload({ onBack }: DocumentUploadProps) {
  const [otherDocuments, setOtherDocuments] = useState<OtherDocument[]>([]);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>({});
  const [dragActive, setDragActive] = useState<{ [key: string]: boolean }>({});

  const documentTypeOptions = [
    '9th Marksheet',
    '10th Marksheet',
    '11th Marksheet',
    '12th Marksheet (if received)',
    'Aadhaar Card of Student',
    'Ration Card',
    'Domicile Certificate',
    'Income Certificate',
    'Caste Certificate',
    'EWS Certificate (if applicable)',
    'Bank Statements (last 6 months)',
    'Home Video (2 minutes)',
    'Shop Video (2 minutes)',
    'Restaurant Video (2 minutes)',
    'Tailor Shop Video (2 minutes)',
    'GPS-tagged family photo',
    'Any other supporting document'
  ];

  const handleAddOtherDocument = () => {
    const newId = `other-doc-${Date.now()}`;
    setOtherDocuments([...otherDocuments, { 
      id: newId, 
      documentType: '', 
      customName: '', 
      file: null 
    }]);
  };

  const handleRemoveOtherDocument = (id: string) => {
    setOtherDocuments(otherDocuments.filter(doc => doc.id !== id));
    // Clean up related state
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
    setFilePreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[id];
      return newPreviews;
    });
  };

  const handleDocumentTypeChange = (id: string, type: string) => {
    setOtherDocuments(otherDocuments.map(doc => 
      doc.id === id ? { ...doc, documentType: type, customName: type !== 'Any other supporting document' ? '' : doc.customName } : doc
    ));
  };

  const handleCustomNameChange = (id: string, name: string) => {
    setOtherDocuments(otherDocuments.map(doc => 
      doc.id === id ? { ...doc, customName: name } : doc
    ));
  };

  const handleFileChange = (id: string, file: File | null) => {
    if (!file) return;

    // Get document type for this upload
    const doc = otherDocuments.find(d => d.id === id);
    
    // Check if document type is a video type
    const isVideoType = doc?.documentType && (
      doc.documentType === 'Home Video (2 minutes)' ||
      doc.documentType === 'Shop Video (2 minutes)' ||
      doc.documentType === 'Restaurant Video (2 minutes)' ||
      doc.documentType === 'Tailor Shop Video (2 minutes)'
    );
    
    // Validate file size based on document type
    const maxSize = isVideoType ? 20 * 1024 * 1024 : 1024 * 1024; // 20MB for video, 1MB for others
    
    if (file.size > maxSize) {
      const maxSizeMB = isVideoType ? 20 : 1;
      alert(`File size exceeds ${maxSizeMB}MB limit. Please upload a smaller file.`);
      return;
    }

    // Simulate upload progress
    setUploadProgress(prev => ({ ...prev, [id]: 0 }));
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev[id] || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          return prev;
        }
        return { ...prev, [id]: Math.min(currentProgress + 10, 100) };
      });
    }, 100);

    // Create preview for image files
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFilePreviews(prev => ({ ...prev, [id]: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }

    setOtherDocuments(otherDocuments.map(doc => 
      doc.id === id ? { ...doc, file } : doc
    ));
  };

  const handleRemoveFile = (id: string) => {
    setOtherDocuments(otherDocuments.map(doc => 
      doc.id === id ? { ...doc, file: null } : doc
    ));
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[id];
      return newProgress;
    });
    setFilePreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[id];
      return newPreviews;
    });
  };

  const handleDrag = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [id]: true }));
  };

  const handleDragLeave = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [id]: false }));
  };

  const handleDrop = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(prev => ({ ...prev, [id]: false }));
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(id, files[0]);
    }
  };

  const handleSave = () => {
    // Validation logic
    for (const doc of otherDocuments) {
      if (!doc.documentType) {
        alert('Please select a document type for all documents.');
        return;
      }
      if (doc.documentType === 'Any other supporting document' && !doc.customName.trim()) {
        alert('Please provide a custom name for documents with type "Any other supporting document".');
        return;
      }
      if (!doc.file) {
        alert('Please upload all documents.');
        return;
      }
    }

    alert('Documents saved successfully!');
    onBack();
  };

  const handleCancel = () => {
    if (otherDocuments.length > 0) {
      if (confirm('You have unsaved changes. Are you sure you want to cancel?')) {
        onBack();
      }
    } else {
      onBack();
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f8fc] py-6 sm:py-8 md:py-12">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Back to Dashboard Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-[8px] h-[24px] mb-8 hover:opacity-80 transition-opacity"
        >
          <div className="relative shrink-0 size-[16px]">
            <ChevronLeft className="w-full h-full text-[#1a4d8f] stroke-[1.33]" />
          </div>
          <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] sm:text-[16px]">
            Back to Dashboard
          </p>
        </button>

        {/* Main Content */}
        <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6 sm:p-8 md:p-12">
          {/* Important Guidelines */}
          <div className="bg-[#ecf4ff] border border-[#1a4d8f] rounded-[10px] p-6 mb-8">
            <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[16px] mb-3">
              Important Guidelines:
            </h3>
            <ul className="space-y-2 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              <li>• All documents must be clear and readable</li>
              <li>• Accepted formats: PDF, JPG, PNG for documents</li>
              <li>• Maximum file size: 1 MB per document</li>
              <li>• For Home Video: MP4, AVI, MOV formats accepted (Max 20 MB, 2 minutes duration)</li>
              <li>• Ensure all marksheets are attested by your school</li>
              <li>• Income proof should be recent (within 6 months)</li>
              <li>• Upload as many documents as possible. If you face any issues, you can submit the remaining documents during your in-person interview.</li>
            </ul>
          </div>

          {/* Header Section */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Documents
              </h1>
              <button
                onClick={handleAddOtherDocument}
                className="flex items-center justify-center gap-2 h-[40px] px-4 rounded-[100px] bg-[#1a4d8f] text-white font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] hover:bg-[#153d73] transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add New Document
              </button>
            </div>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Upload required documents for your application
            </p>
          </div>

          {/* Documents List */}
          {otherDocuments.length > 0 ? (
            <div className="space-y-6 mb-8">
              {otherDocuments.map((doc) => {
                const file = doc.file;
                const progress = uploadProgress[doc.id];
                const isUploading = progress !== undefined && progress < 100;
                const isUploaded = file && progress === 100;
                const preview = filePreviews[doc.id];

                return (
                  <div key={doc.id} className="bg-[#f6f8fc] border border-[#e2e8f2] rounded-[10px] p-6">
                    <div className="flex items-start gap-6">
                      {/* Left side - Form fields */}
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          {/* Document Type Dropdown */}
                          <div>
                            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                              Document Type <span className="text-[#fb2c36]">*</span>
                            </Label>
                            <div className="relative">
                              <select
                                value={doc.documentType}
                                onChange={(e) => handleDocumentTypeChange(doc.id, e.target.value)}
                                className="w-full h-[48px] px-4 pr-10 bg-white border border-[#e2e8f2] rounded-[10px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] appearance-none cursor-pointer hover:border-[#1a4d8f] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent transition-colors"
                              >
                                <option value="">Select document type</option>
                                {documentTypeOptions.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                <ChevronDown className="w-5 h-5 text-[#99A1AF]" />
                              </div>
                            </div>
                          </div>

                          {/* Other Document Name (Conditional) */}
                          {doc.documentType === 'Any other supporting document' && (
                            <div>
                              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                                Other Document Name <span className="text-[#fb2c36]">*</span>
                              </Label>
                              <Input
                                type="text"
                                placeholder="Enter custom document name"
                                value={doc.customName}
                                onChange={(e) => handleCustomNameChange(doc.id, e.target.value)}
                                className="h-[48px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] rounded-[10px]"
                              />
                            </div>
                          )}

                          {/* Sample Video (Conditional) */}
                          {doc.documentType === 'Home Video (2 minutes)' && (
                            <div className="bg-white border border-[#e2e8f2] rounded-[10px] p-4">
                              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                                Sample Video Format
                              </Label>
                              <div className="rounded-[8px] overflow-hidden bg-black">
                                <video 
                                  controls 
                                  className="w-full h-auto"
                                  poster="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop"
                                >
                                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px] mt-2">
                                • Video should be 2 minutes maximum
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Show your home and family members
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Maximum file size: 20 MB
                              </p>
                            </div>
                          )}

                          {/* Sample Shop Video (Conditional) */}
                          {doc.documentType === 'Shop Video (2 minutes)' && (
                            <div className="bg-white border border-[#e2e8f2] rounded-[10px] p-4">
                              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                                Sample Video Format
                              </Label>
                              <div className="rounded-[8px] overflow-hidden bg-black">
                                <video 
                                  controls 
                                  className="w-full h-auto"
                                  poster="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
                                >
                                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px] mt-2">
                                • Video should be 2 minutes maximum
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Show your shop interior and exterior
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Maximum file size: 20 MB
                              </p>
                            </div>
                          )}

                          {/* Sample Restaurant Video (Conditional) */}
                          {doc.documentType === 'Restaurant Video (2 minutes)' && (
                            <div className="bg-white border border-[#e2e8f2] rounded-[10px] p-4">
                              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                                Sample Video Format
                              </Label>
                              <div className="rounded-[8px] overflow-hidden bg-black">
                                <video 
                                  controls 
                                  className="w-full h-auto"
                                  poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop"
                                >
                                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px] mt-2">
                                • Video should be 2 minutes maximum
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Show your restaurant interior and kitchen area
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Maximum file size: 20 MB
                              </p>
                            </div>
                          )}

                          {/* Sample Tailor Shop Video (Conditional) */}
                          {doc.documentType === 'Tailor Shop Video (2 minutes)' && (
                            <div className="bg-white border border-[#e2e8f2] rounded-[10px] p-4">
                              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                                Sample Video Format
                              </Label>
                              <div className="rounded-[8px] overflow-hidden bg-black">
                                <video 
                                  controls 
                                  className="w-full h-auto"
                                  poster="https://images.unsplash.com/photo-1558769132-cb1aea579296?w=400&h=300&fit=crop"
                                >
                                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px] mt-2">
                                • Video should be 2 minutes maximum
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Show your tailor shop and work area
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[12px]">
                                • Maximum file size: 20 MB
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Right Column - Upload Document */}
                        <div>
                          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                            Upload Document <span className="text-[#fb2c36]">*</span>
                          </Label>
                          
                          {!file ? (
                            <div 
                              className={`border-2 border-dashed rounded-[10px] p-8 flex flex-col items-center justify-center transition-colors ${
                                !doc.documentType
                                  ? 'border-[#e2e8f2] bg-[#f6f8fc] opacity-50 cursor-not-allowed'
                                  : dragActive[doc.id] 
                                    ? 'border-[#1a4d8f] bg-[#ecf4ff]' 
                                    : 'border-[#aeaeae] bg-white'
                              }`}
                              onDragEnter={doc.documentType ? (e) => handleDragEnter(e, doc.id) : undefined}
                              onDragOver={doc.documentType ? (e) => handleDrag(e, doc.id) : undefined}
                              onDragLeave={doc.documentType ? (e) => handleDragLeave(e, doc.id) : undefined}
                              onDrop={doc.documentType ? (e) => handleDrop(e, doc.id) : undefined}
                            >
                              <Upload className="w-6 h-6 text-[#99A1AF] mb-2" />
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-bold text-[#4d4b48] text-[13px] text-center mb-1">
                                {!doc.documentType ? 'Select document type first' : 'Click to upload or drag and drop'}
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[11px] text-center mb-3">
                                {!doc.documentType
                                  ? 'Upload will be enabled after selection' 
                                  : (doc.documentType === 'Home Video (2 minutes)' || 
                                     doc.documentType === 'Shop Video (2 minutes)' || 
                                     doc.documentType === 'Restaurant Video (2 minutes)' || 
                                     doc.documentType === 'Tailor Shop Video (2 minutes)')
                                    ? 'MP4, AVI, MOV. Max 20 MB.'
                                    : 'PDF or image. Max 1 MB.'
                                }
                              </p>
                              <input
                                type="file"
                                accept={(doc.documentType === 'Home Video (2 minutes)' || 
                                        doc.documentType === 'Shop Video (2 minutes)' || 
                                        doc.documentType === 'Restaurant Video (2 minutes)' || 
                                        doc.documentType === 'Tailor Shop Video (2 minutes)') 
                                  ? 'video/*' 
                                  : 'image/*,.pdf'}
                                onChange={(e) => handleFileChange(doc.id, e.target.files?.[0] || null)}
                                className="hidden"
                                id={`${doc.id}-upload`}
                                disabled={!doc.documentType}
                              />
                              <label
                                htmlFor={`${doc.id}-upload`}
                                className={`px-5 py-2 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] transition-colors ${
                                  !doc.documentType
                                    ? 'bg-[#e2e8f2] text-[#99A1AF] cursor-not-allowed'
                                    : 'bg-[#1a4d8f] text-white cursor-pointer hover:bg-[#153d73]'
                                }`}
                              >
                                Choose File
                              </label>
                            </div>
                          ) : (
                            <div className="border-2 border-[#e2e8f2] rounded-[10px] p-4 bg-white">
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

                                {/* Remove Button with Trash Icon */}
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFile(doc.id)}
                                  className="shrink-0 p-1 hover:bg-[#f6f8fc] rounded-[4px] transition-colors"
                                  title="Remove file"
                                >
                                  <Trash2 className="w-5 h-5 text-[#99A1AF] hover:text-red-500" />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right side - Delete document button */}
                      <button
                        onClick={() => handleRemoveOtherDocument(doc.id)}
                        className="p-2 hover:bg-red-50 rounded-[6px] transition-colors"
                        title="Remove document"
                      >
                        <Trash2 className="w-5 h-5 text-[#fb2c36]" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mb-8 text-center py-12 border-2 border-dashed border-[#e2e8f2] rounded-[10px]">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[14px]">
                No documents added yet
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[13px] mt-1">
                Click "Add New Document" to get started
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <button
              onClick={handleCancel}
              className="h-[48px] px-8 rounded-[100px] bg-white border border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors"
            >
              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#4d4b48] text-[16px] text-center">
                Cancel
              </p>
            </button>
            <button
              onClick={handleSave}
              className="h-[48px] px-8 rounded-[100px] bg-[#1a4d8f] text-white font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[16px] hover:bg-[#153d73] transition-colors"
            >
              Save Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}