import { Users, ClipboardList, CheckCircle2, Calendar, UserCheck, FileText, Mail, Phone, Download } from "lucide-react";
import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import CounsellingFormDialog from "./CounsellingFormDialog";
import ResourceCentre from "./ResourceCentre";

interface CounsellorDashboardViewProps {
  onNavigateToStudents: () => void;
  onNavigateToStudentProfile?: (studentId: string) => void;
}

export default function CounsellorDashboardView({ onNavigateToStudents, onNavigateToStudentProfile }: CounsellorDashboardViewProps) {
  const [isCounsellingFormOpen, setIsCounsellingFormOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<{ id: string; name: string } | null>(null);

  const handleDownloadProfile = (studentName: string, studentId: string) => {
    // In a real implementation, this would generate and download a PDF
    alert(`Downloading profile for ${studentName} (${studentId})...`);
    // Simulate download
    console.log("Download initiated for student:", studentId);
  };

  const handleStartCounselling = (studentId: string, studentName: string) => {
    setSelectedStudent({ id: studentId, name: studentName });
    setIsCounsellingFormOpen(true);
  };

  const handleCounsellingSubmit = (formData: {
    behavior: string;
    familyBackground: string;
    educationalGoals: string;
    financialAssessment: string;
    recommendation: string;
    additionalNotes: string;
  }) => {
    console.log("Counselling form submitted for student:", selectedStudent?.id, formData);
    setIsCounsellingFormOpen(false);
    
    // Navigate to the student profile details page
    if (selectedStudent?.id && onNavigateToStudentProfile) {
      onNavigateToStudentProfile(selectedStudent.id);
    }
    
    setSelectedStudent(null);
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Welcome, Amit!
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
            Manage and track your assigned students' counselling sessions
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Assigned Students */}
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="w-10 h-10 bg-[rgba(26,77,143,0.1)] rounded-[10px] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#1A4D8F]" />
                </div>
              </div>
              <div>
                <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[36px] leading-[1.2] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  24
                </p>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b6b6b] text-[13px]">
                  Total Assigned Students
                </p>
              </div>
            </div>
          </Card>

          {/* Pending Counselling */}
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="w-10 h-10 bg-[rgba(168,86,19,0.1)] rounded-[10px] flex items-center justify-center">
                  <ClipboardList className="w-5 h-5 text-[#A85613]" />
                </div>
              </div>
              <div>
                <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[36px] leading-[1.2] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  8
                </p>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b6b6b] text-[13px]">
                  Pending Counselling
                </p>
              </div>
            </div>
          </Card>

          {/* Completed Counselling */}
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div className="w-10 h-10 bg-[rgba(37,193,150,0.1)] rounded-[10px] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#25c196]" />
                </div>
              </div>
              <div>
                <p className="font-['Fraunces:Bold',sans-serif] font-bold text-[#25c196] text-[36px] leading-[1.2] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  16
                </p>
                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b6b6b] text-[13px]">
                  Completed Counselling
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Scheduled Tasks */}
        <div className="w-full">
          {/* Scheduled Tasks Card */}
          <Card className="bg-white rounded-[20px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <div className="p-6">
              <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] leading-[30px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Scheduled Tasks
              </h2>

              <div className="space-y-4">
                {/* Counselling Session 1 */}
                <Card className="bg-white rounded-[16px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] hover:shadow-[0px_6px_40px_0px_rgba(54,88,136,0.15)] transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] px-4 sm:px-6 py-4 border-b border-[#e2e8f2]">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => onNavigateToStudentProfile?.("STU-2024-001")}
                          className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[18px] leading-[26px] hover:text-[#153d73] transition-colors text-left mb-2 block"
                        >
                          Priya Sharma
                        </button>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#6b7280]" />
                            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b7280] text-[13px]">
                              STU-2024-001
                            </p>
                          </div>
                          <span className="text-[#cbd5e1]">|</span>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[13px]">
                            App ID: APP-2024-001
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Left Column - Task Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className="bg-[#dbeafe] text-[#1e40af] border-0 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px]">
                            Counselling
                          </Badge>
                          <Badge className="bg-[#fef3c7] text-[#92400e] border-0 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px]">
                            Pending
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#969696]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            Nov 12, 2025 at 3:00 PM
                          </span>
                        </div>
                      </div>
                      
                      {/* Right Column - Contact Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#1a4d8f]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            priya.sharma@email.com
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#a85613]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            +91 9876543210
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Link */}
                    <div className="mt-4 pt-3 border-t border-[#e2e8f2] flex items-center gap-4 flex-wrap">
                      <button
                        onClick={() => onNavigateToStudentProfile?.("STU-2024-001")}
                        className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px] hover:underline"
                      >
                        View Details
                      </button>
                      <span className="text-[#cbd5e1]">|</span>
                      <button
                        onClick={() => handleDownloadProfile("Priya Sharma", "STU-2024-001")}
                        className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px] hover:underline flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Student Profile
                      </button>
                    </div>
                  </div>
                </Card>

                {/* Counselling Session 2 */}
                <Card className="bg-white rounded-[16px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] hover:shadow-[0px_6px_40px_0px_rgba(54,88,136,0.15)] transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] px-4 sm:px-6 py-4 border-b border-[#e2e8f2]">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => onNavigateToStudentProfile?.("STU-2024-002")}
                          className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[18px] leading-[26px] hover:text-[#153d73] transition-colors text-left mb-2 block"
                        >
                          Rahul Kumar
                        </button>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#6b7280]" />
                            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b7280] text-[13px]">
                              STU-2024-002
                            </p>
                          </div>
                          <span className="text-[#cbd5e1]">|</span>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[13px]">
                            App ID: APP-2024-002
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Left Column - Task Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className="bg-[#f3e8ff] text-[#6b21a8] border-0 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px]">
                            Home Visit
                          </Badge>
                          <Badge className="bg-[#fef3c7] text-[#92400e] border-0 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px]">
                            Pending
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#969696]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            Nov 13, 2025 at 10:00 AM
                          </span>
                        </div>
                      </div>
                      
                      {/* Right Column - Contact Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#1a4d8f]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            rahul.kumar@email.com
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#a85613]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            +91 9876543211
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Link */}
                    <div className="mt-4 pt-3 border-t border-[#e2e8f2] flex items-center gap-4 flex-wrap">
                      <button
                        onClick={() => onNavigateToStudentProfile?.("STU-2024-002")}
                        className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px] hover:underline"
                      >
                        View Details
                      </button>
                      <span className="text-[#cbd5e1]">|</span>
                      <button
                        onClick={() => handleDownloadProfile("Rahul Kumar", "STU-2024-002")}
                        className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px] hover:underline flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Student Profile
                      </button>
                    </div>
                  </div>
                </Card>

                {/* Counselling Session 3 */}
                <Card className="bg-white rounded-[16px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] hover:shadow-[0px_6px_40px_0px_rgba(54,88,136,0.15)] transition-all duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] px-4 sm:px-6 py-4 border-b border-[#e2e8f2]">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => onNavigateToStudentProfile?.("STU-2024-004")}
                          className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[18px] leading-[26px] hover:text-[#153d73] transition-colors text-left mb-2 block"
                        >
                          Amit Singh
                        </button>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#6b7280]" />
                            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b7280] text-[13px]">
                              STU-2024-004
                            </p>
                          </div>
                          <span className="text-[#cbd5e1]">|</span>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[13px]">
                            App ID: APP-2024-004
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Left Column - Task Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge className="bg-[#fce7f3] text-[#9f1239] border-0 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px]">
                            Document Verification
                          </Badge>
                          <Badge className="bg-[#fef3c7] text-[#92400e] border-0 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px]">
                            Pending
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-[#969696]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            Nov 15, 2025 at 2:30 PM
                          </span>
                        </div>
                      </div>
                      
                      {/* Right Column - Contact Details */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-[#1a4d8f]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            amit.singh@email.com
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#a85613]" />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            +91 9876543213
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Link */}
                    <div className="mt-4 pt-3 border-t border-[#e2e8f2] flex items-center gap-4 flex-wrap">
                      <button
                        onClick={() => onNavigateToStudentProfile?.("STU-2024-004")}
                        className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px] hover:underline"
                      >
                        View Details
                      </button>
                      <span className="text-[#cbd5e1]">|</span>
                      <button
                        onClick={() => handleDownloadProfile("Amit Singh", "STU-2024-004")}
                        className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px] hover:underline flex items-center gap-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Student Profile
                      </button>
                    </div>
                  </div>
                </Card>
              </div>

              <Button
                onClick={onNavigateToStudents}
                variant="outline"
                className="w-full mt-4 h-[44px] rounded-[100px] border-[#e2e8f2] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#f6f8fc]"
              >
                View All Students
              </Button>
            </div>
          </Card>
        </div>

        {/* Resource Centre */}
        <div className="w-full mt-8">
          <ResourceCentre />
        </div>
      </div>
      <CounsellingFormDialog
        isOpen={isCounsellingFormOpen}
        onClose={() => setIsCounsellingFormOpen(false)}
        onSubmit={handleCounsellingSubmit}
        studentName={selectedStudent?.name || ""}
      />
    </div>
  );
}