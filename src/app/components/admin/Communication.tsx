import { useState } from "react";
import { Send, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface CommunicationProps {
  onBack: () => void;
}

// Predefined message templates
const congratulatoryTemplate = `Dear [Student Name],

Congratulations! We are pleased to inform you that your application for the DOR Foundation Scholarship has been accepted.

We were impressed by your academic achievements and dedication. This scholarship will support your educational journey, and we look forward to seeing your continued success.

Next Steps:
1. You will receive a detailed email with further instructions
2. Please attend the orientation session on [Date]
3. Complete the acceptance form within 7 days

If you have any questions, please don't hesitate to contact us.

Warm regards,
DOR Foundation Team`;

const rejectionTemplate = `Dear [Student Name],

Thank you for applying to the DOR Foundation Scholarship program. We appreciate the time and effort you put into your application.

After careful consideration, we regret to inform you that we are unable to offer you a scholarship at this time. Due to the high volume of applications and limited resources, we had to make very difficult decisions.

We encourage you to continue pursuing your educational goals and wish you the very best in your future endeavors.

If you have any questions, please feel free to reach out to us.

Best regards,
DOR Foundation Team`;

export default function Communication({ onBack }: CommunicationProps) {
  const [messageType, setMessageType] = useState<"congratulatory" | "rejection">("congratulatory");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [message, setMessage] = useState(congratulatoryTemplate);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const handleMessageTypeChange = (type: "congratulatory" | "rejection") => {
    setMessageType(type);
    setMessage(type === "congratulatory" ? congratulatoryTemplate : rejectionTemplate);
  };

  const handleSendMessage = () => {
    console.log("Sending message to:", selectedStudents);
    console.log("Message:", message);
    setIsSuccessDialogOpen(true);
    // Reset after sending
    setTimeout(() => {
      setSelectedStudents([]);
      setIsSuccessDialogOpen(false);
    }, 2000);
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Communication Center
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
            Send congratulatory or rejection messages to students
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Message Composer */}
          <div className="lg:col-span-2">
            <Card className="bg-white p-6 rounded-[12px] border-[#e0e0e0] shadow-sm">
              <h2 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Compose Message
              </h2>
              
              <div className="space-y-6">
                {/* Message Type */}
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] block mb-4">
                    Message Type <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    value={messageType}
                    onValueChange={(value) => handleMessageTypeChange(value as "congratulatory" | "rejection")}
                    className="flex gap-8"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="congratulatory" id="congratulatory" />
                      <label htmlFor="congratulatory" className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer">
                        Congratulatory (Acceptance)
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="rejection" id="rejection" />
                      <label htmlFor="rejection" className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer">
                        Rejection
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Select Recipients */}
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Select Recipients <span className="text-red-500">*</span>
                  </Label>
                  <Select 
                    value={selectedStudents[0] || ""} 
                    onValueChange={(value) => setSelectedStudents([value])}
                  >
                    <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                      <SelectValue placeholder="Select student(s)" />
                    </SelectTrigger>
                    <SelectContent>
                      {messageType === "congratulatory" ? (
                        <>
                          <SelectItem value="all-accepted">All Accepted Students (89)</SelectItem>
                          <SelectItem value="APP-2024-001">Priya Sharma - APP-2024-001</SelectItem>
                          <SelectItem value="APP-2024-002">Rahul Kumar - APP-2024-002</SelectItem>
                          <SelectItem value="APP-2024-003">Anita Patel - APP-2024-003</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="all-rejected">All Rejected Students (25)</SelectItem>
                          <SelectItem value="APP-2024-010">Suresh Yadav - APP-2024-010</SelectItem>
                          <SelectItem value="APP-2024-011">Deepa Singh - APP-2024-011</SelectItem>
                          <SelectItem value="APP-2024-012">Vijay Kumar - APP-2024-012</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Template */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[12px]">
                      {message.length} characters
                    </span>
                  </div>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 min-h-[400px] rounded-[8px] border-[#aeaeae] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
                    placeholder="Enter your message here..."
                  />
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[12px] mt-2">
                    Note: [Student Name] and [Date] will be automatically replaced with actual values
                  </p>
                </div>

                {/* Send Button */}
                <Button
                  onClick={handleSendMessage}
                  disabled={!selectedStudents.length || !message.trim()}
                  className={`w-full md:w-auto h-[56px] px-8 rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] disabled:opacity-50 ${
                    messageType === "congratulatory"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-[#1a4d8f] hover:bg-[#153d72]"
                  } text-white`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </Card>
          </div>

          {/* Quick Stats and Recent Communications */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Stats */}
            <Card className="bg-white p-6 rounded-[12px] border-[#e0e0e0] shadow-sm">
              <h2 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Communication Stats
              </h2>
              <div className="space-y-4">
                <StatItem
                  icon={<Mail className="w-5 h-5 text-[#1a4d8f]" />}
                  label="Messages Sent Today"
                  value="12"
                />
                <StatItem
                  icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
                  label="Acceptance Letters"
                  value="89"
                />
                <StatItem
                  icon={<Mail className="w-5 h-5 text-[#a85613]" />}
                  label="Rejection Letters"
                  value="25"
                />
              </div>
            </Card>

            {/* Recent Communications */}
            <Card className="bg-white p-6 rounded-[12px] border-[#e0e0e0] shadow-sm">
              <h2 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Recent Activity
              </h2>
              <div className="space-y-4">
                <ActivityItem
                  type="acceptance"
                  student="Priya Sharma"
                  time="2 hours ago"
                />
                <ActivityItem
                  type="rejection"
                  student="Suresh Yadav"
                  time="4 hours ago"
                />
                <ActivityItem
                  type="acceptance"
                  student="Rahul Kumar"
                  time="1 day ago"
                />
                <ActivityItem
                  type="acceptance"
                  student="Anita Patel"
                  time="1 day ago"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[24px] text-center" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Message Sent Successfully
            </DialogTitle>
            <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-center">
              Your message has been sent to the selected recipients.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Helper Components
function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 p-3 bg-[#f8f8f8] rounded-[8px]">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[12px]">
          {label}
        </p>
        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[18px]">
          {value}
        </p>
      </div>
    </div>
  );
}

function ActivityItem({ type, student, time }: { type: "acceptance" | "rejection"; student: string; time: string }) {
  return (
    <div className="flex items-start gap-3 pb-4 border-b border-[#f0f0f0] last:border-0 last:pb-0">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        type === "acceptance" ? "bg-green-100" : "bg-red-100"
      }`}>
        {type === "acceptance" ? (
          <CheckCircle2 className="w-4 h-4 text-green-600" />
        ) : (
          <Mail className="w-4 h-4 text-red-600" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
          {type === "acceptance" ? "Acceptance" : "Rejection"} sent
        </p>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] truncate">
          {student}
        </p>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#aeaeae] text-[11px]">
          {time}
        </p>
      </div>
    </div>
  );
}
