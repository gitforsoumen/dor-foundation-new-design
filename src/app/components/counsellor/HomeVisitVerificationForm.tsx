import { useState } from "react";
import { ArrowLeft, Upload, X, FileText, Trash2, AlertCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import svgPaths from "../../imports/svg-6ocdxqliw6";
import trashIconPaths from "../../imports/svg-sbtrf0mqod";

interface HomeVisitVerificationFormProps {
  studentId: string;
  studentName: string;
  onBack: () => void;
}

export default function HomeVisitVerificationForm({
  studentId,
  studentName,
  onBack
}: HomeVisitVerificationFormProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [submissionComments, setSubmissionComments] = useState("");
  const [submissionDocuments, setSubmissionDocuments] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>({});
  const [dragActive, setDragActive] = useState(false);
  
  const [formData, setFormData] = useState({
    surveyor1Name: "",
    surveyor1Association: "",
    surveyor2Name: "",
    surveyor2Association: "",
    houseDescription: "",
    hasOtherHouse: "",
    otherHouseVerification: "",
    otherHouseComment: "",
    inPersonVerificationChecked: "",
    neighbourFeedback: "",
    surveyorRemarks: "",
    shopLandIncome: "",
    shopLandComment: "",
    gpsPhotoTaken: "",
    gpsPhotoUploaded: "",
    recommendation: "",
    recommendationReason: "",
    surveyor1Signature: "",
    surveyor1Location: "",
    surveyor1Date: "",
    surveyor2Signature: "",
    surveyor2Location: "",
    surveyor2Date: "",
    candidateSignature: "",
    candidateLocation: "",
    candidateDate: "",
    parentGuardianSignature: "",
    parentGuardianLocation: "",
    parentGuardianDate: "",
    commonLocation: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Show submission popup instead of confirmation
    setShowSubmissionPopup(true);
  };

  const handleFinalSubmit = () => {
    // Validate required fields
    if (!submissionStatus || !submissionComments.trim()) {
      setShowErrorPopup(true);
      return;
    }

    console.log("Home Visit Verification submitted:", formData);
    console.log("Status:", submissionStatus);
    console.log("Comments:", submissionComments);
    console.log("Documents:", submissionDocuments);
    
    // Show success confirmation
    setShowSubmissionPopup(false);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    onBack();
    setShowConfirmation(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const currentLength = submissionDocuments.length;
      
      files.forEach((file, idx) => {
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
      
      setSubmissionDocuments(prev => [...prev, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const fileToRemove = submissionDocuments[index];
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
      const currentLength = submissionDocuments.length;
      
      fileArray.forEach((file, idx) => {
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
      
      setSubmissionDocuments(prev => [...prev, ...fileArray]);
    }
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:text-[#a85613] hover:bg-transparent p-0"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Student Profile
          </Button>
          <div className="flex items-center gap-3 mb-2">
            <div>
              <h1
                className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px]"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Home Visit Verification
              </h1>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                {studentName} • {studentId}
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* 1. Details of Surveyors */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              1. Details of Surveyors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Name of Surveyor 1 <span className="text-[#ef4444]">*</span>
                </Label>
                <Input
                  value={formData.surveyor1Name}
                  onChange={(e) => handleInputChange("surveyor1Name", e.target.value)}
                  placeholder="Enter surveyor 1 name"
                  className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Association with DOR <span className="text-[#ef4444]">*</span>
                </Label>
                <Input
                  value={formData.surveyor1Association}
                  onChange={(e) => handleInputChange("surveyor1Association", e.target.value)}
                  placeholder="Enter association with DOR"
                  className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Name of Surveyor 2 <span className="text-[#ef4444]">*</span>
                </Label>
                <Input
                  value={formData.surveyor2Name}
                  onChange={(e) => handleInputChange("surveyor2Name", e.target.value)}
                  placeholder="Enter surveyor 2 name"
                  className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Association with DOR <span className="text-[#ef4444]">*</span>
                </Label>
                <Input
                  value={formData.surveyor2Association}
                  onChange={(e) => handleInputChange("surveyor2Association", e.target.value)}
                  placeholder="Enter association with DOR"
                  className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                />
              </div>
            </div>
          </Card>

          {/* 2. House Description */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              2. House Description
            </h2>
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                House Description <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                value={formData.houseDescription}
                onChange={(e) => handleInputChange("houseDescription", e.target.value)}
                placeholder="Describe the house structure, condition, number of rooms, etc."
                className="min-h-[120px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
              />
            </div>
          </Card>

          {/* 3. Additional House Check */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              3. Additional House Check
            </h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Have you verified whether the candidate has any other house in the village? If they do, please verify it through a village home video. <span className="text-[#ef4444]">*</span>
                </Label>
                <RadioGroup
                  value={formData.hasOtherHouse}
                  onValueChange={(value) => handleInputChange("hasOtherHouse", value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="hasOtherHouse-yes" />
                    <Label
                      htmlFor="hasOtherHouse-yes"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="hasOtherHouse-no" />
                    <Label
                      htmlFor="hasOtherHouse-no"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.hasOtherHouse === "yes" && (
                <div className="space-y-2">
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Verify via village home video
                  </Label>
                  <Textarea
                    value={formData.otherHouseVerification}
                    onChange={(e) => handleInputChange("otherHouseVerification", e.target.value)}
                    placeholder="Describe verification process and findings from village home video"
                    className="min-h-[100px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Comment
                </Label>
                <Textarea
                  value={formData.otherHouseComment}
                  onChange={(e) => handleInputChange("otherHouseComment", e.target.value)}
                  placeholder="Add any additional comments"
                  className="min-h-[80px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                />
              </div>
            </div>
          </Card>

          {/* 4. In-Person Verification Check */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              4. In-Person Verification Check
            </h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Have you checked the details from the in-person verification, and have you reviewed the home video as well? <span className="text-[#ef4444]">*</span>
                </Label>
                <RadioGroup
                  value={formData.inPersonVerificationChecked}
                  onValueChange={(value) => handleInputChange("inPersonVerificationChecked", value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="inPersonCheck-yes" />
                    <Label
                      htmlFor="inPersonCheck-yes"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="inPersonCheck-no" />
                    <Label
                      htmlFor="inPersonCheck-no"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </Card>

          {/* 5. Neighbour Feedback */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              5. Neighbour Feedback
            </h2>
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Comments from neighbours <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                value={formData.neighbourFeedback}
                onChange={(e) => handleInputChange("neighbourFeedback", e.target.value)}
                placeholder="Describe feedback received from neighbours about the candidate and family"
                className="min-h-[120px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
              />
            </div>
          </Card>

          {/* 6. Remark by Surveyors */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              6. Remark by Surveyors
            </h2>
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Remarks <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                value={formData.surveyorRemarks}
                onChange={(e) => handleInputChange("surveyorRemarks", e.target.value)}
                placeholder="Add remarks from surveyors"
                className="min-h-[120px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
              />
            </div>
          </Card>

          {/* 7. Shop / Land Income Verification */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              7. Shop / Land Income Verification
            </h2>
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                If the candidate has a shop or land, you are required to verify how much income is generated from it.
              </Label>
              <Textarea
                value={formData.shopLandIncome}
                onChange={(e) => handleInputChange("shopLandIncome", e.target.value)}
                placeholder="Describe shop/land ownership and estimated income generated"
                className="min-h-[100px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
              />
            </div>
          </Card>

          {/* 8. GPS Photo Confirmation */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              8. GPS Photo Confirmation
            </h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  After the home visit, did you take a GPS photograph with all the family members? <span className="text-[#ef4444]">*</span>
                </Label>
                <RadioGroup
                  value={formData.gpsPhotoTaken}
                  onValueChange={(value) => handleInputChange("gpsPhotoTaken", value)}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="gpsPhotoTaken-yes" />
                    <Label
                      htmlFor="gpsPhotoTaken-yes"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="gpsPhotoTaken-no" />
                    <Label
                      htmlFor="gpsPhotoTaken-no"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.gpsPhotoTaken === "yes" && (
                <div className="space-y-3">
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Have you uploaded it in the App/WhatsApp Group? <span className="text-[#ef4444]">*</span>
                  </Label>
                  <RadioGroup
                    value={formData.gpsPhotoUploaded}
                    onValueChange={(value) => handleInputChange("gpsPhotoUploaded", value)}
                    className="flex gap-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="gpsPhotoUploaded-yes" />
                      <Label
                        htmlFor="gpsPhotoUploaded-yes"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="gpsPhotoUploaded-no" />
                      <Label
                        htmlFor="gpsPhotoUploaded-no"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              )}
            </div>
          </Card>

          {/* 9. Surveyor Recommendation */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              9. Surveyor Recommendation
            </h2>
            <div className="space-y-6">
              <div className="space-y-3">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Recommendation <span className="text-[#ef4444]">*</span>
                </Label>
                <RadioGroup
                  value={formData.recommendation}
                  onValueChange={(value) => handleInputChange("recommendation", value)}
                  className="flex flex-wrap gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="strongly-recommended" id="rec-strongly" />
                    <Label
                      htmlFor="rec-strongly"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Strongly Recommended
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="recommended" id="rec-recommended" />
                    <Label
                      htmlFor="rec-recommended"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Recommended
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="waitlisted" id="rec-waitlisted" />
                    <Label
                      htmlFor="rec-waitlisted"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Waitlisted
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-recommended" id="rec-not" />
                    <Label
                      htmlFor="rec-not"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Not Recommended
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Reason <span className="text-[#ef4444]">*</span>
                </Label>
                <Textarea
                  value={formData.recommendationReason}
                  onChange={(e) => handleInputChange("recommendationReason", e.target.value)}
                  placeholder="Provide detailed reason for your recommendation"
                  className="min-h-[120px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif] resize-none"
                />
              </div>
            </div>
          </Card>

          {/* 10. Signatures */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              10. Signatures
            </h2>
            <div className="space-y-8">
              {/* Surveyor 2 */}
              <div className="space-y-4">
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px]">
                  Surveyor 2
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Name <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      value={formData.surveyor2Signature}
                      onChange={(e) => handleInputChange("surveyor2Signature", e.target.value)}
                      placeholder="Enter name"
                      className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Date <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.surveyor2Date}
                      onChange={(e) => handleInputChange("surveyor2Date", e.target.value)}
                      className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                    />
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Signature */}
              <div className="space-y-4">
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px]">
                  Parent / Guardian
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Name <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      value={formData.parentGuardianSignature}
                      onChange={(e) => handleInputChange("parentGuardianSignature", e.target.value)}
                      placeholder="Enter parent/guardian name"
                      className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Date <span className="text-[#ef4444]">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={formData.parentGuardianDate}
                      onChange={(e) => handleInputChange("parentGuardianDate", e.target.value)}
                      className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                    />
                  </div>
                </div>
              </div>

              {/* Common Location */}
              <div className="space-y-2">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Location <span className="text-[#ef4444]">*</span>
                </Label>
                <Input
                  value={formData.commonLocation}
                  onChange={(e) => handleInputChange("commonLocation", e.target.value)}
                  placeholder="Enter location"
                  className="h-[44px] rounded-[10px] border-[#d0d5dd] font-['Wix_Madefor_Text:Regular',sans-serif]"
                />
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4 pb-8">
            <Button
              onClick={onBack}
              className="h-[52px] px-12 bg-white border-2 border-[#e2e8f2] text-[#4d4b48] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[16px] hover:bg-[#f6f8fc] transition-colors"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="h-[52px] px-12 bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[16px] hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Submit Verification
            </Button>
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white border-[#aeaeae] border-[0.8px] border-solid rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] max-w-md w-full p-8">
              {/* Success Icon */}
              <div className="flex justify-center mb-10">
                <div className="w-20 h-20 rounded-full bg-[#d1faec] flex items-center justify-center">
                  <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 30 30">
                    <path d="M13.25 20.75L22.0625 11.9375L20.3125 10.1875L13.25 17.25L9.6875 13.6875L7.9375 15.4375L13.25 20.75ZM15 27.5C13.2708 27.5 11.6458 27.1719 10.125 26.5156C8.60417 25.8594 7.28125 24.9687 6.15625 23.8437C5.03125 22.7187 4.14062 21.3958 3.48437 19.875C2.82812 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82812 11.6458 3.48437 10.125C4.14062 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14062 10.125 3.48437C11.6458 2.82812 13.2708 2.5 15 2.5C16.7292 2.5 18.3542 2.82812 19.875 3.48437C21.3958 4.14062 22.7187 5.03125 23.8437 6.15625C24.9687 7.28125 25.8594 8.60417 26.5156 10.125C27.1719 11.6458 27.5 13.2708 27.5 15C27.5 16.7292 27.1719 18.3542 26.5156 19.875C25.8594 21.3958 24.9687 22.7187 23.8437 23.8437C22.7187 24.9687 21.3958 25.8594 19.875 26.5156C18.3542 27.1719 16.7292 27.5 15 27.5ZM15 25C17.7917 25 20.1562 24.0312 22.0937 22.0937C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0937 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0937C9.84375 24.0312 12.2083 25 15 25Z" fill="#10B981" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] leading-[36px] text-center mb-10"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Feedback Submitted Successfully!
              </h3>

              {/* Description */}
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22.5px] text-center mb-10">
                Your home visit feedback has been recorded successfully.
              </p>

              {/* Button */}
              <Button
                onClick={handleConfirm}
                className="w-full h-[50px] bg-gradient-to-b from-[#1a4d8f] to-[#153d73] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] leading-[22.5px] hover:shadow-lg transition-all"
              >
                Back to Profile
              </Button>
            </div>
          </div>
        )}

        {/* Submission Popup */}
        {showSubmissionPopup && (
          <Dialog open={showSubmissionPopup} onOpenChange={setShowSubmissionPopup}>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] bg-white rounded-[12px] border border-[#e2e8f2] flex flex-col">
              <DialogHeader className="flex-shrink-0">
                <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Submit Home Visit Verification
                </DialogTitle>
                <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                  Please provide the final status and feedback for this home visit verification
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 py-4 overflow-y-auto flex-1">
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
                  <textarea
                    value={submissionComments}
                    onChange={(e) => setSubmissionComments(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                    placeholder="Enter your comments or feedback"
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
                        id="home-visit-documents"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <label htmlFor="home-visit-documents" className="cursor-pointer block">
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
                          id="home-visit-documents-add"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                        <label htmlFor="home-visit-documents-add" className="cursor-pointer block">
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

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t border-[#e2e8f2]">
                <Button
                  onClick={() => setShowSubmissionPopup(false)}
                  className="h-[44px] px-6 bg-white border border-[#e2e8f2] text-[#4d4b48] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#f6f8fc]"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleFinalSubmit}
                  className="h-[44px] px-6 bg-[#1a4d8f] hover:bg-[#153d73] text-white rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px]"
                >
                  Submit Form
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Error Popup */}
        {showErrorPopup && (
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
        )}
      </div>
    </div>
  );
}