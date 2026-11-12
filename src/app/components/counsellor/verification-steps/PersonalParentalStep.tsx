import { Card } from "../../ui/card";

interface PersonalParentalStepProps {
  // Section 1: Personal Details
  mediumOfStudy: {
    english: boolean;
    hindi: boolean;
    gujarati: boolean;
    other: boolean;
  };
  setMediumOfStudy: (value: any) => void;
  englishComfort: string;
  setEnglishComfort: (value: string) => void;
  bloodGroup: string;
  setBloodGroup: (value: string) => void;
  medicalHistory: string;
  setMedicalHistory: (value: string) => void;
  employmentStatus: string;
  setEmploymentStatus: (value: string) => void;

  // Section 2: Parental Status
  fatherName: string;
  setFatherName: (value: string) => void;
  fatherAlive: string;
  setFatherAlive: (value: string) => void;
  fatherAge: string;
  setFatherAge: (value: string) => void;
  fatherOccupation: string;
  setFatherOccupation: (value: string) => void;
  fatherIncome: string;
  setFatherIncome: (value: string) => void;
  fatherEducation: string;
  setFatherEducation: (value: string) => void;
  fatherContact: string;
  setFatherContact: (value: string) => void;
  motherName: string;
  setMotherName: (value: string) => void;
  motherAlive: string;
  setMotherAlive: (value: string) => void;
  motherAge: string;
  setMotherAge: (value: string) => void;
  motherOccupation: string;
  setMotherOccupation: (value: string) => void;
  motherIncome: string;
  setMotherIncome: (value: string) => void;
  motherEducation: string;
  setMotherEducation: (value: string) => void;
  motherContact: string;
  setMotherContact: (value: string) => void;
  familyAddress: string;
  setFamilyAddress: (value: string) => void;
  houseOwnership: string;
  setHouseOwnership: (value: string) => void;
}

