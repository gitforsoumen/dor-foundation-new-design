import { useState, useRef } from "react";
import { ArrowLeft, Download, FileText, Image as ImageIcon, CheckCircle, XCircle, Eye, Upload, Trash2, Calendar as CalendarIcon, Clock, MapPin, Video, BookOpen, Send, User, Activity, ChevronDown, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Checkbox } from "../ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Calendar } from "../ui/calendar";
import { Input } from "../ui/input";
import { Progress } from "../ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { toast } from "sonner";
import ApplicationList from "./ApplicationList";
import HomeVisitVerificationPopup from "./HomeVisitVerificationPopup";
import CounsellingFeedbackPopup from "./CounsellingFeedbackPopup";
import InPersonVerificationPopup from "./InPersonVerificationPopup";
import VerificationReportCard from "./VerificationReportCard";
import CounsellingFeedbackCard from "./CounsellingFeedbackCard";
import HomeVisitVerificationCard from "./HomeVisitVerificationCard";
import InPersonVerificationCard from "./InPersonVerificationCard";
import svgPaths from "../../imports/svg-evhj1x4ve7";
import reviewNotesSvgPaths from "../../imports/svg-8f4sbi2u8r";
import calendarSvgPaths from "../../imports/svg-2t7x397imn";
import uploadIcon from "../../imports/svg-2x1gog6pne";
import deleteIcon from "../../imports/svg-97o5pd8irn";
import newDeleteIcon from "../../imports/svg-9cbaeg1wlk";
import personalDetailsSvgPaths from "../../imports/svg-wclhu924i4";
import photographViewerSvgPaths from "../../imports/svg-8wvpasy6pb";

interface ApplicationReviewProps {
  onBack: () => void;
  initialAppId?: string | null;
  onNavigateToActivityLog?: (appId: string) => void;
}

// Mock student data
const mockApplication = {
  id: "APP-2024-001",
  status: "Pending Review",
  submittedDate: "15 Jan 2024",
  personalDetails: {
    fullName: "Priya Sharma",
    email: "priya.sharma@email.com",
    mobile: "+91 9876543210",
    whatsapp: "+91 9876543210",
    dob: "15/05/2006",
    gender: "Female",
    casteCategory: "General",
    schoolName: "Delhi Public School",
    permanentAddress: "123 MG Road, Delhi",
    currentAddress: "Same as permanent address"
  },
  academicDetails: {
    schoolBoard: "CBSE",
    percentage9th: "92%",
    percentage10th: "94%",
    percentage11th: "89%",
    percentage12th: "91%",
    firstChoice: "Computer Science Engineering",
    secondChoice: "Information Technology",
    thirdChoice: "Electronics & Communication",
    achievements: "School topper in Mathematics, Won district level science olympiad",
    hobbies: "Reading, Coding, Playing Chess",
    lifeAim: "To become a software engineer and contribute to technology innovations"
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
    { name: "9th Marksheet", type: "PDF", size: "245 KB", uploadDate: "10 Jan 2024", uploadTime: "09:15 AM" },
    { name: "10th Marksheet", type: "PDF", size: "312 KB", uploadDate: "10 Jan 2024", uploadTime: "09:18 AM" },
    { name: "11th Marksheet", type: "PDF", size: "289 KB", uploadDate: "10 Jan 2024", uploadTime: "09:20 AM" },
    { name: "12th Marksheet", type: "PDF", size: "301 KB", uploadDate: "10 Jan 2024", uploadTime: "09:22 AM" },
    { name: "Income Certificate", type: "PDF", size: "156 KB", uploadDate: "11 Jan 2024", uploadTime: "02:30 PM" },
    { name: "Caste Certificate", type: "PDF", size: "178 KB", uploadDate: "11 Jan 2024", uploadTime: "02:35 PM" },
    { name: "Photograph", type: "JPG", size: "89 KB", uploadDate: "11 Jan 2024", uploadTime: "02:40 PM" }
  ],
  volunteerNotes: "Student shows exceptional academic performance. Family is financially constrained. Highly motivated to pursue higher education.",
  counselorNotes: "Interview conducted on 20 Jan 2024. Student is articulate and has clear career goals. Recommended for acceptance.",
  interviewNotes: "Very confident and well-prepared. Demonstrated strong problem-solving skills during technical questions."
};

