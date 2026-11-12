import { useState } from "react";
import { Plus, Search, Edit, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import AddNewSeat from "./AddNewSeat";
import EditSeat from "./EditSeat";
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

export default function SeatsManagement() {
  const [showAddSeat, setShowAddSeat] = useState(false);
  const [editingSeat, setEditingSeat] = useState<Seat | null>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear().toString());
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filters
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [collegeFilter, setCollegeFilter] = useState<string>("all");
  const [courseFilter, setCourseFilter] = useState<string>("all");
  
  const itemsPerPage = 10;

  const [seats, setSeats] = useState<Seat[]>([
    {
      id: "1",
      city: "Dehradun",
      college: "Graphic Era University",
      course: "B.Tech Computer Science",
      noOfSeats: 120,
      remainingSeats: 100,
      lastUpdatedOn: "15 Dec 2024"
    },
    {
      id: "2",
      city: "Dehradun",
      college: "DIT University",
      course: "B.Tech Electronics",
      noOfSeats: 80,
      remainingSeats: 60,
      lastUpdatedOn: "14 Dec 2024"
    },
    {
      id: "3",
      city: "Delhi",
      college: "Delhi University",
      course: "B.Sc Physics",
      noOfSeats: 60,
      remainingSeats: 40,
      lastUpdatedOn: "13 Dec 2024"
    },
    {
      id: "4",
      city: "Dehradun",
      college: "Graphic Era University",
      course: "B.Tech Mechanical",
      noOfSeats: 100,
      remainingSeats: 80,
      lastUpdatedOn: "12 Dec 2024"
    },
    {
      id: "5",
      city: "Mumbai",
      college: "IIT Bombay",
      course: "B.Tech Computer Science",
      noOfSeats: 150,
      remainingSeats: 130,
      lastUpdatedOn: "11 Dec 2024"
    }
  ]);

  const years = Array.from({ length: 5 }, (_, i) => (new Date().getFullYear() - 2 + i).toString());
  const cities = ["all", ...Array.from(new Set(seats.map(s => s.city)))];
  const colleges = ["all", ...Array.from(new Set(seats.map(s => s.college)))];
  const courses = ["all", ...Array.from(new Set(seats.map(s => s.course)))];

  const handleAddSeats = (newSeats: Omit<Seat, "id" | "lastUpdatedOn">[]) => {
    const today = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    const seatsWithDetails = newSeats.map((seat, index) => ({
      ...seat,
      id: (seats.length + index + 1).toString(),
      lastUpdatedOn: today
    }));
    setSeats([...seats, ...seatsWithDetails]);
    setShowAddSeat(false);
    toast.success(`${seatsWithDetails.length} seat(s) added successfully!`);
  };

  const handleDeleteSeat = (id: string) => {
    setSeats(seats.filter(seat => seat.id !== id));
    toast.success("Seat deleted successfully!");
  };

  const handleEditSeat = (seat: Seat) => {
    setEditingSeat(seat);
  };

  const handleUpdateSeat = (updatedSeat: Seat) => {
    setSeats(seats.map(s => s.id === updatedSeat.id ? updatedSeat : s));
    setEditingSeat(null);
    toast.success("Seat updated successfully!");
  };

  // Filter logic
  const filteredSeats = seats.filter(seat => {
    const matchesSearch = 
      seat.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seat.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
      seat.course.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCity = cityFilter === "all" || seat.city === cityFilter;
    const matchesCollege = collegeFilter === "all" || seat.college === collegeFilter;
    const matchesCourse = courseFilter === "all" || seat.course === courseFilter;

    return matchesSearch && matchesCity && matchesCollege && matchesCourse;
  });

  const paginatedSeats = filteredSeats.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (showAddSeat) {
    return <AddNewSeat onBack={() => setShowAddSeat(false)} onSave={handleAddSeats} editingSeat={editingSeat} initialMethod="manual" />;
  }

  if (editingSeat) {
    return <EditSeat seat={editingSeat} onBack={() => setEditingSeat(null)} onSave={handleUpdateSeat} />;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Seats Management
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Manage college seats for different courses
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="h-[44px] px-4 border border-[#e2e8f2] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <button
              onClick={() => setShowAddSeat(true)}
              className="bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add New Seat
            </button>
          </div>
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
                  placeholder="Search by city, college, or course..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[40px] pl-11 pr-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                />
              </div>
            </div>

            {/* City Filter */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                City
              </label>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
              >
                <option value="all">All Cities</option>
                {cities.filter(c => c !== "all").map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* College Filter */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                College
              </label>
              <select
                value={collegeFilter}
                onChange={(e) => setCollegeFilter(e.target.value)}
                className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
              >
                <option value="all">All Colleges</option>
                {colleges.filter(c => c !== "all").map(college => (
                  <option key={college} value={college}>{college}</option>
                ))}
              </select>
            </div>

            {/* Course Filter */}
            <div className="lg:col-span-2">
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                Course
              </label>
              <select
                value={courseFilter}
                onChange={(e) => setCourseFilter(e.target.value)}
                className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
              >
                <option value="all">All Courses</option>
                {courses.filter(c => c !== "all").map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {(searchQuery || cityFilter !== "all" || collegeFilter !== "all" || courseFilter !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("");
                setCityFilter("all");
                setCollegeFilter("all");
                setCourseFilter("all");
              }}
              className="mt-4 text-[#1a4d8f] hover:underline font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Seats Table */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    City
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    College
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Course
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Total Seats
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Remaining Seats
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Last updated on
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {paginatedSeats.map((seat) => (
                  <tr key={seat.id} className="border-b border-[#e2e8f2] last:border-b-0 hover:bg-[#f6f8fc] transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        {seat.city}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        {seat.college}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        {seat.course}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                        {seat.noOfSeats}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                        {seat.remainingSeats}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                        {seat.lastUpdatedOn}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditSeat(seat)}
                          className="text-[#1a4d8f] hover:bg-[#ecf4ff] p-2 rounded-[8px] transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteSeat(seat.id)}
                          className="text-[#fb2c36] hover:bg-[#ffe6e6] p-2 rounded-[8px] transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredSeats.length === 0 && (
            <div className="py-12 text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                No seats found matching your criteria.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-[14px]">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696]">
            Showing {paginatedSeats.length} of {filteredSeats.length} seats
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
              Page {currentPage} of {Math.max(1, Math.ceil(filteredSeats.length / itemsPerPage))}
            </p>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= filteredSeats.length}
              className="bg-[#f6f8fc] border border-[#e2e8f2] px-3 py-2 rounded-[8px] text-[#4d4b48] hover:bg-[#ecf4ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}