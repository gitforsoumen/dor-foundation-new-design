import { useState } from "react";
import { ArrowLeft, Activity, User, Clock, CheckCircle, XCircle, Calendar as CalendarIcon, FileText, Send, Edit, Eye } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

interface ActivityLogEntry {
  id: string;
  timestamp: string;
  action: string;
  performedBy: string;
  role: "Admin" | "Volunteer" | "System" | "Student";
  details: string;
  category: "status_change" | "document" | "communication" | "interview" | "exam" | "review" | "assignment";
}

interface ActivityLogProps {
  onBack: () => void;
}

// Mock data - In real implementation, this would come from API
const mockActivityData: ActivityLogEntry[] = [
  {
    id: "1",
    timestamp: "2024-12-17 14:30:00",
    action: "Application Status Changed",
    performedBy: "Rajesh Kumar",
    role: "Admin",
    details: "Status changed from 'Under Review' to 'Interview Scheduled'",
    category: "status_change"
  },
  {
    id: "2",
    timestamp: "2024-12-17 11:15:00",
    action: "Interview Scheduled",
    performedBy: "Rahul Sharma",
    role: "Student",
    details: "Interview scheduled for December 20, 2024 at 10:00 AM",
    category: "interview"
  },
  {
    id: "3",
    timestamp: "2024-12-16 16:45:00",
    action: "Document Verified",
    performedBy: "Amit Patel",
    role: "Volunteer",
    details: "10th Marksheet verified and approved",
    category: "document"
  },
  {
    id: "4",
    timestamp: "2024-12-16 14:20:00",
    action: "Message Sent",
    performedBy: "Rajesh Kumar",
    role: "Admin",
    details: "Email sent: 'Please upload missing Income Certificate'",
    category: "communication"
  },
  {
    id: "5",
    timestamp: "2024-12-16 10:30:00",
    action: "Application Assigned",
    performedBy: "Sunita Rao",
    role: "Volunteer",
    details: "Application assigned to volunteer: Amit Patel",
    category: "assignment"
  },
  {
    id: "6",
    timestamp: "2024-12-15 17:10:00",
    action: "Document Upload Rejected",
    performedBy: "Amit Patel",
    role: "Volunteer",
    details: "Aadhaar Card rejected - Image not clear, requested re-upload",
    category: "document"
  },
  {
    id: "7",
    timestamp: "2024-12-15 15:00:00",
    action: "Application Reviewed",
    performedBy: "Priya Sharma",
    role: "Admin",
    details: "Initial review completed, marked for document verification",
    category: "review"
  },
  {
    id: "8",
    timestamp: "2024-12-15 09:30:00",
    action: "Exam Scheduled",
    performedBy: "Rajesh Kumar",
    role: "Admin",
    details: "Scholarship exam scheduled for December 18, 2024 at 2:00 PM",
    category: "exam"
  },
  {
    id: "9",
    timestamp: "2024-12-14 16:25:00",
    action: "Application Status Changed",
    performedBy: "Amit Patel",
    role: "Volunteer",
    details: "Status changed from 'Submitted' to 'Under Review'",
    category: "status_change"
  },
  {
    id: "10",
    timestamp: "2024-12-14 14:00:00",
    action: "Application Submitted",
    performedBy: "System",
    role: "System",
    details: "Student application form submitted successfully",
    category: "status_change"
  }
];