export default function ApplicationReview({ onBack, initialAppId, onNavigateToActivityLog }: ApplicationReviewProps) {
  const [isAcceptDialogOpen, setIsAcceptDialogOpen] = useState(false);
  const [isRejectDialogOpen, setIsRejectDialogOpen] = useState(false);
  const [isDocumentViewerOpen, setIsDocumentViewerOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<{ name: string; type: string; size: string } | null>(null);
  const [reason, setReason] = useState("");
  const [rejectionCategory, setRejectionCategory] = useState("");
  const [selectedApp, setSelectedApp] = useState(mockApplication);
  const [viewMode, setViewMode] = useState<"list" | "detail">(initialAppId ? "detail" : "list");
  const [selectedCounselor, setSelectedCounselor] = useState("");
  const [selectedVolunteer, setSelectedVolunteer] = useState("");
  const [reviewNotes, setReviewNotes] = useState("");
  const [isHomeVisitReportOpen, setIsHomeVisitReportOpen] = useState(false);
  const [isHomeVisitPopupOpen, setIsHomeVisitPopupOpen] = useState(false);
  const [isInPersonReportOpen, setIsInPersonReportOpen] = useState(false);
  const [isInPersonPopupOpen, setIsInPersonPopupOpen] = useState(false);
  const [isCounsellingFeedbackOpen, setIsCounsellingFeedbackOpen] = useState(false);
  const [isSlotExpanded, setIsSlotExpanded] = useState(false);
  const [isVolunteersExpanded, setIsVolunteersExpanded] = useState(false);
  const [isPhotographViewerOpen, setIsPhotographViewerOpen] = useState(false);
  const [adminDocuments, setAdminDocuments] = useState<File[]>([]);
  const [adminUploadProgress, setAdminUploadProgress] = useState<{ [key: string]: number }>({});
  const [adminFilePreviews, setAdminFilePreviews] = useState<{ [key: string]: string }>({});
  const [isAdminDragging, setIsAdminDragging] = useState(false);
  const adminFileInputRef = useRef<HTMLInputElement>(null);
  const [volunteerDocuments, setVolunteerDocuments] = useState<{ 
    name: string; 
    type: string; 
    size: string;
    volunteerName: string;
    uploadDate: string;
    uploadTime: string;
  }[]>([
    {
      name: "Verification Report.pdf",
      type: "PDF",
      size: "423 KB",
      volunteerName: "Rajesh Kumar",
      uploadDate: "18 Jan 2024",
      uploadTime: "10:30 AM"
    },
    {
      name: "Background Assessment Document.pdf",
      type: "PDF",
      size: "312 KB",
      volunteerName: "Priya Singh",
      uploadDate: "19 Jan 2024",
      uploadTime: "02:15 PM"
    },
    {
      name: "Counseling Session Notes.pdf",
      type: "PDF",
      size: "189 KB",
      volunteerName: "Rajesh Kumar",
      uploadDate: "20 Jan 2024",
      uploadTime: "11:45 AM"
    }
  ]);
  const [isScheduleInterviewOpen, setIsScheduleInterviewOpen] = useState(false);
  const [interviewDate, setInterviewDate] = useState<Date | undefined>();
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [interviewLocation, setInterviewLocation] = useState("");
  const [interviewerType, setInterviewerType] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [interviewNotes, setInterviewNotes] = useState("");
  const [scheduledInterviews, setScheduledInterviews] = useState<{
    id: string;
    date: Date;
    time: string;
    type: string;
    location: string;
    interviewer: string;
    notes: string;
    status: "upcoming" | "done" | "cancelled";
  }[]>([
    {
      id: "INT-001",
      date: new Date(2025, 10, 15),
      time: "10:00",
      type: "online",
      location: "https://zoom.us/j/123456789",
      interviewer: "Dr. Rajesh Sharma",
      notes: "Initial screening interview",
      status: "done"
    },
    {
      id: "INT-002",
      date: new Date(2025, 10, 20),
      time: "14:30",
      type: "offline",
      location: "DOR Foundation Office, Conference Room A",
      interviewer: "Prof. Vikram Patel",
      notes: "Technical assessment",
      status: "upcoming"
    }
  ]);
  const [isScheduleExamOpen, setIsScheduleExamOpen] = useState(false);
  const [examDate, setExamDate] = useState<Date | undefined>();
  const [examTime, setExamTime] = useState("");
  const [examDuration, setExamDuration] = useState("");
  const [examNames, setExamNames] = useState<string[]>([]);
  const [examAddress, setExamAddress] = useState("");
  const [examNotes, setExamNotes] = useState("");
  const [scheduledExams, setScheduledExams] = useState<{
    id: string;
    date: Date;
    time: string;
    duration: string;
    examNames: string[];
    address: string;
    notes: string;
    status: "upcoming" | "done" | "cancelled";
  }[]>([
    {
      id: "EXM-001",
      date: new Date(2025, 10, 18),
      time: "09:00",
      duration: "90 mins",
      examNames: ["Essay Writing", "Psychometric Test"],
      address: "DOR Foundation Office, Exam Hall B",
      notes: "Please bring valid ID proof",
      status: "upcoming"
    }
  ]);
  const [examQuestionPaper, setExamQuestionPaper] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [scheduledExamAppIds, setScheduledExamAppIds] = useState<string[]>([]);
  const [isSendMessageOpen, setIsSendMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleSelectApplication = (appId: string) => {
    console.log("Selected application:", appId);
    setViewMode("detail");
  };

  const handleScheduleInterviewFromList = (appId: string) => {
    console.log("Schedule interview for:", appId);
    setIsScheduleInterviewOpen(true); // Open the schedule interview dialog directly
  };

  const handleScheduleExamFromList = (appId: string) => {
    console.log("Schedule exam for:", appId);
    setIsScheduleExamOpen(true); // Open the schedule exam dialog directly
  };

  const handleAccept = () => {
    console.log("Accepting application with reason:", reason);
    setIsAcceptDialogOpen(false);
    setReason("");
    toast.success("Application accepted successfully!");
  };

  const handleReject = () => {
    console.log("Rejecting application with category:", rejectionCategory);
    console.log("Rejecting application with reason:", reason);
    setIsRejectDialogOpen(false);
    setReason("");
    setRejectionCategory("");
    toast.error("Application rejected successfully!");
  };

  const handleAssignTeam = () => {
    console.log("Assigned Counselor:", selectedCounselor);
    console.log("Assigned Volunteer:", selectedVolunteer);
    // Handle team assignment logic here
  };

  const handleViewDocument = (doc: { name: string; type: string; size: string }) => {
    setSelectedDocument(doc);
    setIsDocumentViewerOpen(true);
  };

  const handleDownloadDocument = (doc: { name: string; type: string; size: string }) => {
    // In a real application, this would download the actual file
    console.log("Downloading document:", doc.name);
    // Simulate download
    const link = document.createElement("a");
    link.href = "#"; // In real app, this would be the actual file URL
    link.download = doc.name;
    link.click();
  };

  const handleAdminFileSelect = (files: FileList | null) => {
    if (!files) return;
    const newFiles = Array.from(files);
    const currentLength = adminDocuments.length;
    
    newFiles.forEach((file, idx) => {
      const fileIndex = currentLength + idx;
      const fileId = `${file.name}-${fileIndex}`;
      
      // Simulate upload progress
      setAdminUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
      
      const interval = setInterval(() => {
        setAdminUploadProgress(prev => {
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
          setAdminFilePreviews(prev => ({ ...prev, [fileId]: event.target?.result as string }));
        };
        reader.readAsDataURL(file);
      }
    });
    
    setAdminDocuments(prev => [...prev, ...newFiles]);
  };

  const handleAdminFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleAdminFileSelect(event.target.files);
    event.target.value = "";
  };

  const handleRemoveAdminDocument = (index: number) => {
    const fileToRemove = adminDocuments[index];
    const fileId = `${fileToRemove.name}-${index}`;
    
    // Clean up related state
    setAdminUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
    setAdminFilePreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[fileId];
      return newPreviews;
    });
    
    setAdminDocuments(adminDocuments.filter((_, i) => i !== index));
    toast.success("Document deleted successfully!");
  };

  const handleAdminDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsAdminDragging(false);
    handleAdminFileSelect(e.dataTransfer.files);
  };

  const handleAdminDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsAdminDragging(true);
  };

  const handleAdminDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsAdminDragging(false);
  };

  const handleRemoveVolunteerDocument = (index: number) => {
    setVolunteerDocuments(volunteerDocuments.filter((_, i) => i !== index));
    toast.success("Document deleted successfully!");
  };

  const handleScheduleInterview = () => {
    if (!interviewDate) return;
    
    const newInterview = {
      id: `INT-${String(scheduledInterviews.length + 1).padStart(3, '0')}`,
      date: interviewDate,
      time: interviewTime,
      type: interviewType,
      location: interviewLocation,
      interviewer: getInterviewerFullName(interviewerName),
      notes: interviewNotes,
      status: "upcoming" as const
    };
    
    setScheduledInterviews([...scheduledInterviews, newInterview]);
    
    // Close dialog and reset form
    setIsScheduleInterviewOpen(false);
    setInterviewDate(undefined);
    setInterviewTime("");
    setInterviewType("");
    setInterviewLocation("");
    setInterviewerType("");
    setInterviewerName("");
    setInterviewNotes("");
    toast.success("Interview scheduled successfully!");
  };

  const getInterviewerFullName = (value: string) => {
    const names: { [key: string]: string } = {
      "dr-sharma": "Dr. Rajesh Sharma",
      "prof-patel": "Prof. Vikram Patel",
      "ms-desai": "Ms. Anjali Desai",
      "mr-kumar": "Mr. Amit Kumar",
      "neha-sharma": "Neha Sharma",
      "vikram-patel": "Vikram Patel",
      "anjali-desai": "Anjali Desai",
      "ravi-kumar": "Ravi Kumar",
      "priya-singh": "Priya Singh",
      "amit-joshi": "Amit Joshi"
    };
    return names[value] || value;
  };

  const handleInterviewerTypeChange = (value: string) => {
    setInterviewerType(value);
    setInterviewerName(""); // Reset interviewer name when type changes
  };

  const handleUpdateInterviewStatus = (interviewId: string, newStatus: "upcoming" | "done" | "cancelled") => {
    setScheduledInterviews(scheduledInterviews.map(interview => 
      interview.id === interviewId ? { ...interview, status: newStatus } : interview
    ));
    toast.success(`Interview status updated to ${newStatus}!`);
  };

  const handleScheduleExam = () => {
    const newExam = {
      id: `EXM-${String(scheduledExams.length + 1).padStart(3, '0')}`,
      date: new Date(),
      time: "",
      duration: "",
      examNames: [],
      address: "",
      notes: examNotes,
      status: "upcoming" as const
    };
    
    setScheduledExams([...scheduledExams, newExam]);
    
    // Add selected applications to scheduledExamAppIds
    setScheduledExamAppIds(prev => [...new Set([...prev, ...selectedApplications])]);
    
    // Close dialog and reset form
    setIsScheduleExamOpen(false);
    setExamNotes("");
    setExamQuestionPaper(null);
    setUploadProgress(0);
    toast.success("Exam scheduled successfully!");
  };

  const handleExamNameToggle = (examName: string) => {
    setExamNames(prev => 
      prev.includes(examName) 
        ? prev.filter(name => name !== examName)
        : [...prev, examName]
    );
  };

  const handleUpdateExamStatus = (examId: string, newStatus: "upcoming" | "done" | "cancelled") => {
    setScheduledExams(scheduledExams.map(exam => 
      exam.id === examId ? { ...exam, status: newStatus } : exam
    ));
    toast.success(`Exam status updated to ${newStatus}!`);
  };

  const handleSendMessage = () => {
    console.log("Sending message to:", selectedApplications);
    console.log("Message:", messageText);
    
    // Close dialog and reset form
    setIsSendMessageOpen(false);
    setMessageText("");
    
    toast.success(`Message sent to ${selectedApplications.length} ${selectedApplications.length === 1 ? 'student' : 'students'} successfully!`);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  const handleExamFileChange = (file: File | null) => {
    if (!file) return;

    setExamQuestionPaper(file);
    
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 10, 100);
      });
    }, 100);
  };

  const handleRemoveExamFile = () => {
    setExamQuestionPaper(null);
    setUploadProgress(0);
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
    if (files && files[0]) {
      handleExamFileChange(files[0]);
    }
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          {viewMode === "detail" && (
            <Button
              onClick={() => setViewMode("list")}
              variant="ghost"
              className="mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:text-[#a85613] hover:bg-transparent p-0"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to List
            </Button>
          )}
          {viewMode === "list" ? (
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Application Review
                </h1>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
                  Review and manage student applications
                </p>
              </div>
              <div className="md:pt-2">
                <Button
                  onClick={() => {
                    if (selectedApplications.length > 0) {
                      setIsSendMessageOpen(true);
                    }
                  }}
                  disabled={selectedApplications.length === 0}
                  className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] disabled:bg-[#aeaeae] disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message {selectedApplications.length > 0 && `(${selectedApplications.length})`}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Application Review
                </h1>
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
                  {selectedApp.id} • Submitted on {selectedApp.submittedDate}
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => onNavigateToActivityLog?.(selectedApp.id)}
                  variant="outline"
                  className="h-[48px] px-[30px] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[16px] flex items-center gap-[5px] border-[#1a4d8f] text-[#1a4d8f] hover:bg-[#ecf4ff]"
                >
                  <Activity className="w-4 h-4" />
                  View Activity
                </Button>
                <Button
                  onClick={() => {
                    // In a real implementation, this would generate and download a PDF
                    toast.success('Downloading profile...');
                  }}
                  variant="outline"
                  className="h-[48px] px-[20.8px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] border-[#1a4d8f] text-[#1a4d8f] hover:bg-[#ecf4ff]"
                >
                  Download Profile
                </Button>
                <Button
                  onClick={() => setIsSendMessageOpen(true)}
                  className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[48px] px-[50px] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[16px] flex items-center gap-[5px]"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            </div>
          )}
        </div>

        {viewMode === "list" ? (
          <ApplicationList 
            onSelectApplication={handleSelectApplication}
            onScheduleInterview={handleScheduleInterviewFromList}
            onScheduleExam={handleScheduleExamFromList}
            onSelectionChange={setSelectedApplications}
            scheduledExamAppIds={scheduledExamAppIds}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="personal" className="w-full">
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

                <TabsContent value="personal">
                  <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                    {/* Personal Details Header */}
                    <h2
                      className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-12"
                      style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      Personal Details
                    </h2>

                    {/* Personal Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                      {/* Name of the Applicant */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Name of the Applicant
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.fullName}
                        </p>
                      </div>

                      {/* Student's D.O.B. */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Student's D.O.B.
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.dob}
                        </p>
                      </div>

                      {/* Gender */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Gender
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.gender}
                        </p>
                      </div>

                      {/* Email ID */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Email ID
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.email}
                        </p>
                      </div>

                      {/* Student's Mobile No */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Student's Mobile No
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.mobile}
                        </p>
                      </div>

                      {/* WhatsApp Number */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          If you have a separate WhatsApp number, write it below
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.whatsapp}
                        </p>
                      </div>

                      {/* Name of the School - Full Width */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Name of the School
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.schoolName}
                        </p>
                      </div>

                      {/* Caste Category */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Caste Category
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.casteCategory}
                        </p>
                      </div>

                      {/* Permanent Address - Full Width */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[#969696] text-[12px]">
                          Permanent Address
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.permanentAddress}
                        </p>
                      </div>

                      {/* Current Address - Full Width */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Current Address
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.currentAddress}
                        </p>
                      </div>

                      {/* Photograph of Student */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Photograph of Student
                        </p>
                        <div className="flex items-center gap-3 p-3 bg-[#f6f8fc] rounded-[8px] w-fit">
                          {/* Image Icon */}
                          <div className="w-5 h-5 shrink-0">
                            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                              <path d={personalDetailsSvgPaths.p1cec7ff0} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={personalDetailsSvgPaths.p38772900} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={personalDetailsSvgPaths.p2cba2e00} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </div>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            Photograph.jpg
                          </p>
                          {/* View Button */}
                          <button
                            className="p-1.5 hover:bg-white rounded-[6px] transition-colors"
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

                <TabsContent value="academic">
                  <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                    {/* Academic Details Header */}
                    <h2
                      className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-12"
                      style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      Academic Details
                    </h2>

                    {/* Academic Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                      {/* Name of the School - Full Width */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Name of the School
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.personalDetails.schoolName}
                        </p>
                      </div>

                      {/* School Board */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          School Board
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.schoolBoard}
                        </p>
                      </div>

                      {/* Percentage of 9th Class */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Percentage of 9th Class
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.percentage9th}
                        </p>
                      </div>

                      {/* Percentage of 10th Class */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Percentage of 10th Class
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.percentage10th}
                        </p>
                      </div>

                      {/* Percentage of 11th Class */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Percentage of 11th Class
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.percentage11th}
                        </p>
                      </div>

                      {/* Percentage of 12th Class */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Percentage of 12th Class
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.percentage12th}
                        </p>
                      </div>

                      {/* Stream in Class 12th */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Stream in Class 12th
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.stream || "N/A"}
                        </p>
                      </div>

                      {/* Year of Passing Class 12th */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Year of Passing Class 12th
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.yearOfPassing || "N/A"}
                        </p>
                      </div>

                      {/* Percentage of Graduation */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Percentage of Graduation
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.graduationPercentage || "N/A"}
                        </p>
                      </div>

                      {/* What is your First Choice in these Courses? - Full Width */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          What is your First Choice in these Courses?
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.firstChoice}
                        </p>
                      </div>

                      {/* What is your Second Choice in these Courses? */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          What is your Second Choice in these Courses?
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.secondChoice}
                        </p>
                      </div>

                      {/* What is your Third Choice in these Courses? */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          What is your Third Choice in these Courses?
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.thirdChoice}
                        </p>
                      </div>

                      {/* Mention Any Of Your Two Achievements (Prize or Medals) - Full Width */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Mention Any Of Your Two Achievements (Prize or Medals)
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.achievements}
                        </p>
                      </div>

                      {/* Hobbies & Skills */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Hobbies & Skills
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.hobbies}
                        </p>
                      </div>

                      {/* Life's Aim */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Life's Aim
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.lifeAim}
                        </p>
                      </div>

                      {/* Have you received Scholarship from any one else? - Full Width */}
                      <div className="flex flex-col gap-2 md:col-span-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Have you received Scholarship from any one else? If yes, please share the details.
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.otherScholarship || "No"}
                        </p>
                      </div>

                      {/* From where did you get to know about us? */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          From where did you get to know about us?
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.knowAboutUs || "N/A"}
                        </p>
                      </div>

                      {/* If any DOR alumni studied in your school */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          If any DOR alumni studied in your school, mention his/her name
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.dorAlumni || "N/A"}
                        </p>
                      </div>

                      {/* If Reference, then who is the Reference? */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          If Reference, then who is the Reference?
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.academicDetails.reference || "N/A"}
                        </p>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="family">
                  <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                    {/* Family & Finance Details Header */}
                    <h2
                      className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-12"
                      style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
                    >
                      Family & Finance Details
                    </h2>

                    {/* Family & Finance Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                      {/* Father's Name */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Father's Name
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.fatherName}
                        </p>
                      </div>

                      {/* Father's Occupation */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Father's Occupation
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.fatherOccupation}
                        </p>
                      </div>

                      {/* Father's Mobile No. */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Father's Mobile No.
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.fatherMobile}
                        </p>
                      </div>

                      {/* Mother's Name */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Mother's Name
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.motherName}
                        </p>
                      </div>

                      {/* Mother's Occupation */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Mother's Occupation
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.motherOccupation}
                        </p>
                      </div>

                      {/* Mother's Mobile No. */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Mother's Mobile No.
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.motherMobile}
                        </p>
                      </div>

                      {/* Number of Siblings */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Number of Siblings
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.siblings}
                        </p>
                      </div>

                      {/* Siblings Occupation (If any) */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Siblings Occupation (If any)
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.siblingsOccupation || "N/A"}
                        </p>
                      </div>

                      {/* Total Family Income (Monthly) */}
                      <div className="flex flex-col gap-2">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                          Total Family Income (Monthly)
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px]">
                          {selectedApp.familyDetails.totalIncome}
                        </p>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="documents">
                  <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                    <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                      Uploaded Documents by Student
                    </h2>
                    <div className="space-y-3">
                      {selectedApp.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-[#f6f8fc] rounded-[12px] hover:bg-[#ecf4ff] transition-colors cursor-pointer"
                        >
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            {doc.type === "PDF" ? (
                              <FileText className="w-5 h-5 text-[#1a4d8f] flex-shrink-0" />
                            ) : (
                              <ImageIcon className="w-5 h-5 text-[#a85613] flex-shrink-0" />
                            )}
                            <div className="min-w-0 flex-1">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] truncate">
                                {doc.name}
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                {doc.uploadDate} at {doc.uploadTime} • {doc.type} • {doc.size}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleViewDocument(doc)}
                              className="h-8 w-8 p-0 hover:bg-[#1a4d8f]/10"
                            >
                              <Eye className="w-4 h-4 text-[#1a4d8f]" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDownloadDocument(doc)}
                              className="h-8 w-8 p-0 hover:bg-[#1a4d8f]/10"
                            >
                              <Download className="w-4 h-4 text-[#1a4d8f]" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Admin Upload Documents Card */}
                  <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] mt-6">
                    <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                      Admin Upload Documents
                    </h2>
                    
                    {/* Upload Area with Drag & Drop */}
                    <div
                      onDrop={handleAdminDrop}
                      onDragOver={handleAdminDragOver}
                      onDragLeave={handleAdminDragLeave}
                      onClick={() => adminFileInputRef.current?.click()}
                      className={`bg-white border-[#e2e8f2] border-[1.6px] border-solid rounded-[10px] p-[25.6px] cursor-pointer transition-colors mb-4 ${
                        isAdminDragging ? "bg-[#f0f7ff] border-[#1a4d8f]" : ""
                      }`}
                    >
                      <input
                        ref={adminFileInputRef}
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={handleAdminFileUpload}
                        className="hidden"
                      />
                      
                      <div className="flex flex-col gap-[8px] items-center">
                        {/* Upload Icon */}
                        <div className="relative size-full h-[32px] w-[32px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                            <g>
                              <path d="M16 4V20" stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                              <path d={uploadIcon.p171a9480} stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                              <path d={uploadIcon.p110a37f0} stroke="var(--stroke-0, #1A4D8F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                            </g>
                          </svg>
                        </div>
                        
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[21px] text-[#1a4d8f] text-[14px] text-center">
                          Click to upload or drag and drop
                        </p>
                        
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] font-normal leading-[18px] text-[#99a1af] text-[12px] text-center">
                          PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                        </p>
                      </div>
                    </div>

                    {/* Uploaded Files List */}
                    {adminDocuments.length > 0 && (
                      <div className="space-y-3">
                        {adminDocuments.map((file, index) => {
                          const fileId = `${file.name}-${index}`;
                          const progress = adminUploadProgress[fileId] || 0;
                          const preview = adminFilePreviews[fileId];
                          
                          return (
                            <div key={fileId} className="bg-[#f6f8fc] rounded-[12px] p-4">
                              <div className="flex gap-3">
                                {/* File Icon/Preview */}
                                <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                                  {preview ? (
                                    <img
                                      src={preview}
                                      alt={file.name}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <FileText className="w-6 h-6 text-[#1a4d8f]" />
                                  )}
                                </div>

                                {/* File Details */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-start justify-between gap-2 mb-1">
                                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] truncate">
                                      {file.name}
                                    </p>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleRemoveAdminDocument(index);
                                      }}
                                      className="hover:opacity-80 transition-opacity flex-shrink-0 w-5 h-5 relative rounded-[4px]"
                                      title="Delete document"
                                    >
                                      <div className="size-full">
                                        <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative size-full">
                                          <div className="h-[20px] overflow-clip relative shrink-0 w-full">
                                            <div className="absolute inset-[45.83%_58.33%_29.17%_41.67%]">
                                              <div className="absolute inset-[-16.67%_-0.83px]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.6667">
                                                  <path d="M0.833335 0.833335V5.83337" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute inset-[45.83%_41.67%_29.17%_58.33%]">
                                              <div className="absolute inset-[-16.67%_-0.83px]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.66667 6.6667">
                                                  <path d="M0.833335 0.833335V5.83337" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute bottom-[8.33%] left-[20.83%] right-[20.83%] top-1/4">
                                              <div className="absolute inset-[-15%_-18%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                                  <path d="M6.66667 7.33333V11.3333" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d="M9.33333 7.33333V11.3333" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={newDeleteIcon.p37e28100} stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d="M2 4H14" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                  <path d={newDeleteIcon.p2ffbeb80} stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute bottom-3/4 left-[12.5%] right-[12.5%] top-1/4">
                                              <div className="absolute inset-[-0.83px_-5.56%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 1.66667">
                                                  <path d="M0.833335 0.833335H15.8333" stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]">
                                              <div className="absolute inset-[-25%_-12.5%]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.3333 5">
                                                  <path d={deleteIcon.p33095180} stroke="var(--stroke-0, #FB2C36)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                  </div>
                                  
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mb-2">
                                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                                  </p>

                                  {/* Progress Bar */}
                                  {progress < 100 ? (
                                    <div className="space-y-1">
                                      <Progress value={progress} className="h-1.5" />
                                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[11px]">
                                        Uploading... {progress}%
                                      </p>
                                    </div>
                                  ) : (
                                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#10b981] text-[12px]">
                                      ✓ Upload complete
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar - Application Score & Documents */}
            <div className="lg:col-span-1 space-y-6">
              {/* Application Actions Card */}
              <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
                <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-4" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Application Actions
                </h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => setIsAcceptDialogOpen(true)}
                    className="bg-[#25c196] hover:bg-[#1fa57a] text-white h-[48px] px-[30px] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[16px] flex items-center justify-center gap-[5px] flex-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Accept
                  </Button>
                  <Button
                    onClick={() => setIsRejectDialogOpen(true)}
                    className="bg-[#e7000b] hover:bg-[#c00009] text-white h-[48px] px-[30px] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[16px] flex items-center justify-center gap-[5px] flex-1"
                  >
                    <XCircle className="w-4 h-4" />
                    Reject
                  </Button>
                </div>
              </Card>

              {/* Counselling Feedback Card */}
              <CounsellingFeedbackCard
                status="Recommend"
                comments="Student showed excellent communication skills and clear understanding of course objectives. Highly motivated and ready for higher education."
                document={{
                  name: "Counselling_Notes.pdf",
                  uploadedBy: "Volunteer Name",
                  uploadDate: "12 Jan 2024",
                  uploadTime: "04:20 PM",
                  type: "PDF",
                  size: "512 KB",
                }}
                submittedBy="Volunteer Name"
                submittedDate="12 Jan 2024"
                onViewPreviousFeedback={() => {
                  toast.info("View Previous Counselling Feedback");
                }}
                onSubmitForm={() => {
                  // Do nothing - popup disabled
                }}
                onViewDocument={() => {
                  toast.info("Viewing Counselling_Notes.pdf");
                }}
                onDownloadDocument={() => {
                  toast.info("Downloading Counselling_Notes.pdf");
                }}
                onDeleteDocument={() => {
                  toast.info("Deleting Counselling_Notes.pdf");
                }}
              />

              {/* Home Visit Verification Report Card */}
              <HomeVisitVerificationCard
                status="Recommend"
                comments="Home visit confirmed the student's financial need. Family living in modest conditions. Student has a dedicated study space. Neighbors provided positive feedback."
                document={{
                  name: "Home_Visit_Photos.pdf",
                  uploadedBy: "Volunteer Name",
                  uploadDate: "18 Jan 2024",
                  uploadTime: "02:45 PM",
                  type: "PDF",
                  size: "1.2 MB",
                }}
                submittedBy="Volunteer Name"
                submittedDate="18 Jan 2024"
                onViewPreviousFeedback={() => {
                  // Do nothing - popup disabled
                }}
                onSubmitForm={() => {
                  // Do nothing - popup disabled
                }}
                onViewDocument={() => {
                  toast.info("Viewing Home_Visit_Photos.pdf");
                }}
                onDownloadDocument={() => {
                  toast.info("Downloading Home_Visit_Photos.pdf");
                }}
                onDeleteDocument={() => {
                  toast.info("Deleting Home_Visit_Photos.pdf");
                }}
              />

              {/* In-Person Verification Report Card */}
              <InPersonVerificationCard
                status="Recommend"
                comments="Student demonstrated strong academic commitment and clear career goals. Family is very supportive. Recommended for scholarship."
                documents={[
                  {
                    name: "Verification_Report.pdf",
                    uploadedBy: "Volunteer Name",
                    uploadDate: "15 Jan 2024",
                    uploadTime: "10:30 AM",
                    type: "PDF",
                    size: "423 KB",
                  },
                  {
                    name: "Additional_Notes.pdf",
                    uploadedBy: "Volunteer Name",
                    uploadDate: "15 Jan 2024",
                    uploadTime: "11:15 AM",
                    type: "PDF",
                    size: "256 KB",
                  },
                ]}
                submittedBy="Volunteer Name"
                submittedDate="15 Jan 2024"
                onViewPreviousFeedback={() => {
                  // Do nothing - popup disabled
                }}
                onSubmitForm={() => {
                  // Do nothing - popup disabled
                }}
                onViewDocument={(doc) => {
                  toast.info(`Viewing ${doc.name}`);
                }}
                onDownloadDocument={(doc) => {
                  toast.info(`Downloading ${doc.name}`);
                }}
                onDeleteDocument={(doc) => {
                  toast.info(`Deleting ${doc.name}`);
                }}
              />

              {/* Slot Booking Information Card */}
              <Card className="bg-white rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] overflow-hidden">
                {/* Header - Always Visible */}
                <div
                  className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-[#f6f8fc] transition-colors"
                  onClick={() => setIsSlotExpanded(!isSlotExpanded)}
                >
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    In-Person Verification Slot
                  </h2>
                  <div className={`transition-transform duration-200 ${isSlotExpanded ? "" : "rotate-180"}`}>
                    <ChevronDown className="w-6 h-6 text-[#1a4d8f]" strokeWidth={2} />
                  </div>
                </div>

                {/* Expanded Content */}
                {isSlotExpanded && (
                  <div className="px-4 sm:px-6 pb-6">
                    {/* Slot Details */}
                    <div className="space-y-4">
                      {/* Date */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                          <CalendarIcon className="w-5 h-5 text-[#1a4d8f]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] mb-1">
                            Date
                          </p>
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px]">
                            Monday, December 15, 2025
                          </p>
                        </div>
                      </div>

                      {/* Time */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#1a4d8f]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] mb-1">
                            Time
                          </p>
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px]">
                            2:00 PM - 3:00 PM
                          </p>
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-[#1a4d8f]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] mb-1">
                            Location
                          </p>
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px]">
                            Dehradun
                          </p>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-white rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)] flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 text-[#25c196]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] mb-1">
                            Status
                          </p>
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[16px]">
                            Confirmed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>

              {/* Associated Volunteers Card */}
              <Card className="bg-white rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] overflow-hidden">
                {/* Header - Always Visible */}
                <div
                  className="flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-[#f6f8fc] transition-colors"
                  onClick={() => setIsVolunteersExpanded(!isVolunteersExpanded)}
                >
                  <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                    Associated Volunteers
                  </h2>
                  <div className={`transition-transform duration-200 ${isVolunteersExpanded ? "" : "rotate-180"}`}>
                    <ChevronDown className="w-6 h-6 text-[#1a4d8f]" strokeWidth={2} />
                  </div>
                </div>

                {/* Expanded Content */}
                {isVolunteersExpanded && (
                  <div className="px-4 sm:px-6 pb-6">
                    {/* Volunteers by Stage */}
                    <div className="space-y-4">
                      {/* Document Upload / Verification Stage */}
                      <div className="space-y-2">
                        <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                          Document Upload / Verification
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-3 bg-[#f6f8fc] rounded-[8px] border border-[#e2e8f2]">
                            <div className="w-10 h-10 bg-[#1a4d8f] rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                                Priya Sharma
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                priya.sharma@dorfoundation.org
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Counselling Stage */}
                      <div className="space-y-2">
                        <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                          Counselling
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-3 bg-[#f6f8fc] rounded-[8px] border border-[#e2e8f2]">
                            <div className="w-10 h-10 bg-[#1a4d8f] rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                                Rajesh Kumar
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                rajesh.kumar@dorfoundation.org
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-[#f6f8fc] rounded-[8px] border border-[#e2e8f2]">
                            <div className="w-10 h-10 bg-[#1a4d8f] rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                                Anjali Desai
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                anjali.desai@dorfoundation.org
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Home Visit Stage */}
                      <div className="space-y-2">
                        <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                          Home Visit
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-3 bg-[#f6f8fc] rounded-[8px] border border-[#e2e8f2]">
                            <div className="w-10 h-10 bg-[#1a4d8f] rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                                Vikram Mehta
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                vikram.mehta@dorfoundation.org
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        )}

        {/* Accept Dialog */}
        <Dialog open={isAcceptDialogOpen} onOpenChange={setIsAcceptDialogOpen}>
          <DialogContent className="sm:max-w-[500px] bg-white rounded-[10px] border border-[#e2e8f2]">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#25c196] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Accept Application
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                Provide acceptance notes for {selectedApp.personalDetails.fullName}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="reason" className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                  Acceptance Notes
                </Label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Enter acceptance notes and next steps..."
                  className="min-h-[120px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsAcceptDialogOpen(false)}
                variant="outline"
                className="h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleAccept}
                className="bg-[#25c196] hover:bg-[#1fa57a] text-white h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif]"
              >
                Confirm Accept
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Reject Dialog */}
        <Dialog open={isRejectDialogOpen} onOpenChange={setIsRejectDialogOpen}>
          <DialogContent className="sm:max-w-[500px] bg-white rounded-[10px] border border-[#e2e8f2]">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-red-600 text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Reject Application
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                Provide rejection reason for {selectedApp.personalDetails.fullName}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="rejection-category" className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                  Rejection Category <span className="text-red-600">*</span>
                </Label>
                <Select value={rejectionCategory} onValueChange={setRejectionCategory}>
                  <SelectTrigger className="h-[48px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                    <SelectValue placeholder="Select rejection category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="call-not-answered">Call attempted (5 times) – not answered</SelectItem>
                    <SelectItem value="cancelled-verification">Cancelled after in-person verification</SelectItem>
                    <SelectItem value="no-counselling">Did not attend counselling</SelectItem>
                    <SelectItem value="cancelled-counselling">Cancelled after counselling</SelectItem>
                    <SelectItem value="low-marks">Cancelled due to low marks</SelectItem>
                    <SelectItem value="english-criteria">Cancelled due to English language Criteria</SelectItem>
                    <SelectItem value="admission-elsewhere">The student has taken admission elsewhere.</SelectItem>
                    <SelectItem value="missing-documents">Rejected due to missing documents</SelectItem>
                    <SelectItem value="course-unavailable">Requested course not available</SelectItem>
                    <SelectItem value="scholarship-elsewhere">Student has taken scholarship elsewhere</SelectItem>
                    <SelectItem value="cancelled-home-visit">Cancelled after home visit</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {rejectionCategory === "other" && (
                <div>
                  <Label htmlFor="reject-reason" className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                    Rejection Reason <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="reject-reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter detailed reason for rejection..."
                    className="min-h-[120px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
                  />
                </div>
              )}
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsRejectDialogOpen(false)}
                variant="outline"
                className="h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleReject}
                className="bg-red-600 hover:bg-red-700 text-white h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif]"
              >
                Confirm Reject
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Document Viewer Dialog */}
        <Dialog open={isDocumentViewerOpen} onOpenChange={setIsDocumentViewerOpen}>
          <DialogContent className="sm:max-w-[700px] bg-white rounded-[10px] border border-[#e2e8f2]">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                {selectedDocument?.name}
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                {selectedDocument?.type} • {selectedDocument?.size}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="bg-[#f6f8fc] rounded-[12px] p-8 flex flex-col items-center justify-center min-h-[400px]">
                {selectedDocument?.type === "PDF" ? (
                  <div className="text-center">
                    <FileText className="w-24 h-24 text-[#1a4d8f] mx-auto mb-4" />
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-2">
                      PDF Document Preview
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                      In a production environment, the PDF would be displayed here
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <ImageIcon className="w-24 h-24 text-[#a85613] mx-auto mb-4" />
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-2">
                      Image Preview
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                      In a production environment, the image would be displayed here
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsDocumentViewerOpen(false)}
                variant="outline"
                className="h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Close
              </Button>
              <Button
                onClick={() => selectedDocument && handleDownloadDocument(selectedDocument)}
                className="bg-[#1a4d8f] hover:bg-[#153d72] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif]"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Photograph Viewer Dialog */}
        <Dialog open={isPhotographViewerOpen} onOpenChange={setIsPhotographViewerOpen}>
          <DialogContent className="sm:max-w-[700px] bg-white rounded-[10px] border border-[#e2e8f2]">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Photograph of Student
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                JPG • 89 KB
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="bg-[#f6f8fc] rounded-[12px] p-8 flex flex-col items-center justify-center min-h-[400px]">
                <div className="text-center">
                  {/* Image Icon */}
                  <div className="w-24 h-24 mx-auto mb-4">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
                      <path d={photographViewerSvgPaths.p33caac00} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                      <path d={photographViewerSvgPaths.p2fece200} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                      <path d={photographViewerSvgPaths.p1c7ba80} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
                    </svg>
                  </div>
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-2">
                    Image Preview
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                    In a production environment, the image would be displayed here
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsPhotographViewerOpen(false)}
                variant="outline"
                className="h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  console.log("Downloading photograph...");
                  alert("Downloading photograph...");
                }}
                className="bg-[#1a4d8f] hover:bg-[#153d72] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif]"
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Schedule Interview Dialog */}
        <Dialog open={isScheduleInterviewOpen} onOpenChange={setIsScheduleInterviewOpen}>
          <DialogContent className="sm:max-w-[800px] bg-white rounded-[10px] border border-[#e2e8f2] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Schedule Interview
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                Schedule an interview for {selectedApp.personalDetails.fullName}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Interview Date */}
                <div>
                  <div className="flex gap-1 mb-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Interview Date
                    </Label>
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">*</span>
                  </div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full h-[56px] justify-start text-left font-['Wix_Madefor_Text:Regular',sans-serif] border-[#aeaeae] border-[0.8px] rounded-[8px] hover:bg-white"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-[#1a4d8f]" />
                        <span className={interviewDate ? "text-[#4d4b48]" : "text-[#969696]"}>
                          {interviewDate ? formatDate(interviewDate) : "11 Nov 2025"}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={interviewDate}
                        onSelect={setInterviewDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Interview Time */}
                <div>
                  <div className="flex gap-1 mb-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Interview Time
                    </Label>
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">*</span>
                  </div>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1a4d8f]" />
                    <Input
                      type="time"
                      value={interviewTime}
                      onChange={(e) => setInterviewTime(e.target.value)}
                      className="h-[56px] pl-10 rounded-[8px] border-[#aeaeae] border-[0.8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] placeholder:text-[#969696]"
                    />
                  </div>
                </div>

                {/* Interview Type */}
                <div>
                  <div className="flex gap-1 mb-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Interview Type
                    </Label>
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">*</span>
                  </div>
                  <Select value={interviewType} onValueChange={setInterviewType}>
                    <SelectTrigger className="h-[56px] rounded-[8px] border-[#aeaeae] border-[0.8px] font-['Wix_Madefor_Text:Regular',sans-serif]" style={{ padding: '27px' }}>
                      <SelectValue placeholder="Select interview type" className="text-[#969696]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">
                        <div className="flex items-center gap-2">
                          <Video className="w-4 h-4 text-[#1a4d8f]" />
                          <span>Online Interview</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="offline">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-[#a85613]" />
                          <span>In-Person Interview</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Address */}
                <div>
                  <div className="flex gap-1 mb-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Address
                    </Label>
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">*</span>
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#a85613]" />
                    <Input
                      type="text"
                      value={interviewLocation}
                      onChange={(e) => setInterviewLocation(e.target.value)}
                      placeholder="Enter interview location"
                      className="h-[56px] pl-10 rounded-[8px] border-[#aeaeae] border-[0.8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] placeholder:text-[#969696]"
                    />
                  </div>
                </div>

                {/* Type of Interviewer */}
                <div>
                  <div className="flex gap-1 mb-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Type of Interviewer
                    </Label>
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">*</span>
                  </div>
                  <Select value={interviewerType} onValueChange={handleInterviewerTypeChange}>
                    <SelectTrigger className="h-[56px] rounded-[8px] border-[#aeaeae] border-[0.8px] font-['Wix_Madefor_Text:Regular',sans-serif]" style={{ padding: '27px' }}>
                      <SelectValue placeholder="Select interviewer type" className="text-[#969696]" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="counselor">Counselor</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Interviewer */}
                <div>
                  <div className="flex gap-1 mb-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Interviewer
                    </Label>
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#fb2c36] text-[14px]">*</span>
                  </div>
                  <Select value={interviewerName} onValueChange={setInterviewerName} disabled={!interviewerType}>
                    <SelectTrigger className="h-[56px] rounded-[8px] border-[#aeaeae] border-[0.8px] font-['Wix_Madefor_Text:Regular',sans-serif] disabled:opacity-50 disabled:cursor-not-allowed" style={{ padding: '27px' }}>
                      <SelectValue placeholder="Select interviewer" className="text-[#969696]" />
                    </SelectTrigger>
                    <SelectContent>
                      {interviewerType === "counselor" ? (
                        <>
                          <SelectItem value="neha-sharma">Neha Sharma</SelectItem>
                          <SelectItem value="vikram-patel">Vikram Patel</SelectItem>
                          <SelectItem value="anjali-desai">Anjali Desai</SelectItem>
                        </>
                      ) : interviewerType === "volunteer" ? (
                        <>
                          <SelectItem value="ravi-kumar">Ravi Kumar</SelectItem>
                          <SelectItem value="priya-singh">Priya Singh</SelectItem>
                          <SelectItem value="amit-joshi">Amit Joshi</SelectItem>
                        </>
                      ) : null}
                    </SelectContent>
                  </Select>
                </div>

              </div>

              {/* Additional Notes - Full width */}
              <div className="mt-4">
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                  Additional Notes (Optional)
                </Label>
                <Textarea
                  value={interviewNotes}
                  onChange={(e) => setInterviewNotes(e.target.value)}
                  placeholder="Add any special instructions or notes for the interview..."
                  className="min-h-[100px] rounded-[8px] border-[#aeaeae] border-[0.8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] placeholder:text-[#969696] resize-none"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsScheduleInterviewOpen(false)}
                variant="outline"
                className="h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleScheduleInterview}
                disabled={!interviewDate || !interviewTime || !interviewType || !interviewLocation || !interviewerType || !interviewerName}
                className="bg-[#a85613] hover:bg-[#8d4a10] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                Confirm Schedule
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Schedule Exam Dialog */}
        <Dialog open={isScheduleExamOpen} onOpenChange={setIsScheduleExamOpen}>
          <DialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Schedule an Exam
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                Schedule exam for {selectedApplications.length} selected {selectedApplications.length === 1 ? 'application' : 'applications'}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              {/* File Upload Section */}
              <div>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3 block">
                  Upload Question Paper
                </Label>
                
                {!examQuestionPaper ? (
                  <div 
                    className={`border-2 border-dashed rounded-[10px] p-8 flex flex-col items-center justify-center transition-colors ${
                      dragActive 
                        ? 'border-[#1a4d8f] bg-[#ecf4ff]' 
                        : 'border-[#aeaeae] bg-white'
                    }`}
                    onDragEnter={handleDragEnter}
                    onDragOver={handleDrag}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <Upload className="w-8 h-8 text-[#99A1AF] mb-3" />
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-bold text-[#4d4b48] text-[14px] text-center mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px] text-center mb-4">
                      PDF or image. Max 5 MB.
                    </p>
                    <input
                      type="file"
                      accept=".pdf,image/*"
                      onChange={(e) => handleExamFileChange(e.target.files?.[0] || null)}
                      className="hidden"
                      id="exam-question-paper-upload"
                    />
                    <label
                      htmlFor="exam-question-paper-upload"
                      className="px-6 py-2 rounded-[100px] bg-[#1a4d8f] text-white cursor-pointer hover:bg-[#153d73] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] transition-colors"
                    >
                      Choose File
                    </label>
                  </div>
                ) : (
                  <div className="border-2 border-[#e2e8f2] rounded-[10px] p-4 bg-white">
                    {/* Upload Progress */}
                    {uploadProgress < 100 && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                            Uploading...
                          </p>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px]">
                            {uploadProgress}%
                          </p>
                        </div>
                        <div className="w-full bg-[#e2e8f2] rounded-full h-2">
                          <div 
                            className="bg-[#1a4d8f] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* File Info */}
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-16 h-16 bg-[#f6f8fc] rounded-[8px] border border-[#e2e8f2] flex items-center justify-center">
                          <FileText className="w-8 h-8 text-[#1a4d8f]" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] truncate">
                          {examQuestionPaper.name}
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                          {(examQuestionPaper.size / 1024).toFixed(1)} KB
                        </p>
                        {uploadProgress === 100 && (
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[12px] mt-1">
                            ✓ Upload complete
                          </p>
                        )}
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleRemoveExamFile}
                        className="h-8 w-8 p-0 hover:bg-[#fee2e2]"
                      >
                        <Trash2 className="w-4 h-4 text-[#e7000b]" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Notes */}
              <div>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                  Additional Notes
                </Label>
                <Textarea
                  value={examNotes}
                  onChange={(e) => setExamNotes(e.target.value)}
                  placeholder="Add any additional instructions or notes for students..."
                  className="min-h-[100px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] border-[#e2e8f2]"
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-[#e2e8f2]">
              <Button
                variant="outline"
                onClick={() => setIsScheduleExamOpen(false)}
                className="h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] border-[#e2e8f2]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleScheduleExam}
                className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px]"
              >
                Schedule Exam
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Send Message Dialog */}
        <Dialog open={isSendMessageOpen} onOpenChange={setIsSendMessageOpen}>
          <DialogContent className="sm:max-w-[600px] bg-white rounded-[10px] border border-[#e2e8f2]">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Send Message
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                {viewMode === "detail" 
                  ? `Send message to ${selectedApp.personalDetails.fullName}` 
                  : `Send message to ${selectedApplications.length} selected ${selectedApplications.length === 1 ? 'student' : 'students'}`
                }
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="message" className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type your message here..."
                  className="min-h-[200px] rounded-[12px] border-[#e2e8f2] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
                />
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsSendMessageOpen(false)}
                variant="outline"
                className="h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
                className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] disabled:bg-[#aeaeae] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Home Visit Verification Report Dialog */}
        <Dialog open={isHomeVisitReportOpen} onOpenChange={setIsHomeVisitReportOpen}>
          <DialogContent className="sm:max-w-[800px] bg-white rounded-[10px] border border-[#e2e8f2] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Home Visit Verification Report
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                Detailed verification report from home visit for {selectedApp.personalDetails.fullName}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-6">
              {/* Visit Information */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Visit Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f6f8fc] p-4 rounded-[12px]">
                  <DetailItem label="Visit Date" value="22 Jan 2024" />
                  <DetailItem label="Visit Time" value="2:30 PM - 4:00 PM" />
                  <DetailItem label="Volunteer Name" value="Rajesh Kumar" />
                  <DetailItem label="Volunteer ID" value="VOL-2024-045" />
                </div>
              </div>

              {/* Family Verification */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Family Verification
                </h3>
                <div className="bg-[#f6f8fc] p-4 rounded-[12px] space-y-3">
                  <DetailItem label="Family Members Present" value="Father, Mother, 1 Sibling" />
                  <DetailItem label="Living Conditions" value="2 BHK apartment, shared accommodation" />
                  <DetailItem label="Neighborhood" value="Middle-class residential area" />
                  <DetailItem label="Family Cooperation" value="Very cooperative and welcoming" />
                </div>
              </div>

              {/* Financial Verification */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Financial Verification
                </h3>
                <div className="bg-[#f6f8fc] p-4 rounded-[12px] space-y-3">
                  <DetailItem label="Income Source" value="Father - Driver, Mother - Homemaker" />
                  <DetailItem label="Monthly Income (Verified)" value="₹18,000" />
                  <DetailItem label="Financial Dependents" value="4 members" />
                  <DetailItem label="Financial Status" value="Below poverty line, genuine need" />
                </div>
              </div>

              {/* Volunteer Observations */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Volunteer Observations
                </h3>
                <div className="bg-[#f6f8fc] p-4 rounded-[12px]">
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                    The family lives in modest conditions but maintains dignity and cleanliness. Both parents are deeply committed to their children's education despite financial constraints. The student has a dedicated study space and shows strong academic discipline. Family values education highly and is genuinely grateful for scholarship opportunities. Financial documents verified and authentic. Recommend approval for scholarship assistance.
                  </p>
                </div>
              </div>

              {/* Recommendation */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Recommendation
                </h3>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 p-4 rounded-[12px]">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-green-700 text-[14px]">
                    Strongly Recommended for Scholarship
                  </p>
                </div>
              </div>

              {/* Update Link */}
              <div className="border-t border-[#e2e8f2] pt-4">
                <button
                  onClick={() => {
                    setIsHomeVisitReportOpen(false);
                    setIsHomeVisitPopupOpen(true);
                  }}
                  className="w-full font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px] text-center hover:underline"
                >
                  Update status, comments & documents
                </button>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsHomeVisitReportOpen(false)}
                variant="outline"
                className="h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  toast.success("Report downloaded successfully!");
                }}
                className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif]"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* In-Person Verification Report Dialog */}
        <Dialog open={isInPersonReportOpen} onOpenChange={setIsInPersonReportOpen}>
          <DialogContent className="sm:max-w-[800px] bg-white rounded-[10px] border border-[#e2e8f2] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                In-Person Verification Report
              </DialogTitle>
              <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                In-person interview and verification report for {selectedApp.personalDetails.fullName}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-6">
              {/* Interview Information */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Interview Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f6f8fc] p-4 rounded-[12px]">
                  <DetailItem label="Interview Date" value="25 Jan 2024" />
                  <DetailItem label="Interview Time" value="10:00 AM - 11:30 AM" />
                  <DetailItem label="Interviewer Name" value="Dr. Meera Sharma" />
                  <DetailItem label="Location" value="DOR Foundation Office" />
                </div>
              </div>

              {/* Personal Assessment */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Personal Assessment
                </h3>
                <div className="bg-[#f6f8fc] p-4 rounded-[12px] space-y-3">
                  <DetailItem label="Communication Skills" value="Excellent - Clear and articulate" />
                  <DetailItem label="Confidence Level" value="High - Well-composed and confident" />
                  <DetailItem label="Academic Knowledge" value="Strong - Demonstrates solid understanding" />
                  <DetailItem label="Career Goals" value="Clear and well-defined objectives" />
                </div>
              </div>

              {/* Document Verification */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Document Verification
                </h3>
                <div className="bg-[#f6f8fc] p-4 rounded-[12px] space-y-2">
                  {[
                    { doc: "Academic Certificates", status: "Verified - Original documents checked" },
                    { doc: "Income Certificate", status: "Verified - Authentic and valid" },
                    { doc: "Caste Certificate", status: "Verified - Government issued" },
                    { doc: "Identity Proof", status: "Verified - Aadhaar card checked" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-[#e2e8f2] last:border-0">
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                        {item.doc}
                      </p>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#25c196] text-[13px]">
                          {item.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Behavioral Assessment */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Behavioral Assessment
                </h3>
                <div className="bg-[#f6f8fc] p-4 rounded-[12px]">
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                    The candidate demonstrated exceptional maturity and professionalism during the interview. Shows genuine passion for education and a strong desire to succeed. Responds thoughtfully to questions and displays critical thinking abilities. Well-prepared with relevant examples. Exhibits gratitude and humility. Family background aligns with statements provided. The candidate is highly motivated and has realistic career aspirations. Displays leadership potential and community awareness.
                  </p>
                </div>
              </div>

              {/* Final Verdict */}
              <div className="space-y-3">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[16px]">
                  Final Verdict
                </h3>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 p-4 rounded-[12px]">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-green-700 text-[14px]">
                    Highly Recommended - Candidate meets all criteria and exceeds expectations
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setIsInPersonReportOpen(false)}
                variant="outline"
                className="h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] border-[#e2e8f2]"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  toast.success("Report downloaded successfully!");
                }}
                className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif]"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Home Visit Verification Popup */}
        <HomeVisitVerificationPopup
          isOpen={isHomeVisitPopupOpen}
          onClose={() => setIsHomeVisitPopupOpen(false)}
          onSubmit={(data) => {
            console.log("Home visit verification submitted:", data);
            toast.success("Verification submitted successfully!");
            setIsHomeVisitPopupOpen(false);
          }}
          studentName={selectedApp.personalDetails.fullName}
        />

        {/* In-Person Verification Popup */}
        <InPersonVerificationPopup
          isOpen={isInPersonPopupOpen}
          onClose={() => setIsInPersonPopupOpen(false)}
          onSubmit={(data) => {
            console.log("In-person verification submitted:", data);
            toast.success("Verification submitted successfully!");
            setIsInPersonPopupOpen(false);
          }}
          studentName={selectedApp.personalDetails.fullName}
        />

        {/* Counselling Feedback Popup */}
        <CounsellingFeedbackPopup
          isOpen={isCounsellingFeedbackOpen}
          onClose={() => setIsCounsellingFeedbackOpen(false)}
          onSubmit={(data) => {
            console.log("Counselling feedback submitted:", data);
            toast.success("Counselling feedback submitted successfully!");
            setIsCounsellingFeedbackOpen(false);
          }}
          studentName={selectedApp.personalDetails.fullName}
        />
      </div>
    </div>
  );
}

// Helper component for displaying detail items
function DetailItem({ label, value, className = "" }: { label: string; value: string; className?: string }) {
  return (
    <div className={`${className} min-w-0`}>
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[13px] mb-1">
        {label}
      </p>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] break-words overflow-wrap-anywhere">
        {value}
      </p>
    </div>
  );
}