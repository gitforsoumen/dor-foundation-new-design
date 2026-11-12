import { useState } from "react";
import { ArrowLeft, Eye, Download, Trash2, Image, FileText, ChevronDown } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import InPersonVerificationForm from "./InPersonVerificationForm";
import HomeVisitVerificationForm from "./HomeVisitVerificationForm";
import DorCounsellingForm from "./DorCounsellingForm";
import CounsellingFeedbackPopup from "./CounsellingFeedbackPopup";
import HomeVisitVerificationPopup from "./HomeVisitVerificationPopup";
import InPersonVerificationPopup from "./InPersonVerificationPopup";
import CounsellingFeedbackViewForm from "./CounsellingFeedbackViewForm";
import HomeVisitVerificationViewForm from "./HomeVisitVerificationViewForm";
import InPersonVerificationViewForm from "./InPersonVerificationViewForm";
import svgPaths from "../../imports/svg-fir40mit48";
import docIconPaths from "../../imports/svg-asl7umwcxy";
import photographIconPaths from "../../imports/svg-rcid6hphij";
import imageIconPaths from "../../imports/svg-aubixvey17";

interface StudentProfileDetailsProps {
  studentId: string;
  onBack: () => void;
  onViewSummary: (studentId: string) => void;
}

// Mock student data
const mockStudentData = {
  id: "STU-2024-001",
  applicationId: "APP-2024-001",
  personalDetails: {
    fullName: "Priya Sharma",
    email: "priya.sharma@email.com",
    mobile: "+91 9876543210",
    whatsapp: "+91 9876543210",
    dob: "15/03/2006",
    gender: "Female",
    casteCategory: "General",
    schoolName: "Delhi Public School",
    permanentAddress: "123 MG Road, Bangalore, Karnataka - 560001",
    currentAddress: "Same as permanent address"
  },
  academicDetails: {
    schoolBoard: "CBSE",
    percentage9th: "92%",
    percentage10th: "94%",
    percentage11th: "89%",
    percentage12th: "91%",
    stream: "Science",
    yearOfPassing: "2023",
    graduationPercentage: "85%",
    firstChoice: "Computer Science Engineering",
    secondChoice: "Information Technology",
    thirdChoice: "Electronics & Communication",
    achievements: "School topper in Mathematics, Won district level science olympiad, President of Computer Club",
    hobbies: "Reading, Coding, Playing Chess, Debate competitions",
    lifeAim: "To become a software engineer and contribute to technology innovations that can help improve education accessibility",
    otherScholarship: "No",
    sourceOfInfo: "Social Media",
    alumniReference: "N/A",
    referenceContact: "N/A"
  },
  familyDetails: {
    fatherName: "Rajesh Sharma",
    fatherOccupation: "Driver",
    fatherMobile: "+91 9876543211",
    motherName: "Sunita Sharma",
    motherOccupation: "Homemaker",
    motherMobile: "+91 9876543212",
    siblings: "2",
    siblingsOccupation: "One is studying in college, one is working as a clerk",
    totalIncome: "₹15,000"
  },
  documents: [
    { name: "9th Marksheet", type: "PDF", size: "245 KB", uploadDate: "10 Jan 2024 at 09:15 AM" },
    { name: "10th Marksheet", type: "PDF", size: "312 KB", uploadDate: "10 Jan 2024 at 09:18 AM" },
    { name: "11th Marksheet", type: "PDF", size: "289 KB", uploadDate: "10 Jan 2024 at 09:20 AM" },
    { name: "12th Marksheet", type: "PDF", size: "301 KB", uploadDate: "10 Jan 2024 at 09:22 AM" },
    { name: "Income Certificate", type: "PDF", size: "156 KB", uploadDate: "11 Jan 2024 at 02:30 PM" },
    { name: "Caste Certificate", type: "PDF", size: "178 KB", uploadDate: "11 Jan 2024 at 02:35 PM" },
    { name: "Photograph", type: "JPG", size: "89 KB", uploadDate: "11 Jan 2024 at 02:40 PM" }
  ],
  remarks: {
    applicationNotes: "Strong academic background with consistent performance. Active in extracurricular activities.",
    counsellorNotes: "Previous session notes will appear here if any.",
    hasCounselling: false
  },
  // Verification data - showing post-submission state with verification details
  verificationData: {
    inPersonVerification: {
      status: "Recommend",
      comments: "Student demonstrated strong academic commitment and clear career goals. Family is very supportive. Recommended for scholarship.",
      documents: [
        { 
          name: "Verification_Report.pdf", 
          format: "PDF", 
          size: "423 KB", 
          uploadedDate: "15 Jan 2024", 
          uploadedTime: "10:30 AM" 
        },
        { 
          name: "Additional_Notes.pdf", 
          format: "PDF", 
          size: "256 KB", 
          uploadedDate: "15 Jan 2024", 
          uploadedTime: "11:15 AM" 
        }
      ],
      submittedDate: "15 Jan 2024",
      submittedBy: "Volunteer Name"
    },
    homeVisit: {
      status: "Recommend",
      comments: "Home visit confirmed the student's financial need. Family living in modest conditions. Student has a dedicated study space. Neighbors provided positive feedback.",
      documents: [
        { 
          name: "Home_Visit_Photos.pdf", 
          format: "PDF", 
          size: "1.2 MB", 
          uploadedDate: "18 Jan 2024", 
          uploadedTime: "02:45 PM" 
        }
      ],
      submittedDate: "18 Jan 2024",
      submittedBy: "Volunteer Name"
    },
    counsellingFeedback: {
      status: "Recommend",
      comments: "Student showed excellent communication skills and clear understanding of course objectives. Highly motivated and ready for higher education.",
      documents: [
        { 
          name: "Counselling_Notes.pdf", 
          format: "PDF", 
          size: "512 KB", 
          uploadedDate: "12 Jan 2024", 
          uploadedTime: "04:20 PM" 
        }
      ],
      submittedDate: "12 Jan 2024",
      submittedBy: "Volunteer Name"
    }
  }
};

