import { useState } from "react";
import { 
  Plus, 
  Search, 
  Edit, 
  Ban, 
  X, 
  Copy, 
  Users, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Clock,
  UserCheck,
  AlertTriangle
} from "lucide-react";
import AddSlot from "./AddSlot";
import EditSlot from "./EditSlot";
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

export default function SlotManagement() {
  const [showAddSlot, setShowAddSlot] = useState(false);
  const [editingSlot, setEditingSlot] = useState<Slot | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSlotForBookings, setSelectedSlotForBookings] = useState<Slot | null>(null);
  const [confirmAction, setConfirmAction] = useState<{
    type: "disable" | "cancel";
    slot: Slot;
  } | null>(null);
  
  // Filters
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dateRange, setDateRange] = useState<{ from: string; to: string }>({ from: "", to: "" });
  const [locationFilter, setLocationFilter] = useState<string>("all");
  
  const itemsPerPage = 10;

  const [slots, setSlots] = useState<Slot[]>([
    {
      id: "1",
      date: "2025-11-25",
      time: "10:00 AM",
      duration: "1 hour",
      maxStudents: 5,
      bookedStudents: [
        { name: "Amit Kumar", applicationId: "APP-2024-156" },
        { name: "Priya Sharma", applicationId: "APP-2024-155" },
        { name: "Rahul Verma", applicationId: "APP-2024-154" }
      ],
      volunteer: "Rajesh Kumar",
      location: "Dehradun",
      status: "Active"
    },
    {
      id: "2",
      date: "2025-11-25",
      time: "2:00 PM",
      duration: "1.5 hours",
      maxStudents: 3,
      bookedStudents: [
        { name: "Neha Gupta", applicationId: "APP-2024-153" },
        { name: "Vikram Singh", applicationId: "APP-2024-152" },
        { name: "Anita Desai", applicationId: "APP-2024-151" }
      ],
      volunteer: "Priya Sharma",
      location: "Dehradun",
      status: "Full"
    },
    {
      id: "3",
      date: "2025-11-26",
      time: "11:00 AM",
      duration: "2 hours",
      maxStudents: 4,
      bookedStudents: [
        { name: "Sanjay Patel", applicationId: "APP-2024-150" }
      ],
      volunteer: "Amit Patel",
      location: "Dehradun",
      status: "Active"
    },
    {
      id: "4",
      date: "2025-11-27",
      time: "9:00 AM",
      duration: "1 hour",
      maxStudents: 5,
      bookedStudents: [],
      volunteer: "Neha Gupta",
      location: "Dehradun",
      status: "Disabled"
    },
    {
      id: "5",
      date: "2025-11-28",
      time: "3:00 PM",
      duration: "1 hour",
      maxStudents: 6,
      bookedStudents: [
        { name: "Ravi Kumar", applicationId: "APP-2024-149" },
        { name: "Kavita Singh", applicationId: "APP-2024-148" }
      ],
      volunteer: "Vikram Singh",
      location: "Dehradun",
      status: "Cancelled"
    },
    {
      id: "6",
      date: "2025-11-29",
      time: "10:30 AM",
      duration: "1.5 hours",
      maxStudents: 4,
      bookedStudents: [
        { name: "Anjali Mehta", applicationId: "APP-2024-147" },
        { name: "Suresh Reddy", applicationId: "APP-2024-146" }
      ],
      volunteer: "Rajesh Kumar",
      location: "Dehradun",
      status: "Active"
    }
  ]);

  const volunteers = ["All Volunteers", "Rajesh Kumar", "Priya Sharma", "Amit Patel", "Neha Gupta", "Vikram Singh"];

  const handleAddSlot = (slotData: Omit<Slot, "id" | "bookedStudents">[]) => {
    const newSlots = slotData.map((slot, index) => ({
      ...slot,
      id: (slots.length + index + 1).toString(),
      bookedStudents: [],
      status: "Active" as const
    }));
    setSlots([...slots, ...newSlots]);
    setShowAddSlot(false);
    toast.success(`${newSlots.length} slot(s) added successfully!`);
  };

  const handleEditSlot = (slotData: Slot) => {
    setSlots(slots.map(slot => slot.id === slotData.id ? slotData : slot));
    setEditingSlot(null);
    toast.success("Slot updated successfully!");
  };

  const handleDuplicateSlot = (slot: Slot) => {
    const newSlot: Slot = {
      ...slot,
      id: (slots.length + 1).toString(),
      bookedStudents: [],
      status: "Active"
    };
    setSlots([...slots, newSlot]);
    toast.success("Slot duplicated successfully!");
  };

  const handleDisableSlot = (slot: Slot) => {
    setSlots(slots.map(s => s.id === slot.id ? { ...s, status: "Disabled" as const } : s));
    setConfirmAction(null);
    toast.success("Slot disabled successfully!");
  };

  const handleCancelSlot = (slot: Slot) => {
    setSlots(slots.map(s => s.id === slot.id ? { ...s, status: "Cancelled" as const } : s));
    setConfirmAction(null);
    toast.success("Slot cancelled successfully!");
  };

  // Filter logic
  const filteredSlots = slots.filter(slot => {
    // Search filter
    const matchesSearch = 
      slot.date.includes(searchQuery) ||
      slot.bookedStudents.some(student => student.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // Status filter
    const matchesStatus = statusFilter === "all" || slot.status === statusFilter;

    // Date range filter
    const matchesDateRange = 
      (!dateRange.from || slot.date >= dateRange.from) &&
      (!dateRange.to || slot.date <= dateRange.to);

    // Location filter
    const matchesLocation = locationFilter === "all" || slot.location === locationFilter;

    return matchesSearch && matchesStatus && matchesDateRange && matchesLocation;
  });

  const paginatedSlots = filteredSlots.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusBadge = (status: Slot["status"]) => {
    const styles = {
      Active: "bg-[#e6f7f1] text-[#25c196]",
      Cancelled: "bg-[#ffe6e6] text-[#fb2c36]",
      Disabled: "bg-[#fff9e6] text-[#f59e0b]",
      Full: "bg-[#ecf4ff] text-[#1a4d8f]"
    };
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] ${styles[status]}`}>
        {status}
      </span>
    );
  };

  if (showAddSlot) {
    return <AddSlot onBack={() => setShowAddSlot(false)} onSave={handleAddSlot} />;
  }

  if (editingSlot) {
    return <EditSlot slot={editingSlot} onBack={() => setEditingSlot(null)} onSave={handleEditSlot} />;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Slot Management
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Create and manage interview slots for students
            </p>
          </div>
          <button
            onClick={() => setShowAddSlot(true)}
            className="bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Slot
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#969696]" />
                <input
                  type="text"
                  placeholder="Search by date or student..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[40px] pl-11 pr-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Full">Full</option>
                <option value="Disabled">Disabled</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            {/* Date Range */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                From Date
              </label>
              <input
                type="date"
                value={dateRange.from}
                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                To Date
              </label>
              <input
                type="date"
                value={dateRange.to}
                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                Location
              </label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="Dehradun">Dehradun</option>
                {/* Add more locations as needed */}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchQuery || statusFilter !== "all" || dateRange.from || dateRange.to || locationFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setStatusFilter("all");
                setDateRange({ from: "", to: "" });
                setLocationFilter("all");
              }}
              className="mt-4 text-[#1a4d8f] hover:underline font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Slots Table */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Date & Time
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Bookings
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Location
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedSlots.map((slot) => (
                  <tr key={slot.id} className="border-b border-[#e2e8f2] last:border-b-0 hover:bg-[#f6f8fc] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#1a4d8f]" />
                        <div>
                          <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                            {new Date(slot.date).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </p>
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px]">
                            {slot.time}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#a85613]" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          {slot.duration}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedSlotForBookings(slot)}
                        className="flex items-center gap-2 hover:bg-[#ecf4ff] px-3 py-1 rounded-[8px] transition-colors"
                      >
                        <Users className="w-4 h-4 text-[#1a4d8f]" />
                        <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                          {slot.bookedStudents.length}/{slot.maxStudents}
                        </span>
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        {slot.location}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(slot.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingSlot(slot)}
                          className="text-[#1a4d8f] hover:bg-[#ecf4ff] p-2 rounded-[8px] transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        {slot.status !== "Disabled" && slot.status !== "Cancelled" && (
                          <>
                            <button
                              onClick={() => setConfirmAction({ type: "disable", slot })}
                              className="text-[#f59e0b] hover:bg-[#fff9e6] p-2 rounded-[8px] transition-colors"
                              title="Disable"
                            >
                              <Ban className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setConfirmAction({ type: "cancel", slot })}
                              className="text-[#fb2c36] hover:bg-[#ffe6e6] p-2 rounded-[8px] transition-colors"
                              title="Cancel"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSlots.length === 0 && (
            <div className="py-12 text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                No slots found matching your criteria.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-[14px]">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696]">
            Showing {paginatedSlots.length} of {filteredSlots.length} slots
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-[#f6f8fc] border border-[#e2e8f2] px-3 py-2 rounded-[8px] text-[#4d4b48] hover:bg-[#ecf4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">
              Page {currentPage} of {Math.max(1, Math.ceil(filteredSlots.length / itemsPerPage))}
            </p>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= filteredSlots.length}
              className="bg-[#f6f8fc] border border-[#e2e8f2] px-3 py-2 rounded-[8px] text-[#4d4b48] hover:bg-[#ecf4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Bookings Modal */}
      {selectedSlotForBookings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[16px] max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Booked Students
              </h3>
              <button
                onClick={() => setSelectedSlotForBookings(null)}
                className="text-[#969696] hover:text-[#4d4b48] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] mb-4">
              {new Date(selectedSlotForBookings.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })} at {selectedSlotForBookings.time}
            </p>
            {selectedSlotForBookings.bookedStudents.length > 0 ? (
              <ul className="space-y-2">
                {selectedSlotForBookings.bookedStudents.map((student, index) => (
                  <li key={index} className="flex items-start justify-between gap-3 p-3 bg-[#f6f8fc] rounded-[8px]">
                    <div className="flex items-center gap-2 flex-1">
                      <Users className="w-4 h-4 text-[#1a4d8f] flex-shrink-0" />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        {student.name}
                      </span>
                    </div>
                    <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px] whitespace-nowrap">
                      #{student.applicationId}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] text-center py-8">
                No students have booked this slot yet.
              </p>
            )}
            <p className="mt-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
              {selectedSlotForBookings.bookedStudents.length} / {selectedSlotForBookings.maxStudents} slots filled
            </p>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmAction && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[16px] max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#fff9e6] p-2 rounded-[8px]">
                <AlertTriangle className="w-6 h-6 text-[#f59e0b]" />
              </div>
              <h3 className="font-['Fraunces:Bold',sans-serif] text-[#4d4b48] text-[20px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Confirm {confirmAction.type === "disable" ? "Disable" : "Cancel"} Slot
              </h3>
            </div>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] mb-6">
              Are you sure you want to {confirmAction.type} this slot scheduled for{" "}
              <strong>{new Date(confirmAction.slot.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</strong> at <strong>{confirmAction.slot.time}</strong>?
              {confirmAction.slot.bookedStudents.length > 0 && (
                <span className="block mt-2 text-[#fb2c36]">
                  This slot has {confirmAction.slot.bookedStudents.length} student(s) booked.
                </span>
              )}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setConfirmAction(null)}
                className="flex-1 h-[44px] px-6 rounded-[100px] border-2 border-[#e2e8f2] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] text-[#4d4b48] hover:bg-[#f6f8fc] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (confirmAction.type === "disable") {
                    handleDisableSlot(confirmAction.slot);
                  } else {
                    handleCancelSlot(confirmAction.slot);
                  }
                }}
                className={`flex-1 h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] text-white transition-all duration-200 ${
                  confirmAction.type === "disable"
                    ? "bg-[#f59e0b] hover:bg-[#d97706]"
                    : "bg-[#fb2c36] hover:bg-[#dc2626]"
                }`}
              >
                {confirmAction.type === "disable" ? "Disable" : "Cancel"} Slot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}