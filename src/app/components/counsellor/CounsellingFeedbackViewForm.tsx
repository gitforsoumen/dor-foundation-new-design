import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import svgPaths from "../../imports/svg-ifzh26tyx2";

interface CounsellingFeedbackViewFormProps {
  studentId: string;
  studentName: string;
  applicationId: string;
  onBack: () => void;
}

export default function CounsellingFeedbackViewForm({
  studentId,
  studentName,
  applicationId,
  onBack
}: CounsellingFeedbackViewFormProps) {
  // Mock pre-filled data
  const formData = {
    ratings: {
      courseAwareness: 4,
      communicationEfficiency: 5,
      spokenEnglish: 3,
      adaptability: 4,
      overallConfidence: 5
    },
    descriptive: {
      familyFinancial: "The student comes from a modest family background. Father works as a driver with limited income. Mother is a homemaker. They are very supportive of the student's education despite financial constraints.",
      hobbies: "The student has a strong interest in coding and technology. Actively participates in school computer club activities and has won several coding competitions at the district level.",
      supportNeeds: "Student may need additional support in building confidence for public speaking and presentation skills. Also needs guidance in time management for balancing academics and extracurricular activities.",
      courseSuggestions: "Based on the student's interests and academic performance, Computer Science Engineering or Information Technology would be excellent choices. The student shows strong analytical and problem-solving abilities."
    },
    recommendation: "Strongly Recommended",
    finalRemarks: "Priya is a highly motivated student with clear academic goals. She demonstrates excellent potential and commitment to her studies. Her family is very supportive, and she has a strong understanding of her chosen field. I strongly recommend her for the scholarship program.",
    counselor: {
      name: "Dr. Rajesh Kumar",
      date: "15 Jan 2024"
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="w-10 h-10 flex items-center justify-center">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
              <path
                d={svgPaths.p1343a100}
                fill={star <= rating ? "#FFA500" : "none"}
                stroke={star <= rating ? "#FFA500" : "#D1D5DB"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.66667"
              />
            </svg>
          </div>
        ))}
      </div>
    );
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
            Counselling Feedback
          </h1>

          {/* Info Banner */}
          <div className="bg-[#ecf4ff] border border-[rgba(26,77,143,0.2)] rounded-[10px] p-4 mb-8">
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] mb-2">
              Please provide your feedback on the counselling session to help us understand and support the students better.
            </p>
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px]">
              1 = Needs Improvement | 2 = Below Average | 3 = Satisfactory | 4 = Good | 5 = Excellent
            </p>
          </div>
        </div>

        {/* Main Form - Separate Cards for Each Section */}
        <div className="space-y-6">
          {/* Student Information */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Student Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ReadOnlyField label="Name of the student" value={studentName} />
              <ReadOnlyField label="Application No" value={applicationId} />
            </div>
          </Card>

          {/* Rating Sections */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Rating Sections
            </h2>
            <div className="space-y-6">
              {/* Course Awareness */}
              <div>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Course Awareness
                </p>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mb-2">
                  Does the candidate understand the course they are interested in?
                </p>
                {renderStars(formData.ratings.courseAwareness)}
              </div>

              {/* Communication Efficiency */}
              <div>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Communication Efficiency
                </p>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mb-2">
                  How well does the candidate express their thoughts during the session?
                </p>
                {renderStars(formData.ratings.communicationEfficiency)}
              </div>

              {/* Spoken English */}
              <div>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Spoken English
                </p>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mb-2">
                  How fluent and comfortable is the candidate in speaking English?
                </p>
                {renderStars(formData.ratings.spokenEnglish)}
              </div>

              {/* Adaptability */}
              <div>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Adaptability (School to Private College)
                </p>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mb-2">
                  Can the candidate adjust from a government/budget private school to a private college environment? (1 = Very Difficult, 5 = Very Easy)
                </p>
                {renderStars(formData.ratings.adaptability)}
              </div>

              {/* Overall Confidence */}
              <div>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Overall Confidence
                </p>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mb-2">
                  What is your impression of the candidate's confidence?
                </p>
                {renderStars(formData.ratings.overallConfidence)}
              </div>
            </div>
          </Card>

          {/* Descriptive Questions */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Descriptive Questions
            </h2>
            <div className="space-y-6">
              <ReadOnlyField 
                label="Any specific family/financial situation of the student that is worth mentioning separately" 
                value={formData.descriptive.familyFinancial} 
              />
              <ReadOnlyField 
                label="Hobbies/interests/passions worth pursuing academically or professionally?" 
                value={formData.descriptive.hobbies} 
              />
              <ReadOnlyField 
                label="Any areas where the candidate needs support (discipline, emotional strength, etc.)?" 
                value={formData.descriptive.supportNeeds} 
              />
              <ReadOnlyField 
                label="Course suggestions" 
                value={formData.descriptive.courseSuggestions} 
              />
            </div>
          </Card>

          {/* Recommendation */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Recommendation
            </h2>
            <ReadOnlyField 
              label="Should this candidate move to the next stage (home visit)?" 
              value={formData.recommendation} 
            />
          </Card>

          {/* Final Remarks */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Final Remarks
            </h2>
            <ReadOnlyField 
              label="Remarks or any final thoughts or observations?" 
              value={formData.finalRemarks} 
            />
          </Card>

          {/* Counselor Details */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Counselor Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ReadOnlyField label="Name of the Counselor" value={formData.counselor.name} />
              <ReadOnlyField label="Date" value={formData.counselor.date} />
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