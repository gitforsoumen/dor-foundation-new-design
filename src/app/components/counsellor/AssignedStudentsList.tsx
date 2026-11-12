import { useState } from "react";
import { Search, Filter, Calendar, ClipboardList, UserCheck, Mail, Phone, FileText, CheckCircle2, Clock, Download } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface AssignedStudentsListProps {
  onSelectStudent: (studentId: string) => void;
  onBackToDashboard: () => void;
}

// Mock students data
const mockStudents = [
  {
    id: "STU-2024-001",
    name: "Priya Sharma",
    applicationId: "APP-2024-001",
    email: "priya.sharma@email.com",
    phone: "+91 9876543210",
    roles: [
      { type: "Counselling", status: "Pending", assignedDate: "15 Jan 2024" },
      { type: "Document Upload / Verification", status: "Completed", assignedDate: "12 Jan 2024", completedDate: "18 Jan 2024" }
    ]
  },
  {
    id: "STU-2024-002",
    name: "Rahul Kumar",
    applicationId: "APP-2024-002",
    email: "rahul.kumar@email.com",
    phone: "+91 9876543211",
    roles: [
      { type: "Document Upload / Verification", status: "Pending", assignedDate: "16 Jan 2024" },
      { type: "Home Visit", status: "Pending", assignedDate: "16 Jan 2024" }
    ]
  },
  {
    id: "STU-2024-003",
    name: "Anita Patel",
    applicationId: "APP-2024-003",
    email: "anita.patel@email.com",
    phone: "+91 9876543212",
    roles: [
      { type: "Home Visit", status: "Completed", assignedDate: "10 Jan 2024", completedDate: "17 Jan 2024" },
      { type: "Counselling", status: "Completed", assignedDate: "14 Jan 2024", completedDate: "19 Jan 2024" },
      { type: "Document Upload / Verification", status: "Completed", assignedDate: "08 Jan 2024", completedDate: "15 Jan 2024" }
    ]
  },
  {
    id: "STU-2024-004",
    name: "Amit Singh",
    applicationId: "APP-2024-004",
    email: "amit.singh@email.com",
    phone: "+91 9876543213",
    roles: [
      { type: "Counselling", status: "Pending", assignedDate: "17 Jan 2024" }
    ]
  },
  {
    id: "STU-2024-005",
    name: "Neha Gupta",
    applicationId: "APP-2024-005",
    email: "neha.gupta@email.com",
    phone: "+91 9876543214",
    roles: [
      { type: "Document Upload / Verification", status: "Completed", assignedDate: "11 Jan 2024", completedDate: "18 Jan 2024" },
      { type: "Counselling", status: "Pending", assignedDate: "13 Jan 2024" }
    ]
  },
  {
    id: "STU-2024-006",
    name: "Vikram Reddy",
    applicationId: "APP-2024-006",
    email: "vikram.reddy@email.com",
    phone: "+91 9876543215",
    roles: [
      { type: "Home Visit", status: "Pending", assignedDate: "18 Jan 2024" },
      { type: "Counselling", status: "Completed", assignedDate: "15 Jan 2024", completedDate: "19 Jan 2024" },
      { type: "Document Upload / Verification", status: "Pending", assignedDate: "18 Jan 2024" }
    ]
  }
];

