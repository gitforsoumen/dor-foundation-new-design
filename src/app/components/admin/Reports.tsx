import { useState } from "react";
import { Card } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

export default function Reports() {
  const [dateRange, setDateRange] = useState<string>("current-month");
  const [applicationStatus, setApplicationStatus] = useState<string>("all");
  const [volunteer, setVolunteer] = useState<string>("all");
  const [selectedReport, setSelectedReport] = useState<string>("total-applications");

  // Mock data for reports
  const totalApplicationsData = {
    total: 157,
    breakdown: [
      { month: "January", count: 18 },
      { month: "February", count: 22 },
      { month: "March", count: 25 },
      { month: "April", count: 20 },
      { month: "May", count: 19 },
      { month: "June", count: 16 },
      { month: "July", count: 12 },
      { month: "August", count: 8 },
      { month: "September", count: 7 },
      { month: "October", count: 4 },
      { month: "November", count: 3 },
      { month: "December", count: 3 },
    ],
  };

  const conversionRateData = [
    { stage: "Application Submitted → Under Review", rate: 95, total: 157, converted: 149 },
    { stage: "Under Review → Interview Scheduled", rate: 78, total: 149, converted: 116 },
    { stage: "Interview → Home Visit", rate: 85, total: 116, converted: 99 },
    { stage: "Home Visit → Counselling", rate: 88, total: 99, converted: 87 },
    { stage: "Counselling → Final Decision", rate: 72, total: 87, converted: 63 },
    { stage: "Final Decision → Admission", rate: 68, total: 63, converted: 43 },
  ];

  const documentCompletionData = {
    totalApplications: 157,
    completeDocuments: 145,
    incompleteDocuments: 12,
    percentageComplete: 92,
    breakdown: [
      { document: "Academic Transcripts", completed: 145, pending: 12, rate: 92 },
      { document: "Income Certificate", completed: 138, pending: 19, rate: 88 },
      { document: "Caste Certificate", completed: 150, pending: 7, rate: 96 },
      { document: "Aadhar Card", completed: 157, pending: 0, rate: 100 },
      { document: "Photo ID", completed: 154, pending: 3, rate: 98 },
      { document: "Bank Details", completed: 149, pending: 8, rate: 95 },
    ],
  };

  const counsellingSessionsData = {
    totalScheduled: 133,
    completed: 124,
    pending: 9,
    completionRate: 93,
    breakdown: [
      { type: "Initial Assessment", scheduled: 45, completed: 42, pending: 3 },
      { type: "Progress Review", scheduled: 38, completed: 35, pending: 3 },
      { type: "Final Counselling", scheduled: 28, completed: 28, pending: 0 },
      { type: "Family Counselling", scheduled: 22, completed: 19, pending: 3 },
    ],
  };

  const pendingReviewData = {
    total: 28,
    breakdown: [
      { stage: "Initial Review", count: 8, avgWaitDays: 2 },
      { stage: "Document Verification", count: 6, avgWaitDays: 4 },
      { stage: "Interview Evaluation", count: 5, avgWaitDays: 3 },
      { stage: "Home Visit Review", count: 4, avgWaitDays: 5 },
      { stage: "Counselling Review", count: 3, avgWaitDays: 2 },
      { stage: "Final Decision Pending", count: 2, avgWaitDays: 1 },
    ],
  };

  const volunteerLoadData = [
    { name: "Amit Das", students: 24, completed: 16, pending: 8, status: "Balanced" },
    { name: "Priya Sharma", students: 28, completed: 18, pending: 10, status: "High" },
    { name: "Rajesh Kumar", students: 22, completed: 15, pending: 7, status: "Balanced" },
    { name: "Sneha Patel", students: 19, completed: 14, pending: 5, status: "Low" },
    { name: "Vikram Singh", students: 26, completed: 17, pending: 9, status: "Balanced" },
    { name: "Meera Iyer", students: 20, completed: 13, pending: 7, status: "Balanced" },
  ];

  const acceptedRejectedData = {
    total: 157,
    accepted: 43,
    rejected: 31,
    pending: 83,
    acceptanceRate: 27,
    rejectionRate: 20,
    breakdown: [
      { category: "Accepted", count: 43, percentage: 27 },
      { category: "Rejected", count: 31, percentage: 20 },
      { category: "Under Review", count: 83, percentage: 53 },
    ],
  };

  const finalAdmissionsData = {
    totalAwarded: 43,
    breakdown: [
      { course: "Engineering", awarded: 18, applied: 65 },
      { course: "Medicine", awarded: 12, applied: 48 },
      { course: "Commerce", awarded: 8, applied: 28 },
      { course: "Arts", awarded: 5, applied: 16 },
    ],
    byCategory: [
      { category: "General", count: 15 },
      { category: "OBC", count: 12 },
      { category: "SC", count: 10 },
      { category: "ST", count: 6 },
    ],
  };

  const responseTimeData = {
    overall: 3.2,
    breakdown: [
      { metric: "Application Acknowledgment", avgDays: 1, target: 1, status: "On Track" },
      { metric: "Initial Review", avgDays: 3, target: 3, status: "On Track" },
      { metric: "Document Verification", avgDays: 5, target: 5, status: "On Track" },
      { metric: "Interview Scheduling", avgDays: 2, target: 2, status: "On Track" },
      { metric: "Final Decision Communication", avgDays: 1, target: 1, status: "On Track" },
    ],
  };

  const interviewData = {
    totalScheduled: 115,
    completed: 108,
    pending: 7,
    completionRate: 94,
    breakdown: [
      { week: "Week 1", scheduled: 28, completed: 26, pending: 2 },
      { week: "Week 2", scheduled: 32, completed: 30, pending: 2 },
      { week: "Week 3", scheduled: 25, completed: 24, pending: 1 },
      { week: "Week 4", scheduled: 30, completed: 28, pending: 2 },
    ],
  };

  const homeVisitData = {
    totalScheduled: 75,
    completed: 69,
    pending: 6,
    completionRate: 92,
    breakdown: [
      { week: "Week 1", scheduled: 18, completed: 16, pending: 2 },
      { week: "Week 2", scheduled: 22, completed: 20, pending: 2 },
      { week: "Week 3", scheduled: 15, completed: 15, pending: 0 },
      { week: "Week 4", scheduled: 20, completed: 18, pending: 2 },
    ],
  };

  const waitTimeData = [
    { stage: "Submission → Review", avgDays: 3, targetDays: 3, status: "On Track" },
    { stage: "Review → Interview", avgDays: 7, targetDays: 7, status: "On Track" },
    { stage: "Interview → Home Visit", avgDays: 5, targetDays: 5, status: "On Track" },
    { stage: "Home Visit → Counselling", avgDays: 6, targetDays: 7, status: "On Track" },
    { stage: "Counselling → Decision", avgDays: 10, targetDays: 10, status: "On Track" },
    { stage: "Decision → Admission", avgDays: 2, targetDays: 2, status: "On Track" },
  ];

  const dropoutRateData = {
    totalStarted: 157,
    totalDropped: 14,
    dropoutRate: 9,
    breakdown: [
      { stage: "After Application", count: 2, percentage: 14 },
      { stage: "After Interview", count: 3, percentage: 21 },
      { stage: "After Home Visit", count: 4, percentage: 29 },
      { stage: "After Counselling", count: 5, percentage: 36 },
    ],
    reasons: [
      { reason: "Did not respond to calls", count: 5 },
      { reason: "Took admission elsewhere", count: 4 },
      { reason: "Financial constraints resolved", count: 3 },
      { reason: "Course not available", count: 2 },
    ],
  };

  const handleDownloadExcel = (reportName: string) => {
    console.log(`Downloading ${reportName} as Excel...`);
    alert(`Downloading ${reportName} report as Excel file...`);
  };

  const renderSelectedReport = () => {
    switch (selectedReport) {
      case "total-applications":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Total Applications Received
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Track the total number of applications received
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Total Applications")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="mb-6">
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[16px] p-6 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] mb-2 opacity-90">
                    Total Applications
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[48px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {totalApplicationsData.total}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Month
                      </th>
                      <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Applications
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {totalApplicationsData.breakdown.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          {item.month}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] text-right">
                          {item.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "conversion-rate":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Conversion Rate Between Stages (%)
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Track conversion rates across application stages
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Conversion Rate")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="space-y-4">
                {conversionRateData.map((item, index) => (
                  <div key={index} className="bg-[#f6f8fc] rounded-[12px] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                        {item.stage}
                      </h3>
                      <span className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[16px]">
                        {item.rate}%
                      </span>
                    </div>
                    <div className="w-full bg-[#e2e8f2] rounded-full h-3 mb-2">
                      <div
                        className="bg-gradient-to-r from-[#1a4d8f] to-[#a85613] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                      {item.converted} of {item.total} students progressed
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );

      case "document-completion":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Percentage of Applications with Complete Documents
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Monitor document completion status across applications
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Document Completion")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#25c196] to-[#1ea97d] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Complete
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {documentCompletionData.completeDocuments}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Incomplete
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {documentCompletionData.incompleteDocuments}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Completion Rate
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {documentCompletionData.percentageComplete}%
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Document Type
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Completed
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Pending
                      </th>
                      <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {documentCompletionData.breakdown.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          {item.document}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[14px] text-center">
                          {item.completed}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#f59e0b] text-[14px] text-center">
                          {item.pending}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-right">
                          {item.rate}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "counselling-sessions":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Counselling Sessions: Completed vs Pending
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Overview of counselling session status
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Counselling Sessions")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Total Scheduled
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {counsellingSessionsData.totalScheduled}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#25c196] to-[#1ea97d] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Completed
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {counsellingSessionsData.completed}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Pending
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {counsellingSessionsData.pending}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#a85613] to-[#8a4710] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Completion Rate
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {counsellingSessionsData.completionRate}%
                  </p>
                </div>
              </div>
            </div>
          </Card>
        );

      case "pending-review":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Applications Pending Review
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Track applications awaiting review at each stage
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Pending Review")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="mb-6">
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[16px] p-6 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] mb-2 opacity-90">
                    Total Pending Review
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[48px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {pendingReviewData.total}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Review Stage
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Count
                      </th>
                      <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Avg Wait (Days)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingReviewData.breakdown.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          {item.stage}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#f59e0b] text-[14px] text-center">
                          {item.count}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[14px] text-right">
                          {item.avgWaitDays} days
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "volunteer-load":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Students Assigned per Volunteer (Load Balancing)
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Monitor volunteer workload distribution
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Volunteer Load")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Volunteer Name
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Total Students
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Completed
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Pending
                      </th>
                      <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Load Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {volunteerLoadData.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center">
                          {item.students}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[14px] text-center">
                          {item.completed}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#f59e0b] text-[14px] text-center">
                          {item.pending}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span
                            className={`inline-block px-3 py-1 rounded-[6px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[12px] ${
                              item.status === "High"
                                ? "bg-[#fef3c7] text-[#92400e]"
                                : item.status === "Low"
                                ? "bg-[#dbeafe] text-[#1e40af]"
                                : "bg-[#d1fae5] text-[#065f46]"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "accepted-rejected":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Applications Accepted vs Rejected
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Overview of application decisions
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Accepted vs Rejected")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Total
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {acceptedRejectedData.total}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#25c196] to-[#1ea97d] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Accepted
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {acceptedRejectedData.accepted}
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[12px] opacity-80">
                    {acceptedRejectedData.acceptanceRate}% of total
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Rejected
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {acceptedRejectedData.rejected}
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[12px] opacity-80">
                    {acceptedRejectedData.rejectionRate}% of total
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Pending
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {acceptedRejectedData.pending}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {acceptedRejectedData.breakdown.map((item, index) => (
                  <div key={index} className="bg-[#f6f8fc] rounded-[12px] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                        {item.category}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[16px]">
                          {item.count}
                        </span>
                        <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[14px]">
                          ({item.percentage}%)
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-[#e2e8f2] rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          item.category === "Accepted"
                            ? "bg-gradient-to-r from-[#25c196] to-[#1ea97d]"
                            : item.category === "Rejected"
                            ? "bg-gradient-to-r from-[#ef4444] to-[#dc2626]"
                            : "bg-gradient-to-r from-[#f59e0b] to-[#d97706]"
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        );

      case "final-admissions":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Final Admissions Awarded
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Track scholarship admissions by course and category
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Final Admissions")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="mb-6">
                <div className="bg-gradient-to-br from-[#25c196] to-[#1ea97d] rounded-[16px] p-6 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] mb-2 opacity-90">
                    Total Admissions Awarded
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[48px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {finalAdmissionsData.totalAwarded}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Admissions by Course
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e2e8f2]">
                        <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Course
                        </th>
                        <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Awarded
                        </th>
                        <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Applied
                        </th>
                        <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Success Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {finalAdmissionsData.breakdown.map((item, index) => (
                        <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            {item.course}
                          </td>
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#25c196] text-[14px] text-center">
                            {item.awarded}
                          </td>
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] text-center">
                            {item.applied}
                          </td>
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[14px] text-right">
                            {Math.round((item.awarded / item.applied) * 100)}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Admissions by Category
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {finalAdmissionsData.byCategory.map((item, index) => (
                    <div key={index} className="bg-[#f6f8fc] rounded-[12px] p-4">
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
                        {item.category}
                      </p>
                      <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[28px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                        {item.count}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        );

      case "response-time":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Admin Response Time (Average Review Time)
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Monitor average response times across processes
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Response Time")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="mb-6">
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[16px] p-6 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] mb-2 opacity-90">
                    Overall Average Response Time
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[48px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {responseTimeData.overall} days
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Metric
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Avg (Days)
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Target (Days)
                      </th>
                      <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {responseTimeData.breakdown.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          {item.metric}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center">
                          {item.avgDays}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[14px] text-center">
                          {item.target}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#d1fae5] text-[#065f46] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[12px]">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "interviews":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Scheduled vs Completed Interviews
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Track interview completion rates
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Interviews")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Total Scheduled
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {interviewData.totalScheduled}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#25c196] to-[#1ea97d] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Completed
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {interviewData.completed}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Pending
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {interviewData.pending}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#a85613] to-[#8a4710] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Completion Rate
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {interviewData.completionRate}%
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Scheduled
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Completed
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Pending
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {interviewData.breakdown.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] text-center">
                          {item.scheduled}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[14px] text-center">
                          {item.completed}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#f59e0b] text-[14px] text-center">
                          {item.pending}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "home-visits":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Scheduled vs Completed Home Visits
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Track home visit completion rates
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Home Visits")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Total Scheduled
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {homeVisitData.totalScheduled}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#25c196] to-[#1ea97d] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Completed
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {homeVisitData.completed}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Pending
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {homeVisitData.pending}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#a85613] to-[#8a4710] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Completion Rate
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {homeVisitData.completionRate}%
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Scheduled
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Completed
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Pending
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {homeVisitData.breakdown.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] text-center">
                          {item.scheduled}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[14px] text-center">
                          {item.completed}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#f59e0b] text-[14px] text-center">
                          {item.pending}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "wait-time":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Average Wait Time Between Stages (Days)
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Monitor average wait times between application stages
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Wait Time")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#e2e8f2]">
                      <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Stage Transition
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Avg Wait (Days)
                      </th>
                      <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Target (Days)
                      </th>
                      <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {waitTimeData.map((item, index) => (
                      <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          {item.stage}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center">
                          {item.avgDays}
                        </td>
                        <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[14px] text-center">
                          {item.targetDays}
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span className="inline-block px-3 py-1 rounded-[6px] bg-[#d1fae5] text-[#065f46] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[12px]">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );

      case "dropout-rate":
        return (
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Dropout Rate (Students Leaving Mid-Process)
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[13px]">
                    Track student dropouts at various stages
                  </p>
                </div>
                <Button
                  onClick={() => handleDownloadExcel("Dropout Rate")}
                  className="bg-[#1a4d8f] hover:bg-[#163d73] text-white h-[36px] rounded-[8px] px-4"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#1a4d8f] to-[#163d73] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Total Started
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {dropoutRateData.totalStarted}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#ef4444] to-[#dc2626] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Total Dropped
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {dropoutRateData.totalDropped}
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#f59e0b] to-[#d97706] rounded-[12px] p-4 text-white">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] mb-1 opacity-90">
                    Dropout Rate
                  </p>
                  <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[32px] leading-[1.2]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    {dropoutRateData.dropoutRate}%
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Dropouts by Stage
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e2e8f2]">
                        <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Stage
                        </th>
                        <th className="text-center py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Count
                        </th>
                        <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          % of Dropouts
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dropoutRateData.breakdown.map((item, index) => (
                        <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            {item.stage}
                          </td>
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#ef4444] text-[14px] text-center">
                            {item.count}
                          </td>
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[14px] text-right">
                            {item.percentage}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Dropout Reasons
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#e2e8f2]">
                        <th className="text-left py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Reason
                        </th>
                        <th className="text-right py-3 px-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          Count
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dropoutRateData.reasons.map((item, index) => (
                        <tr key={index} className="border-b border-[#e2e8f2] hover:bg-[#f6f8fc] transition-colors">
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            {item.reason}
                          </td>
                          <td className="py-3 px-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#ef4444] text-[14px] text-right">
                            {item.count}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Reports
        </h1>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
          View and download comprehensive reports on scholarship management system
        </p>
      </div>

      {/* Filters */}
      <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] p-6 mb-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
              Filter by:
            </span>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {/* Report Type */}
            <Select value={selectedReport} onValueChange={setSelectedReport}>
              <SelectTrigger className="w-full sm:w-[320px] h-[38px] rounded-[8px] border-[#e2e8f2]">
                <SelectValue placeholder="Select Report" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="total-applications">Total Applications Received</SelectItem>
                <SelectItem value="conversion-rate">Conversion Rate Between Stages (%)</SelectItem>
                <SelectItem value="document-completion">Percentage of Applications with Complete Documents</SelectItem>
                <SelectItem value="counselling-sessions">Counselling Sessions: Completed vs Pending</SelectItem>
                <SelectItem value="pending-review">Applications Pending Review</SelectItem>
                <SelectItem value="volunteer-load">Students Assigned per Volunteer (Load Balancing)</SelectItem>
                <SelectItem value="accepted-rejected">Applications Accepted vs Rejected</SelectItem>
                <SelectItem value="final-admissions">Final Admissions Awarded</SelectItem>
                <SelectItem value="response-time">Admin Response Time (Average Review Time)</SelectItem>
                <SelectItem value="interviews">Scheduled vs Completed Interviews</SelectItem>
                <SelectItem value="home-visits">Scheduled vs Completed Home Visits</SelectItem>
                <SelectItem value="wait-time">Average Wait Time Between Stages (Days)</SelectItem>
                <SelectItem value="dropout-rate">Dropout Rate (Students Leaving Mid-Process)</SelectItem>
              </SelectContent>
            </Select>

            {/* Date Range */}
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-full sm:w-[180px] h-[38px] rounded-[8px] border-[#e2e8f2]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-month">Current Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                <SelectItem value="current-year">Current Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Selected Report */}
      <div className="grid gap-6">
        {renderSelectedReport()}
      </div>
    </div>
  );
}