export default function ActivityLog({ onBack }: ActivityLogProps) {
  const [activityLog] = useState<ActivityLogEntry[]>(mockActivityData);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  // Get student info from URL (mock data)
  const studentName = "Rahul Sharma";
  const applicationId = "APP2024001234";

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "status_change":
        return <CheckCircle className="w-5 h-5" />;
      case "document":
        return <FileText className="w-5 h-5" />;
      case "communication":
        return <Send className="w-5 h-5" />;
      case "interview":
        return <CalendarIcon className="w-5 h-5" />;
      case "exam":
        return <Edit className="w-5 h-5" />;
      case "review":
        return <Eye className="w-5 h-5" />;
      case "assignment":
        return <User className="w-5 h-5" />;
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "status_change":
        return "text-green-600 bg-green-50";
      case "document":
        return "text-blue-600 bg-blue-50";
      case "communication":
        return "text-purple-600 bg-purple-50";
      case "interview":
        return "text-orange-600 bg-orange-50";
      case "exam":
        return "text-indigo-600 bg-indigo-50";
      case "review":
        return "text-teal-600 bg-teal-50";
      case "assignment":
        return "text-pink-600 bg-pink-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-[#1a4d8f] text-white";
      case "Volunteer":
        return "bg-[#a85613] text-white";
      case "System":
        return "bg-[#6b7280] text-white";
      case "Student":
        return "bg-[#3490dc] text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const formatDateTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const isToday = date.toDateString() === today.toDateString();
    const isYesterday = date.toDateString() === yesterday.toDateString();

    const timeStr = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    if (isToday) {
      return `Today at ${timeStr}`;
    } else if (isYesterday) {
      return `Yesterday at ${timeStr}`;
    } else {
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ` at ${timeStr}`;
    }
  };

  const filteredActivities = filterCategory === "all" 
    ? activityLog 
    : activityLog.filter(activity => activity.category === filterCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ecf4ff] via-white to-[#fff9e6] p-4 sm:p-6 lg:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:text-[#a85613] hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Application
          </Button>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Activity Log
              </h1>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
                {applicationId} • {studentName}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#1a4d8f]" />
              <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48]">
                {filteredActivities.length} {filteredActivities.length === 1 ? 'Activity' : 'Activities'}
              </span>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <Card className="bg-white p-4 rounded-[12px] border-[#e2e8f2] mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setFilterCategory("all")}
              variant={filterCategory === "all" ? "default" : "outline"}
              className={`rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] ${
                filterCategory === "all" 
                  ? "bg-[#1a4d8f] hover:bg-[#153d73] text-white" 
                  : "border-[#e2e8f2] text-[#4d4b48] hover:bg-[#ecf4ff]"
              }`}
            >
              All Activities
            </Button>
            <Button
              onClick={() => setFilterCategory("status_change")}
              variant={filterCategory === "status_change" ? "default" : "outline"}
              className={`rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] ${
                filterCategory === "status_change" 
                  ? "bg-[#1a4d8f] hover:bg-[#153d73] text-white" 
                  : "border-[#e2e8f2] text-[#4d4b48] hover:bg-[#ecf4ff]"
              }`}
            >
              Status Changes
            </Button>
            <Button
              onClick={() => setFilterCategory("document")}
              variant={filterCategory === "document" ? "default" : "outline"}
              className={`rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] ${
                filterCategory === "document" 
                  ? "bg-[#1a4d8f] hover:bg-[#153d73] text-white" 
                  : "border-[#e2e8f2] text-[#4d4b48] hover:bg-[#ecf4ff]"
              }`}
            >
              Documents
            </Button>
            <Button
              onClick={() => setFilterCategory("communication")}
              variant={filterCategory === "communication" ? "default" : "outline"}
              className={`rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] ${
                filterCategory === "communication" 
                  ? "bg-[#1a4d8f] hover:bg-[#153d73] text-white" 
                  : "border-[#e2e8f2] text-[#4d4b48] hover:bg-[#ecf4ff]"
              }`}
            >
              Communication
            </Button>
            <Button
              onClick={() => setFilterCategory("interview")}
              variant={filterCategory === "interview" ? "default" : "outline"}
              className={`rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] ${
                filterCategory === "interview" 
                  ? "bg-[#1a4d8f] hover:bg-[#153d73] text-white" 
                  : "border-[#e2e8f2] text-[#4d4b48] hover:bg-[#ecf4ff]"
              }`}
            >
              Interviews
            </Button>
            <Button
              onClick={() => setFilterCategory("exam")}
              variant={filterCategory === "exam" ? "default" : "outline"}
              className={`rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] ${
                filterCategory === "exam" 
                  ? "bg-[#1a4d8f] hover:bg-[#153d73] text-white" 
                  : "border-[#e2e8f2] text-[#4d4b48] hover:bg-[#ecf4ff]"
              }`}
            >
              Exams
            </Button>
          </div>
        </Card>

        {/* Activity Timeline */}
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => (
            <Card key={activity.id} className="bg-white rounded-[12px] border-[#e2e8f2] overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${getCategoryColor(activity.category)}`}>
                    {getCategoryIcon(activity.category)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[16px]">
                        {activity.action}
                      </h3>
                      <div className="flex items-center gap-2 text-[#99A1AF]">
                        <Clock className="w-4 h-4" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px]">
                          {formatDateTime(activity.timestamp)}
                        </span>
                      </div>
                    </div>

                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                      {activity.details}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-[#99A1AF]" />
                        <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                          {activity.performedBy}
                        </span>
                      </div>
                      <Badge className={`${getRoleBadgeColor(activity.role)} font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[12px] px-3 py-1 rounded-[100px]`}>
                        {activity.role}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline connector line (except for last item) */}
              {index !== filteredActivities.length - 1 && (
                <div className="ml-6 md:ml-12 h-4 w-[2px] bg-gradient-to-b from-[#e2e8f2] to-transparent"></div>
              )}
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredActivities.length === 0 && (
          <Card className="bg-white p-12 rounded-[12px] border-[#e2e8f2] text-center">
            <Activity className="w-16 h-16 text-[#99A1AF] mx-auto mb-4" />
            <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#4d4b48] text-[18px] mb-2">
              No Activities Found
            </h3>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[14px]">
              There are no activities in this category yet.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}