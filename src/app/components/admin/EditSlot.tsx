import { useState } from "react";
import { ArrowLeft, Calendar, Clock, Users, UserCheck, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

interface Slot {
  id: string;
  date: string;
  time: string;
  duration: string;
  maxStudents: number;
  bookedStudents: { name: string; applicationId: string }[];
  volunteer: string;
  location: string;
  status: "Active" | "Disabled" | "Cancelled" | "Full";
}

interface EditSlotProps {
  slot: Slot;
  onBack: () => void;
  onSave: (slot: Slot) => void;
}

export default function EditSlot({ slot, onBack, onSave }: EditSlotProps) {
  const [formData, setFormData] = useState({...slot});

  const volunteers = [
    "Rajesh Kumar",
    "Priya Sharma",
    "Amit Patel",
    "Neha Gupta",
    "Vikram Singh"
  ];

  const durationOptions = [
    "30 minutes",
    "1 hour",
    "1.5 hours",
    "2 hours",
    "2.5 hours",
    "3 hours"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.time) {
      toast.error("Please set a time for the slot");
      return;
    }

    if (formData.maxStudents < formData.bookedStudents.length) {
      toast.error(`Cannot reduce capacity below ${formData.bookedStudents.length} (current bookings)`);
      return;
    }

    if (formData.maxStudents < 1 || formData.maxStudents > 20) {
      toast.error("Number of students must be between 1 and 20");
      return;
    }

    // Update status to Full if bookings equal max students
    const updatedSlot = {
      ...formData,
      status: formData.bookedStudents.length >= formData.maxStudents 
        ? "Full" as const
        : formData.status === "Full" 
          ? "Active" as const
          : formData.status
    };

    onSave(updatedSlot);
  };

  const handleAutoAssign = () => {
    // Simple auto-assign logic
    const availableVolunteers = volunteers.filter(v => v !== formData.volunteer);
    if (availableVolunteers.length > 0) {
      setFormData({ ...formData, volunteer: availableVolunteers[0] });
      toast.success("Volunteer auto-assigned based on availability");
    }
  };

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#1a4d8f] hover:underline mb-4 font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Slot Management
          </button>
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Edit Slot
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
            Update slot details and assignments
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6 md:p-8">
            {/* Current Bookings Info */}
            {formData.bookedStudents.length > 0 && (
              <div className="bg-[#ecf4ff] border border-[#1a4d8f]/20 rounded-[12px] p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[#1a4d8f] mt-0.5" />
                  <div className="flex-1">
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] mb-2">
                      {formData.bookedStudents.length} student(s) already booked this slot
                    </p>
                    <ul className="space-y-1">
                      {formData.bookedStudents.map((student, index) => (
                        <li key={index} className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px]">
                          • {student.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Date <span className="text-[#fb2c36]">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a4d8f]" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full h-[44px] pl-11 pr-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Time */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Time <span className="text-[#fb2c36]">*</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a85613]" />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full h-[44px] pl-11 pr-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Duration <span className="text-[#fb2c36]">*</span>
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                >
                  {durationOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Max Students */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Number of Students <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="number"
                  min={formData.bookedStudents.length || 1}
                  max="20"
                  value={formData.maxStudents}
                  onChange={(e) => setFormData({ ...formData, maxStudents: parseInt(e.target.value) || 1 })}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
                {formData.bookedStudents.length > 0 && (
                  <p className="mt-1 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                    Minimum {formData.bookedStudents.length} (current bookings)
                  </p>
                )}
                {formData.maxStudents > 10 && (
                  <div className="flex items-center gap-2 mt-2 p-2 bg-[#fff9e6] rounded-[8px]">
                    <AlertTriangle className="w-4 h-4 text-[#f59e0b]" />
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#f59e0b] text-[12px]">
                      High capacity slot. Ensure volunteer can handle this load.
                    </p>
                  </div>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Location <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter location"
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>

              {/* Status */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Status <span className="text-[#fb2c36]">*</span>
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as Slot["status"] })}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Disabled">Disabled</option>
                  <option value="Cancelled">Cancelled</option>
                  {formData.bookedStudents.length >= formData.maxStudents && (
                    <option value="Full">Full</option>
                  )}
                </select>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between mt-6">
            <button
              type="button"
              onClick={onBack}
              className="h-[44px] px-6 rounded-[100px] border-2 border-[#e2e8f2] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] text-[#4d4b48] hover:bg-[#f6f8fc] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Update Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}