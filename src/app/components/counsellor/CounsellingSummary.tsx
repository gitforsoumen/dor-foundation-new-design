import { ArrowLeft, Edit, CheckCircle2, Calendar, User } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface CounsellingSummaryProps {
  studentId: string;
  onBack: () => void;
}

// Mock counselling data
const mockCounsellingData = {
  studentName: "Priya Sharma",
  studentId: "STU-2024-001",
  applicationId: "APP-2024-001",
  counsellorName: "Amit Das",
  submissionDate: "18 January 2024",
  submissionTime: "4:30 PM",
  data: {
    behavior: "Priya demonstrates excellent communication skills and displays high confidence during interactions. She is articulate, polite, and maintains good eye contact. Her interpersonal skills are strong, and she shows maturity beyond her years. She is respectful towards authority figures and shows empathy when discussing social issues.",
    familyBackground: "Priya comes from a middle-class family. Her father is a business owner running a small retail shop, and her mother is a school teacher. The family is supportive of her education and encourages her academic pursuits. She has one younger sibling in high school. The family maintains strong values and provides a stable home environment.",
    educationalGoals: "Priya has clear career aspirations in Computer Science and aims to work in software development. She is highly motivated and passionate about technology. She has demonstrated consistent academic excellence and shows genuine interest in learning. Her long-term goal is to pursue higher education and contribute to innovative tech solutions.",
    financialAssessment: "The family's combined annual income is around ₹12 lakhs. While they can manage basic expenses, funding higher education presents a financial challenge. The father's business has moderate income, and the mother's teaching salary is stable but limited. Financial assistance would significantly ease the burden and allow Priya to focus fully on her studies without part-time work.",
    recommendation: "Highly Recommended",
    additionalNotes: "Priya is an exceptional candidate who would benefit greatly from the scholarship. She has the potential to excel in her chosen field and give back to society. Her dedication, combined with financial support, would help her achieve her dreams."
  }
};

export default function CounsellingSummary({ studentId, onBack }: CounsellingSummaryProps) {
  const data = mockCounsellingData;

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "Highly Recommended":
        return "bg-[#d1fae5] text-[#065f46] border-0";
      case "Recommended":
        return "bg-[#dbeafe] text-[#1e40af] border-0";
      case "Recommended with Conditions":
        return "bg-[#fef3c7] text-[#92400e] border-0";
      case "Not Recommended":
        return "bg-[#fee2e2] text-[#991b1b] border-0";
      default:
        return "bg-gray-100 text-gray-800 border-0";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6f8fc] via-[#ffffff] to-[#fef8f3] p-4 md:p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 h-[44px] px-4 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:bg-[#f6f8fc]"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Students
          </Button>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1
                className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[28px] sm:text-[36px] mb-2"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Counselling Summary
              </h1>
              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px] mb-1">
                {data.studentName}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                  {data.studentId}
                </p>
                <span className="text-[#9ca3af]">•</span>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                  {data.applicationId}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              className="h-[48px] px-6 rounded-[100px] border-[#1a4d8f] text-[#1a4d8f] hover:bg-[#f6f8fc] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] whitespace-nowrap"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Form
            </Button>
          </div>
        </div>

        {/* Submission Info Card */}
        <Card className="bg-gradient-to-r from-[#25c196]/10 to-[#25c196]/5 p-6 rounded-[12px] border border-[#25c196]/20 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-[48px] h-[48px] rounded-[12px] bg-[#25c196] flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#065f46] text-[18px] mb-2">
                Counselling Completed Successfully
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#25c196]" />
                  <div>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#065f46] text-[13px]">
                      Submitted on
                    </p>
                    <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#065f46] text-[14px]">
                      {data.submissionDate} at {data.submissionTime}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[#25c196]" />
                  <div>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#065f46] text-[13px]">
                      Counsellor
                    </p>
                    <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#065f46] text-[14px]">
                      {data.counsellorName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Counselling Details */}
        <div className="space-y-6">
          {/* Recommendation Badge */}
          <Card className="bg-white p-6 rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="flex items-center justify-between">
              <h2
                className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[20px]"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Counsellor Recommendation
              </h2>
              <Badge
                className={`${getRecommendationColor(data.data.recommendation)} font-['Wix_Madefor_Text:Bold',sans-serif] text-[12px] px-4 py-2 rounded-[8px]`}
              >
                {data.data.recommendation}
              </Badge>
            </div>
          </Card>

          {/* Student Behavior & Communication Skills */}
          <Card className="bg-white p-6 rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[20px] mb-4"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Student Behavior & Communication Skills
            </h2>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[24px]">
              {data.data.behavior}
            </p>
          </Card>

          {/* Family Background */}
          <Card className="bg-white p-6 rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[20px] mb-4"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Family Background
            </h2>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[24px]">
              {data.data.familyBackground}
            </p>
          </Card>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Educational Goals & Motivation */}
            <Card className="bg-white p-6 rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
              <h2
                className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[18px] mb-4"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Educational Goals & Motivation
              </h2>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[22px]">
                {data.data.educationalGoals}
              </p>
            </Card>

            {/* Financial Assessment */}
            <Card className="bg-white p-6 rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
              <h2
                className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[18px] mb-4"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Financial Assessment
              </h2>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[22px]">
                {data.data.financialAssessment}
              </p>
            </Card>
          </div>

          {/* Additional Notes */}
          {data.data.additionalNotes && (
            <Card className="bg-gradient-to-r from-[#fef8f3] to-[#ffffff] p-6 rounded-[12px] border border-[#f5e6d9]">
              <h2
                className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[20px] mb-4"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Additional Notes
              </h2>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[24px]">
                {data.data.additionalNotes}
              </p>
            </Card>
          )}
        </div>

        {/* Back Button at Bottom */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={onBack}
            className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[48px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px]"
          >
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}