export default function StudentProfileDetails({
  studentId,
  onBack,
  onViewSummary
}: StudentProfileDetailsProps) {
  const [isVerificationFormOpen, setIsVerificationFormOpen] = useState(false);
  const [isInPersonPopupOpen, setIsInPersonPopupOpen] = useState(false);
  const [isInPersonViewFormOpen, setIsInPersonViewFormOpen] = useState(false);
  const [isHomeVisitFormOpen, setIsHomeVisitFormOpen] = useState(false);
  const [isHomeVisitPopupOpen, setIsHomeVisitPopupOpen] = useState(false);
  const [isHomeVisitViewFormOpen, setIsHomeVisitViewFormOpen] = useState(false);
  const [isDorCounsellingFormOpen, setIsDorCounsellingFormOpen] = useState(false);
  const [isCounsellingPopupOpen, setIsCounsellingPopupOpen] = useState(false);
  const [isCounsellingViewFormOpen, setIsCounsellingViewFormOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [isCounsellingAccordionOpen, setIsCounsellingAccordionOpen] = useState(false);
  const [isHomeVisitAccordionOpen, setIsHomeVisitAccordionOpen] = useState(false);
  const [isInPersonAccordionOpen, setIsInPersonAccordionOpen] = useState(false);
  const [isPhotographViewerOpen, setIsPhotographViewerOpen] = useState(false);
  const student = mockStudentData;

  const handleDownloadProfile = () => {
    // In a real implementation, this would generate and download a PDF
    alert(`Downloading profile for ${student.personalDetails.fullName} (${studentId})...`);
    // Simulate download
    console.log("Download initiated for student:", studentId);
  };

  const handleCounsellingFeedbackSubmit = (data: {
    status: string;
    comments: string;
    documents: File[];
  }) => {
    console.log("Counselling feedback submitted:", data);
    // Handle submission logic here
  };

  const handleHomeVisitVerificationSubmit = (data: {
    status: string;
    comments: string;
    documents: File[];
  }) => {
    console.log("Home visit verification submitted:", data);
    // Handle submission logic here
  };

  const handleInPersonVerificationSubmit = (data: {
    status: string;
    comments: string;
    documents: File[];
  }) => {
    console.log("In-person verification submitted:", data);
    // Handle submission logic here
  };

  // If verification form is open, show it instead of profile details
  if (isVerificationFormOpen) {
    return (
      <InPersonVerificationForm
        studentId={studentId}
        studentName={student.personalDetails.fullName}
        onBack={() => setIsVerificationFormOpen(false)}
      />
    );
  }

  // If home visit form is open, show it instead of profile details
  if (isHomeVisitFormOpen) {
    return (
      <HomeVisitVerificationForm
        studentId={studentId}
        studentName={student.personalDetails.fullName}
        onBack={() => setIsHomeVisitFormOpen(false)}
      />
    );
  }

  // If DoR counselling form is open, show it instead of profile details
  if (isDorCounsellingFormOpen) {
    return (
      <DorCounsellingForm
        studentId={studentId}
        studentName={student.personalDetails.fullName}
        applicationId={student.applicationId}
        onBack={() => setIsDorCounsellingFormOpen(false)}
      />
    );
  }

  // If counselling view form is open, show it instead of profile details
  if (isCounsellingViewFormOpen) {
    return (
      <CounsellingFeedbackViewForm
        studentId={studentId}
        studentName={student.personalDetails.fullName}
        applicationId={student.applicationId}
        onBack={() => setIsCounsellingViewFormOpen(false)}
      />
    );
  }

  // If home visit view form is open, show it instead of profile details
  if (isHomeVisitViewFormOpen) {
    return (
      <HomeVisitVerificationViewForm
        studentId={studentId}
        studentName={student.personalDetails.fullName}
        onBack={() => setIsHomeVisitViewFormOpen(false)}
      />
    );
  }

  // If in-person view form is open, show it instead of profile details
  if (isInPersonViewFormOpen) {
    return (
      <InPersonVerificationViewForm
        studentId={studentId}
        studentName={student.personalDetails.fullName}
        onBack={() => setIsInPersonViewFormOpen(false)}
      />
    );
  }

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
            Back to Students
          </Button>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1
                className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2"
                style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
              >
                Student Profile Details
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px]">
                  {student.personalDetails.fullName}
                </p>
                <span className="text-[#9ca3af]">•</span>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
                  {student.id}
                </p>
                <span className="text-[#9ca3af]">•</span>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
                  {student.applicationId}
                </p>
              </div>
            </div>
            <Button
              onClick={handleDownloadProfile}
              className="h-[44px] px-5 bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff]"
            >
              Download Profile
            </Button>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side (2 columns) */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="overflow-x-auto scrollbar-hide mb-6 -mx-4 px-4 sm:mx-0 sm:px-0">
                <TabsList className="inline-flex justify-start bg-white border border-[#e2e8f2] rounded-[10px] p-1 h-auto">
                  <TabsTrigger
                    value="personal"
                    className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] md:text-[14px] data-[state=active]:bg-[#1a4d8f] data-[state=active]:text-white rounded-[8px] px-3 sm:px-4 md:px-6 py-2 whitespace-nowrap"
                  >
                    Personal
                  </TabsTrigger>
                  <TabsTrigger
                    value="academic"
                    className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] md:text-[14px] data-[state=active]:bg-[#1a4d8f] data-[state=active]:text-white rounded-[8px] px-3 sm:px-4 md:px-6 py-2 whitespace-nowrap"
                  >
                    Academic
                  </TabsTrigger>
                  <TabsTrigger
                    value="family"
                    className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] md:text-[14px] data-[state=active]:bg-[#1a4d8f] data-[state=active]:text-white rounded-[8px] px-3 sm:px-4 md:px-6 py-2 whitespace-nowrap"
                  >
                    Family & Finance
                  </TabsTrigger>
                  <TabsTrigger
                    value="documents"
                    className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] md:text-[14px] data-[state=active]:bg-[#1a4d8f] data-[state=active]:text-white rounded-[8px] px-3 sm:px-4 md:px-6 py-2 whitespace-nowrap"
                  >
                    Documents
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Personal Details Tab */}
              <TabsContent value="personal">
                <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                  <h2
                    className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-6"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    Personal Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-0">
                    <DetailItem label="Name of the Applicant" value={student.personalDetails.fullName} />
                    <DetailItem label="Student's D.O.B." value={student.personalDetails.dob} />
                    <DetailItem label="Gender" value={student.personalDetails.gender} />
                    <DetailItem label="Email ID" value={student.personalDetails.email} />
                    <DetailItem label="Student's Mobile No" value={student.personalDetails.mobile} />
                    <DetailItem label="If you have a separate WhatsApp number, write it below" value={student.personalDetails.whatsapp} />
                    <DetailItem label="Name of the School" value={student.personalDetails.schoolName} className="md:col-span-2" />
                    <DetailItem label="Caste Category" value={student.personalDetails.casteCategory} />
                    <DetailItem
                      label="Permanent Address"
                      value={student.personalDetails.permanentAddress}
                      className="md:col-span-2"
                    />
                    <DetailItem
                      label="Current Address"
                      value={student.personalDetails.currentAddress}
                      className="md:col-span-2"
                    />
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
                        Photograph of Student
                      </p>
                      <div className="flex items-center gap-3 p-3 bg-[#f6f8fc] rounded-[8px] w-fit">
                        <Image className="w-5 h-5 text-[#a85613] flex-shrink-0" />
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          Photograph.jpg
                        </p>
                        <button
                          className="p-1.5 hover:bg-white rounded-[6px] transition-colors ml-2"
                          aria-label="View photograph"
                          onClick={() => setIsPhotographViewerOpen(true)}
                        >
                          <Eye className="w-4 h-4 text-[#1a4d8f]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Academic Details Tab */}
              <TabsContent value="academic">
                <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                  <h2
                    className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-6"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    Academic Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-0">
                    <DetailItem label="Name of the School" value={student.personalDetails.schoolName} className="md:col-span-2" />
                    <DetailItem label="School Board" value={student.academicDetails.schoolBoard} />
                    <DetailItem label="Percentage of 9th Class" value={student.academicDetails.percentage9th} />
                    <DetailItem label="Percentage of 10th Class" value={student.academicDetails.percentage10th} />
                    <DetailItem label="Percentage of 11th Class" value={student.academicDetails.percentage11th} />
                    <DetailItem label="Percentage of 12th Class" value={student.academicDetails.percentage12th} />
                    <DetailItem label="Stream in Class 12th" value={student.academicDetails.stream} />
                    <DetailItem label="Year of Passing Class 12th" value={student.academicDetails.yearOfPassing} />
                    <DetailItem label="Percentage of Graduation" value={student.academicDetails.graduationPercentage} />
                    <DetailItem
                      label="What is your First Choice in these Courses?"
                      value={student.academicDetails.firstChoice}
                      className="md:col-span-2"
                    />
                    <DetailItem
                      label="What is your Second Choice in these Courses?"
                      value={student.academicDetails.secondChoice}
                    />
                    <DetailItem label="What is your Third Choice in these Courses?" value={student.academicDetails.thirdChoice} />
                    <DetailItem label="Mention Any Of Your Two Achievements (Prize or Medals)" value={student.academicDetails.achievements} className="md:col-span-2" />
                    <DetailItem label="Hobbies & Skills" value={student.academicDetails.hobbies} />
                    <DetailItem label="Life's Aim" value={student.academicDetails.lifeAim} />
                    <DetailItem label="Have you received Scholarship from any one else? If yes, please share the details." value={student.academicDetails.otherScholarship} className="md:col-span-2" />
                    <DetailItem label="From where did you get to know about us?" value={student.academicDetails.sourceOfInfo} />
                    <DetailItem label="If any DOR alumni studied in your school, mention his/her name" value={student.academicDetails.alumniReference} />
                    <DetailItem label="If Reference, then who is the Reference?" value={student.academicDetails.referenceContact} />
                  </div>
                </Card>
              </TabsContent>

              {/* Family & Finance Tab */}
              <TabsContent value="family">
                <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                  <h2
                    className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-6"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    Family & Finance Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-0">
                    <DetailItem label="Father's Name" value={student.familyDetails.fatherName} />
                    <DetailItem label="Father's Occupation" value={student.familyDetails.fatherOccupation} />
                    <DetailItem label="Father's Mobile No." value={student.familyDetails.fatherMobile} />
                    <DetailItem label="Mother's Name" value={student.familyDetails.motherName} />
                    <DetailItem label="Mother's Occupation" value={student.familyDetails.motherOccupation} />
                    <DetailItem label="Mother's Mobile No." value={student.familyDetails.motherMobile} />
                    <DetailItem label="Number of Siblings" value={student.familyDetails.siblings} />
                    <DetailItem label="Siblings Occupation (If any)" value={student.familyDetails.siblingsOccupation} />
                    <DetailItem label="Total Family Income (Monthly)" value={student.familyDetails.totalIncome} />
                  </div>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents">
                {/* Uploaded Documents Card */}
                <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                  <h2
                    className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-6"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    Uploaded Documents by Student
                  </h2>
                  <div className="space-y-3">
                    {student.documents.map((doc, index) => {
                      const isImage = doc.type === 'JPG' || doc.type === 'PNG' || doc.type === 'JPEG';
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-[#f6f8fc] rounded-[8px] hover:bg-[#ecf4ff] transition-colors"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {isImage ? (
                              <Image className="w-6 h-6 text-[#a85613] flex-shrink-0" />
                            ) : (
                              <FileText className="w-6 h-6 text-[#1a4d8f] flex-shrink-0" />
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[15px] mb-1">
                                {doc.name}
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px]">
                                {doc.uploadDate} • {doc.type} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                            <button
                              className="p-2 hover:bg-white rounded-[6px] transition-colors"
                              aria-label="View document"
                            >
                              <Eye className="w-5 h-5 text-[#1a4d8f]" />
                            </button>
                            <button
                              className="p-2 hover:bg-white rounded-[6px] transition-colors"
                              aria-label="Download document"
                            >
                              <Download className="w-5 h-5 text-[#1a4d8f]" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Right Side (1 column) */}
          <div className="lg:col-span-1 space-y-6">
            {/* DoR Counselling Card - Accordion */}
            <Card className="bg-white rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] overflow-hidden">
              {/* Accordion Header - Clickable */}
              <button
                onClick={() => setIsCounsellingAccordionOpen(!isCounsellingAccordionOpen)}
                className="w-full p-4 sm:p-6 flex items-start justify-between hover:bg-[#f6f8fc] transition-colors"
              >
                <div className="text-left">
                  <h2
                    className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px]"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    Counselling Feedback
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mt-1">
                    Provide feedback on counselling session
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#1a4d8f] flex-shrink-0 ml-3 transition-transform duration-200 ${
                    isCounsellingAccordionOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content - Collapsible */}
              {isCounsellingAccordionOpen && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  {student.verificationData?.counsellingFeedback ? (
                <>
                  {/* Counselling Status Badge */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center px-3 py-1.5 rounded-[6px] ${
                      student.verificationData.counsellingFeedback.status === 'Recommend' 
                        ? 'bg-[#d1fae5] text-[#065f46]'
                        : 'bg-[#fef3c7] text-[#92400e]'
                    }`}>
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px]">
                        {student.verificationData.counsellingFeedback.status}
                      </span>
                    </div>
                  </div>

                  {/* Submitted Details */}
                  <div className="space-y-4 mb-4">
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-1">
                        Comments
                      </p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                        {student.verificationData.counsellingFeedback.comments}
                      </p>
                    </div>

                    {student.verificationData.counsellingFeedback.documents.length > 0 && (
                      <div>
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
                          Attached Documents
                        </p>
                        <div className="space-y-2">
                          {student.verificationData.counsellingFeedback.documents.map((doc, idx) => (
                            <div key={idx} className="relative bg-[#f6f8fc] rounded-[12px] p-4">
                              {/* Document Icon and Info */}
                              <div className="flex items-start gap-3">
                                {/* Document Icon - 20x20 */}
                                <div className="w-5 h-5 shrink-0 mt-0.5">
                                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                                    <path d={docIconPaths.p35af0300} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                    <path d={docIconPaths.pe9c54e0} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </svg>
                                </div>

                                {/* Document Details */}
                                <div className="flex-1 min-w-0">
                                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px] mb-1">
                                    {doc.name}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[13px] leading-[19.5px] mb-1">
                                    Volunteer: {student.verificationData.counsellingFeedback.submittedBy}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] leading-[18px] mb-3">
                                    {doc.uploadedDate} at {doc.uploadedTime} • {doc.format} • {doc.size}
                                  </p>

                                  {/* Action Buttons */}
                                  <div className="flex items-center gap-2">
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="View document"
                                    >
                                      <Eye className="w-4 h-4 text-[#1a4d8f]" />
                                    </button>
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="Download document"
                                    >
                                      <Download className="w-4 h-4 text-[#1a4d8f]" />
                                    </button>
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="Delete document"
                                    >
                                      <Trash2 className="w-4 h-4 text-[#e7000b]" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#e2e8f2]">
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mb-1">
                        Submitted by: {student.verificationData.counsellingFeedback.submittedBy}
                      </p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                        {student.verificationData.counsellingFeedback.submittedDate}
                      </p>
                    </div>
                  </div>

                  {/* Update Link */}
                  <button
                    onClick={() => setIsCounsellingViewFormOpen(true)}
                    className="w-full mb-3 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center hover:underline"
                  >
                    View Previous Feedback
                  </button>

                  {/* View Form Button */}
                  <Button
                    onClick={() => setIsDorCounsellingFormOpen(true)}
                    className="w-full h-[44px] px-5 bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff]"
                  >
                    Submit Form
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsDorCounsellingFormOpen(true)}
                  className="w-full h-[44px] px-5 bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff]"
                >
                  View Full Form
                </Button>
              )}
                </div>
              )}
            </Card>

            {/* Home Visit Verification Card - Accordion */}
            <Card className="bg-white rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] overflow-hidden">
              {/* Accordion Header - Clickable */}
              <button
                onClick={() => setIsHomeVisitAccordionOpen(!isHomeVisitAccordionOpen)}
                className="w-full p-4 sm:p-6 flex items-start justify-between hover:bg-[#f6f8fc] transition-colors"
              >
                <div className="text-left">
                  <h2
                    className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px]"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    Home Visit Verification
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mt-1">
                    Verify student information through home visit
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#1a4d8f] flex-shrink-0 ml-3 transition-transform duration-200 ${
                    isHomeVisitAccordionOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content - Collapsible */}
              {isHomeVisitAccordionOpen && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  {student.verificationData?.homeVisit ? (
                <>
                  {/* Verification Status Badge */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center px-3 py-1.5 rounded-[6px] ${
                      student.verificationData.homeVisit.status === 'Recommend' 
                        ? 'bg-[#d1fae5] text-[#065f46]'
                        : 'bg-[#fef3c7] text-[#92400e]'
                    }`}>
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px]">
                        {student.verificationData.homeVisit.status}
                      </span>
                    </div>
                  </div>

                  {/* Submitted Details */}
                  <div className="space-y-4 mb-4">
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-1">
                        Comments
                      </p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                        {student.verificationData.homeVisit.comments}
                      </p>
                    </div>

                    {student.verificationData.homeVisit.documents.length > 0 && (
                      <div>
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
                          Attached Documents
                        </p>
                        <div className="space-y-2">
                          {student.verificationData.homeVisit.documents.map((doc, idx) => (
                            <div key={idx} className="relative bg-[#f6f8fc] rounded-[12px] p-4">
                              {/* Document Icon and Info */}
                              <div className="flex items-start gap-3">
                                {/* Document Icon - 20x20 */}
                                <div className="w-5 h-5 shrink-0 mt-0.5">
                                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                                    <path d={docIconPaths.p35af0300} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                    <path d={docIconPaths.pe9c54e0} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </svg>
                                </div>

                                {/* Document Details */}
                                <div className="flex-1 min-w-0">
                                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px] mb-1">
                                    {doc.name}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[13px] leading-[19.5px] mb-1">
                                    Volunteer: {student.verificationData.homeVisit.submittedBy}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] leading-[18px] mb-3">
                                    {doc.uploadedDate} at {doc.uploadedTime} • {doc.format} • {doc.size}
                                  </p>

                                  {/* Action Buttons */}
                                  <div className="flex items-center gap-2">
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="View document"
                                    >
                                      <Eye className="w-4 h-4 text-[#1a4d8f]" />
                                    </button>
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="Download document"
                                    >
                                      <Download className="w-4 h-4 text-[#1a4d8f]" />
                                    </button>
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="Delete document"
                                    >
                                      <Trash2 className="w-4 h-4 text-[#e7000b]" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#e2e8f2]">
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mb-1">
                        Submitted by: {student.verificationData.homeVisit.submittedBy}
                      </p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                        {student.verificationData.homeVisit.submittedDate}
                      </p>
                    </div>
                  </div>

                  {/* Update Link */}
                  <button
                    onClick={() => setIsHomeVisitViewFormOpen(true)}
                    className="w-full mb-3 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center hover:underline"
                  >
                    View Previous Feedback
                  </button>

                  {/* View Form Button */}
                  <Button
                    onClick={() => setIsHomeVisitFormOpen(true)}
                    className="w-full h-[44px] px-5 bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff]"
                  >
                    Submit Form
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsHomeVisitFormOpen(true)}
                  className="w-full h-[44px] px-5 bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff]"
                >
                  View Full Form
                </Button>
              )}
                </div>
              )}
            </Card>

            {/* In-Person Verification Card - Accordion */}
            <Card className="bg-white rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] overflow-hidden">
              {/* Accordion Header - Clickable */}
              <button
                onClick={() => setIsInPersonAccordionOpen(!isInPersonAccordionOpen)}
                className="w-full p-4 sm:p-6 flex items-start justify-between hover:bg-[#f6f8fc] transition-colors"
              >
                <div className="text-left">
                  <h2
                    className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px]"
                    style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                  >
                    In-Person Verification
                  </h2>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px] mt-1">
                    Verify student documents in person
                  </p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#1a4d8f] flex-shrink-0 ml-3 transition-transform duration-200 ${
                    isInPersonAccordionOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Accordion Content - Collapsible */}
              {isInPersonAccordionOpen && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  {student.verificationData?.inPersonVerification ? (
                <>
                  {/* Verification Status Badge */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center px-3 py-1.5 rounded-[6px] ${
                      student.verificationData.inPersonVerification.status === 'Recommend' 
                        ? 'bg-[#d1fae5] text-[#065f46]'
                        : 'bg-[#fef3c7] text-[#92400e]'
                    }`}>
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px]">
                        {student.verificationData.inPersonVerification.status}
                      </span>
                    </div>
                  </div>

                  {/* Submitted Details */}
                  <div className="space-y-4 mb-4">
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-1">
                        Comments
                      </p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                        {student.verificationData.inPersonVerification.comments}
                      </p>
                    </div>

                    {student.verificationData.inPersonVerification.documents.length > 0 && (
                      <div>
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
                          Attached Documents
                        </p>
                        <div className="space-y-2">
                          {student.verificationData.inPersonVerification.documents.map((doc, idx) => (
                            <div key={idx} className="relative bg-[#f6f8fc] rounded-[12px] p-4">
                              {/* Document Icon and Info */}
                              <div className="flex items-start gap-3">
                                {/* Document Icon - 20x20 */}
                                <div className="w-5 h-5 shrink-0 mt-0.5">
                                  <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
                                    <path d={docIconPaths.p35af0300} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                    <path d={docIconPaths.pe9c54e0} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </svg>
                                </div>

                                {/* Document Details */}
                                <div className="flex-1 min-w-0">
                                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-[21px] mb-1">
                                    {doc.name}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[13px] leading-[19.5px] mb-1">
                                    Volunteer: {student.verificationData.inPersonVerification.submittedBy}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] leading-[18px] mb-3">
                                    {doc.uploadedDate} at {doc.uploadedTime} • {doc.format} • {doc.size}
                                  </p>

                                  {/* Action Buttons */}
                                  <div className="flex items-center gap-2">
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="View document"
                                    >
                                      <Eye className="w-4 h-4 text-[#1a4d8f]" />
                                    </button>
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="Download document"
                                    >
                                      <Download className="w-4 h-4 text-[#1a4d8f]" />
                                    </button>
                                    <button
                                      className="w-8 h-8 flex items-center justify-center rounded-[8px] hover:bg-white/50 transition-colors"
                                      aria-label="Delete document"
                                    >
                                      <Trash2 className="w-4 h-4 text-[#e7000b]" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-[#e2e8f2]">
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mb-1">
                        Submitted by: {student.verificationData.inPersonVerification.submittedBy}
                      </p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                        {student.verificationData.inPersonVerification.submittedDate}
                      </p>
                    </div>
                  </div>

                  {/* Update Link */}
                  <button
                    onClick={() => setIsInPersonViewFormOpen(true)}
                    className="w-full mb-3 font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center hover:underline"
                  >
                    View Previous Feedback
                  </button>

                  {/* View Form Button */}
                  <Button
                    onClick={() => setIsVerificationFormOpen(true)}
                    className="w-full h-[44px] px-5 bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff]"
                  >
                    Submit Form
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsVerificationFormOpen(true)}
                  className="w-full h-[44px] px-5 bg-white border border-[#1a4d8f] text-[#1a4d8f] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff]"
                >
                  View Full Form
                </Button>
              )}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>

      {/* Counselling Feedback Popup */}
      <CounsellingFeedbackPopup
        isOpen={isCounsellingPopupOpen}
        onClose={() => setIsCounsellingPopupOpen(false)}
        onSubmit={handleCounsellingFeedbackSubmit}
        studentName={student.personalDetails.fullName}
      />

      {/* Home Visit Verification Popup */}
      <HomeVisitVerificationPopup
        isOpen={isHomeVisitPopupOpen}
        onClose={() => setIsHomeVisitPopupOpen(false)}
        onSubmit={handleHomeVisitVerificationSubmit}
        studentName={student.personalDetails.fullName}
      />

      {/* In-Person Verification Popup */}
      <InPersonVerificationPopup
        isOpen={isInPersonPopupOpen}
        onClose={() => setIsInPersonPopupOpen(false)}
        onSubmit={handleInPersonVerificationSubmit}
        studentName={student.personalDetails.fullName}
      />

      {/* Photograph Viewer Dialog */}
      <Dialog open={isPhotographViewerOpen} onOpenChange={setIsPhotographViewerOpen}>
        <DialogContent className="sm:max-w-[700px] bg-white rounded-[10px] border border-[#e2e8f2] p-0">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Photograph of Student
            </DialogTitle>
            <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              JPG • 89 KB
            </DialogDescription>
          </DialogHeader>

          {/* Image Preview Area */}
          <div className="mx-6 mb-6 bg-[#f6f8fc] rounded-[12px] h-[400px] flex flex-col items-center justify-center">
            {/* Image Icon */}
            <div className="h-24 overflow-clip relative shrink-0 w-24 mb-4">
              <div className="absolute inset-[12.5%]">
                <div className="absolute inset-[-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
                    <path d={imageIconPaths.p35e09600} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_54.17%_54.17%_29.17%]">
                <div className="absolute inset-[-25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d={imageIconPaths.p3df61e80} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-1/4 right-[12.5%] top-[47.2%]">
                <div className="absolute inset-[-10.34%_-6.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 46.6863">
                    <path d={imageIconPaths.p2b966fe0} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Text */}
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-2">
              Image Preview
            </p>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] text-center px-8">
              In a production environment, the image would be displayed here
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 px-6 pb-6">
            <Button
              onClick={() => setIsPhotographViewerOpen(false)}
              className="h-[44px] px-8 bg-white border border-[#e2e8f2] text-[#4d4b48] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#f6f8fc]"
            >
              Close
            </Button>
            <Button
              onClick={() => {
                // In production, this would download the actual image
                alert('Downloading photograph...');
              }}
              className="h-[44px] px-6 bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#163d73] flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function DetailItem({
  label,
  value,
  className = ""
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
        {label}
      </p>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
        {value}
      </p>
    </div>
  );
}