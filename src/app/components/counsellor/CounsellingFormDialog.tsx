import { useState } from "react";
import { Save, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { toast } from "sonner";

interface CounsellingFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    behavior: string;
    familyBackground: string;
    educationalGoals: string;
    financialAssessment: string;
    recommendation: string;
    additionalNotes: string;
  }) => void;
  studentName: string;
}

export default function CounsellingFormDialog({
  isOpen,
  onClose,
  onSubmit,
  studentName
}: CounsellingFormDialogProps) {
  const [behavior, setBehavior] = useState("");
  const [familyBackground, setFamilyBackground] = useState("");
  const [educationalGoals, setEducationalGoals] = useState("");
  const [financialAssessment, setFinancialAssessment] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSaveDraft = () => {
    toast.success("Counselling form saved as draft!");
    onClose();
  };

  const handleSubmit = () => {
    if (!behavior || !familyBackground || !educationalGoals || !financialAssessment || !recommendation) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Counselling form submitted successfully!");
    onSubmit({
      behavior,
      familyBackground,
      educationalGoals,
      financialAssessment,
      recommendation,
      additionalNotes
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] bg-white rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle
            className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] sm:text-[28px]"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Counselling Form
          </DialogTitle>
          <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
            Complete the counselling assessment for {studentName}
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Behavior & Communication Skills */}
            <div className="md:col-span-2">
              <Label
                htmlFor="behavior"
                className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 flex items-center gap-1"
              >
                Student Behavior & Communication Skills
                <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                id="behavior"
                value={behavior}
                onChange={(e) => setBehavior(e.target.value)}
                placeholder="Describe the student's behavior, communication style, confidence level, and interpersonal skills..."
                className="min-h-[120px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none"
              />
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
                {behavior.length}/500 characters
              </p>
            </div>

            {/* Family Background */}
            <div className="md:col-span-2">
              <Label
                htmlFor="family"
                className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 flex items-center gap-1"
              >
                Family Background
                <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                id="family"
                value={familyBackground}
                onChange={(e) => setFamilyBackground(e.target.value)}
                placeholder="Describe family dynamics, support system, socio-economic background, and any challenges..."
                className="min-h-[120px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none"
              />
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
                {familyBackground.length}/500 characters
              </p>
            </div>

            {/* Educational Goals & Motivation */}
            <div>
              <Label
                htmlFor="goals"
                className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 flex items-center gap-1"
              >
                Educational Goals & Motivation
                <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                id="goals"
                value={educationalGoals}
                onChange={(e) => setEducationalGoals(e.target.value)}
                placeholder="Describe the student's career aspirations, academic goals, and motivation level..."
                className="min-h-[140px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none"
              />
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
                {educationalGoals.length}/500 characters
              </p>
            </div>

            {/* Financial Assessment */}
            <div>
              <Label
                htmlFor="financial"
                className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 flex items-center gap-1"
              >
                Financial Assessment
                <span className="text-[#ef4444]">*</span>
              </Label>
              <Textarea
                id="financial"
                value={financialAssessment}
                onChange={(e) => setFinancialAssessment(e.target.value)}
                placeholder="Assess the family's financial situation and the need for scholarship support..."
                className="min-h-[140px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none"
              />
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
                {financialAssessment.length}/500 characters
              </p>
            </div>

            {/* Additional Notes */}
            <div className="md:col-span-2">
              <Label
                htmlFor="notes"
                className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2"
              >
                Additional Notes <span className="text-[#969696]">(Optional)</span>
              </Label>
              <Textarea
                id="notes"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Any other relevant observations or recommendations..."
                className="min-h-[100px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] resize-none"
              />
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
                {additionalNotes.length}/300 characters
              </p>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-gradient-to-r from-[#f6f8fc] to-[#fef8f3] rounded-[12px] border border-[#e2e8f2]">
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-[20px]">
              <strong>Note:</strong> All information provided in this form will be reviewed by the admin team as part of the scholarship evaluation process. Please ensure accuracy and objectivity in your assessment.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e2e8f2]">
          <Button
            onClick={handleSaveDraft}
            variant="outline"
            className="flex-1 h-[48px] rounded-[100px] border-[#e2e8f2] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#f6f8fc]"
          >
            <Save className="w-4 h-4 mr-2" />
            Save as Draft
          </Button>
          <Button
            onClick={handleSubmit}
            className="flex-1 bg-[#a85613] hover:bg-[#8d4a10] text-white h-[48px] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px]"
          >
            <Send className="w-4 h-4 mr-2" />
            Submit Counselling Form
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}