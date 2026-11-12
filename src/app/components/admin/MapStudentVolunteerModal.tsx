import { useState } from "react";
import { X, Search, ChevronDown } from "lucide-react";

interface Student {
  id: string;
  name: string;
}

interface Volunteer {
  id: string;
  name: string;
  email: string;
  role: string[];
}

interface StageAssignment {
  studentId: string;
  documentVolunteerIds?: string[];
  counsellingVolunteerIds?: string[];
  homeVisitVolunteerIds?: string[];
}

interface MapStudentVolunteerModalProps {
  selectedStudent: Student;
  volunteers: Volunteer[];
  assignments: StageAssignment[];
  onClose: () => void;
  onUpdateAssignments: (assignments: StageAssignment[]) => void;
}

export default function MapStudentVolunteerModal({
  selectedStudent,
  volunteers,
  assignments,
  onClose,
  onUpdateAssignments
}: MapStudentVolunteerModalProps) {
  const currentAssignment = assignments.find(a => a.studentId === selectedStudent.id);
  const [documentVolunteerIds, setDocumentVolunteerIds] = useState<string[]>(currentAssignment?.documentVolunteerIds || []);
  const [counsellingVolunteerIds, setCounsellingVolunteerIds] = useState<string[]>(currentAssignment?.counsellingVolunteerIds || []);
  const [homeVisitVolunteerIds, setHomeVisitVolunteerIds] = useState<string[]>(currentAssignment?.homeVisitVolunteerIds || []);
  
  const [docSearchQuery, setDocSearchQuery] = useState("");
  const [counsellingSearchQuery, setCounsellingSearchQuery] = useState("");
  const [homeVisitSearchQuery, setHomeVisitSearchQuery] = useState("");
  
  const [showDocDropdown, setShowDocDropdown] = useState(false);
  const [showCounsellingDropdown, setShowCounsellingDropdown] = useState(false);
  const [showHomeVisitDropdown, setShowHomeVisitDropdown] = useState(false);

  const documentVolunteers = volunteers.filter(v => v.role.includes("Document Upload / Verification"));
  const counsellingVolunteers = volunteers.filter(v => v.role.includes("Counselling"));
  const homeVisitVolunteers = volunteers.filter(v => v.role.includes("Home Visit"));

  const filteredDocVolunteers = documentVolunteers.filter(v =>
    v.name.toLowerCase().includes(docSearchQuery.toLowerCase()) ||
    v.email.toLowerCase().includes(docSearchQuery.toLowerCase())
  );

  const filteredCounsellingVolunteers = counsellingVolunteers.filter(v =>
    v.name.toLowerCase().includes(counsellingSearchQuery.toLowerCase()) ||
    v.email.toLowerCase().includes(counsellingSearchQuery.toLowerCase())
  );

  const filteredHomeVisitVolunteers = homeVisitVolunteers.filter(v =>
    v.name.toLowerCase().includes(homeVisitSearchQuery.toLowerCase()) ||
    v.email.toLowerCase().includes(homeVisitSearchQuery.toLowerCase())
  );

  const handleToggleDocVolunteer = (volunteerId: string) => {
    setDocumentVolunteerIds(prev =>
      prev.includes(volunteerId)
        ? prev.filter(id => id !== volunteerId)
        : [...prev, volunteerId]
    );
  };

  const handleToggleCounsellingVolunteer = (volunteerId: string) => {
    setCounsellingVolunteerIds(prev =>
      prev.includes(volunteerId)
        ? prev.filter(id => id !== volunteerId)
        : [...prev, volunteerId]
    );
  };

  const handleToggleHomeVisitVolunteer = (volunteerId: string) => {
    setHomeVisitVolunteerIds(prev =>
      prev.includes(volunteerId)
        ? prev.filter(id => id !== volunteerId)
        : [...prev, volunteerId]
    );
  };

  const handleRemoveDocVolunteer = (volunteerId: string) => {
    setDocumentVolunteerIds(prev => prev.filter(id => id !== volunteerId));
  };

  const handleRemoveCounsellingVolunteer = (volunteerId: string) => {
    setCounsellingVolunteerIds(prev => prev.filter(id => id !== volunteerId));
  };

  const handleRemoveHomeVisitVolunteer = (volunteerId: string) => {
    setHomeVisitVolunteerIds(prev => prev.filter(id => id !== volunteerId));
  };

  const handleDone = () => {
    const updatedAssignments = assignments.map(a =>
      a.studentId === selectedStudent.id
        ? {
            studentId: selectedStudent.id,
            documentVolunteerIds: documentVolunteerIds.length > 0 ? documentVolunteerIds : undefined,
            counsellingVolunteerIds: counsellingVolunteerIds.length > 0 ? counsellingVolunteerIds : undefined,
            homeVisitVolunteerIds: homeVisitVolunteerIds.length > 0 ? homeVisitVolunteerIds : undefined
          }
        : a
    );

    // If student doesn't have assignment yet, add one
    if (!currentAssignment) {
      updatedAssignments.push({
        studentId: selectedStudent.id,
        documentVolunteerIds: documentVolunteerIds.length > 0 ? documentVolunteerIds : undefined,
        counsellingVolunteerIds: counsellingVolunteerIds.length > 0 ? counsellingVolunteerIds : undefined,
        homeVisitVolunteerIds: homeVisitVolunteerIds.length > 0 ? homeVisitVolunteerIds : undefined
      });
    }

    onUpdateAssignments(updatedAssignments);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] max-w-[700px] w-full max-h-[80vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#e2e8f2]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Edit Volunteer Assignments
              </h2>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                Assign volunteers to {selectedStudent.name} for each stage
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-[#969696] hover:text-[#4d4b48] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="space-y-6">
            {/* Document Upload / Verification */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                Document Upload / Verification Volunteer
              </label>
              
              {/* Selected Volunteers */}
              {documentVolunteerIds.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {documentVolunteerIds.map(vid => {
                    const vol = volunteers.find(v => v.id === vid);
                    return vol ? (
                      <div
                        key={vid}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a4d8f]/10 text-[#1a4d8f] rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
                      >
                        <span>{vol.name}</span>
                        <button
                          onClick={() => handleRemoveDocVolunteer(vid)}
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
                    value={docSearchQuery}
                    onChange={(e) => setDocSearchQuery(e.target.value)}
                    onFocus={() => setShowDocDropdown(true)}
                    placeholder="Search and select volunteers..."
                    className="w-full h-[44px] pl-11 pr-10 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#969696] pointer-events-none" />
                </div>

                {/* Dropdown */}
                {showDocDropdown && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowDocDropdown(false)}
                    />
                    
                    {/* Dropdown Content */}
                    <div className="absolute z-20 w-full mt-1 bg-white border border-[#e2e8f2] rounded-[12px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] max-h-[200px] overflow-y-auto">
                      {filteredDocVolunteers.length > 0 ? (
                        <div className="py-1">
                          {filteredDocVolunteers.map((volunteer) => {
                            const isSelected = documentVolunteerIds.includes(volunteer.id);
                            return (
                              <button
                                key={volunteer.id}
                                type="button"
                                onClick={() => handleToggleDocVolunteer(volunteer.id)}
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
                                    {volunteer.name}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                    {volunteer.email}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="px-4 py-6 text-center">
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                            No volunteers found
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              <p className="mt-1 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                {documentVolunteerIds.length} volunteer{documentVolunteerIds.length !== 1 ? 's' : ''} selected
              </p>
            </div>

            {/* Counselling */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                Counselling Volunteer
              </label>
              
              {/* Selected Volunteers */}
              {counsellingVolunteerIds.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {counsellingVolunteerIds.map(vid => {
                    const vol = volunteers.find(v => v.id === vid);
                    return vol ? (
                      <div
                        key={vid}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a4d8f]/10 text-[#1a4d8f] rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
                      >
                        <span>{vol.name}</span>
                        <button
                          onClick={() => handleRemoveCounsellingVolunteer(vid)}
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
                    value={counsellingSearchQuery}
                    onChange={(e) => setCounsellingSearchQuery(e.target.value)}
                    onFocus={() => setShowCounsellingDropdown(true)}
                    placeholder="Search and select volunteers..."
                    className="w-full h-[44px] pl-11 pr-10 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#969696] pointer-events-none" />
                </div>

                {/* Dropdown */}
                {showCounsellingDropdown && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowCounsellingDropdown(false)}
                    />
                    
                    {/* Dropdown Content */}
                    <div className="absolute z-20 w-full mt-1 bg-white border border-[#e2e8f2] rounded-[12px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] max-h-[200px] overflow-y-auto">
                      {filteredCounsellingVolunteers.length > 0 ? (
                        <div className="py-1">
                          {filteredCounsellingVolunteers.map((volunteer) => {
                            const isSelected = counsellingVolunteerIds.includes(volunteer.id);
                            return (
                              <button
                                key={volunteer.id}
                                type="button"
                                onClick={() => handleToggleCounsellingVolunteer(volunteer.id)}
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
                                    {volunteer.name}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                    {volunteer.email}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="px-4 py-6 text-center">
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                            No volunteers found
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              <p className="mt-1 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                {counsellingVolunteerIds.length} volunteer{counsellingVolunteerIds.length !== 1 ? 's' : ''} selected
              </p>
            </div>

            {/* Home Visit */}
            <div>
              <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                Home Visit Volunteer
              </label>
              
              {/* Selected Volunteers */}
              {homeVisitVolunteerIds.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                  {homeVisitVolunteerIds.map(vid => {
                    const vol = volunteers.find(v => v.id === vid);
                    return vol ? (
                      <div
                        key={vid}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1a4d8f]/10 text-[#1a4d8f] rounded-[8px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]"
                      >
                        <span>{vol.name}</span>
                        <button
                          onClick={() => handleRemoveHomeVisitVolunteer(vid)}
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
                    value={homeVisitSearchQuery}
                    onChange={(e) => setHomeVisitSearchQuery(e.target.value)}
                    onFocus={() => setShowHomeVisitDropdown(true)}
                    placeholder="Search and select volunteers..."
                    className="w-full h-[44px] pl-11 pr-10 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#969696] pointer-events-none" />
                </div>

                {/* Dropdown */}
                {showHomeVisitDropdown && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowHomeVisitDropdown(false)}
                    />
                    
                    {/* Dropdown Content */}
                    <div className="absolute z-20 w-full mt-1 bg-white border border-[#e2e8f2] rounded-[12px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.15)] max-h-[200px] overflow-y-auto">
                      {filteredHomeVisitVolunteers.length > 0 ? (
                        <div className="py-1">
                          {filteredHomeVisitVolunteers.map((volunteer) => {
                            const isSelected = homeVisitVolunteerIds.includes(volunteer.id);
                            return (
                              <button
                                key={volunteer.id}
                                type="button"
                                onClick={() => handleToggleHomeVisitVolunteer(volunteer.id)}
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
                                    {volunteer.name}
                                  </p>
                                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                                    {volunteer.email}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="px-4 py-6 text-center">
                          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px]">
                            No volunteers found
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              <p className="mt-1 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                {homeVisitVolunteerIds.length} volunteer{homeVisitVolunteerIds.length !== 1 ? 's' : ''} selected
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#e2e8f2]">
          <button
            onClick={handleDone}
            className="w-full h-[44px] px-6 rounded-[100px] bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
