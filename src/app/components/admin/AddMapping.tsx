import { useState } from "react";
import { ArrowLeft, X, ChevronDown, Search } from "lucide-react";
import { toast } from "sonner";

interface Student {
  id: string;
  name: string;
  applicationId: string;
}

interface Volunteer {
  id: string;
  name: string;
  role: string[];
}

interface AddMappingProps {
  onBack: () => void;
  onSave: (mappingData: {
    stage: string;
    volunteerId: string;
    studentIds: string[];
  }) => void;
}

export default function AddMapping({ onBack, onSave }: AddMappingProps) {
  const [formData, setFormData] = useState({
    stage: "",
    volunteerId: "",
    studentIds: [] as string[]
  });

  const [studentSearchQuery, setStudentSearchQuery] = useState("");
  const [showStudentDropdown, setShowStudentDropdown] = useState(false);

  // Mock data - in real app, this would come from API
  const stages = [
    "Document Upload / Verification",
    "Counselling",
    "Home Visit"
  ];

  const volunteers: Volunteer[] = [
    {
      id: "1",
      name: "Amit Patel",
      role: ["Counselling", "Home Visit"]
    },
    {
      id: "2",
      name: "Vikram Singh",
      role: ["Document Upload / Verification"]
    },
    {
      id: "3",
      name: "Sunita Rao",
      role: ["Counselling"]
    },
    {
      id: "4",
      name: "Karan Mehta",
      role: ["Document Upload / Verification", "Counselling", "Home Visit"]
    }
  ];

  const students: Student[] = [
    { id: "1", name: "Priya Sharma", applicationId: "APP-2024-156" },
    { id: "2", name: "Rajesh Kumar", applicationId: "APP-2024-155" },
    { id: "3", name: "Ananya Patel", applicationId: "APP-2024-154" },
    { id: "4", name: "Arjun Reddy", applicationId: "APP-2024-153" },
    { id: "5", name: "Meera Singh", applicationId: "APP-2024-152" },
    { id: "6", name: "Ravi Verma", applicationId: "APP-2024-151" },
    { id: "7", name: "Kavya Nair", applicationId: "APP-2024-150" },
    { id: "8", name: "Sanjay Desai", applicationId: "APP-2024-149" }
  ];

  // Filter volunteers based on selected stage
  const filteredVolunteers = formData.stage
    ? volunteers.filter(v => v.role.includes(formData.stage))
    : volunteers;

  // Filter students based on search query
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
    student.applicationId.toLowerCase().includes(studentSearchQuery.toLowerCase())
  );

  const handleStudentToggle = (studentId: string) => {
    setFormData(prev => ({
      ...prev,
      studentIds: prev.studentIds.includes(studentId)
        ? prev.studentIds.filter(id => id !== studentId)
        : [...prev.studentIds, studentId]
    }));
  };

  const handleRemoveStudent = (studentId: string) => {
    setFormData(prev => ({
      ...prev,
      studentIds: prev.studentIds.filter(id => id !== studentId)
    }));
  };

  const getStudentById = (id: string) => students.find(s => s.id === id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.stage) {
      toast.error("Please select a stage");
      return;
    }

    if (!formData.volunteerId) {
      toast.error("Please select a volunteer");
      return;
    }

    if (formData.studentIds.length === 0) {
      toast.error("Please select at least one student");
      return;
    }

    onSave(formData);
    toast.success("Mapping created successfully!");
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
            Back to Map Student with Volunteer
          </button>
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Add New Mapping
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] mb-6">
            Assign volunteer to students for a specific stage
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Select Stage */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Select Stage <span className="text-[#fb2c36]">*</span>
                </label>
                <select
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value, volunteerId: "" })}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                >
                  <option value="">Select a stage...</option>
                  {stages.map((stage) => (
                    <option key={stage} value={stage}>
                      {stage}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Volunteer */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Select Volunteer <span className="text-[#fb2c36]">*</span>
                </label>
                <select
                  value={formData.volunteerId}
                  onChange={(e) => setFormData({ ...formData, volunteerId: e.target.value })}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                  disabled={!formData.stage}
                >
                  <option value="">
                    {formData.stage ? "Select a volunteer..." : "First select a stage..."}
                  </option>
                  {filteredVolunteers.map((volunteer) => (
                    <option key={volunteer.id} value={volunteer.id}>
                      {volunteer.name}
                    </option>
                  ))}
                </select>
                {formData.stage && filteredVolunteers.length === 0 && (
                  <p className="mt-1 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#fb2c36] text-[12px]">
                    No volunteers available for this stage
                  </p>
                )}
              </div>

              {/* Select Student - Full width */}
              <div className="md:col-span-2">
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Select Student <span className="text-[#fb2c36]">*</span>
                </label>
                
                {/* Selected Students */}
                {formData.studentIds.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.studentIds.map((studentId) => {
                      const student = getStudentById(studentId);
                      return student ? (
                        <div
                          key={studentId}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a4d8f]/10 text-[#1a4d8f] rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
                        >
                          <span>{student.name}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveStudent(studentId)}
                            className="hover:bg-[#1a4d8f]/20 rounded-full p-0.5 transition-colors"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : null;
                    })}
                  </div>
                )}

                {/* Search and Dropdown */}
                <div className="relative">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#969696] pointer-events-none" />
                    <input
                      type="text"
                      value={studentSearchQuery}
                      onChange={(e) => setStudentSearchQuery(e.target.value)}
                      onFocus={() => setShowStudentDropdown(true)}
                      placeholder="Search and select students..."
                      className="w-full h-[44px] pl-11 pr-10 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    />
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#969696] pointer-events-none" />
                  </div>

                  {/* Dropdown */}
                  {showStudentDropdown && (
                    <>
                      {/* Backdrop */}
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setShowStudentDropdown(false)}
                      />
                      
                      {/* Dropdown Content */}
                      <div className="absolute z-20 w-full mt-1 bg-white border border-[#e2e8f2] rounded-[12px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] max-h-[300px] overflow-y-auto">
                        {filteredStudents.length > 0 ? (
                          <div className="py-1">
                            {filteredStudents.map((student) => {
                              const isSelected = formData.studentIds.includes(student.id);
                              return (
                                <button
                                  key={student.id}
                                  type="button"
                                  onClick={() => handleStudentToggle(student.id)}
                                  className={`w-full px-4 py-3 text-left hover:bg-[#f6f8fc] transition-colors flex items-center gap-3 ${
                                    isSelected ? "bg-[#ecf4ff]" : ""
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isSelected}
                                    readOnly
                                    className="w-4 h-4 rounded border-[#e2e8f2] text-[#1a4d8f] focus:ring-2 focus:ring-[#1a4d8f] cursor-pointer"
                                  />
                                  <div className="flex-1">
                                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                                      {student.name}
                                    </p>
                                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                      {student.applicationId}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="px-4 py-6 text-center">
                            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                              No students found
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>

                <p className="mt-1 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                  {formData.studentIds.length} student{formData.studentIds.length !== 1 ? 's' : ''} selected
                </p>
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
              Create Mapping
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}