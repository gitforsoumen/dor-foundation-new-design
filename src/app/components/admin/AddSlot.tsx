import { useState } from "react";
import { ArrowLeft, Plus, Trash2, Calendar, Clock, Users, UserCheck, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

interface SlotData {
  date: string;
  time: string;
  duration: string;
  maxStudents: number;
  location: string;
  status: "Active";
}

interface AddSlotProps {
  onBack: () => void;
  onSave: (slots: Omit<SlotData, "status">[]) => void;
}

export default function AddSlot({ onBack, onSave }: AddSlotProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [slots, setSlots] = useState<Omit<SlotData, "date" | "status">[]>([
    { time: "", duration: "1 hour", maxStudents: 5, location: "" }
  ]);
  const [showPreview, setShowPreview] = useState(false);

  const locationOptions = [
    "Dehradun"
  ];

  const durationOptions = [
    "30 minutes",
    "1 hour",
    "1.5 hours",
    "2 hours",
    "2.5 hours",
    "3 hours"
  ];

  const handleAddSlot = () => {
    setSlots([...slots, { time: "", duration: "1 hour", maxStudents: 5, location: "" }]);
  };

  const handleRemoveSlot = (index: number) => {
    if (slots.length > 1) {
      setSlots(slots.filter((_, i) => i !== index));
    } else {
      toast.error("At least one slot is required");
    }
  };

  const handleSlotChange = (index: number, field: keyof Omit<SlotData, "date" | "status">, value: string | number) => {
    const updatedSlots = [...slots];
    updatedSlots[index] = { ...updatedSlots[index], [field]: value };
    setSlots(updatedSlots);
  };

  const validateSlots = () => {
    if (!selectedDate) {
      toast.error("Please select a date");
      return false;
    }

    for (let i = 0; i < slots.length; i++) {
      const slot = slots[i];
      if (!slot.time) {
        toast.error(`Please set time for slot ${i + 1}`);
        return false;
      }
      if (!slot.location) {
        toast.error(`Please assign a location for slot ${i + 1}`);
        return false;
      }
      if (slot.maxStudents < 1 || slot.maxStudents > 20) {
        toast.error(`Number of students must be between 1 and 20 for slot ${i + 1}`);
        return false;
      }
    }

    // Check for duplicate times
    const times = slots.map(s => s.time);
    const duplicates = times.filter((time, index) => times.indexOf(time) !== index);
    if (duplicates.length > 0) {
      toast.error("Duplicate time slots detected. Please use unique times.");
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (!validateSlots()) return;

    const slotsToSave = slots.map(slot => ({
      ...slot,
      date: selectedDate
    }));

    onSave(slotsToSave);
  };

  const getSuggestedLocation = (slotIndex: number) => {
    // Simple logic: distribute locations evenly
    return locationOptions[slotIndex % locationOptions.length];
  };

  const handleAutoAssign = (index: number) => {
    handleSlotChange(index, "location", getSuggestedLocation(index));
    toast.success("Location auto-assigned based on availability");
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
            Add New Slot
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
            Create interview slots for students
          </p>
        </div>

        {/* Date Selection */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6 md:p-8 mb-6">
          <div className="mb-4">
            <h2 className="font-['Fraunces:Bold',sans-serif] text-[#4d4b48] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Select Date
            </h2>
          </div>
          <div className="max-w-md">
            <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
              Interview Date <span className="text-[#fb2c36]">*</span>
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
            />
          </div>
        </div>

        {/* Slots Configuration */}
        {selectedDate && (
          <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-['Fraunces:Bold',sans-serif] text-[#4d4b48] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                  Slot Details
                </h2>
              </div>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long',
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </p>
            </div>

            <div className="space-y-6">
              {slots.map((slot, index) => (
                <div key={index}>
                  {index > 0 && <div className="border-t border-[#e2e8f2] mb-6" />}
                  <div className="rounded-[12px] relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px]">
                        Slot {index + 1}
                      </h3>
                      {slots.length > 1 && (
                        <button
                          onClick={() => handleRemoveSlot(index)}
                          className="text-[#fb2c36] hover:bg-[#ffe6e6] p-2 rounded-[8px] transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Time */}
                      <div>
                        <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                          Time <span className="text-[#fb2c36]">*</span>
                        </label>
                        <input
                          type="time"
                          value={slot.time}
                          onChange={(e) => handleSlotChange(index, "time", e.target.value)}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                      </div>

                      {/* Duration */}
                      <div>
                        <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                          Duration <span className="text-[#fb2c36]">*</span>
                        </label>
                        <select
                          value={slot.duration}
                          onChange={(e) => handleSlotChange(index, "duration", e.target.value)}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
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
                          min="1"
                          max="20"
                          value={slot.maxStudents}
                          onChange={(e) => handleSlotChange(index, "maxStudents", parseInt(e.target.value) || 1)}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                        {slot.maxStudents > 10 && (
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
                        <select
                          value={slot.location}
                          onChange={(e) => handleSlotChange(index, "location", e.target.value)}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        >
                          <option value="">Select Location</option>
                          {locationOptions.map(v => (
                            <option key={v} value={v}>{v}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add New Slot Button */}
            <button
              onClick={handleAddSlot}
              className="mt-6 flex items-center gap-2 text-[#1a4d8f] hover:bg-[#ecf4ff] px-4 py-2 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Another Slot for This Date
            </button>
          </div>
        )}

        {/* Actions */}
        {selectedDate && (
          <div className="flex flex-col-reverse sm:flex-row gap-3 justify-between mt-6">
            <button
              onClick={onBack}
              className="h-[44px] px-6 rounded-[100px] border-2 border-[#e2e8f2] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] text-[#4d4b48] hover:bg-[#f6f8fc] transition-colors"
            >
              Cancel
            </button>
            <div className="flex gap-3">
              <button
                onClick={() => setShowPreview(true)}
                className="h-[44px] px-6 rounded-[100px] border-2 border-[#1a4d8f] text-[#1a4d8f] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:bg-[#ecf4ff] transition-colors"
              >
                Preview
              </button>
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] px-8 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Add {slots.length} Slot{slots.length > 1 ? 's' : ''}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[16px] max-w-2xl w-full p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Slot Preview
              </h3>
              <button
                onClick={() => setShowPreview(false)}
                className="text-[#969696] hover:text-[#4d4b48] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            </div>
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-4">
              {new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </p>
            <div className="space-y-4">
              {slots.map((slot, index) => (
                <div key={index} className="bg-[#f6f8fc] rounded-[12px] p-4">
                  <h4 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[15px] mb-3">
                    Slot {index + 1}
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-[14px]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#1a4d8f]" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">
                        {slot.time || "Not set"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#a85613]" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">
                        {slot.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#1a4d8f]" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">
                        {slot.maxStudents} students max
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[#25c196]" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">
                        {slot.location || "Not assigned"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowPreview(false)}
              className="mt-6 w-full bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg transition-all duration-200"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}