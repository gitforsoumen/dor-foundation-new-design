import { useState } from "react";
import { Search, Filter, Download, FileText, Mail, Phone, UserCheck, Calendar as CalendarIcon, Clock, CheckCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import svgPaths from "../../imports/svg-oby21uuesm";
import taskSvgPaths from "../../imports/svg-8s26lz80ha";

interface ApplicationListProps {
  onSelectApplication: (appId: string) => void;
  onScheduleInterview?: (appId: string) => void;
  onScheduleExam?: (appId: string) => void;
  onSelectionChange?: (selectedIds: string[]) => void;
  scheduledExamAppIds?: string[];
}

// Mock applications data
const mockApplications = [
  {
    id: "APP-2024-001",
    studentId: "STU-2024-001",
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543210",
    submittedDate: "15 Jan 2024",
    status: "Pending Review",
    course: "Computer Science",
    tasks: [
      {
        name: "Counselling",
        type: "counselling",
        assignedDate: "15 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      },
      {
        name: "Document Upload / Verification",
        type: "document",
        assignedDate: "12 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Completed",
        completedDate: "18 Jan 2024"
      },
      {
        name: "Home Visit",
        type: "home-visit",
        assignedDate: "16 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      }
    ]
  },
  {
    id: "APP-2024-002",
    studentId: "STU-2024-002",
    name: "Rahul Kumar",
    email: "rahul.kumar@email.com",
    phone: "+91 9876543211",
    submittedDate: "16 Jan 2024",
    status: "Pending Review",
    course: "Mechanical Engineering",
    tasks: [
      {
        name: "Counselling",
        type: "counselling",
        assignedDate: "16 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Completed",
        completedDate: "20 Jan 2024"
      },
      {
        name: "Document Upload / Verification",
        type: "document",
        assignedDate: "13 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      },
      {
        name: "Home Visit",
        type: "home-visit",
        assignedDate: "17 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      }
    ]
  },
  {
    id: "APP-2024-003",
    studentId: "STU-2024-003",
    name: "Anita Patel",
    email: "anita.patel@email.com",
    phone: "+91 9876543212",
    submittedDate: "14 Jan 2024",
    status: "Accepted",
    course: "Information Technology",
    tasks: [
      {
        name: "Counselling",
        type: "counselling",
        assignedDate: "14 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Completed",
        completedDate: "19 Jan 2024"
      },
      {
        name: "Document Upload / Verification",
        type: "document",
        assignedDate: "11 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Completed",
        completedDate: "17 Jan 2024"
      },
      {
        name: "Home Visit",
        type: "home-visit",
        assignedDate: "15 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Completed",
        completedDate: "21 Jan 2024"
      }
    ]
  },
  {
    id: "APP-2024-004",
    studentId: "STU-2024-004",
    name: "Amit Singh",
    email: "amit.singh@email.com",
    phone: "+91 9876543213",
    submittedDate: "17 Jan 2024",
    status: "Pending Review",
    course: "Electronics",
    tasks: [
      {
        name: "Counselling",
        type: "counselling",
        assignedDate: "17 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      },
      {
        name: "Document Upload / Verification",
        type: "document",
        assignedDate: "14 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      },
      {
        name: "Home Visit",
        type: "home-visit",
        assignedDate: "18 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      }
    ]
  },
  {
    id: "APP-2024-005",
    studentId: "STU-2024-005",
    name: "Neha Gupta",
    email: "neha.gupta@email.com",
    phone: "+91 9876543214",
    submittedDate: "13 Jan 2024",
    status: "Rejected",
    course: "Civil Engineering",
    tasks: [
      {
        name: "Counselling",
        type: "counselling",
        assignedDate: "13 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Completed",
        completedDate: "18 Jan 2024"
      },
      {
        name: "Document Upload / Verification",
        type: "document",
        assignedDate: "10 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Completed",
        completedDate: "16 Jan 2024"
      },
      {
        name: "Home Visit",
        type: "home-visit",
        assignedDate: "14 Jan 2024",
        assignedTo: "Volunteer Name",
        status: "Pending",
        completedDate: null
      }
    ]
  }
];

export default function ApplicationList({ onSelectApplication, onScheduleInterview, onScheduleExam, onSelectionChange, scheduledExamAppIds }: ApplicationListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);

  const toggleSelection = (appId: string) => {
    setSelectedApplications(prev => {
      const newSelection = prev.includes(appId) 
        ? prev.filter(id => id !== appId)
        : [...prev, appId];
      
      // Notify parent of selection change
      if (onSelectionChange) {
        onSelectionChange(newSelection);
      }
      
      return newSelection;
    });
  };

  const filteredApplications = mockApplications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending Review":
        return "bg-[#fef3c7] text-[#92400e] border-0";
      case "Accepted":
        return "bg-[#d1fae5] text-[#065f46] border-0";
      case "Rejected":
        return "bg-[#fee2e2] text-[#991b1b] border-0";
      default:
        return "bg-gray-100 text-gray-800 border-0";
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <Card className="bg-white p-4 rounded-[10px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#aeaeae]" />
            <Input
              type="text"
              placeholder="Search by name, ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-[48px] rounded-[8px] border-[#aeaeae] bg-white font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] flex items-center"
            />
          </div>
          <div className="w-full md:w-[220px]">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="h-[48px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                <SelectItem value="Pending Review">Pending Review</SelectItem>
                <SelectItem value="Accepted">Accepted</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.length === 0 ? (
          <Card className="bg-white p-12 rounded-[10px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] text-center">
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[16px]">
              No applications found
            </p>
          </Card>
        ) : (
          filteredApplications.map((app) => (
            <Card
              key={app.id}
              className="bg-white rounded-[16px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] overflow-hidden"
            >
              {/* Header Section */}
              <div className="bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] px-6 py-5 border-b border-[#e2e8f2] flex items-start gap-4">
                {/* Checkbox */}
                <div className="pt-1">
                  <Checkbox
                    checked={selectedApplications.includes(app.id)}
                    onCheckedChange={() => toggleSelection(app.id)}
                    className="w-5 h-5 rounded border-[#aeaeae] data-[state=checked]:bg-[#1a4d8f] data-[state=checked]:border-[#1a4d8f]"
                  />
                </div>

                <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  {/* Student Name and ID */}
                  <div>
                    <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[20px] mb-2">
                      {app.name}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-[#6b7280]" />
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b7280] text-[13px]">
                          {app.studentId}
                        </p>
                      </div>
                      <span className="text-[#cbd5e1]">|</span>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[13px]">
                        App ID: {app.id}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      className="bg-white h-[44px] px-5 rounded-[100px] border-[1.6px] border-[#1a4d8f] hover:bg-[#ecf4ff] transition-colors flex items-center gap-2"
                      onClick={() => {
                        // Download student profile
                        alert(`Downloading profile for ${app.name}...`);
                      }}
                    >
                      <Download className="w-4 h-4 text-[#1a4d8f]" />
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                        Download Student Profile
                      </p>
                    </button>
                    <button
                      className="bg-[#1a4d8f] h-[44px] px-5 rounded-[100px] hover:bg-[#153d73] transition-colors flex items-center gap-2"
                      onClick={() => onSelectApplication(app.id)}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                        <g>
                          <path d={taskSvgPaths.p368df400} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={taskSvgPaths.p3a53aa80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 7.33333H10.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M8 10.6667H10.6667" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M5.33333 7.33333H5.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d="M5.33333 10.6667H5.34" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </g>
                      </svg>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-white text-[14px]">
                        View Details
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Content Section */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Assigned Roles Section (2 columns on large screens) */}
                  <div className="lg:col-span-2">
                    {/* Task Cards */}
                    <div className="space-y-4">
                      {app.tasks.map((task, idx) => (
                        <TaskCard key={idx} task={task} />
                      ))}
                    </div>
                  </div>

                  {/* Contact Information Section (1 column on large screens) */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-[12px] border border-[#e2e8f2] p-5">
                      <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#374151] text-[14px] mb-4">
                        Contact Information
                      </h3>
                      
                      {/* Email */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-[#eff6ff] rounded-[8px] w-9 h-9 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                            <g>
                              <path d={taskSvgPaths.p2f8e7e80} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              <path d={taskSvgPaths.p17070980} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#9ca3af] text-[11px] uppercase tracking-[0.275px] mb-1">
                            EMAIL
                          </p>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#374151] text-[14px] truncate">
                            {app.email}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <div className="bg-[#fef3c7] rounded-[8px] w-9 h-9 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                            <g clipPath="url(#clip0_phone)">
                              <path d={taskSvgPaths.p26187580} stroke="#A85613" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </g>
                            <defs>
                              <clipPath id="clip0_phone">
                                <rect fill="white" height="16" width="16" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#9ca3af] text-[11px] uppercase tracking-[0.275px] mb-1">
                            PHONE
                          </p>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#374151] text-[14px]">
                            {app.phone}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#9ca3af] text-[12px] leading-[16px] mb-1">
        {label}
      </p>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#374151] text-[14px] leading-[20px] truncate">
        {value}
      </p>
    </div>
  );
}

function TaskCard({ task }: { task: { name: string; type: string; assignedDate: string; assignedTo: string; status: string; completedDate: string | null } }) {
  const getTaskBadgeColor = (type: string) => {
    switch (type) {
      case "counselling":
        return "bg-[#dbeafe] text-[#1e40af]";
      case "document":
        return "bg-[#fce7f3] text-[#9f1239]";
      case "home-visit":
        return "bg-[#f3e8ff] text-[#6b21a8]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-[#fef3c7] text-[#92400e]";
      case "Completed":
        return "bg-[#d1fae5] text-[#065f46]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const isCompleted = task.status === "Completed";

  return (
    <div className="bg-white rounded-[10px] border border-[#e2e8f2] p-[17px]">
      <div className="flex items-start justify-between">
        {/* Left section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Badge className={`${getTaskBadgeColor(task.type)} font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px] border-0`}>
              {task.name}
            </Badge>
            {/* Status Icon */}
            {isCompleted ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_completed)">
                  <path d={taskSvgPaths.p39ee6532} stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={taskSvgPaths.p17134c00} stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_completed">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <g clipPath="url(#clip0_pending)">
                  <path d="M8 4V8L10.6667 9.33333" stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={taskSvgPaths.p39ee6532} stroke="#D97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
                <defs>
                  <clipPath id="clip0_pending">
                    <rect fill="white" height="16" width="16" />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>

          <div className="space-y-1.5">
            {/* Assigned Date */}
            <div className="flex items-center gap-2">
              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                <g>
                  <path d="M4.66667 1.16667V3.5" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M9.33333 1.16667V3.5" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={taskSvgPaths.p24a2b500} stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M1.75 5.83333H12.25" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
              </svg>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[12px]">
                Assigned: {task.assignedDate}
              </p>
            </div>

            {/* Assigned To */}
            <div className="flex items-center gap-2">
              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                <g>
                  <path d="M6.99967 6.41667C8.28834 6.41667 9.33301 5.372 9.33301 4.08333C9.33301 2.79467 8.28834 1.75 6.99967 1.75C5.71101 1.75 4.66634 2.79467 4.66634 4.08333C4.66634 5.372 5.71101 6.41667 6.99967 6.41667Z" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M2.33301 12.25V11.0833C2.33301 10.3792 2.61281 9.70396 3.11916 9.19761C3.62551 8.69126 4.30073 8.41146 5.00467 8.41146H8.99467C9.69861 8.41146 10.3738 8.69126 10.8802 9.19761C11.3865 9.70396 11.6663 10.3792 11.6663 11.0833V12.25" stroke="#9CA3AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
              </svg>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[12px]">
                Assigned to: <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#374151]">{task.assignedTo}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col items-end gap-2">
          <Badge className={`${getStatusBadgeColor(task.status)} font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px] border-0`}>
            {task.status}
          </Badge>
          {isCompleted && task.completedDate && (
            <div className="flex items-center gap-2">
              <svg className="w-[14px] h-[14px]" fill="none" viewBox="0 0 14 14">
                <g>
                  <path d="M4.66667 1.16667V3.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M9.33333 1.16667V3.5" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={taskSvgPaths.p24a2b500} stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d="M1.75 5.83333H12.25" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </g>
              </svg>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[12px]">
                {task.completedDate}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}