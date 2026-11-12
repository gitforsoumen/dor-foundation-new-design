import { useState } from "react";
import { Calendar, Upload, Phone, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface InterviewManagementProps {
  onBack: () => void;
}

// Mock interview data
const mockInterviews = [
  {
    id: "INT-001",
    studentName: "Priya Sharma",
    applicationId: "APP-2024-001",
    date: "25 Jan 2024",
    time: "10:00 AM",
    status: "Scheduled",
    phone: "+91 9876543210"
  },
  {
    id: "INT-002",
    studentName: "Rahul Kumar",
    applicationId: "APP-2024-002",
    date: "25 Jan 2024",
    time: "11:30 AM",
    status: "Scheduled",
    phone: "+91 9876543211"
  },
  {
    id: "INT-003",
    studentName: "Anita Patel",
    applicationId: "APP-2024-003",
    date: "26 Jan 2024",
    time: "02:00 PM",
    status: "Completed",
    phone: "+91 9876543212"
  }
];

export default function InterviewManagement({ onBack }: InterviewManagementProps) {
  const [selectedStudent, setSelectedStudent] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [notes, setNotes] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleScheduleInterview = () => {
    console.log("Scheduling interview:", {
      student: selectedStudent,
      date: interviewDate,
      time: interviewTime,
      notes
    });
    // Reset form
    setSelectedStudent("");
    setInterviewDate("");
    setInterviewTime("");
    setNotes("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Interview Management
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
            Schedule and manage telephonic interviews
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Schedule Interview Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white p-6 rounded-[12px] border-[#e0e0e0] shadow-sm">
              <h2 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Schedule New Interview
              </h2>
              <div className="space-y-6">
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Select Student <span className="text-red-500">*</span>
                  </Label>
                  <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                    <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                      <SelectValue placeholder="Select a student" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="APP-2024-004">Amit Singh - APP-2024-004</SelectItem>
                      <SelectItem value="APP-2024-005">Neha Gupta - APP-2024-005</SelectItem>
                      <SelectItem value="APP-2024-006">Rajesh Verma - APP-2024-006</SelectItem>
                      <SelectItem value="APP-2024-007">Kavita Joshi - APP-2024-007</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Interview Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="date"
                      value={interviewDate}
                      onChange={(e) => setInterviewDate(e.target.value)}
                      className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
                    />
                  </div>

                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Interview Time <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="time"
                      value={interviewTime}
                      onChange={(e) => setInterviewTime(e.target.value)}
                      className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
                    />
                  </div>
                </div>

                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Notes / Instructions
                  </Label>
                  <Textarea
                    placeholder="Add any notes or instructions for the interview..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-2 min-h-[120px] rounded-[8px] border-[#aeaeae] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
                  />
                </div>

                <Button
                  onClick={handleScheduleInterview}
                  disabled={!selectedStudent || !interviewDate || !interviewTime}
                  className="w-full md:w-auto bg-[#1a4d8f] hover:bg-[#153d72] text-white h-[56px] px-8 rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] disabled:opacity-50"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Interview
                </Button>
              </div>
            </Card>

            {/* Upload Manual Form Summary */}
            <Card className="bg-white p-6 rounded-[12px] border-[#e0e0e0] shadow-sm">
              <h2 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Upload Manual Form Summary
              </h2>
              <div className="space-y-6">
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Select Application
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                      <SelectValue placeholder="Select application" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="APP-2024-001">Priya Sharma - APP-2024-001</SelectItem>
                      <SelectItem value="APP-2024-002">Rahul Kumar - APP-2024-002</SelectItem>
                      <SelectItem value="APP-2024-003">Anita Patel - APP-2024-003</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Upload Document
                  </Label>
                  <div className="mt-2">
                    <label
                      htmlFor="manual-form-upload"
                      className="flex items-center justify-center h-[120px] border-2 border-dashed border-[#aeaeae] rounded-[8px] cursor-pointer hover:border-[#1a4d8f] transition-colors bg-[#f8f8f8] hover:bg-white"
                    >
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-[#1a4d8f] mx-auto mb-2" />
                        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                          {uploadedFile ? uploadedFile.name : "Click to upload or drag and drop"}
                        </p>
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[12px] mt-1">
                          PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    </label>
                    <input
                      id="manual-form-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                <Button
                  disabled={!uploadedFile}
                  className="w-full md:w-auto bg-[#a85613] hover:bg-[#8a4610] text-white h-[56px] px-8 rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] disabled:opacity-50"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Summary
                </Button>
              </div>
            </Card>
          </div>

          {/* Scheduled Interviews List */}
          <div className="lg:col-span-1">
            <Card className="bg-white p-6 rounded-[12px] border-[#e0e0e0] shadow-sm sticky top-6">
              <h2 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Upcoming Interviews
              </h2>
              <div className="space-y-4">
                {mockInterviews.map((interview) => (
                  <div
                    key={interview.id}
                    className={`p-4 rounded-[8px] border ${
                      interview.status === "Scheduled"
                        ? "bg-blue-50 border-blue-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                        {interview.studentName}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-[4px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] ${
                          interview.status === "Scheduled"
                            ? "bg-[#1a4d8f] text-white"
                            : "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {interview.status}
                      </span>
                    </div>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[12px] mb-3">
                      {interview.applicationId}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1a4d8f]" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                          {interview.date} • {interview.time}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#a85613]" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                          {interview.phone}
                        </span>
                      </div>
                    </div>
                    {interview.status === "Scheduled" && (
                      <Button
                        size="sm"
                        className="w-full mt-3 bg-[#1a4d8f] hover:bg-[#153d72] text-white h-[36px] rounded-[6px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[12px]"
                      >
                        <Phone className="w-3 h-3 mr-2" />
                        Start Call
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
