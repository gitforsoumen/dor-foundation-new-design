import { useState } from "react";
import { ArrowLeft, Star, Upload, X, FileText, AlertCircle, CheckCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import checkmarkSvg from "../../imports/svg-5z6iptt9iw";
import svgPaths from "../../imports/svg-plofqzewx7";
import trashIconPaths from "../../imports/svg-sbtrf0mqod";

interface DorCounsellingFormProps {
  studentId: string;
  studentName: string;
  applicationId: string;
  onBack: () => void;
}

export default function DorCounsellingForm({
  studentId,
  studentName,
  applicationId,
  onBack
}: DorCounsellingFormProps) {
  const [formData, setFormData] = useState({
    studentName: studentName,
    applicationNo: applicationId,
    courseAwareness: 0,
    communicationEfficiency: 0,
    spokenEnglish: 0,
    adaptability: 0,
    overallConfidence: 0,
    familyFinancialSituation: "",
    hobbiesInterests: "",
    areasNeedingSupport: "",
    courseSuggestions: "",
    recommendation: "",
    finalRemarks: "",
    counselorName: "",
    date: new Date().toISOString().split('T')[0]
  });

  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [submissionComments, setSubmissionComments] = useState("");
  const [submissionDocuments, setSubmissionDocuments] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>({});
  const [dragActive, setDragActive] = useState(false);

  const handleRatingChange = (field: string, value: number) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    setShowSubmissionPopup(true);
  };

  const handleCloseSubmissionPopup = () => {
    setShowSubmissionPopup(false);
    setSubmissionStatus("");
    setSubmissionComments("");
    setSubmissionDocuments([]);
  };

  const handleFinalSubmit = () => {
    // Validate required fields
    if (!submissionStatus || !submissionComments.trim()) {
      setShowErrorPopup(true);
      return;
    }

    console.log("Counselling Feedback submitted:", formData);
    console.log("Status:", submissionStatus);
    console.log("Comments:", submissionComments);
    console.log("Documents:", submissionDocuments);
    
    // Close submission popup and show success
    setShowSubmissionPopup(false);
    setShowSuccessPopup(true);
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
    onBack();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSubmissionDocuments(prev => [...prev, ...files]);
      
      // Simulate upload progress and generate previews
      files.forEach((file, index) => {
        const fileId = `${file.name}-${submissionDocuments.length + index}`;
        
        // Generate preview for images
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setFilePreviews(prev => ({
              ...prev,
              [fileId]: reader.result as string
            }));
          };
          reader.readAsDataURL(file);
        }
        
        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          setUploadProgress(prev => ({
            ...prev,
            [fileId]: progress
          }));
          
          if (progress >= 100) {
            clearInterval(interval);
          }
        }, 100);
      });
    }
  };

  const handleRemoveFile = (index: number) => {
    setSubmissionDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setSubmissionDocuments(prev => [...prev, ...fileArray]);
    }
  };

  const StarRating = ({ 
    label, 
    field, 
    hint 
  }: { 
    label: string; 
    field: string; 
    hint?: string;
  }) => (
    <div className="space-y-2">
      <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] block">
        {label}
      </Label>
      {hint && (
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] italic mb-2">
          {hint}
        </p>
      )}
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => handleRatingChange(field, rating)}
            className="p-1 transition-all"
          >
            <Star
              className={`w-8 h-8 ${
                formData[field as keyof typeof formData] >= rating
                  ? 'fill-[#FFA500] stroke-[#FFA500]'
                  : 'fill-none stroke-[#d1d5db]'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="min-h-screen bg-[#f6f8fc]">
        <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
          {/* Header */}
          <div className="mb-8">
            <Button
              onClick={onBack}
              variant="ghost"
              className="mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:text-[#a85613] hover:bg-transparent p-0"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Profile
            </Button>
            <h1
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Counselling Feedback
            </h1>
            <div className="bg-[#ecf4ff] border border-[#1a4d8f]/20 rounded-[10px] p-4 mb-6">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed mb-2">
                Please provide your feedback on the counselling session to help us understand and support the students better.
              </p>
              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px]">
                1 = Needs Improvement | 2 = Below Average | 3 = Satisfactory | 4 = Good | 5 = Excellent
              </p>
            </div>
          </div>

          {/* Form Content */}
          <Card className="bg-white p-6 md:p-8 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] mb-6">
            <form className="space-y-8">
              {/* Student Information */}
              <div>
                <h2
                  className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[18px] mb-4"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Student Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Name of the student
                    </Label>
                    <Input
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] h-[44px] border-[#e2e8f2] focus:border-[#1a4d8f]"
                    />
                  </div>
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Application No
                    </Label>
                    <Input
                      value={formData.applicationNo}
                      onChange={(e) => setFormData({ ...formData, applicationNo: e.target.value })}
                      placeholder="Dor/____/2025"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] h-[44px] border-[#e2e8f2] focus:border-[#1a4d8f]"
                    />
                  </div>
                </div>
              </div>

              {/* Rating Sections */}
              <div>
                <h2
                  className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[18px] mb-4"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Rating Sections
                </h2>
                <div className="space-y-6">
                  <StarRating
                    label="Course Awareness"
                    field="courseAwareness"
                    hint="Does the candidate understand the course they are interested in?"
                  />
                  <StarRating
                    label="Communication Efficiency"
                    field="communicationEfficiency"
                    hint="How well does the candidate express their thoughts during the session?"
                  />
                  <StarRating
                    label="Spoken English"
                    field="spokenEnglish"
                    hint="How fluent and comfortable is the candidate in speaking English?"
                  />
                  <StarRating
                    label="Adaptability (School to Private College)"
                    field="adaptability"
                    hint="Can the candidate adjust from a government/budget private school to a private college environment? (1 = Very Difficult, 5 = Very Easy)"
                  />
                  <StarRating
                    label="Overall Confidence"
                    field="overallConfidence"
                    hint="What is your impression of the candidate's confidence?"
                  />
                </div>
              </div>

              {/* Descriptive Questions */}
              <div>
                <h2
                  className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[18px] mb-4"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Descriptive Questions
                </h2>
                <div className="space-y-5">
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Any specific family/financial situation of the student that is worth mentioning separately
                    </Label>
                    <Textarea
                      value={formData.familyFinancialSituation}
                      onChange={(e) => setFormData({ ...formData, familyFinancialSituation: e.target.value })}
                      placeholder="Describe any specific family or financial circumstances that may impact the student's education"
                      className="min-h-[100px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                    />
                  </div>
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Hobbies/interests/passions worth pursuing academically or professionally?
                    </Label>
                    <Textarea
                      value={formData.hobbiesInterests}
                      onChange={(e) => setFormData({ ...formData, hobbiesInterests: e.target.value })}
                      placeholder="List the student's hobbies, interests, or passions that could be pursued academically or professionally"
                      className="min-h-[100px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                    />
                  </div>
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Any areas where the candidate needs support (discipline, emotional strength, etc.)?
                    </Label>
                    <Textarea
                      value={formData.areasNeedingSupport}
                      onChange={(e) => setFormData({ ...formData, areasNeedingSupport: e.target.value })}
                      placeholder="Identify areas where the candidate may need additional support or guidance"
                      className="min-h-[100px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                    />
                  </div>
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Course suggestions
                    </Label>
                    <Textarea
                      value={formData.courseSuggestions}
                      onChange={(e) => setFormData({ ...formData, courseSuggestions: e.target.value })}
                      placeholder="Suggest suitable courses or academic paths based on the student's profile and interests"
                      className="min-h-[100px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Recommendation Section */}
              <div>
                <h2
                  className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[18px] mb-4"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Recommendation
                </h2>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3 block">
                  Should this candidate move to the next stage (home visit)?
                </Label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="recommendation"
                      value="strongly-recommended"
                      checked={formData.recommendation === "strongly-recommended"}
                      onChange={(e) => setFormData({ ...formData, recommendation: e.target.value })}
                      className="w-5 h-5 text-[#1a4d8f] border-[#e2e8f2] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Strongly Recommended
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="recommendation"
                      value="needs-discussion"
                      checked={formData.recommendation === "needs-discussion"}
                      onChange={(e) => setFormData({ ...formData, recommendation: e.target.value })}
                      className="w-5 h-5 text-[#1a4d8f] border-[#e2e8f2] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Needs further discussion
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="recommendation"
                      value="not-recommended"
                      checked={formData.recommendation === "not-recommended"}
                      onChange={(e) => setFormData({ ...formData, recommendation: e.target.value })}
                      className="w-5 h-5 text-[#1a4d8f] border-[#e2e8f2] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Not Recommended
                    </span>
                  </label>
                </div>
              </div>

              {/* Final Remarks */}
              <div>
                <h2
                  className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[18px] mb-4"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Final Remarks
                </h2>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                  Remarks or any final thoughts or observations?
                </Label>
                <Textarea
                  value={formData.finalRemarks}
                  onChange={(e) => setFormData({ ...formData, finalRemarks: e.target.value })}
                  placeholder="Provide any final remarks, thoughts, or observations about the student and the counselling session"
                  className="min-h-[100px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                />
              </div>

              {/* Counselor Details */}
              <div>
                <h2
                  className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[18px] mb-4"
                  style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                >
                  Counselor Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Name of the Counselor
                    </Label>
                    <Input
                      value={formData.counselorName}
                      onChange={(e) => setFormData({ ...formData, counselorName: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] h-[44px] border-[#e2e8f2] focus:border-[#1a4d8f]"
                    />
                  </div>
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                      Date
                    </Label>
                    <Input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] h-[44px] border-[#e2e8f2] focus:border-[#1a4d8f]"
                    />
                  </div>
                </div>
              </div>
            </form>
          </Card>

          {/* Action Buttons - Outside Card */}
          <div className="flex justify-between items-center pt-4 pb-8">
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="h-[48px] px-8 bg-white border-[#e2e8f2] border-[0.8px] text-[#4d4b48] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[16px] hover:bg-[#f6f8fc] transition-colors"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSubmit}
              className="h-[48px] px-8 bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[16px] hover:bg-[#153d73] transition-all duration-200"
            >
              Submit Feedback
            </Button>
          </div>
        </div>
      </div>

      {/* Submission Popup */}
      <Dialog open={showSubmissionPopup} onOpenChange={setShowSubmissionPopup}>
        <DialogContent className="sm:max-w-[600px] bg-white rounded-[12px] border-[#e2e8f2] border-[0.8px] p-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
          {/* Header */}
          <DialogHeader className="p-6 pb-4">
            <DialogTitle
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] leading-[36px] mb-2"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Submit Counselling Feedback
            </DialogTitle>
            <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[21px]">
              Please provide the final status and feedback for this counselling session
            </DialogDescription>
          </DialogHeader>

          {/* Content - Scrollable */}
          <div className="px-6 pb-4 space-y-6 max-h-[400px] overflow-y-auto">
            {/* Update Status */}
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Update Status <span className="text-[#ef4444]">*</span>
              </Label>
              <Select value={submissionStatus} onValueChange={setSubmissionStatus}>
                <SelectTrigger className="w-full h-[44px] rounded-[8px] border-[#e2e8f2] bg-white font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                  <SelectItem value="Recommend">Recommend</SelectItem>
                  <SelectItem value="Need Review">Need Review</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Comments <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                value={submissionComments}
                onChange={(e) => setSubmissionComments(e.target.value)}
                placeholder="Enter your comments or feedback"
                rows={4}
                className="border-[#e2e8f2] border-[0.8px] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none px-4 py-3"
              />
            </div>

            {/* Document Upload */}
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Document Upload <span className="text-[#9ca3af]">(Optional)</span>
              </Label>
              
              {submissionDocuments.length === 0 ? (
                <div
                  className={`border-2 border-dashed rounded-[10px] p-6 text-center transition-colors ${
                    dragActive ? 'border-[#1a4d8f] bg-[#ecf4ff]' : 'border-[#e2e8f2] bg-white hover:border-[#1a4d8f]'
                  }`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="counselling-documents"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="counselling-documents" className="cursor-pointer block">
                    <Upload className="w-8 h-8 text-[#1a4d8f] mx-auto mb-2" />
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99a1af] text-[12px]">
                      PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </label>
                </div>
              ) : (
                <div className="space-y-2">
                  {submissionDocuments.map((file, index) => {
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

                  {/* Add More Button */}
                  <div
                    className="border-2 border-dashed border-[#e2e8f2] rounded-[10px] p-4 text-center hover:border-[#1a4d8f] transition-colors cursor-pointer"
                  >
                    <input
                      type="file"
                      id="counselling-documents-add"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="counselling-documents-add" className="cursor-pointer block">
                      <Upload className="w-6 h-6 text-[#1a4d8f] mx-auto mb-1" />
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px]">
                        Add more documents
                      </p>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer with buttons */}
          <div className="flex justify-end gap-3 border-t border-[#e2e8f2] border-[0.8px] pt-4 px-6 pb-6">
            <Button
              type="button"
              onClick={handleCloseSubmissionPopup}
              variant="outline"
              className="h-[44px] px-6 bg-white border-[#e2e8f2] border-[0.8px] text-[#4d4b48] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#f6f8fc]"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleFinalSubmit}
              className="h-[44px] px-6 bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#153d73]"
            >
              Submit Form
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Popup */}
      <Dialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <DialogContent className="sm:max-w-md bg-white rounded-[20px] p-8 border border-[#aeaeae]">
          <DialogHeader className="items-center text-center space-y-8">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-[#d1faec] flex items-center justify-center">
                <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 30 30">
                  <path d="M13.25 20.75L22.0625 11.9375L20.3125 10.1875L13.25 17.25L9.6875 13.6875L7.9375 15.4375L13.25 20.75ZM15 27.5C13.2708 27.5 11.6458 27.1719 10.125 26.5156C8.60417 25.8594 7.28125 24.9687 6.15625 23.8437C5.03125 22.7187 4.14062 21.3958 3.48437 19.875C2.82812 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82812 11.6458 3.48437 10.125C4.14062 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14062 10.125 3.48437C11.6458 2.82812 13.2708 2.5 15 2.5C16.7292 2.5 18.3542 2.82812 19.875 3.48437C21.3958 4.14062 22.7187 5.03125 23.8437 6.15625C24.9687 7.28125 25.8594 8.60417 26.5156 10.125C27.1719 11.6458 27.5 13.2708 27.5 15C27.5 16.7292 27.1719 18.3542 26.5156 19.875C25.8594 21.3958 24.9687 22.7187 23.8437 23.8437C22.7187 24.9687 21.3958 25.8594 19.875 26.5156C18.3542 27.1719 16.7292 27.5 15 27.5ZM15 25C17.7917 25 20.1562 24.0312 22.0937 22.0937C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0937 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0937C9.84375 24.0312 12.2083 25 15 25Z" fill="#10B981" />
                </svg>
              </div>
            </div>
            <DialogTitle
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] leading-[36px] text-center"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Feedback Submitted Successfully!
            </DialogTitle>
            <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22.5px] text-center">
              Your counselling feedback has been recorded successfully.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={handleCloseSuccessPopup}
            className="w-full h-[50px] bg-gradient-to-b from-[#1a4d8f] to-[#153d73] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] leading-[22.5px] hover:shadow-lg transition-all mt-6"
          >
            Back to Profile
          </Button>
        </DialogContent>
      </Dialog>

      {/* Error Popup */}
      <Dialog open={showErrorPopup} onOpenChange={setShowErrorPopup}>
        <DialogContent className="sm:max-w-md bg-white rounded-[24px] p-8">
          <DialogHeader className="items-center text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#fff5f5] flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-[#fb2c36]" />
              </div>
            </div>
            <DialogTitle
              className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[24px] mb-2"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Incomplete Form
            </DialogTitle>
            <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[15px] mb-6">
              Please fill in all required fields (Status and Comments) before submitting the form.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowErrorPopup(false)}
            className="w-full h-[48px] bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] hover:bg-[#153d73] transition-colors"
          >
            Got it
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}