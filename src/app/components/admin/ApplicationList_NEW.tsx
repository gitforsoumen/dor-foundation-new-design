import { useState } from "react";
import { Search, Filter, Calendar, BookOpen } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import svgPaths from "../../imports/svg-oby21uuesm";

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
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543210",
    submittedDate: "15 Jan 2024",
    status: "Pending Review",
    course: "Computer Science",
    percentage: "91%"
  },
  {
    id: "APP-2024-002",
    name: "Rahul Kumar",
    email: "rahul.kumar@email.com",
    phone: "+91 9876543211",
    submittedDate: "16 Jan 2024",
    status: "Pending Review",
    course: "Mechanical Engineering",
    percentage: "88%"
  },
  {
    id: "APP-2024-003",
    name: "Anita Patel",
    email: "anita.patel@email.com",
    phone: "+91 9876543212",
    submittedDate: "14 Jan 2024",
    status: "Accepted",
    course: "Information Technology",
    percentage: "94%"
  },
  {
    id: "APP-2024-004",
    name: "Amit Singh",
    email: "amit.singh@email.com",
    phone: "+91 9876543213",
    submittedDate: "17 Jan 2024",
    status: "Pending Review",
    course: "Electronics",
    percentage: "87%"
  },
  {
    id: "APP-2024-005",
    name: "Neha Gupta",
    email: "neha.gupta@email.com",
    phone: "+91 9876543214",
    submittedDate: "13 Jan 2024",
    status: "Rejected",
    course: "Civil Engineering",
    percentage: "76%"
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
              className="bg-white p-6 rounded-[10px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] hover:shadow-[0px_5px_35px_0px_rgba(54,88,136,0.12)] transition-all duration-200"
            >
              <div className="flex gap-4 items-start">
                {/* Checkbox */}
                <div className="pt-1">
                  <Checkbox
                    checked={selectedApplications.includes(app.id)}
                    onCheckedChange={() => toggleSelection(app.id)}
                    className="w-5 h-5 rounded border-[#aeaeae] data-[state=checked]:bg-[#1a4d8f] data-[state=checked]:border-[#1a4d8f]"
                  />
                </div>

                <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Left Section - Application Info */}
                  <div className="flex-1 space-y-4">
                    {/* Header with Name, ID and Status */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[18px] leading-[24px]">
                          {app.name}
                        </h3>
                        <Badge className={`${getStatusColor(app.status)} font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[10px] px-3 py-1 rounded-[6px] whitespace-nowrap`}>
                          {app.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#374151] text-[14px] leading-[20px]">
                          {app.id}
                        </p>
                        <span className="text-[#9ca3af]">•</span>
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#374151] text-[14px] leading-[20px]">
                          Submitted on {app.submittedDate}
                        </p>
                      </div>
                    </div>
                    
                    {/* Info Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <InfoItem label="Email" value={app.email} />
                      <InfoItem label="Phone" value={app.phone} />
                      <InfoItem label="Course" value={app.course} />
                      <InfoItem label="Score" value={app.percentage} />
                    </div>

                    {/* Exam Scheduled Indicator */}
                    {scheduledExamAppIds && scheduledExamAppIds.includes(app.id) && (
                      <div className="flex items-center gap-2 mt-2">
                        <BookOpen className="w-4 h-4 text-[#1a4d8f]" />
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px]">
                          Exam Scheduled
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Right Section - View Details Button */}
                  <div className="flex flex-col gap-3 lg:items-end">
                    <button
                      onClick={() => onSelectApplication(app.id)}
                      className="bg-white hover:bg-[#f8fafc] relative rounded-[100px] transition-all cursor-pointer h-[44px]"
                    >
                      <div aria-hidden="true" className="absolute border-[#1a4d8f] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[100px]" />
                      <div className="flex flex-row items-center justify-center h-full">
                        <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[20.8px] h-full">
                          <div className="relative shrink-0 size-[16px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g>
                                <path d={svgPaths.p26b72c80} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                                <path d={svgPaths.p28db2b80} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                              </g>
                            </svg>
                          </div>
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1a4d8f] text-[14px] text-nowrap whitespace-pre">View Details</p>
                        </div>
                      </div>
                    </button>
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