export default function AssignedStudentsList({
  onSelectStudent,
  onBackToDashboard
}: AssignedStudentsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");

  const handleDownloadProfile = (studentName: string, studentId: string) => {
    // In a real implementation, this would generate and download a PDF
    alert(`Downloading profile for ${studentName} (${studentId})...`);
    // Simulate download
    console.log("Download initiated for student:", studentId);
  };

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.applicationId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase());

    // Check if student has any role matching the status filter
    const matchesStatus = statusFilter === "all" || 
      student.roles.some(role => role.status === statusFilter);
    
    // Check if student has the selected role
    const matchesRole = roleFilter === "all" || 
      student.roles.some(role => role.type === roleFilter);

    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-[#fef3c7] text-[#92400e] border-0";
      case "Completed":
        return "bg-[#d1fae5] text-[#065f46] border-0";
      default:
        return "bg-gray-100 text-gray-800 border-0";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Counselling":
        return "bg-[#dbeafe] text-[#1e40af] border-0";
      case "Document Upload / Verification":
        return "bg-[#fce7f3] text-[#9f1239] border-0";
      case "Home Visit":
        return "bg-[#f3e8ff] text-[#6b21a8] border-0";
      default:
        return "bg-gray-100 text-gray-800 border-0";
    }
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            Assigned Students
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
            Manage counselling sessions for your assigned students
          </p>
        </div>

        {/* Search and Filter Bar */}
        <Card className="bg-white p-4 rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#aeaeae]" />
              <Input
                type="text"
                placeholder="Search by name, student ID, or application ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-[48px] rounded-[8px] border-[#e2e8f2] bg-white font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
              />
            </div>
            <div className="flex gap-3">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[180px] h-[48px] rounded-[8px] border-[#e2e8f2] bg-white px-[23px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full md:w-[180px] h-[48px] rounded-[8px] border-[#e2e8f2] bg-white px-[23px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                  <UserCheck className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="Counselling">Counselling</SelectItem>
                  <SelectItem value="Document Upload / Verification">Document Upload / Verification</SelectItem>
                  <SelectItem value="Home Visit">Home Visit</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Students List */}
        <div className="space-y-4">
          {filteredStudents.length === 0 ? (
            <Card className="bg-white p-12 rounded-[12px] border-0 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[16px]">
                No students found
              </p>
            </Card>
          ) : (
            filteredStudents.map((student) => (
              <Card
                key={student.id}
                className="bg-white rounded-[16px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] hover:shadow-[0px_6px_40px_0px_rgba(54,88,136,0.15)] transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col">
                  {/* Card Header - Student Name & IDs */}
                  <div className="bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] px-6 py-5 border-b border-[#e2e8f2]">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex-1 min-w-0">
                        <button
                          onClick={() => onSelectStudent(student.id)}
                          className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[20px] leading-[28px] hover:text-[#153d73] transition-colors text-left mb-2 block"
                        >
                          {student.name}
                        </button>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-[#6b7280]" />
                            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#6b7280] text-[13px]">
                              {student.id}
                            </p>
                          </div>
                          <span className="text-[#cbd5e1]">|</span>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[13px]">
                            App ID: {student.applicationId}
                          </p>
                        </div>
                      </div>
                      
                      {/* Action Button - Desktop */}
                      <div className="hidden lg:flex gap-3">
                        <Button
                          onClick={() => handleDownloadProfile(student.name, student.id)}
                          className="bg-white hover:bg-[#f6f8fc] text-[#1a4d8f] border-2 border-[#1a4d8f] h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] whitespace-nowrap shadow-sm hover:shadow-md transition-all"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download Student Profile
                        </Button>
                        <Button
                          onClick={() => onSelectStudent(student.id)}
                          className="bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] whitespace-nowrap shadow-sm hover:shadow-md transition-all"
                        >
                          <ClipboardList className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                      {/* Left Column - Assigned Roles (Takes 3 columns on large screens) */}
                      <div className="lg:col-span-3">
                        <div className="bg-[#fafbfc] border border-[#e2e8f2] p-5 rounded-[12px]">
                          <div className="flex items-center gap-2 mb-4">
                            <UserCheck className="w-5 h-5 text-[#1a4d8f]" />
                            <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[15px]">
                              Assigned Roles
                            </h3>
                          </div>
                          <div className="space-y-4">
                            {student.roles.map((role, index) => (
                              <div 
                                key={index} 
                                className="bg-white p-4 rounded-[10px] border border-[#e2e8f2] hover:border-[#cbd5e1] transition-colors"
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Badge
                                        className={`${getRoleColor(role.type)} font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px]`}
                                      >
                                        {role.type}
                                      </Badge>
                                      {role.status === "Completed" ? (
                                        <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0" />
                                      ) : (
                                        <Clock className="w-4 h-4 text-[#d97706] flex-shrink-0" />
                                      )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Calendar className="w-3.5 h-3.5 text-[#9ca3af]" />
                                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[12px]">
                                        Assigned: {role.assignedDate}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-end gap-2">
                                    <Badge
                                      className={`${getStatusColor(role.status)} font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] px-3 py-1.5 rounded-[6px] flex-shrink-0`}
                                    >
                                      {role.status}
                                    </Badge>
                                    {role.completedDate && (
                                      <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 text-[#059669]" />
                                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[12px]">
                                          {role.completedDate}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Contact Information (Takes 2 columns on large screens) */}
                      <div className="lg:col-span-2">
                        <div className="bg-white border border-[#e2e8f2] p-5 rounded-[12px]">
                          <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#374151] text-[14px] mb-4">
                            Contact Information
                          </h3>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 bg-[#eff6ff] rounded-[8px] flex items-center justify-center flex-shrink-0">
                                <Mail className="w-4 h-4 text-[#1a4d8f]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#9ca3af] text-[11px] uppercase tracking-wide mb-1">
                                  Email
                                </p>
                                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#374151] text-[14px] break-all">
                                  {student.email}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 bg-[#fef3c7] rounded-[8px] flex items-center justify-center flex-shrink-0">
                                <Phone className="w-4 h-4 text-[#a85613]" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#9ca3af] text-[11px] uppercase tracking-wide mb-1">
                                  Phone
                                </p>
                                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#374151] text-[14px]">
                                  {student.phone}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button - Mobile */}
                    <div className="lg:hidden mt-6 flex flex-col gap-3">
                      <Button
                        onClick={() => handleDownloadProfile(student.name, student.id)}
                        className="w-full bg-white hover:bg-[#f6f8fc] text-[#1a4d8f] border-2 border-[#1a4d8f] h-[48px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] shadow-sm hover:shadow-md transition-all"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Student Profile
                      </Button>
                      <Button
                        onClick={() => onSelectStudent(student.id)}
                        className="w-full bg-[#1a4d8f] hover:bg-[#153d73] text-white h-[48px] px-6 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] shadow-sm hover:shadow-md transition-all"
                      >
                        <ClipboardList className="w-5 h-5 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Pagination Info */}
        {filteredStudents.length > 0 && (
          <div className="mt-6 flex justify-center">
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
              Showing {filteredStudents.length} of {mockStudents.length} students
            </p>
          </div>
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