export default function PersonalParentalStep(props: PersonalParentalStepProps) {
  return (
    <div className="space-y-8">
      {/* Section 1: Personal Details */}
      <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
        <h2
          className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Section 1 – Personal Details
        </h2>

        <div className="space-y-6">
          {/* Medium of Study */}
          <div>
            <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
              Medium of Study
            </label>
            <div className="flex flex-wrap gap-4">
              {[
                { key: 'english', label: 'English' },
                { key: 'hindi', label: 'Hindi' },
                { key: 'gujarati', label: 'Gujarati' },
                { key: 'other', label: 'Other' }
              ].map((medium) => (
                <label key={medium.key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={props.mediumOfStudy[medium.key as keyof typeof props.mediumOfStudy]}
                    onChange={(e) =>
                      props.setMediumOfStudy({ ...props.mediumOfStudy, [medium.key]: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-[#e2e8f2] text-[#1a4d8f] focus:ring-[#1a4d8f]"
                  />
                  <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                    {medium.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* English Comfort Level */}
          <div>
            <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
              How comfortable is the student in English?
            </label>
            <select
              value={props.englishComfort}
              onChange={(e) => props.setEnglishComfort(e.target.value)}
              className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
            >
              <option value="">Select comfort level</option>
              <option value="very-comfortable">Very Comfortable</option>
              <option value="comfortable">Comfortable</option>
              <option value="moderate">Moderate</option>
              <option value="not-comfortable">Not Comfortable</option>
            </select>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
              Blood Group
            </label>
            <select
              value={props.bloodGroup}
              onChange={(e) => props.setBloodGroup(e.target.value)}
              className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
            >
              <option value="">Select blood group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Medical History */}
          <div>
            <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
              Medical History / Health Issues
            </label>
            <textarea
              value={props.medicalHistory}
              onChange={(e) => props.setMedicalHistory(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
              placeholder="Describe any medical conditions or health issues"
            />
          </div>

          {/* Employment Status */}
          <div>
            <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
              Is the student currently employed?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="employmentStatus"
                  value="yes"
                  checked={props.employmentStatus === "yes"}
                  onChange={(e) => props.setEmploymentStatus(e.target.value)}
                  className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                />
                <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="employmentStatus"
                  value="no"
                  checked={props.employmentStatus === "no"}
                  onChange={(e) => props.setEmploymentStatus(e.target.value)}
                  className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                />
                <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">No</span>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {/* Section 2: Parental Status */}
      <Card className="bg-white p-4 sm:p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
        <h2
          className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
          style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
        >
          Section 2 – Parental Status
        </h2>

        <div className="space-y-8">
          {/* Father's Information */}
          <div>
            <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-4 font-bold">
              Father's Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Father's Name
                </label>
                <input
                  type="text"
                  value={props.fatherName}
                  onChange={(e) => props.setFatherName(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter father's name"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Is Father Alive?
                </label>
                <div className="flex gap-4 mt-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="fatherAlive"
                      value="yes"
                      checked={props.fatherAlive === "yes"}
                      onChange={(e) => props.setFatherAlive(e.target.value)}
                      className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="fatherAlive"
                      value="no"
                      checked={props.fatherAlive === "no"}
                      onChange={(e) => props.setFatherAlive(e.target.value)}
                      className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Age
                </label>
                <input
                  type="text"
                  value={props.fatherAge}
                  onChange={(e) => props.setFatherAge(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter age"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  value={props.fatherOccupation}
                  onChange={(e) => props.setFatherOccupation(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter occupation"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Monthly Income
                </label>
                <input
                  type="text"
                  value={props.fatherIncome}
                  onChange={(e) => props.setFatherIncome(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter monthly income"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Education
                </label>
                <input
                  type="text"
                  value={props.fatherEducation}
                  onChange={(e) => props.setFatherEducation(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter education level"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={props.fatherContact}
                  onChange={(e) => props.setFatherContact(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter contact number"
                />
              </div>
            </div>
          </div>

          {/* Mother's Information */}
          <div className="border-t border-[#e2e8f2] pt-6">
            <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-4 font-bold">
              Mother's Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Mother's Name
                </label>
                <input
                  type="text"
                  value={props.motherName}
                  onChange={(e) => props.setMotherName(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter mother's name"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Is Mother Alive?
                </label>
                <div className="flex gap-4 mt-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="motherAlive"
                      value="yes"
                      checked={props.motherAlive === "yes"}
                      onChange={(e) => props.setMotherAlive(e.target.value)}
                      className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">Yes</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="motherAlive"
                      value="no"
                      checked={props.motherAlive === "no"}
                      onChange={(e) => props.setMotherAlive(e.target.value)}
                      className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Age
                </label>
                <input
                  type="text"
                  value={props.motherAge}
                  onChange={(e) => props.setMotherAge(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter age"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  value={props.motherOccupation}
                  onChange={(e) => props.setMotherOccupation(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter occupation"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Monthly Income
                </label>
                <input
                  type="text"
                  value={props.motherIncome}
                  onChange={(e) => props.setMotherIncome(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter monthly income"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Education
                </label>
                <input
                  type="text"
                  value={props.motherEducation}
                  onChange={(e) => props.setMotherEducation(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter education level"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={props.motherContact}
                  onChange={(e) => props.setMotherContact(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter contact number"
                />
              </div>
            </div>
          </div>

          {/* Family Address */}
          <div className="border-t border-[#e2e8f2] pt-6">
            <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-4 font-bold">
              Family Address
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Complete Address
                </label>
                <textarea
                  value={props.familyAddress}
                  onChange={(e) => props.setFamilyAddress(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                  placeholder="Enter complete family address"
                />
              </div>
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  House Ownership
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="houseOwnership"
                      value="owned"
                      checked={props.houseOwnership === "owned"}
                      onChange={(e) => props.setHouseOwnership(e.target.value)}
                      className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">Owned</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="houseOwnership"
                      value="rented"
                      checked={props.houseOwnership === "rented"}
                      onChange={(e) => props.setHouseOwnership(e.target.value)}
                      className="w-4 h-4 text-[#1a4d8f] focus:ring-[#1a4d8f]"
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">Rented</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
