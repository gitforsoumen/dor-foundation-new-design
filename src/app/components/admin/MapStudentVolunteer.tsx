import { useState } from "react";
import { Search, UserPlus, X, Plus, Edit, ChevronDown } from "lucide-react";
import AddMapping from "./AddMapping";
import MapStudentVolunteerModal from "./MapStudentVolunteerModal";

interface Student {
  id: string;
  name: string;
  applicationId: string;
  email: string;
  phone: string;
}

interface Volunteer {
  id: string;
  name: string;
  email: string;
  role: string[];
  assignedStudents: number;
}

interface StageAssignment {
  studentId: string;
  documentVolunteerIds?: string[];
  counsellingVolunteerIds?: string[];
  homeVisitVolunteerIds?: string[];
}

export default function MapStudentVolunteer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [showAddMapping, setShowAddMapping] = useState(false);
  const [assignments, setAssignments] = useState<StageAssignment[]>([
    { 
      studentId: "1", 
      documentVolunteerIds: ["2"],
      counsellingVolunteerIds: ["1", "3"],
      homeVisitVolunteerIds: ["1"]
    },
    { 
      studentId: "2", 
      documentVolunteerIds: ["2", "4"],
      counsellingVolunteerIds: ["3"]
    },
    { 
      studentId: "4", 
      counsellingVolunteerIds: ["1"],
      homeVisitVolunteerIds: ["4"]
    }
  ]);

  const [students] = useState<Student[]>([
    {
      id: "1",
      name: "Priya Sharma",
      applicationId: "APP-2024-156",
      email: "priya.sharma@example.com",
      phone: "9876543211"
    },
    {
      id: "2",
      name: "Rajesh Kumar",
      applicationId: "APP-2024-155",
      email: "rajesh.kumar@example.com",
      phone: "9876543212"
    },
    {
      id: "3",
      name: "Ananya Patel",
      applicationId: "APP-2024-154",
      email: "ananya.patel@example.com",
      phone: "9876543213"
    },
    {
      id: "4",
      name: "Arjun Reddy",
      applicationId: "APP-2024-153",
      email: "arjun.reddy@example.com",
      phone: "9876543214"
    },
    {
      id: "5",
      name: "Meera Singh",
      applicationId: "APP-2024-152",
      email: "meera.singh@example.com",
      phone: "9876543215"
    }
  ]);

  const [volunteers] = useState<Volunteer[]>([
    {
      id: "1",
      name: "Amit Patel",
      email: "amit.patel@dorfoundation.org",
      role: ["Counselling", "Home Visit"],
      assignedStudents: 5
    },
    {
      id: "2",
      name: "Vikram Singh",
      email: "vikram.singh@dorfoundation.org",
      role: ["Document Upload / Verification"],
      assignedStudents: 8
    },
    {
      id: "3",
      name: "Sunita Rao",
      email: "sunita.rao@dorfoundation.org",
      role: ["Counselling"],
      assignedStudents: 3
    },
    {
      id: "4",
      name: "Karan Mehta",
      email: "karan.mehta@dorfoundation.org",
      role: ["Document Upload / Verification", "Counselling", "Home Visit"],
      assignedStudents: 6
    }
  ]);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.applicationId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getAssignedVolunteer = (studentId: string, stage: "document" | "counselling" | "homeVisit"): Volunteer | null => {
    const assignment = assignments.find(a => a.studentId === studentId);
    if (!assignment) return null;
    const volunteerId = assignment[`${stage}VolunteerIds`]?.[0];
    if (!volunteerId) return null;
    return volunteers.find(v => v.id === volunteerId) || null;
  };

  const getAssignedVolunteers = (studentId: string, stage: "document" | "counselling" | "homeVisit"): Volunteer[] => {
    const assignment = assignments.find(a => a.studentId === studentId);
    if (!assignment) return [];
    const volunteerIds = assignment[`${stage}VolunteerIds`] || [];
    return volunteerIds.map(id => volunteers.find(v => v.id === id)).filter((v): v is Volunteer => v !== undefined);
  };

  const handleAssignVolunteer = (studentId: string, volunteerId: string, stage: "document" | "counselling" | "homeVisit") => {
    setAssignments(prev => {
      const existing = prev.find(a => a.studentId === studentId);
      if (existing) {
        return prev.map(a => 
          a.studentId === studentId ? { ...a, [`${stage}VolunteerIds`]: [volunteerId] } : a
        );
      }
      return [...prev, { studentId, [`${stage}VolunteerIds`]: [volunteerId] }]
    });
  };

  const handleRemoveAssignment = (studentId: string, stage: "document" | "counselling" | "homeVisit") => {
    setAssignments(prev => prev.map(a => 
      a.studentId === studentId ? { ...a, [`${stage}VolunteerIds`]: undefined } : a
    ));
  };

  const handleSaveMapping = (mappingData: {
    stage: string;
    volunteerId: string;
    studentIds: string[];
  }) => {
    // Create assignments for each student
    const newAssignments = mappingData.studentIds.map(studentId => ({
      studentId,
      [`${mappingData.stage}VolunteerIds`]: [mappingData.volunteerId]
    }));

    setAssignments(prev => {
      // Remove existing assignments for these students
      const filtered = prev.filter(a => !mappingData.studentIds.includes(a.studentId));
      // Add new assignments
      return [...filtered, ...newAssignments];
    });

    setShowAddMapping(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Assigned":
        return "bg-[#1a4d8f]/10 text-[#1a4d8f]";
      case "In Progress":
        return "bg-[#a85613]/10 text-[#a85613]";
      case "Completed":
        return "bg-[#25c196]/10 text-[#25c196]";
      default:
        return "bg-[#969696]/10 text-[#969696]";
    }
  };

  // Show AddMapping page when button is clicked
  if (showAddMapping) {
    return <AddMapping onBack={() => setShowAddMapping(false)} onSave={handleSaveMapping} />;
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Map Student with Volunteer
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Assign volunteers to students for counselling and support
            </p>
          </div>
          <button
            onClick={() => setShowAddMapping(true)}
            className="bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add New Mapping
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#969696]" />
            <input
              type="text"
              placeholder="Search by name, application ID, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[44px] pl-12 pr-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
            />
          </div>
        </div>

        {/* Students Table */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Application ID
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Student Name
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Document Upload / Verification Volunteer
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Counselling Volunteer
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Home Visit Volunteer
                  </th>
                  <th className="px-6 py-4 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => {
                  const documentVolunteers = getAssignedVolunteers(student.id, "document");
                  const counsellingVolunteers = getAssignedVolunteers(student.id, "counselling");
                  const homeVisitVolunteers = getAssignedVolunteers(student.id, "homeVisit");
                  
                  return (
                    <tr key={student.id} className="border-b border-[#e2e8f2] last:border-b-0 hover:bg-[#f6f8fc] transition-colors">
                      <td className="px-6 py-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
                        {student.applicationId}
                      </td>
                      <td className="px-6 py-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        {student.email}
                      </td>
                      <td className="px-6 py-4 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] whitespace-nowrap">
                        {student.phone}
                      </td>
                      <td className="px-6 py-4">
                        {documentVolunteers.length > 0 ? (
                          <div className="flex flex-col gap-1">
                            {documentVolunteers.map((vol, idx) => (
                              <span key={vol.id} className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                                {vol.name}
                                {idx < documentVolunteers.length - 1 && ','}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">Not assigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {counsellingVolunteers.length > 0 ? (
                          <div className="flex flex-col gap-1">
                            {counsellingVolunteers.map((vol, idx) => (
                              <span key={vol.id} className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                                {vol.name}
                                {idx < counsellingVolunteers.length - 1 && ','}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">Not assigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {homeVisitVolunteers.length > 0 ? (
                          <div className="flex flex-col gap-1">
                            {homeVisitVolunteers.map((vol, idx) => (
                              <span key={vol.id} className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                                {vol.name}
                                {idx < homeVisitVolunteers.length - 1 && ','}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">Not assigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedStudent(student)}
                          className="text-[#1a4d8f] hover:bg-[#ecf4ff] p-2 rounded-[8px] transition-colors flex items-center gap-2 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px] whitespace-nowrap"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="py-12 text-center">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                No students found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Edit Volunteer Assignments Modal */}
        {selectedStudent && (
          <MapStudentVolunteerModal
            selectedStudent={selectedStudent}
            volunteers={volunteers}
            assignments={assignments}
            onClose={() => setSelectedStudent(null)}
            onUpdateAssignments={setAssignments}
          />
        )}
      </div>
    </div>
  );
}