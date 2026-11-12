import { useState } from "react";
import { Edit, Search, ChevronLeft, ChevronRight, Download } from "lucide-react";
import EditVolunteer from "./EditVolunteer";

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  resume: string | null;
  role: string[];
  status: "Active" | "Inactive";
}

export default function ManageVolunteers() {
  const [editingVolunteer, setEditingVolunteer] = useState<Volunteer | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [volunteers, setVolunteers] = useState<Volunteer[]>([
    {
      id: "1",
      name: "Priya Sharma",
      email: "priya.sharma@dorfoundation.org",
      phone: "9876543211",
      resume: "priya_sharma_resume.pdf",
      role: ["Document Upload / Verification"],
      status: "Active"
    },
    {
      id: "2",
      name: "Amit Patel",
      email: "amit.patel@dorfoundation.org",
      phone: "9876543212",
      resume: "amit_patel_resume.pdf",
      role: ["Counselling", "Home Visit"],
      status: "Inactive"
    },
    {
      id: "3",
      name: "Vikram Singh",
      email: "vikram.singh@dorfoundation.org",
      phone: "9876543214",
      resume: "vikram_singh_resume.pdf",
      role: ["Document Upload / Verification", "Counselling"],
      status: "Active"
    },
    {
      id: "4",
      name: "Sunita Rao",
      email: "sunita.rao@dorfoundation.org",
      phone: "9876543215",
      resume: null,
      role: ["Home Visit"],
      status: "Active"
    },
    {
      id: "5",
      name: "Karan Mehta",
      email: "karan.mehta@dorfoundation.org",
      phone: "9876543216",
      resume: "karan_mehta_resume.pdf",
      role: ["Document Upload / Verification", "Counselling", "Home Visit"],
      status: "Active"
    }
  ]);

  const handleDownloadResume = (fileName: string) => {
    // Mock download functionality
    console.log("Downloading:", fileName);
  };

  const handleEditVolunteer = (volunteerData: Volunteer) => {
    setVolunteers(volunteers.map(volunteer => volunteer.id === volunteerData.id ? volunteerData : volunteer));
    setEditingVolunteer(null);
  };

  const filteredVolunteers = volunteers.filter(volunteer => 
    volunteer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    volunteer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    volunteer.phone.includes(searchQuery)
  );

  const currentVolunteers = filteredVolunteers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  if (editingVolunteer) {
    return <EditVolunteer volunteer={editingVolunteer} onBack={() => setEditingVolunteer(null)} onSave={handleEditVolunteer} />;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Manage Volunteers
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              View and manage volunteer users
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#969696]" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[44px] pl-12 pr-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
            />
          </div>
        </div>

        {/* Volunteers Table */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Phone Number
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Upload Resume
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentVolunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="border-b border-[#e2e8f2] last:border-b-0 hover:bg-[#f6f8fc] transition-colors">
                    <td className="px-6 py-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      {volunteer.name}
                    </td>
                    <td className="px-6 py-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      {volunteer.email}
                    </td>
                    <td className="px-6 py-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                      {volunteer.phone}
                    </td>
                    <td className="px-6 py-4">
                      {volunteer.resume ? (
                        <button
                          onClick={() => handleDownloadResume(volunteer.resume!)}
                          className="text-[#1a4d8f] hover:bg-[#ecf4ff] px-3 py-1.5 rounded-[8px] transition-colors flex items-center gap-2 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      ) : (
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[13px]">
                          Not uploaded
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      {volunteer.role.join(", ")}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] whitespace-nowrap ${"" +
                        volunteer.status === "Active" 
                          ? "bg-[#e6f7f1] text-[#25c196]" 
                          : "bg-[#ffe6e6] text-[#fb2c36]"
                      }`}>
                        {volunteer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setEditingVolunteer(volunteer)}
                        className="text-[#1a4d8f] hover:bg-[#ecf4ff] p-2 rounded-[8px] transition-colors flex items-center gap-2 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] whitespace-nowrap"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredVolunteers.length === 0 && (
            <div className="py-12 text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                No volunteers found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between text-[14px]">
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696]">
            Showing {filteredVolunteers.length} of {volunteers.length} volunteers
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
              Page {currentPage} of {Math.max(1, Math.ceil(filteredVolunteers.length / itemsPerPage))}
            </p>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage * itemsPerPage >= filteredVolunteers.length}
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