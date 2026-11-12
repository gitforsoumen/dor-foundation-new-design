import { useState } from "react";
import { ArrowLeft, Upload, Download, X } from "lucide-react";
import { toast } from "sonner";

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  resume: string | null;
  role: string[];
  status: "Active" | "Inactive";
}

interface EditVolunteerProps {
  volunteer: Volunteer;
  onBack: () => void;
  onSave: (volunteerData: Volunteer) => void;
}

export default function EditVolunteer({ volunteer, onBack, onSave }: EditVolunteerProps) {
  const [formData, setFormData] = useState({
    ...volunteer
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    onSave(formData);
    toast.success("Volunteer updated successfully!");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Mock file upload - in a real application, this would upload to a server
      setFormData({ ...formData, resume: file.name });
      toast.success("Resume uploaded successfully!");
    }
  };

  const handleRemoveResume = () => {
    setFormData({ ...formData, resume: null });
    toast.success("Resume removed");
  };

  const handleDownloadResume = () => {
    if (formData.resume) {
      // Mock download functionality
      console.log("Downloading:", formData.resume);
      toast.success("Downloading resume...");
    }
  };

  const handleRoleChange = (role: string) => {
    const currentRoles = [...formData.role];
    const roleIndex = currentRoles.indexOf(role);
    
    if (roleIndex > -1) {
      // Role is already selected, remove it
      currentRoles.splice(roleIndex, 1);
    } else {
      // Role is not selected, add it
      currentRoles.push(role);
    }
    
    setFormData({ ...formData, role: currentRoles });
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
            Back to Manage Volunteers
          </button>
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Edit Volunteer
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] mb-6">
            Update volunteer information and settings
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Name <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Email <span className="text-[#fb2c36]">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter email address"
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Number (Disabled) */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  disabled
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#969696] bg-[#f6f8fc] cursor-not-allowed"
                />
                <p className="mt-1 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px]">
                  Phone number cannot be changed
                </p>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Resume
                </label>
                {formData.resume ? (
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] bg-[#f6f8fc] flex items-center justify-between">
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] truncate">
                        {formData.resume}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={handleDownloadResume}
                          className="text-[#1a4d8f] hover:bg-[#ecf4ff] p-1.5 rounded-[6px] transition-colors"
                          title="Download resume"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={handleRemoveResume}
                          className="text-[#fb2c36] hover:bg-[#ffe6e6] p-1.5 rounded-[6px] transition-colors"
                          title="Remove resume"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] bg-white hover:bg-[#f6f8fc] transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <Upload className="w-4 h-4 text-[#969696]" />
                      <span className="text-[#969696]">Upload resume (PDF, DOC, DOCX)</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Role */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Role <span className="text-[#fb2c36]">*</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.role.includes("Document Upload / Verification")}
                      onChange={() => handleRoleChange("Document Upload / Verification")}
                      className="w-5 h-5 rounded border-[#e2e8f2] text-[#1a4d8f] focus:ring-2 focus:ring-[#1a4d8f] cursor-pointer"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48]">
                      Document Upload / Verification
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.role.includes("Counselling")}
                      onChange={() => handleRoleChange("Counselling")}
                      className="w-5 h-5 rounded border-[#e2e8f2] text-[#1a4d8f] focus:ring-2 focus:ring-[#1a4d8f] cursor-pointer"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48]">
                      Counselling
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.role.includes("Home Visit")}
                      onChange={() => handleRoleChange("Home Visit")}
                      className="w-5 h-5 rounded border-[#e2e8f2] text-[#1a4d8f] focus:ring-2 focus:ring-[#1a4d8f] cursor-pointer"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48]">
                      Home Visit
                    </span>
                  </label>
                </div>
              </div>

              {/* Status */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Status <span className="text-[#fb2c36]">*</span>
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as "Active" | "Inactive" })}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
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
              Update Volunteer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}