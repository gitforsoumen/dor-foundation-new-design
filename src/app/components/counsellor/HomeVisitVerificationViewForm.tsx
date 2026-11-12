import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface HomeVisitVerificationViewFormProps {
  studentId: string;
  studentName: string;
  onBack: () => void;
}

export default function HomeVisitVerificationViewForm({
  studentId,
  studentName,
  onBack
}: HomeVisitVerificationViewFormProps) {
  // Mock pre-filled data
  const formData = {
    surveyor1Name: "Rajesh Kumar",
    surveyor1Association: "DOR Volunteer",
    surveyor2Name: "Amit Verma",
    surveyor2Association: "DOR Alumni",
    houseDescription: "The house is a modest single-story structure with concrete walls and a tin roof. It consists of 3 rooms - one living area, one bedroom, and a small kitchen. The overall condition is adequate but shows signs of age. The family has basic furniture and the student has a small study area near the window for natural light.",
    hasOtherHouse: "No",
    otherHouseVerification: "",
    otherHouseComment: "Verified with neighbors and local community. The family does not own any other property in the village or nearby areas.",
    inPersonVerificationChecked: "Yes",
    neighbourFeedback: "Neighbors provided positive feedback about the family. They confirmed the family's modest financial situation and mentioned that the student is hardworking and well-behaved. The father is known in the community as a reliable driver, and the family is respected despite their limited means.",
    surveyorRemarks: "The home visit confirms the financial need stated in the application. The family lives in modest conditions with limited resources. Both parents are supportive of the student's education despite financial constraints. The student has a dedicated study space and shows strong commitment to academics.",
    shopLandIncome: "The family does not own any shop or agricultural land. Their primary income source is the father's work as a driver, earning approximately ₹15,000 per month.",
    shopLandComment: "No additional income from business or land ownership.",
    gpsPhotoTaken: "Yes",
    gpsPhotoUploaded: "Yes",
    recommendation: "Strongly Recommended",
    recommendationReason: "Based on the home visit, the candidate demonstrates genuine financial need and strong academic potential. The family is very supportive despite limited resources, and the student has a clear vision for her future. The living conditions and neighborhood feedback confirm the information provided in the application. This candidate is highly suitable for the scholarship program.",
    surveyor1Signature: "Rajesh Kumar",
    surveyor1Location: "Bangalore",
    surveyor1Date: "18 Jan 2024",
    surveyor2Signature: "Amit Verma",
    surveyor2Location: "Bangalore",
    surveyor2Date: "18 Jan 2024",
    candidateSignature: "Priya Sharma",
    candidateLocation: "Bangalore",
    candidateDate: "18 Jan 2024",
    parentGuardianSignature: "Rajesh Sharma",
    parentGuardianLocation: "Bangalore",
    parentGuardianDate: "18 Jan 2024",
    commonLocation: "Bangalore"
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1280px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-6 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:text-[#a85613] hover:bg-transparent p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>

          {/* Page Title */}
          <h1
            className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[36px] mb-4"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Home Visit Verification
          </h1>

          {/* Student Info */}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] mb-6">
            {studentName} • {studentId}
          </p>

          {/* Info Banner */}
          <div className="bg-[#ecf4ff] border border-[rgba(26,77,143,0.2)] rounded-[10px] p-4">
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
              This form has been submitted and is in read-only mode. All information below was provided during the home visit verification.
            </p>
          </div>
        </div>

        {/* Main Form - Read-only */}
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
              <ReadOnlyField label="Name of Surveyor 1" value={formData.surveyor1Name} />
              <ReadOnlyField label="Association with DOR" value={formData.surveyor1Association} />
              <ReadOnlyField label="Name of Surveyor 2" value={formData.surveyor2Name} />
              <ReadOnlyField label="Association with DOR" value={formData.surveyor2Association} />
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
            <ReadOnlyField label="House Description" value={formData.houseDescription} />
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
              <ReadOnlyField 
                label="Have you verified whether the candidate has any other house in the village?" 
                value={formData.hasOtherHouse} 
              />
              {formData.hasOtherHouse === "Yes" && formData.otherHouseVerification && (
                <ReadOnlyField 
                  label="Village home video verification details" 
                  value={formData.otherHouseVerification} 
                />
              )}
              {formData.otherHouseComment && (
                <ReadOnlyField label="Comment" value={formData.otherHouseComment} />
              )}
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
            <ReadOnlyField 
              label="Have you checked the details from the in-person verification and reviewed the home video?" 
              value={formData.inPersonVerificationChecked} 
            />
          </Card>

          {/* 5. Neighbour Feedback */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              5. Neighbour Feedback
            </h2>
            <ReadOnlyField label="Comments from neighbours" value={formData.neighbourFeedback} />
          </Card>

          {/* 6. Remark by Surveyors */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              6. Remark by Surveyors
            </h2>
            <ReadOnlyField label="Remarks" value={formData.surveyorRemarks} />
          </Card>

          {/* 7. Shop / Land Income Verification */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              7. Shop / Land Income Verification
            </h2>
            <ReadOnlyField 
              label="Shop/land ownership and income details" 
              value={formData.shopLandIncome} 
            />
            {formData.shopLandComment && (
              <div className="mt-6">
                <ReadOnlyField label="Additional comments" value={formData.shopLandComment} />
              </div>
            )}
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
              <ReadOnlyField 
                label="GPS photograph taken with family members?" 
                value={formData.gpsPhotoTaken} 
              />
              {formData.gpsPhotoTaken === "Yes" && (
                <ReadOnlyField 
                  label="Uploaded in App/WhatsApp Group?" 
                  value={formData.gpsPhotoUploaded} 
                />
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
              <ReadOnlyField label="Recommendation" value={formData.recommendation} />
              <ReadOnlyField label="Reason for recommendation" value={formData.recommendationReason} />
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
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Surveyor 2
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ReadOnlyField label="Name" value={formData.surveyor2Signature} />
                  <ReadOnlyField label="Date" value={formData.surveyor2Date} />
                </div>
              </div>

              {/* Parent/Guardian */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Parent / Guardian
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ReadOnlyField label="Name" value={formData.parentGuardianSignature} />
                  <ReadOnlyField label="Date" value={formData.parentGuardianDate} />
                </div>
              </div>

              {/* Common Location */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Location
                </h3>
                <div className="max-w-[50%]">
                  <ReadOnlyField label="Location" value={formData.commonLocation} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Reusable read-only field component
function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
        {label}
      </p>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px] whitespace-pre-wrap">
        {value || "Not provided"}
      </p>
    </div>
  );
}