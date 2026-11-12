import { useState } from "react";
import { 
  ChevronLeft, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Info, 
  ChevronRight,
  Download,
  X,
  AlertCircle,
  FileText,
  Users,
  TrendingUp
} from "lucide-react";
import svgPaths from "../imports/svg-b91sqlrjx2";

interface SlotBookingProps {
  onBackToDashboard: () => void;
  hasExistingBooking?: boolean; // For reschedule flow
}

interface TimeSlot {
  id: string;
  time: string;
  duration: string;
  location: string;
  spotsTotal: number;
  spotsBooked: number;
  status: 'available' | 'filling-fast' | 'full';
  isCurrentSlot?: boolean;
}

interface CalendarDay {
  date: Date;
  dayNumber: number;
  dayName: string;
  month: string;
  year: number;
  isToday: boolean;
  isPast: boolean;
  isHoliday: boolean;
  isUnavailable: boolean;
  holidayName?: string;
}

export default function SlotBooking({ onBackToDashboard, hasExistingBooking = false }: SlotBookingProps) {
  const [viewMode, setViewMode] = useState<'week' | 'month'>('week');
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 12)); // December 12, 2025
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>('Dehradun');
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showRescheduleConfirm, setShowRescheduleConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Mock existing booking for reschedule flow
  const existingBooking = hasExistingBooking ? {
    date: new Date(2025, 11, 15),
    time: '10:00 AM - 11:00 AM',
    location: 'Dehradun',
    status: 'confirmed'
  } : null;

  // Available locations (future-ready for multiple locations)
  const locations = ['Dehradun', 'Delhi', 'Mumbai', 'Bangalore'];

  // Required documents list
  const requiredDocuments = [
    '9th Marksheet',
    '10th Marksheet',
    '11th Marksheet',
    '12th Marksheet (if received)',
    'Aadhaar Card',
    'Ration Card',
    'Domicile Certificate',
    'Income Certificate',
    'Caste Certificate',
    'EWS Certificate (if applicable)',
    'Bank Statements (last 6 months)',
    'Home Video (2 minutes)',
    'GPS-tagged Family Photo',
    'Any other supporting document'
  ];

  // Mock time slots data
  const getTimeSlotsForDate = (date: Date, location: string): TimeSlot[] => {
    const isExistingDate = existingBooking && 
      date.getDate() === existingBooking.date.getDate() &&
      date.getMonth() === existingBooking.date.getMonth();

    return [
      {
        id: 'slot-1',
        time: '10:00 AM - 11:00 AM',
        duration: '1 hour',
        location: location,
        spotsTotal: 10,
        spotsBooked: 7,
        status: 'filling-fast',
        isCurrentSlot: isExistingDate && hasExistingBooking
      },
      {
        id: 'slot-2',
        time: '11:30 AM - 12:30 PM',
        duration: '1 hour',
        location: location,
        spotsTotal: 10,
        spotsBooked: 10,
        status: 'full',
        isCurrentSlot: false
      },
      {
        id: 'slot-3',
        time: '2:00 PM - 3:00 PM',
        duration: '1 hour',
        location: location,
        spotsTotal: 12,
        spotsBooked: 4,
        status: 'available',
        isCurrentSlot: false
      },
      {
        id: 'slot-4',
        time: '3:30 PM - 4:30 PM',
        duration: '1 hour',
        location: location,
        spotsTotal: 8,
        spotsBooked: 1,
        status: 'available',
        isCurrentSlot: false
      },
      {
        id: 'slot-5',
        time: '5:00 PM - 6:00 PM',
        duration: '1 hour',
        location: location,
        spotsTotal: 10,
        spotsBooked: 8,
        status: 'filling-fast',
        isCurrentSlot: false
      }
    ];
  };

  // Generate calendar days for current view
  const getCalendarDays = (): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const today = new Date(2025, 11, 12); // December 12, 2025 (current date)
    
    if (viewMode === 'week') {
      // Weekly view - show 7 days starting from current week
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      
      for (let i = 0; i < 7; i++) {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i);
        
        const isPast = day < today && day.toDateString() !== today.toDateString();
        const isHoliday = day.getDay() === 0; // Sundays as holidays
        
        days.push({
          date: day,
          dayNumber: day.getDate(),
          dayName: day.toLocaleDateString('en-US', { weekday: 'short' }),
          month: day.toLocaleDateString('en-US', { month: 'short' }),
          year: day.getFullYear(),
          isToday: day.toDateString() === today.toDateString(),
          isPast,
          isHoliday,
          isUnavailable: isPast || isHoliday,
          holidayName: isHoliday ? 'Sunday' : undefined
        });
      }
    } else {
      // Monthly view
      const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      const startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - startDate.getDay());
      
      for (let i = 0; i < 42; i++) { // 6 weeks max
        const day = new Date(startDate);
        day.setDate(startDate.getDate() + i);
        
        if (day > lastDay && i >= 35) break;
        
        const isPast = day < today && day.toDateString() !== today.toDateString();
        const isHoliday = day.getDay() === 0;
        
        days.push({
          date: day,
          dayNumber: day.getDate(),
          dayName: day.toLocaleDateString('en-US', { weekday: 'short' }),
          month: day.toLocaleDateString('en-US', { month: 'short' }),
          year: day.getFullYear(),
          isToday: day.toDateString() === today.toDateString(),
          isPast,
          isHoliday,
          isUnavailable: isPast || isHoliday,
          holidayName: isHoliday ? 'Sunday' : undefined
        });
      }
    }
    
    return days;
  };

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() - 7);
    } else {
      newDate.setMonth(currentDate.getMonth() - 1);
    }
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + 7);
    } else {
      newDate.setMonth(currentDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const handleDateSelect = (day: CalendarDay) => {
    if (day.isUnavailable) return;
    setSelectedDate(day.date);
    setSelectedSlot(null); // Reset slot when date changes
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    if (slot.status === 'full') return;
    if (hasExistingBooking && slot.isCurrentSlot) return; // Can't select current slot in reschedule
    setSelectedSlot(slot);
  };

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedSlot || !selectedLocation) return;
    
    if (hasExistingBooking) {
      setShowRescheduleConfirm(true);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsConfirmed(true);
      }, 1000);
    }
  };

  const handleConfirmReschedule = () => {
    setShowRescheduleConfirm(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsConfirmed(true);
    }, 1000);
  };

  const handleDownloadDetails = () => {
    console.log('Downloading appointment details...');
    // In real app, would generate PDF
  };

  const calendarDays = getCalendarDays();
  const timeSlots = selectedDate ? getTimeSlotsForDate(selectedDate, selectedLocation) : [];

  // Success Screen
  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-[#f6f8fc] relative">
        <div className="absolute h-[358px] left-0 top-0 w-full bg-gradient-to-r from-[#e8d5c4] to-[#c5d5e8]" />
        
        <div className="relative">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6 md:px-8 pt-[30px] sm:pt-[40px] md:pt-[60px] pb-12">
            <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0px_8px_40px_0px_rgba(26,77,143,0.12)] border border-[#e2e8f2] text-center">
              {/* Success Icon */}
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-[#25c196]/20 rounded-full blur-xl animate-pulse" />
                <div className="relative size-24 bg-gradient-to-br from-[#25c196] to-[#1f9e7a] rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-12 h-12 text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Success Message */}
              <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[28px] sm:text-[36px] mb-3" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                {hasExistingBooking ? 'Appointment Rescheduled!' : 'Appointment Confirmed!'}
              </h1>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[16px] mb-10 max-w-md mx-auto">
                {hasExistingBooking 
                  ? 'Your appointment has been successfully rescheduled. We look forward to meeting you!'
                  : 'Your verification appointment has been successfully scheduled. We look forward to meeting you!'}
              </p>

              {/* Appointment Details Card */}
              <div className="bg-gradient-to-br from-[#ecf4ff] to-[#f6f8fc] rounded-[20px] p-8 mb-8 border border-[#1a4d8f]/10">
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[16px] mb-6">
                  Appointment Details
                </h3>
                
                <div className="space-y-5">
                  {/* Date */}
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-white rounded-[12px] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Calendar className="w-6 h-6 text-[#1a4d8f]" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[13px] mb-1">
                        Date
                      </p>
                      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px]">
                        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#1a4d8f]/10" />

                  {/* Time */}
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-white rounded-[12px] flex items-center justify-center shadow-sm flex-shrink-0">
                      <Clock className="w-6 h-6 text-[#1a4d8f]" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[13px] mb-1">
                        Time
                      </p>
                      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px]">
                        {selectedSlot?.time}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#1a4d8f]/10" />

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="size-12 bg-white rounded-[12px] flex items-center justify-center shadow-sm flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#1a4d8f]" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[13px] mb-1">
                        Location
                      </p>
                      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px]">
                        {selectedLocation}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Banner */}
              <div className="bg-gradient-to-r from-[#fff9e6] to-[#fff4d6] border border-[#a85613]/20 rounded-[16px] p-5 mb-8 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#a85613] flex-shrink-0 mt-0.5" />
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#a85613] text-[14px] text-left">
                  A confirmation email with detailed instructions and required documents has been sent to your registered email address.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBackToDashboard}
                  className="bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[52px] px-10 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[16px] hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Reschedule Confirmation Modal
  const RescheduleConfirmModal = () => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-[24px] p-8 max-w-md w-full shadow-2xl transform animate-in">
        <div className="text-center mb-6">
          <div className="size-16 bg-[#fff9e6] rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-[#a85613]" />
          </div>
          <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Confirm Reschedule?
          </h2>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[15px]">
            Your existing booking will be canceled and replaced with the new appointment.
          </p>
        </div>

        <div className="bg-[#f6f8fc] rounded-[16px] p-5 mb-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[13px]">Current:</span>
              <span className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#969696] text-[14px] line-through">
                {existingBooking?.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {existingBooking?.time}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px]">New:</span>
              <span className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px]">
                {selectedDate?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} • {selectedSlot?.time}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowRescheduleConfirm(false)}
            className="flex-1 bg-white border-2 border-[#e2e8f2] text-[#4d4b48] h-[48px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] hover:bg-[#f6f8fc] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmReschedule}
            className="flex-1 bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[48px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] hover:shadow-lg transition-all"
          >
            Confirm Reschedule
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f6f8fc] relative">
      {/* Gradient Background */}
      <div className="absolute h-[280px] left-0 top-0 w-full bg-gradient-to-r from-[#e8d5c4] to-[#c5d5e8]" />

      {/* Content Container */}
      <div className="relative">
        <div className="max-w-[1366px] mx-auto px-4 sm:px-6 md:px-8 pt-[30px] sm:pt-[40px] md:pt-[50px] pb-12">
          {/* Back Button */}
          <button
            onClick={onBackToDashboard}
            className="flex gap-[7px] items-center mb-6 sm:mb-8 font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] sm:text-[16px] hover:underline"
          >
            <div className="relative shrink-0 size-[14px] sm:size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p203476e0} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M12.6667 8H3.33333" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
            <span className="hidden sm:inline">Back to Dashboard</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Header */}
          <div className="mb-8 sm:mb-10">
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Slot Booking for In-Person Verification
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] sm:text-[16px]">
              Select your preferred date, location, and available time slot.
            </p>
          </div>

          {/* Existing Booking Card (Reschedule Flow) */}
          {hasExistingBooking && existingBooking && (
            <div className="bg-gradient-to-r from-[#ecf4ff] to-[#e0edff] border-2 border-[#1a4d8f] rounded-[20px] p-6 mb-8 shadow-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[16px] mb-3 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Current Appointment
                  </h3>
                  <div className="space-y-2">
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif]">Date:</span> {existingBooking.date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif]">Time:</span> {existingBooking.time}
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif]">Location:</span> {existingBooking.location}
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-[12px] shadow-sm">
                  <span className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#25c196] text-[13px] uppercase tracking-wider">
                    Confirmed
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Calendar Section */}
              <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2]">
                {/* Calendar Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h2 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px] sm:text-[20px] flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#1a4d8f]" />
                    Select Date
                  </h2>
                  
                  {/* View Toggle */}
                  <div className="flex items-center gap-2 bg-[#f6f8fc] rounded-[12px] p-1">
                    <button
                      onClick={() => setViewMode('week')}
                      className={`px-4 py-2 rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] transition-all ${
                        viewMode === 'week'
                          ? 'bg-white text-[#1a4d8f] shadow-sm'
                          : 'text-[#969696] hover:text-[#4d4b48]'
                      }`}
                    >
                      Week
                    </button>
                    <button
                      onClick={() => setViewMode('month')}
                      className={`px-4 py-2 rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] transition-all ${
                        viewMode === 'month'
                          ? 'bg-white text-[#1a4d8f] shadow-sm'
                          : 'text-[#969696] hover:text-[#4d4b48]'
                      }`}
                    >
                      Month
                    </button>
                  </div>
                </div>

                {/* Calendar Navigation */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={handlePreviousWeek}
                    className="size-10 flex items-center justify-center rounded-[10px] border-2 border-[#e2e8f2] hover:border-[#1a4d8f] hover:bg-[#ecf4ff] transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#1a4d8f]" />
                  </button>
                  
                  <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px] sm:text-[18px]">
                    {viewMode === 'week' 
                      ? currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                      : currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                    }
                  </h3>
                  
                  <button
                    onClick={handleNextWeek}
                    className="size-10 flex items-center justify-center rounded-[10px] border-2 border-[#e2e8f2] hover:border-[#1a4d8f] hover:bg-[#ecf4ff] transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-[#1a4d8f]" />
                  </button>
                </div>

                {/* Calendar Grid */}
                {viewMode === 'week' ? (
                  // Weekly View
                  <div className="grid grid-cols-7 gap-2">
                    {calendarDays.map((day, index) => (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        disabled={day.isUnavailable}
                        className={`relative p-3 sm:p-4 rounded-[12px] border-2 transition-all ${
                          day.isUnavailable
                            ? 'bg-[#f6f8fc] border-[#e2e8f2] cursor-not-allowed opacity-50'
                            : selectedDate?.toDateString() === day.date.toDateString()
                            ? 'bg-gradient-to-br from-[#1a4d8f] to-[#153d73] border-[#1a4d8f] shadow-lg scale-105'
                            : day.isToday
                            ? 'bg-[#fff9e6] border-[#a85613] hover:scale-105'
                            : 'bg-white border-[#e2e8f2] hover:border-[#1a4d8f] hover:shadow-md hover:scale-105'
                        }`}
                        title={day.isHoliday ? day.holidayName : ''}
                      >
                        <div className="text-center">
                          <p className={`font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[11px] mb-1 ${
                            selectedDate?.toDateString() === day.date.toDateString()
                              ? 'text-white/80'
                              : day.isUnavailable
                              ? 'text-[#969696]'
                              : 'text-[#969696]'
                          }`}>
                            {day.dayName}
                          </p>
                          <p className={`font-['Wix_Madefor_Text:Bold',sans-serif] text-[18px] sm:text-[20px] ${
                            selectedDate?.toDateString() === day.date.toDateString()
                              ? 'text-white'
                              : day.isUnavailable
                              ? 'text-[#969696]'
                              : day.isToday
                              ? 'text-[#a85613]'
                              : 'text-[#4d4b48]'
                          }`}>
                            {day.dayNumber}
                          </p>
                        </div>
                        {day.isToday && !selectedDate && (
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 size-1.5 bg-[#a85613] rounded-full" />
                        )}
                        {day.isHoliday && (
                          <div className="absolute top-1 right-1 size-2 bg-red-500 rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  // Monthly View
                  <div>
                    <div className="grid grid-cols-7 gap-2 mb-2">
                      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="text-center p-2">
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px]">
                            {day}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.map((day, index) => (
                        <button
                          key={index}
                          onClick={() => handleDateSelect(day)}
                          disabled={day.isUnavailable}
                          className={`relative p-2 sm:p-3 rounded-[10px] border transition-all ${
                            day.date.getMonth() !== currentDate.getMonth()
                              ? 'opacity-30'
                              : ''
                          } ${
                            day.isUnavailable
                              ? 'bg-[#f6f8fc] border-[#e2e8f2] cursor-not-allowed opacity-50'
                              : selectedDate?.toDateString() === day.date.toDateString()
                              ? 'bg-gradient-to-br from-[#1a4d8f] to-[#153d73] border-[#1a4d8f] shadow-lg scale-105'
                              : day.isToday
                              ? 'bg-[#fff9e6] border-[#a85613] hover:scale-105'
                              : 'bg-white border-[#e2e8f2] hover:border-[#1a4d8f] hover:shadow-md hover:scale-105'
                          }`}
                          title={day.isHoliday ? day.holidayName : ''}
                        >
                          <p className={`font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] sm:text-[16px] ${
                            selectedDate?.toDateString() === day.date.toDateString()
                              ? 'text-white'
                              : day.isUnavailable
                              ? 'text-[#969696]'
                              : day.isToday
                              ? 'text-[#a85613]'
                              : 'text-[#4d4b48]'
                          }`}>
                            {day.dayNumber}
                          </p>
                          {day.isHoliday && (
                            <div className="absolute top-1 right-1 size-1.5 bg-red-500 rounded-full" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Legend */}
                <div className="mt-6 pt-6 border-t border-[#e2e8f2]">
                  <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-[#fff9e6] border border-[#a85613] rounded-[4px]" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">Today</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-white border border-[#1a4d8f] rounded-[4px]" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-[#f6f8fc] border border-red-500 rounded-[4px] relative">
                      </div>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">Holiday</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-4 bg-[#f6f8fc] border border-[#e2e8f2] rounded-[4px] opacity-50" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">Unavailable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Selection */}
              {selectedDate && (
                <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2]">
                  <h2 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px] sm:text-[20px] mb-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#1a4d8f]" />
                    Select Location
                  </h2>
                  
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => {
                        setSelectedLocation(e.target.value);
                        setSelectedSlot(null); // Reset slot when location changes
                      }}
                      className="w-full h-[56px] px-6 pr-12 bg-white border-2 border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[15px] appearance-none focus:outline-none focus:border-[#1a4d8f] focus:ring-2 focus:ring-[#1a4d8f]/20 transition-all cursor-pointer"
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#969696] pointer-events-none rotate-90" />
                  </div>
                </div>
              )}

              {/* Time Slots */}
              {selectedDate && selectedLocation && (
                <div className="bg-white rounded-[20px] p-6 md:p-8 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2]">
                  <h2 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px] sm:text-[20px] mb-6 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#1a4d8f]" />
                    Available Time Slots
                  </h2>

                  {isLoading ? (
                    // Loading Skeleton
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="animate-pulse">
                          <div className="bg-[#f6f8fc] rounded-[16px] h-32" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {timeSlots.filter(slot => slot.status !== 'full').map((slot) => (
                        <button
                          key={slot.id}
                          onClick={() => handleSlotSelect(slot)}
                          disabled={slot.status === 'full' || (hasExistingBooking && slot.isCurrentSlot)}
                          className={`w-full p-5 rounded-[16px] border-2 transition-all text-left ${
                            slot.status === 'full'
                              ? 'bg-[#f6f8fc] border-[#e2e8f2] cursor-not-allowed opacity-60'
                              : slot.isCurrentSlot && hasExistingBooking
                              ? 'bg-gradient-to-r from-[#fff9e6] to-[#fff4d6] border-[#a85613] cursor-not-allowed'
                              : selectedSlot?.id === slot.id
                              ? 'bg-gradient-to-br from-[#ecf4ff] to-[#e0edff] border-[#1a4d8f] shadow-lg scale-[1.02]'
                              : 'bg-white border-[#e2e8f2] hover:border-[#1a4d8f] hover:shadow-md hover:scale-[1.01]'
                          }`}
                        >
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                              <div className={`size-12 rounded-[12px] flex items-center justify-center ${
                                slot.status === 'full'
                                  ? 'bg-[#e2e8f2]'
                                  : slot.isCurrentSlot && hasExistingBooking
                                  ? 'bg-[#a85613]'
                                  : selectedSlot?.id === slot.id
                                  ? 'bg-[#1a4d8f]'
                                  : 'bg-[#ecf4ff]'
                              }`}>
                                <Clock className={`w-6 h-6 ${
                                  slot.status === 'full'
                                    ? 'text-[#969696]'
                                    : slot.isCurrentSlot && hasExistingBooking
                                    ? 'text-white'
                                    : selectedSlot?.id === slot.id
                                    ? 'text-white'
                                    : 'text-[#1a4d8f]'
                                }`} />
                              </div>
                              <div className="flex-1">
                                <p className={`font-['Wix_Madefor_Text:Bold',sans-serif] text-[17px] mb-1 ${
                                  slot.status === 'full'
                                    ? 'text-[#969696]'
                                    : slot.isCurrentSlot && hasExistingBooking
                                    ? 'text-[#a85613]'
                                    : 'text-[#4d4b48]'
                                }`}>
                                  {slot.time}
                                </p>
                                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px]">
                                  Duration: {slot.duration}
                                </p>
                              </div>
                              {selectedSlot?.id === slot.id && (
                                <CheckCircle2 className="w-6 h-6 text-[#1a4d8f]" />
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                 
                  
                </div>
              )}
            </div>

            {/* Right Column - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white rounded-[20px] p-6 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2]">
                  <h2 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px] mb-6">
                    Booking Summary
                  </h2>

                  {selectedDate && selectedLocation && selectedSlot ? (
                    <div className="space-y-5">
                      {/* Selected Details */}
                      <div className="bg-gradient-to-br from-[#ecf4ff] to-[#f6f8fc] rounded-[16px] p-5 border border-[#1a4d8f]/10">
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="size-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                              <Calendar className="w-5 h-5 text-[#1a4d8f]" />
                            </div>
                            <div className="flex-1">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-1">
                                Date
                              </p>
                              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                              </p>
                            </div>
                          </div>

                          <div className="border-t border-white/50" />

                          <div className="flex items-start gap-3">
                            <div className="size-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                              <Clock className="w-5 h-5 text-[#1a4d8f]" />
                            </div>
                            <div className="flex-1">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-1">
                                Time
                              </p>
                              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                                {selectedSlot.time}
                              </p>
                            </div>
                          </div>

                          <div className="border-t border-white/50" />

                          <div className="flex items-start gap-3">
                            <div className="size-10 bg-white rounded-[10px] flex items-center justify-center shadow-sm">
                              <MapPin className="w-5 h-5 text-[#1a4d8f]" />
                            </div>
                            <div className="flex-1">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-1">
                                Location
                              </p>
                              <p className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                                {selectedLocation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Confirm Button */}
                      <button
                        onClick={handleConfirmBooking}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[52px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[16px] hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {isLoading ? 'Processing...' : hasExistingBooking ? 'Confirm Reschedule' : 'Confirm Slot Booking'}
                      </button>

                      {/* Info Note */}
                      <div className="flex items-start gap-2 pt-2">
                        <Info className="w-4 h-4 text-[#969696] flex-shrink-0 mt-0.5" />
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                          You will receive a confirmation and instructions after booking your appointment.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="size-16 bg-[#f6f8fc] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-[#969696]" />
                      </div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[15px] mb-2">
                        No Slot Selected
                      </p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px]">
                        Please select date, location, and time slot to continue
                      </p>
                    </div>
                  )}
                </div>

                {/* Required Documents Section */}
                {selectedDate && selectedLocation && (
                  <div className="bg-white rounded-[20px] p-6 shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2]">
                    <h2 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[18px] mb-6 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#1a4d8f]" />
                      Required Documents to Bring for Verification
                    </h2>

                    <div className="bg-gradient-to-br from-[#fff9e6] to-[#fff4d6] border border-[#a85613]/20 rounded-[16px] p-5 mb-5">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-[#a85613] flex-shrink-0 mt-0.5" />
                        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#a85613] text-[13px]">
                          Please bring all the following documents (original and photocopies) for your verification appointment.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {requiredDocuments.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-3 bg-[#f6f8fc] rounded-[10px] border border-[#e2e8f2]"
                        >
                          <div className="size-4 bg-white rounded-[4px] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                            <CheckCircle2 className="w-3 h-3 text-[#1a4d8f]" />
                          </div>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                            {doc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reschedule Confirmation Modal */}
      {showRescheduleConfirm && <RescheduleConfirmModal />}
    </div>
  );
}