import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, Info, Calendar, FileText, CheckCircle2, Clock, AlertCircle, X, Phone, Globe, Instagram, Linkedin, Upload, BookOpen, HelpCircle, ExternalLink, MapPin, RotateCcw } from "lucide-react";
import { Progress } from "./ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import DocumentUpload from "./DocumentUpload";
import svgPaths from "../imports/svg-2b3thlea66";

interface DashboardProps {
  user: {
    name: string;
    email: string;
    mobile: string;
  };
  onStartApplication: () => void;
  onChooseSlot: () => void;
  onBackToPersona: () => void;
  openDocumentsOnDashboard?: boolean;
  setOpenDocumentsOnDashboard?: (value: boolean) => void;
  /** Lets the page know when the documents view is open (for the sidebar highlight) */
  onDocumentsViewChange?: (open: boolean) => void;
}

export default function Dashboard({ user, onStartApplication, onChooseSlot, onBackToPersona, openDocumentsOnDashboard = false, setOpenDocumentsOnDashboard, onDocumentsViewChange }: DashboardProps) {
  const [showDocumentUpload, setShowDocumentUpload] = useState(openDocumentsOnDashboard);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  // Mock appointment data - in real app, this would come from backend
  const [appointment, setAppointment] = useState<{
    date: string;
    time: string;
    location: string;
    status: string;
  } | null>({
    date: 'Monday, December 15, 2025',
    time: '2:00 PM - 3:00 PM',
    location: 'Dehradun',
    status: 'Confirmed'
  });

  const handleCancelAppointment = () => {
    setShowCancelConfirm(true);
  };

  const handleConfirmCancel = () => {
    setAppointment(null);
    setShowCancelConfirm(false);
  };

  const handleRescheduleAppointment = () => {
    // Navigate to slot booking with reschedule flag
    onChooseSlot();
  };

  useEffect(() => {
    onDocumentsViewChange?.(showDocumentUpload);
  }, [showDocumentUpload, onDocumentsViewChange]);

  // Sync showDocumentUpload with prop changes
  useEffect(() => {
    if (openDocumentsOnDashboard) {
      setShowDocumentUpload(true);
      // Reset the flag after opening
      if (setOpenDocumentsOnDashboard) {
        setOpenDocumentsOnDashboard(false);
      }
    }
  }, [openDocumentsOnDashboard, setOpenDocumentsOnDashboard]);

  const applicationStatus = {
    status: 'in-progress', // 'not-started' | 'in-progress' | 'submitted' | 'under-review' | 'approved' | 'rejected'
    progress: 40, // 0-100
    lastUpdated: '2025-11-05',
    currentStep: 'Family & Finance'
  };

  const notifications = [
    {
      id: 1,
      type: 'interview',
      title: 'Interview has been scheduled',
      message: 'Your scholarship interview has been scheduled for November 15, 2025 at 10:00 AM.',
      date: '2025-11-08',
      icon: Calendar
    },
    {
      id: 2,
      type: 'exam',
      title: 'Exam has been scheduled',
      message: 'Your scholarship exam has been scheduled for November 20, 2025 at 2:00 PM.',
      date: '2025-11-07',
      icon: FileText
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Complete Your Application',
      message: 'You have completed 2 out of 5 steps. Continue your application to submit before the deadline.',
      date: '2025-11-06',
      icon: Clock
    },
    {
      id: 4,
      type: 'document',
      title: 'Document Upload Pending',
      message: 'Please upload your academic documents and passport size photograph.',
      date: '2025-11-05',
      icon: FileText
    },
    {
      id: 5,
      type: 'deadline',
      title: 'Application Deadline Approaching',
      message: 'The scholarship application deadline is on November 30, 2025.',
      date: '2025-11-04',
      icon: AlertCircle
    }
  ];

  const requiredDocuments = [
    { name: '9th Class Marksheet', uploaded: true },
    { name: '10th Class Marksheet', uploaded: true },
    { name: '11th Class Marksheet', uploaded: true },
    { name: '12th Class Marksheet', uploaded: true },
    { name: 'Family Income Proof', uploaded: true },
    { name: 'Caste Certificate', uploaded: true },
  ];

  if (showDocumentUpload) {
    return <DocumentUpload onBack={() => setShowDocumentUpload(false)} />;
  }

  // Calendar block values from the appointment date, e.g. "Monday, December 15, 2025"
  const apptParts = appointment ? appointment.date.replace(',', '').split(' ') : [];
  const apptDay = apptParts[0] ? apptParts[0].slice(0, 3) : '';
  const apptMonth = apptParts[1] ? apptParts[1].slice(0, 3).toUpperCase() : '';
  const apptDate = apptParts[2] ? apptParts[2].replace(',', '') : '';

  const uploadedCount = requiredDocuments.filter((d) => d.uploaded).length;

  const formatShortDate = (iso: string) => {
    const d = new Date(iso);
    return isNaN(d.getTime()) ? iso : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const resources = [
    { title: 'Application Guide', text: 'Step-by-step instructions', icon: BookOpen },
    { title: 'FAQs', text: 'Frequently asked questions', icon: HelpCircle },
    { title: 'Document Checklist', text: 'List of required documents', icon: FileText },
    { title: 'Contact Support', text: 'Get help from our team', icon: Phone },
  ];

  const card = 'bg-[#131a30] border border-[#1f2742] rounded-[20px] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.25)]';

  return (
    <div className="min-h-full py-5 sm:py-6">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 md:px-9 flex flex-col gap-5">
        {/* Welcome banner with overall progress */}
        <div className="relative overflow-hidden rounded-[22px] px-6 py-7 sm:px-8 sm:py-8 bg-gradient-to-r from-[#14b8a6] via-[#0ea5e9] to-[#f59e0b] shadow-[0_18px_40px_rgba(14,165,233,0.22)]">
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/85 mb-2">Student Portal</p>
              <h1 className="font-bold text-white text-[28px] sm:text-[32px] md:text-[34px] leading-[1.15]">
                Welcome, {user.name.split(' ')[0]}!
              </h1>
              <p className="text-white/90 text-[14px] sm:text-[16px] mt-2">
                Track your scholarship application and stay updated
              </p>
            </div>
            <div className="flex items-center gap-5">
              <svg viewBox="0 0 120 120" className="size-[110px] -rotate-90 shrink-0">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="10" />
                <circle
                  cx="60" cy="60" r="50" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinecap="round"
                  strokeDasharray={`${(applicationStatus.progress / 100) * 314.16} 314.16`}
                />
              </svg>
              <div className="text-white">
                <p className="font-bold text-[30px] leading-none">{applicationStatus.progress}%</p>
                <p className="text-white/85 text-[14px] mt-2">Overall Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Status */}
        <div className={card}>
          <div className="flex items-center justify-between mb-5 gap-3">
            <h2 className="text-white font-semibold text-[18px]">Application Status</h2>
            <span className="text-[12.5px] font-semibold px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#fbbf24]">In Progress</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-5">
            {[
              { name: 'Personal Details', completed: true },
              { name: 'Academic Details', completed: true },
              { name: 'Family & Finance', completed: false, current: true },
              { name: 'Review & Submit', completed: false },
            ].map((step, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 rounded-[14px] px-4 h-[56px] border ${
                  step.current ? 'border-[#14b8a6] bg-[#14b8a6]/10' : 'border-transparent bg-[#182039]'
                }`}
              >
                <span
                  className={`size-[28px] rounded-full grid place-items-center text-[13px] font-bold shrink-0 ${
                    step.completed ? 'bg-[#22c58b] text-white' : step.current ? 'bg-[#14b8a6] text-white' : 'bg-[#2a3454] text-[#aab1c8]'
                  }`}
                >
                  {step.completed ? <CheckCircle2 className="size-[16px]" /> : index + 1}
                </span>
                <span className={`text-[14.5px] font-medium ${step.completed || step.current ? 'text-white' : 'text-[#8b93ad]'}`}>
                  {step.name}
                </span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={onStartApplication}
            className="inline-flex items-center gap-2 h-[44px] px-5 rounded-[10px] text-white text-[14.5px] font-semibold bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] hover:brightness-110 transition"
          >
            {applicationStatus.progress > 0 ? 'Continue Application' : 'Start Application'}
            <ArrowRight className="size-[16px]" />
          </button>
        </div>

        {/* Documents + In-Person Verification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className={card}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-white font-semibold text-[18px]">Documents</h2>
              <span className="text-[13.5px] font-semibold text-[#3ddc9f]">{uploadedCount} / {requiredDocuments.length} uploaded</span>
            </div>
            <p className="text-[#8b93ad] text-[14px] mt-2 mb-4">Upload mandatory documents for verification</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
              {requiredDocuments.map((doc) => (
                <div key={doc.name} className="flex items-center gap-2.5 bg-[#182039] rounded-[10px] px-3 py-3 min-h-[52px]">
                  <span className={`size-[20px] rounded-full grid place-items-center shrink-0 ${doc.uploaded ? 'bg-[#22c58b]' : 'bg-[#f59e0b]'}`}>
                    {doc.uploaded ? <CheckCircle2 className="size-[13px] text-white" /> : <AlertCircle className="size-[13px] text-white" />}
                  </span>
                  <span className="flex-1 text-[13.5px] text-[#e8ebf5] leading-[1.35]">{doc.name}</span>
                  <span className={`text-[12px] ${doc.uploaded ? 'text-[#3ddc9f]' : 'text-[#fbbf24]'}`}>{doc.uploaded ? 'Uploaded' : 'Required'}</span>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setShowDocumentUpload(true)}
              className="inline-flex items-center gap-2 h-[42px] px-4 rounded-[10px] bg-[#1b2440] hover:bg-[#232e52] text-white text-[14px] font-semibold transition-colors"
            >
              <Upload className="size-[16px]" />
              Upload Documents
            </button>
          </div>

          <div className={card}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-white font-semibold text-[18px]">In-Person Verification</h2>
              {appointment && (
                <span className="text-[12.5px] font-semibold px-3 py-1 rounded-full bg-[#22c58b]/15 text-[#3ddc9f]">{appointment.status}</span>
              )}
            </div>
            {appointment ? (
              <>
                <p className="text-[#8b93ad] text-[14px] mt-2 mb-5">Your appointment has been scheduled</p>
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-[84px] shrink-0 rounded-[14px] py-2.5 text-center bg-gradient-to-b from-[#f59e0b] to-[#d97706] text-white shadow-[0_10px_24px_rgba(245,158,11,0.25)]">
                    <p className="text-[12px] font-bold tracking-[0.08em]">{apptMonth}</p>
                    <p className="text-[32px] font-bold leading-[1.1]">{apptDate}</p>
                    <p className="text-[12px] font-semibold">{apptDay}</p>
                  </div>
                  <div className="flex flex-col gap-2.5 text-[14.5px] text-[#dfe3ef]">
                    <span className="flex items-center gap-2.5"><Calendar className="size-[16px] text-[#aab1c8]" />{appointment.date}</span>
                    <span className="flex items-center gap-2.5"><Clock className="size-[16px] text-[#aab1c8]" />{appointment.time}</span>
                    <span className="flex items-center gap-2.5"><MapPin className="size-[16px] text-[#aab1c8]" />{appointment.location}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleRescheduleAppointment}
                    className="h-[42px] px-5 rounded-[10px] text-white text-[14px] font-semibold bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] hover:brightness-110 transition"
                  >
                    Reschedule Appointment
                  </button>
                  <button
                    type="button"
                    onClick={handleCancelAppointment}
                    className="h-[42px] px-5 rounded-[10px] text-white text-[14px] font-semibold bg-[#1b2440] hover:bg-[#232e52] transition-colors"
                  >
                    Cancel Appointment
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="text-[#8b93ad] text-[14px] mt-2 mb-5">Book your preferred slot for the interview</p>
                <button
                  type="button"
                  onClick={onChooseSlot}
                  className="inline-flex items-center gap-2 h-[44px] px-5 rounded-[10px] text-white text-[14px] font-semibold bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] hover:brightness-110 transition"
                >
                  <Calendar className="size-[16px]" />
                  Book Appointment
                </button>
              </>
            )}
          </div>
        </div>

        {/* Notifications + Resource Centre */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-4">
          <div id="student-notifications" className={`${card} scroll-mt-[90px]`}>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-white font-semibold text-[18px]">Notifications</h2>
              <span className="text-[13px] font-semibold text-[#2dd4bf]">{notifications.length} new</span>
            </div>
            <div className="max-h-[360px] overflow-y-auto pr-1">
              {notifications.map((n) => (
                <div key={n.id} className="flex gap-3 py-3.5 border-b border-[#1f2742] last:border-b-0">
                  <span className="size-[8px] rounded-full bg-[#14b8a6] mt-[7px] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[14.5px] font-semibold">{n.title}</p>
                    <p className="text-[#8b93ad] text-[13px] leading-[1.5] mt-1">{n.message}</p>
                  </div>
                  <span className="text-[#6f7894] text-[12px] whitespace-nowrap">{formatShortDate(n.date)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={card}>
            <h2 className="text-white font-semibold text-[18px] mb-4">Resource Centre</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((r) => {
                const Icon = r.icon;
                return (
                  <a
                    key={r.title}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="flex items-center gap-3 p-4 rounded-[14px] bg-[#182039] hover:bg-[#1e284a] transition-colors group"
                  >
                    <span className="size-[40px] rounded-[10px] grid place-items-center shrink-0 bg-[#14b8a6]/15 text-[#2dd4bf]">
                      <Icon className="size-[19px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-white text-[14px] font-semibold">{r.title}</span>
                      <span className="block text-[#8b93ad] text-[12.5px]">{r.text}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Cancel Confirmation Dialog */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[24px] p-8 max-w-md w-full shadow-2xl transform animate-in">
            <div className="text-center mb-6">
              <div className="size-16 bg-[#fff5f5] rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-[#fb2c36]" />
              </div>
              <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Cancel Appointment?
              </h2>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[15px]">
                Are you sure you want to cancel your scheduled appointment? This action cannot be undone.
              </p>
            </div>

            <div className="bg-[#f6f8fc] rounded-[16px] p-5 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#969696]" />
                  <div className="flex-1">
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      {appointment?.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#969696]" />
                  <div className="flex-1">
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      {appointment?.time}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#969696]" />
                  <div className="flex-1">
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      {appointment?.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCancelConfirm(false)}
                className="flex-1 bg-white border-2 border-[#e2e8f2] text-[#4d4b48] h-[48px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] hover:bg-[#f6f8fc] transition-colors"
              >
                Keep Appointment
              </button>
              <button
                onClick={handleConfirmCancel}
                className="flex-1 bg-[#fb2c36] text-white h-[48px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] hover:bg-[#e02831] transition-all shadow-md hover:shadow-lg"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}