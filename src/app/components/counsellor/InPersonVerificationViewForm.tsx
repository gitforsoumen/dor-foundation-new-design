import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface InPersonVerificationViewFormProps {
  studentId: string;
  studentName: string;
  onBack: () => void;
}

export default function InPersonVerificationViewForm({
  studentId,
  studentName,
  onBack
}: InPersonVerificationViewFormProps) {
  // Mock pre-filled data
  const formData = {
    // Section 1: Personal Details
    mediumOfStudy: "English",
    comfortableInEnglish: "Yes",
    stepsIfNo: "N/A - Student is comfortable in English",
    bloodGroup: "B+",
    hasMedicalHistory: "No",
    medicalHistoryDetails: "None",
    isEarningMember: "No",
    jobDetails: "Not applicable",

    // Section 2: Parental Status
    father: {
      name: "Rajesh Sharma",
      age: "48",
      education: "10th Standard",
      occupation: "Driver",
      workDays: "25 days/month",
      monthlyIncome: "₹15,000",
      agricultureIncome: "₹0"
    },
    mother: {
      name: "Sunita Sharma",
      age: "45",
      education: "8th Standard",
      occupation: "Homemaker",
      workDays: "N/A",
      monthlyIncome: "₹0",
      agricultureIncome: "₹0"
    },
    fatherCondition: "Alive and Healthy",
    motherCondition: "Alive and Healthy",
    multipleMarriages: "No - Neither parent has multiple marriages",
    disabledPerson: "No - No disabled family members",
    socioEconomicCrisis: "No major crisis reported. The family maintains stable conditions despite limited income.",
    alcoholism: "No - Neither parent has alcohol dependency issues",
    largeExpenses: "No major large expenses in the recent past",
    hasLoans: "Yes - Home loan of ₹2,50,000 remaining",
    
    // Section 3: Siblings/Family Members
    siblings: [
      { name: "Amit Sharma", relation: "Brother", age: "16", education: "11th Standard", fees: "₹5,000/year", income: "₹0" },
      { name: "Neha Sharma", relation: "Sister", age: "12", education: "7th Standard", fees: "₹3,000/year", income: "₹0" }
    ],
    cattleDetails: "No - Family does not own any cattle",
    ownAgricultureLand: "No",
    agricultureIncome: "₹0",
    rentIncome: "₹0",
    otherIncome: "₹0",
    totalMonthlyIncome: "₹15,000",
    extendedFamilySupport: "Yes - Occasional support from maternal grandfather during emergencies",
    extendedFamilySupportAmount: "₹5,000-10,000/year (irregular)",
    extendedFamily: [
      { name: "Ram Prasad", relation: "Maternal Grandfather", age: "72", education: "5th Standard", occupation: "Retired", income: "Pension ₹8,000/month" }
    ],

    // Section 4: House & Town Details
    currentHouse: {
      residenceType: "Rented",
      rentAmount: "₹6,000/month",
      houseType: "Apartment",
      area: "800 sq ft",
      rooms: "2 BHK",
      amenities: "TV, Refrigerator",
      vehicles: "Two-wheeler (used for father's work)",
      address: "Flat 203, Krishna Apartments, Malleshwaram, Bangalore - 560003"
    },
    villageHouse: {
      residenceType: "Owned",
      houseType: "Independent House",
      area: "1000 sq ft",
      rooms: "3 rooms",
      amenities: "TV",
      address: "Village: Hosur, Taluk: Anekal, District: Bangalore Rural"
    },
    neighbour: { name: "Ramesh Kumar", contact: "+91 98765 43210" },
    landlord: { name: "Suresh Reddy", contact: "+91 98765 43211" },
    pradhan: { name: "Gangadhar Patil", phone: "+91 98765 43212", email: "pradhan.hosur@gmail.com" },
    principal: { name: "Dr. Lakshmi Venkatesh", phone: "+91 98765 43213", email: "principal@abcschool.edu" },
    teacher: { name: "Mrs. Kavitha Reddy", phone: "+91 98765 43214", email: "kavitha.reddy@abcschool.edu" },

    // Section 5: Course of Interest
    courseInterests: [
      { rank: 1, course: "Computer Science Engineering", specialization: "Artificial Intelligence" },
      { rank: 2, course: "Information Technology", specialization: "Software Development" },
      { rank: 3, course: "Bachelor of Computer Applications", specialization: "Data Science" }
    ],
    motivation: "Personal Interest in technology and coding, Career prospects in IT sector",
    needMoreInfoBeforeDecision: "No - Student has researched thoroughly and is confident about the choice",
    passionateAboutField: "Yes - Very passionate about coding and technology",
    appliedElsewhere: "Yes - Applied to State Government Scholarship",
    instituteDetails: { name: "Karnataka State Scholarship", fee: "Covers ₹50,000/year" },
    examAttempts: "JEE Mains (1 attempt), State CET (1 attempt)",
    attendRegularly: "Yes - Plans to attend college regularly",
    marriagePlans: "No - No marriage plans during college years",
    dropoutRisk: "Low - Strong family support and clear academic goals",
    relocatable: "Yes - Willing to relocate for quality education",
    openToAlternatives: "Yes - Open to alternative courses if needed",
    parentView: "Parents are fully supportive of the education. They want their daughter to complete her degree and build a career before considering marriage.",

    // Section 6: Financial & Logistics
    understandsPartialFee: "Yes - Family understands that scholarship covers partial fees and they need to arrange for remaining amount",
    transportMode: "Public transport (Bus) - Cost approximately ₹1,500/month",
    accommodationPlans: "Hostel accommodation preferred - Cost ₹8,000-10,000/month including food",

    // Psychological Section
    emotionalImpact: "Student shows resilience and maturity. Financial constraints have motivated rather than discouraged her.",
    workingToSupport: "No - Student is focused solely on studies",
    familyFinancialCondition: "Modest but stable. Family manages expenses carefully within limited income.",
    stressCoping: "Stay organized, Seek support from family/teachers, Manage time effectively",
    familySupportLevel: "Very Supportive - Parents are emotionally invested in student's success",

    // Section 7: Overall Feedback
    scholarshipRecommendation: "Strongly Recommended - Student demonstrates strong academic potential, clear goals, and genuine financial need",
    interviewer: {
      name: "Vikram Patel",
      signature: "Vikram Patel",
      location: "Bangalore",
      date: "20 Jan 2024"
    },

    // Document Checklist
    documents: {
      schoolApplication: "Submitted",
      gpsPhoto: "Submitted",
      homeVideo: "Submitted",
      aadhaar: "Submitted",
      rationCard: "Submitted",
      marksheet10: "Submitted",
      marksheet12: "Submitted",
      incomeCertificate: "Submitted",
      casteCertificate: "Submitted",
      domicile: "Submitted",
      bankStatementFather: "Submitted"
    },

    // Signatures
    candidateSignature: { name: "Priya Sharma", location: "Bangalore", date: "20 Jan 2024" },
    parentSignature: { name: "Rajesh Sharma", location: "Bangalore", date: "20 Jan 2024" }
  };

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1280px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header with Back Button */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-6 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:text-[#a85613] hover:bg-transparent p-0"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Profile
          </Button>

          {/* Page Title */}
          <h1
            className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[36px] mb-4"
            style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
          >
            In-Person Verification
          </h1>

          {/* Student Info */}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] mb-6">
            {studentName} • {studentId}
          </p>

          {/* Info Banner */}
          <div className="bg-[#ecf4ff] border border-[rgba(26,77,143,0.2)] rounded-[10px] p-4">
            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px]">
              This form has been submitted and is in read-only mode. All information below was provided during the in-person verification.
            </p>
          </div>
        </div>

        {/* Main Form - Read-only */}
        <div className="space-y-6">
          {/* Section 1: Personal Details */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              1. Personal Details
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ReadOnlyField label="Medium of Study" value={formData.mediumOfStudy} />
                <ReadOnlyField label="Comfortable in English?" value={formData.comfortableInEnglish} />
              </div>
              <ReadOnlyField label="Steps to improve English (if applicable)" value={formData.stepsIfNo} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ReadOnlyField label="Blood Group" value={formData.bloodGroup} />
                <ReadOnlyField label="Has Medical History?" value={formData.hasMedicalHistory} />
              </div>
              <ReadOnlyField label="Medical History Details" value={formData.medicalHistoryDetails} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ReadOnlyField label="Is Earning Member?" value={formData.isEarningMember} />
                <ReadOnlyField label="Job Details" value={formData.jobDetails} />
              </div>
            </div>
          </Card>

          {/* Section 2: Parental Status */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              2. Parental Status
            </h2>
            <div className="space-y-8">
              {/* Father Details */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Father's Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ReadOnlyField label="Name" value={formData.father.name} />
                  <ReadOnlyField label="Age" value={formData.father.age} />
                  <ReadOnlyField label="Education" value={formData.father.education} />
                  <ReadOnlyField label="Occupation" value={formData.father.occupation} />
                  <ReadOnlyField label="Work Days" value={formData.father.workDays} />
                  <ReadOnlyField label="Monthly Income" value={formData.father.monthlyIncome} />
                </div>
              </div>

              {/* Mother Details */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Mother's Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ReadOnlyField label="Name" value={formData.mother.name} />
                  <ReadOnlyField label="Age" value={formData.mother.age} />
                  <ReadOnlyField label="Education" value={formData.mother.education} />
                  <ReadOnlyField label="Occupation" value={formData.mother.occupation} />
                  <ReadOnlyField label="Work Days" value={formData.mother.workDays} />
                  <ReadOnlyField label="Monthly Income" value={formData.mother.monthlyIncome} />
                </div>
              </div>

              {/* Other Parental Information */}
              <div className="space-y-6">
                <ReadOnlyField label="Father's Condition" value={formData.fatherCondition} />
                <ReadOnlyField label="Mother's Condition" value={formData.motherCondition} />
                <ReadOnlyField label="Multiple Marriages" value={formData.multipleMarriages} />
                <ReadOnlyField label="Disabled Family Member" value={formData.disabledPerson} />
                <ReadOnlyField label="Socio-Economic Crisis" value={formData.socioEconomicCrisis} />
                <ReadOnlyField label="Alcoholism Issues" value={formData.alcoholism} />
                <ReadOnlyField label="Large Expenses" value={formData.largeExpenses} />
                <ReadOnlyField label="Loans" value={formData.hasLoans} />
              </div>
            </div>
          </Card>

          {/* Section 3: Siblings/Family Members */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              3. Siblings / Family Members
            </h2>
            <div className="space-y-8">
              {/* Siblings */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Siblings
                </h3>
                {formData.siblings.map((sibling, index) => (
                  <div key={index} className="mb-6 pb-6 border-b border-[#e2e8f2] last:border-0">
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-3">
                      Sibling {index + 1}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <ReadOnlyField label="Name" value={sibling.name} />
                      <ReadOnlyField label="Relation" value={sibling.relation} />
                      <ReadOnlyField label="Age" value={sibling.age} />
                      <ReadOnlyField label="Education" value={sibling.education} />
                      <ReadOnlyField label="Fees" value={sibling.fees} />
                      <ReadOnlyField label="Income" value={sibling.income} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Income Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ReadOnlyField label="Cattle Ownership" value={formData.cattleDetails} />
                <ReadOnlyField label="Agriculture Land" value={formData.ownAgricultureLand} />
                <ReadOnlyField label="Agriculture Income" value={formData.agricultureIncome} />
                <ReadOnlyField label="Rent Income" value={formData.rentIncome} />
                <ReadOnlyField label="Other Income" value={formData.otherIncome} />
                <ReadOnlyField label="Total Monthly Income" value={formData.totalMonthlyIncome} />
              </div>

              {/* Extended Family Support */}
              <div className="space-y-6">
                <ReadOnlyField label="Extended Family Support" value={formData.extendedFamilySupport} />
                <ReadOnlyField label="Support Amount" value={formData.extendedFamilySupportAmount} />
              </div>

              {/* Extended Family Members */}
              {formData.extendedFamily.map((member, index) => (
                <div key={index} className="pb-6 border-b border-[#e2e8f2] last:border-0">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-3">
                    Extended Family Member {index + 1}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ReadOnlyField label="Name" value={member.name} />
                    <ReadOnlyField label="Relation" value={member.relation} />
                    <ReadOnlyField label="Age" value={member.age} />
                    <ReadOnlyField label="Education" value={member.education} />
                    <ReadOnlyField label="Occupation" value={member.occupation} />
                    <ReadOnlyField label="Income" value={member.income} />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Section 4: House & Town Details */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              4. House & Town Details
            </h2>
            <div className="space-y-8">
              {/* Current House */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Current House (City/Town)
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ReadOnlyField label="Residence Type" value={formData.currentHouse.residenceType} />
                    <ReadOnlyField label="Rent Amount" value={formData.currentHouse.rentAmount} />
                    <ReadOnlyField label="House Type" value={formData.currentHouse.houseType} />
                    <ReadOnlyField label="Area" value={formData.currentHouse.area} />
                    <ReadOnlyField label="Rooms" value={formData.currentHouse.rooms} />
                    <ReadOnlyField label="Amenities" value={formData.currentHouse.amenities} />
                  </div>
                  <ReadOnlyField label="Vehicles" value={formData.currentHouse.vehicles} />
                  <ReadOnlyField label="Address" value={formData.currentHouse.address} />
                </div>
              </div>

              {/* Village House */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Village House (If Applicable)
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ReadOnlyField label="Residence Type" value={formData.villageHouse.residenceType} />
                    <ReadOnlyField label="House Type" value={formData.villageHouse.houseType} />
                    <ReadOnlyField label="Area" value={formData.villageHouse.area} />
                    <ReadOnlyField label="Rooms" value={formData.villageHouse.rooms} />
                    <ReadOnlyField label="Amenities" value={formData.villageHouse.amenities} />
                  </div>
                  <ReadOnlyField label="Address" value={formData.villageHouse.address} />
                </div>
              </div>

              {/* Contact References */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Contact References
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">Neighbour</p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px]">
                        {formData.neighbour.name} - {formData.neighbour.contact}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">Landlord</p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px]">
                        {formData.landlord.name} - {formData.landlord.contact}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">Village Pradhan</p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px]">
                        {formData.pradhan.name}<br />
                        {formData.pradhan.phone}<br />
                        {formData.pradhan.email}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">School Principal</p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px]">
                        {formData.principal.name}<br />
                        {formData.principal.phone}<br />
                        {formData.principal.email}
                      </p>
                    </div>
                    <div>
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">Teacher Reference</p>
                      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px]">
                        {formData.teacher.name}<br />
                        {formData.teacher.phone}<br />
                        {formData.teacher.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Section 5: Course of Interest */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              5. Course of Interest
            </h2>
            <div className="space-y-6">
              {/* Course Preferences */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Course Preferences (Ranked)
                </h3>
                {formData.courseInterests.map((course, index) => (
                  <div key={index} className="mb-4 pb-4 border-b border-[#e2e8f2] last:border-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <ReadOnlyField label={`Rank ${course.rank}`} value={course.course} />
                      <ReadOnlyField label="Specialization" value={course.specialization} />
                    </div>
                  </div>
                ))}
              </div>

              <ReadOnlyField label="Motivation for choosing this course" value={formData.motivation} />
              <ReadOnlyField label="Need more information before decision?" value={formData.needMoreInfoBeforeDecision} />
              <ReadOnlyField label="Passionate about the field?" value={formData.passionateAboutField} />
              <ReadOnlyField label="Applied elsewhere?" value={formData.appliedElsewhere} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ReadOnlyField label="Institute Name" value={formData.instituteDetails.name} />
                <ReadOnlyField label="Fee Coverage" value={formData.instituteDetails.fee} />
              </div>
              <ReadOnlyField label="Exam Attempts" value={formData.examAttempts} />
              <ReadOnlyField label="Will attend regularly?" value={formData.attendRegularly} />
              <ReadOnlyField label="Marriage Plans" value={formData.marriagePlans} />
              <ReadOnlyField label="Dropout Risk Assessment" value={formData.dropoutRisk} />
              <ReadOnlyField label="Relocatable for Education?" value={formData.relocatable ? "Yes" : "No"} />
              <ReadOnlyField label="Open to Alternative Courses?" value={formData.openToAlternatives} />
              <ReadOnlyField label="Parent's View on Education" value={formData.parentView} />
            </div>
          </Card>

          {/* Section 6: Financial & Logistics */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              6. Financial & Logistics
            </h2>
            <div className="space-y-6">
              <ReadOnlyField label="Understands Partial Fee Coverage?" value={formData.understandsPartialFee} />
              <ReadOnlyField label="Mode of Transport" value={formData.transportMode} />
              <ReadOnlyField label="Accommodation Plans" value={formData.accommodationPlans} />
              
              <div className="mt-8">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Psychological Assessment
                </h3>
                <div className="space-y-6">
                  <ReadOnlyField label="Emotional Impact of Financial Situation" value={formData.emotionalImpact} />
                  <ReadOnlyField label="Working to Support Family?" value={formData.workingToSupport} />
                  <ReadOnlyField label="Family Financial Condition" value={formData.familyFinancialCondition} />
                  <ReadOnlyField label="Stress Coping Mechanisms" value={formData.stressCoping} />
                  <ReadOnlyField label="Family Support Level" value={formData.familySupportLevel} />
                </div>
              </div>
            </div>
          </Card>

          {/* Section 7: Overall Feedback */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              7. Overall Feedback
            </h2>
            <div className="space-y-6">
              <ReadOnlyField label="Scholarship Recommendation" value={formData.scholarshipRecommendation} />
              
              <div className="mt-8">
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Interviewer Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ReadOnlyField label="Name" value={formData.interviewer.name} />
                  <ReadOnlyField label="Location" value={formData.interviewer.location} />
                  <ReadOnlyField label="Date" value={formData.interviewer.date} />
                </div>
              </div>
            </div>
          </Card>

          {/* Document Checklist */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Document Checklist
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(formData.documents).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-[3px] bg-[#1a4d8f] flex items-center justify-center flex-shrink-0">
                    <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 16 12">
                      <path 
                        d="M5.288 8.775L13.763 0.3C13.963 0.1 14.1963 0 14.463 0C14.7297 0 14.963 0.1 15.163 0.3C15.363 0.5 15.463 0.7375 15.463 1.0125C15.463 1.2875 15.363 1.525 15.163 1.725L5.988 10.925C5.788 11.125 5.55467 11.225 5.288 11.225C5.02133 11.225 4.788 11.125 4.588 10.925L0.288 6.625C0.088 6.425 -0.00783333 6.1875 0.0005 5.9125C0.00883333 5.6375 0.113 5.4 0.313 5.2C0.513 5 0.7505 4.9 1.0255 4.9C1.3005 4.9 1.538 5 1.738 5.2L5.288 8.775Z" 
                        fill="white" 
                      />
                    </svg>
                  </div>
                  <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Signatures */}
          <Card className="bg-white p-6 rounded-[10px] border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[20px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Signatures
            </h2>
            <div className="space-y-8">
              {/* Candidate Signature */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Candidate Signature
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ReadOnlyField label="Signature" value={formData.candidateSignature.name} />
                  <ReadOnlyField label="Location" value={formData.candidateSignature.location} />
                  <ReadOnlyField label="Date" value={formData.candidateSignature.date} />
                </div>
              </div>

              {/* Parent Signature */}
              <div>
                <h3 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[16px] mb-4">
                  Parent/Guardian Signature
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <ReadOnlyField label="Signature" value={formData.parentSignature.name} />
                  <ReadOnlyField label="Location" value={formData.parentSignature.location} />
                  <ReadOnlyField label="Date" value={formData.parentSignature.date} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Reusable read-only field component
function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#969696] text-[12px] mb-2">
        {label}
      </p>
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22px] whitespace-pre-wrap">
        {value || "Not provided"}
      </p>
    </div>
  );
}