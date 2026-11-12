import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface Seat {
  id: string;
  city: string;
  college: string;
  course: string;
  noOfSeats: number;
  remainingSeats: number;
  lastUpdatedOn: string;
}

interface EditSeatProps {
  seat: Seat;
  onBack: () => void;
  onSave: (seat: Seat) => void;
}

export default function EditSeat({ seat, onBack, onSave }: EditSeatProps) {
  const [formData, setFormData] = useState({
    city: seat.city,
    college: seat.college,
    course: seat.course,
    noOfSeats: seat.noOfSeats,
    remainingSeats: seat.remainingSeats
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.city.trim()) {
      toast.error("Please enter a city name");
      return;
    }

    if (!formData.college.trim()) {
      toast.error("Please enter a college name");
      return;
    }

    if (!formData.course.trim()) {
      toast.error("Please enter a course name");
      return;
    }

    if (formData.noOfSeats < 1) {
      toast.error("Total seats must be at least 1");
      return;
    }

    if (formData.remainingSeats < 0) {
      toast.error("Remaining seats cannot be negative");
      return;
    }

    if (formData.remainingSeats > formData.noOfSeats) {
      toast.error("Remaining seats cannot exceed total seats");
      return;
    }

    // Update the seat
    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    onSave({
      ...seat,
      ...formData,
      lastUpdatedOn: today
    });
  };

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#1a4d8f] hover:text-[#153d73] mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Seats Management
          </button>
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Edit Seat
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
            Update seat information for this entry
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* City */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                  City <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter city name"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>

              {/* College */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                  College <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter college name"
                  value={formData.college}
                  onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                  className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>

              {/* Course */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                  Course <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter course name"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>

              {/* Total Seats */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                  Total Seats <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter number of seats"
                  min="1"
                  value={formData.noOfSeats || ""}
                  onChange={(e) => setFormData({ ...formData, noOfSeats: parseInt(e.target.value) || 0 })}
                  className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>

              {/* Remaining Seats */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                  Remaining Seats <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Enter remaining seats"
                  min="0"
                  value={formData.remainingSeats || ""}
                  onChange={(e) => setFormData({ ...formData, remainingSeats: parseInt(e.target.value) || 0 })}
                  className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6 justify-between">
            <button
              type="button"
              onClick={onBack}
              className="h-[44px] px-6 rounded-[100px] border-2 border-[#e2e8f2] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] text-[#4d4b48] hover:bg-[#f6f8fc] transition-colors w-[96px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-[44px] px-6 rounded-[100px] bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 w-[140px]"
            >
              Update Seat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
