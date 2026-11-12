import { Users, ClipboardList, CheckCircle2, Calendar, UserCheck, FileText, Mail, Phone, Download, TrendingUp, Clock, MessageSquare, Home, Eye, Play, ArrowRight, BookOpen, HelpCircle, ListChecks } from "lucide-react";
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

  type TaskType = "Counselling" | "Home Visit" | "Document Verification";

  // Scheduled tasks (same data as before, now in one list)
  const tasks: {
    studentId: string;
    appId: string;
    name: string;
    type: TaskType;
    status: string;
    month: string;
    day: string;
    weekday: string;
    time: string;
    fullDate: string;
    email: string;
    phone: string;
  }[] = [
    { studentId: "STU-2024-001", appId: "APP-2024-001", name: "Priya Sharma", type: "Counselling", status: "Pending", month: "NOV", day: "12", weekday: "Wed", time: "3:00 PM", fullDate: "Wed, Nov 12, 2025", email: "priya.sharma@email.com", phone: "+91 9876543210" },
    { studentId: "STU-2024-002", appId: "APP-2024-002", name: "Rahul Kumar", type: "Home Visit", status: "Scheduled", month: "NOV", day: "13", weekday: "Thu", time: "10:00 AM", fullDate: "Thu, Nov 13, 2025", email: "rahul.kumar@email.com", phone: "+91 9876543211" },
    { studentId: "STU-2024-004", appId: "APP-2024-004", name: "Amit Singh", type: "Document Verification", status: "Scheduled", month: "NOV", day: "15", weekday: "Sat", time: "2:30 PM", fullDate: "Sat, Nov 15, 2025", email: "amit.singh@email.com", phone: "+91 9876543213" },
  ];

  const stats = { total: 24, pending: 8, completed: 16 };
  const completionRate = Math.round((stats.completed / stats.total) * 100);

  const [taskFilter, setTaskFilter] = useState<"All" | TaskType>("All");
  const filteredTasks = taskFilter === "All" ? tasks : tasks.filter((t) => t.type === taskFilter);
  const nextTask = tasks[0];

  const typeStyle: Record<TaskType, { className: string; icon: typeof Users }> = {
    "Counselling": { className: "bg-[#14b8a6]/15 text-[#5eead4]", icon: MessageSquare },
    "Home Visit": { className: "bg-[#f59e0b]/15 text-[#fbbf24]", icon: Home },
    "Document Verification": { className: "bg-[#0ea5e9]/15 text-[#7dd3fc]", icon: FileText },
  };

  const initials = (name: string) => name.split(" ").map((p) => p.charAt(0)).slice(0, 2).join("").toUpperCase();

  const resources = [
    { icon: BookOpen, title: "Application Guide", description: "Step-by-step instructions" },
    { icon: HelpCircle, title: "FAQs", description: "Frequently asked questions" },
    { icon: ListChecks, title: "Document Checklist", description: "List of required documents" },
    { icon: Phone, title: "Contact Support", description: "Get help from our team" },
  ];

  const kpis = [
    { label: "Total Assigned Students", value: stats.total, note: "Across all task types", noteClass: "text-[#5eead4]", iconBg: "bg-[#14b8a6]", icon: Users },
    { label: "Pending Counselling", value: stats.pending, note: "Needs action", noteClass: "text-[#fbbf24]", iconBg: "bg-[#f59e0b]", icon: ClipboardList },
    { label: "Completed Counselling", value: stats.completed, note: "Great progress", noteClass: "text-[#3ddc9f]", iconBg: "bg-[#22c58b]", icon: CheckCircle2 },
  ];

  const card = "bg-[#131a30] border border-[#1f2742] rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.25)]";
  const gradientBtn = "inline-flex items-center gap-2 rounded-[10px] text-white font-semibold bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] hover:brightness-110 transition whitespace-nowrap";

  return (
    <div className="min-h-full">
      <div className="max-w-[1400px] mx-auto px-4 py-6 md:px-9 md:pt-5 md:pb-8 flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="font-bold text-white text-[26px] sm:text-[30px] md:text-[32px] leading-[1.2] mb-1">Welcome, Amit!</h1>
            <p className="text-[#8b93ad] text-[15px]">Manage and track your assigned students' counselling sessions</p>
          </div>
          <button type="button" onClick={onNavigateToStudents} className={`${gradientBtn} self-start h-[44px] px-5 text-[14px] shadow-[0_10px_24px_rgba(20,184,166,0.3)]`}>
            <Users className="size-[17px]" />
            View All Students
          </button>
        </div>

        {/* KPI cards + completion ring */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.15fr] gap-4">
          {kpis.map((k) => {
            const Icon = k.icon;
            return (
              <div key={k.label} className={`${card} p-5`}>
                <div className="flex items-center gap-3">
                  <span className={`size-[40px] rounded-[12px] grid place-items-center shrink-0 ${k.iconBg}`}><Icon className="size-[20px] text-white" /></span>
                  <span className="text-[#aab1c8] text-[14px] font-medium">{k.label}</span>
                </div>
                <p className="text-white font-bold text-[34px] leading-[1.15] mt-4">{k.value}</p>
                <p className={`flex items-center gap-1.5 text-[12.5px] mt-1 ${k.noteClass}`}><TrendingUp className="size-[14px]" />{k.note}</p>
              </div>
            );
          })}
          <div
            className="rounded-[20px] p-5 flex items-center gap-5 border border-[#c4b5fd]/25"
            style={{ background: "linear-gradient(140deg, #4338ca, #7c3aed)", boxShadow: "0 18px 40px rgba(124,58,237,0.25)" }}
          >
            <svg viewBox="0 0 100 100" className="size-[86px] -rotate-90 shrink-0">
              <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#c4b5fd" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${(completionRate / 100) * 251.3} 251.3`} />
            </svg>
            <div className="text-white">
              <p className="font-bold text-[30px] leading-none">{completionRate}%</p>
              <p className="text-[13.5px] mt-1.5" style={{ color: "#e0e7ff" }}>Counselling completed</p>
              <p className="text-[12px] mt-1" style={{ color: "rgba(224,231,255,0.85)" }}>{stats.completed} of {stats.total} students</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1.75fr_1fr] gap-5 items-start">
          {/* Scheduled Tasks */}
          <div className={`${card} p-5 sm:p-6`}>
            <div className="flex items-center justify-between mb-4 gap-3">
              <h2 className="text-white font-semibold text-[18px]">Scheduled Tasks</h2>
              <button type="button" onClick={onNavigateToStudents} className="inline-flex items-center gap-1.5 text-[#2dd4bf] hover:text-[#5eead4] text-[13.5px] font-semibold">
                View All Students <ArrowRight className="size-[15px]" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {(["All", "Counselling", "Home Visit", "Document Verification"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setTaskFilter(f)}
                  className={`px-3.5 py-1.5 rounded-full text-[13px] border transition-colors ${
                    taskFilter === f ? "bg-[#14b8a6] border-[#14b8a6] text-white" : "border-[#232c48] text-[#aab1c8] hover:border-[#2f3a5e] hover:text-white"
                  }`}
                >
                  {f === "All" ? `All (${tasks.length})` : f}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {filteredTasks.map((t) => {
                const TypeIcon = typeStyle[t.type].icon;
                const isNext = t.studentId === nextTask.studentId;
                return (
                  <div
                    key={t.studentId}
                    className={`grid grid-cols-[64px_1fr] md:grid-cols-[72px_1fr_auto] gap-4 items-center p-4 rounded-[16px] border ${
                      isNext ? "border-[#14b8a6]/60 bg-gradient-to-r from-[#14b8a6]/10 to-[#151c33]" : "border-[#1f2742] bg-[#151c33]"
                    }`}
                  >
                    <div className="text-center rounded-[14px] bg-[#0f1529] border border-[#232c48] py-2">
                      <p className="text-[11.5px] font-semibold text-[#8b93ad] tracking-[0.06em]">{t.month}</p>
                      <p className="text-[26px] font-bold text-white leading-[1.15]">{t.day}</p>
                      <p className="text-[11.5px] font-semibold text-[#8b93ad]">{t.weekday}</p>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="size-[38px] rounded-full grid place-items-center text-[13px] font-bold text-[#0b1020] bg-[#f59e0b] shrink-0">{initials(t.name)}</span>
                        <div className="min-w-0">
                          <button type="button" onClick={() => onNavigateToStudentProfile?.(t.studentId)} className="block text-white text-[15.5px] font-semibold hover:text-[#5eead4] text-left">
                            {t.name}
                          </button>
                          <span className="text-[12.5px] text-[#8b93ad]">{t.studentId} · App ID {t.appId}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2.5 text-[12.5px] text-[#aab1c8]">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-semibold ${typeStyle[t.type].className}`}><TypeIcon className="size-[13px]" />{t.type}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="size-[14px]" />{t.time}</span>
                        <span className="inline-flex items-center gap-1.5"><Mail className="size-[14px]" />{t.email}</span>
                        <span className="inline-flex items-center gap-1.5"><Phone className="size-[14px]" />{t.phone}</span>
                      </div>
                    </div>

                    <div className="col-span-2 md:col-span-1 flex md:flex-col items-center md:items-end justify-between gap-3">
                      <span className={`text-[12px] font-semibold px-3 py-1 rounded-full ${t.status === "Pending" ? "bg-[#f59e0b]/15 text-[#fbbf24]" : "bg-[#0ea5e9]/15 text-[#7dd3fc]"}`}>{t.status}</span>
                      <div className="flex gap-2">
                        {t.type === "Counselling" ? (
                          <button type="button" onClick={() => handleStartCounselling(t.studentId, t.name)} className={`${gradientBtn} h-[38px] px-3.5 text-[13px]`}>
                            <Play className="size-[14px]" /> Start Counselling
                          </button>
                        ) : (
                          <button type="button" onClick={() => onNavigateToStudentProfile?.(t.studentId)} className="inline-flex items-center gap-2 h-[38px] px-3.5 rounded-[10px] bg-[#1b2440] hover:bg-[#232e52] text-white text-[13px] font-semibold transition-colors">
                            <Eye className="size-[15px]" /> View Details
                          </button>
                        )}
                        <button
                          type="button"
                          title="Download Student Profile"
                          aria-label={`Download profile for ${t.name}`}
                          onClick={() => handleDownloadProfile(t.name, t.studentId)}
                          className="size-[38px] rounded-[10px] bg-[#1b2440] hover:bg-[#232e52] grid place-items-center text-[#c4c9dc] transition-colors"
                        >
                          <Download className="size-[16px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredTasks.length === 0 && (
                <p className="text-center text-[#8b93ad] text-[14px] py-8">No {taskFilter.toLowerCase()} tasks scheduled.</p>
              )}
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            <div
              className="rounded-[20px] p-6 text-white border border-[#c4b5fd]/25"
              style={{ background: "linear-gradient(140deg, #312e81, #5b21b6)", boxShadow: "0 18px 40px rgba(91,33,182,0.25)" }}
            >
              <p className="text-[12px] font-bold tracking-[0.12em]" style={{ color: "#c4b5fd" }}>NEXT UP</p>
              <h3 className="text-[20px] font-bold mt-2">{nextTask.type} · {nextTask.name}</h3>
              <p className="text-[14px] mt-1" style={{ color: "#e0e7ff" }}>{nextTask.studentId} · App ID {nextTask.appId}</p>
              <div className="flex flex-col gap-1.5 mt-4 mb-5 text-[13.5px]" style={{ color: "#e0e7ff" }}>
                <span className="inline-flex items-center gap-2"><Clock className="size-[15px]" />{nextTask.fullDate} at {nextTask.time}</span>
                <span className="inline-flex items-center gap-2"><Phone className="size-[15px]" />{nextTask.phone}</span>
              </div>
              <button
                type="button"
                onClick={() => handleStartCounselling(nextTask.studentId, nextTask.name)}
                className="inline-flex items-center gap-2 h-[40px] px-4 rounded-[10px] text-[13.5px] font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#ffffff", color: "#312e81" }}
              >
                <Play className="size-[14px]" /> Start Counselling
              </button>
            </div>

            <div className={`${card} p-6`}>
              <h2 className="text-white font-semibold text-[18px] mb-4">Resource Centre</h2>
              <div className="flex flex-col gap-2.5">
                {resources.map((r) => {
                  const Icon = r.icon;
                  return (
                    <a key={r.title} href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-3 p-3 rounded-[14px] bg-[#182039] hover:bg-[#1e284a] transition-colors">
                      <span className="size-[38px] rounded-[10px] grid place-items-center shrink-0 bg-[#14b8a6]/15 text-[#2dd4bf]"><Icon className="size-[18px]" /></span>
                      <span>
                        <span className="block text-white text-[14px] font-semibold">{r.title}</span>
                        <span className="block text-[#8b93ad] text-[12.5px]">{r.description}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
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
