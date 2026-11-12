import { useState, useEffect } from "react";
import { ArrowLeft, Plus, X, Upload, FileText, Trash2, AlertCircle } from "lucide-react";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Progress } from "../ui/progress";
import StepIndicator from "../StepIndicator";
import checkmarkSvg from "../../imports/svg-5z6iptt9iw";
import svgPaths from "../../imports/svg-6ocdxqliw6";
import trashIconPaths from "../../imports/svg-sbtrf0mqod";

interface InPersonVerificationFormProps {
  studentId: string;
  studentName: string;
  onBack: () => void;
}

interface SiblingMember {
  id: string;
  name: string;
  relation: string;
  age: string;
  education: string;
  fees: string;
  income: string;
}

interface ExtendedFamilyMember {
  id: string;
  name: string;
  relation: string;
  age: string;
  education: string;
  occupation: string;
  income: string;
}

interface CourseInterest {
  id: string;
  rank: number;
  course: string;
  specialization: string;
}

const courses = [
  "Computer Science Engineering",
  "Information Technology",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Bachelor of Business Administration",
  "Bachelor of Commerce",
  "Bachelor of Arts",
  "Bachelor of Science",
  "Bachelor of Computer Applications",
  "MBBS",
  "BDS",
  "Nursing",
  "Pharmacy",
  "Law (LLB)"
];

export default function InPersonVerificationForm({
  studentId,
  studentName,
  onBack
}: InPersonVerificationFormProps) {
  // Step Navigation
  const [currentStep, setCurrentStep] = useState(1);

  // Debug: Log step changes
  useEffect(() => {
    console.log('Step changed to:', currentStep);
  }, [currentStep]);

  // Section 1: Personal Details
  const [mediumOfStudy, setMediumOfStudy] = useState("");
  const [mediumOfStudyOther, setMediumOfStudyOther] = useState("");
  const [comfortableInEnglish, setComfortableInEnglish] = useState("");
  const [stepsIfNo, setStepsIfNo] = useState({
    coaching: false,
    online: false,
    other: false,
    otherText: ""
  });
  const [bloodGroup, setBloodGroup] = useState("");
  const [hasMedicalHistory, setHasMedicalHistory] = useState("");
  const [medicalHistoryDetails, setMedicalHistoryDetails] = useState("");
  const [isEarningMember, setIsEarningMember] = useState("");
  const [jobDetails, setJobDetails] = useState("");

  // Section 2: Parental Status
  const [fatherDetails, setFatherDetails] = useState({
    name: "",
    age: "",
    education: "",
    occupation: "",
    workDays: "",
    monthlyIncome: "",
    agricultureIncome: ""
  });
  const [motherDetails, setMotherDetails] = useState({
    name: "",
    age: "",
    education: "",
    occupation: "",
    workDays: "",
    monthlyIncome: "",
    agricultureIncome: ""
  });
  const [guardianDetails, setGuardianDetails] = useState({
    name: "",
    age: "",
    education: "",
    occupation: "",
    workDays: "",
    monthlyIncome: "",
    agricultureIncome: ""
  });
  const [fatherCondition, setFatherCondition] = useState("");
  const [motherCondition, setMotherCondition] = useState("");
  const [multipleMarriages, setMultipleMarriages] = useState({
    father: "",
    mother: "",
    fatherImpact: "",
    motherImpact: ""
  });
  const [disabledPerson, setDisabledPerson] = useState("");
  const [socioEconomicCrisis, setSocioEconomicCrisis] = useState("");
  const [alcoholism, setAlcoholism] = useState({
    father: "",
    mother: "",
    fatherSeverity: "",
    motherSeverity: "",
    impactHealth: false,
    impactQuarrel: false,
    impactFinances: false
  });
  const [largeExpenses, setLargeExpenses] = useState("");
  const [largeExpensesAmount, setLargeExpensesAmount] = useState("");
  const [hasLoans, setHasLoans] = useState("");
  const [loanAmount, setLoanAmount] = useState("");

  // Section 3: Siblings/Family Members
  const [siblings, setSiblings] = useState<SiblingMember[]>([
    { id: "1", name: "", relation: "", age: "", education: "", fees: "", income: "" }
  ]);
  const [cattleDetails, setCattleDetails] = useState({
    cows: false,
    buffaloes: false,
    goats: false,
    other: false,
    income: ""
  });
  const [ownAgricultureLand, setOwnAgricultureLand] = useState("");
  const [agricultureArea, setAgricultureArea] = useState("");
  const [agricultureIncome, setAgricultureIncome] = useState("");
  const [rentIncome, setRentIncome] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [totalMonthlyIncome, setTotalMonthlyIncome] = useState("");
  const [extendedFamilySupport, setExtendedFamilySupport] = useState("");
  const [extendedFamilySupportType, setExtendedFamilySupportType] = useState({
    nana: false,
    dada: false,
    chacha: false,
    mama: false
  });
  const [extendedFamilySupportAmount, setExtendedFamilySupportAmount] = useState("");
  const [extendedFamily, setExtendedFamily] = useState<ExtendedFamilyMember[]>([
    { id: "1", name: "", relation: "", age: "", education: "", occupation: "", income: "" }
  ]);

  // Section 4: House & Town Details
  const [currentHouse, setCurrentHouse] = useState({
    residenceType: "",
    rentAmount: "",
    houseType: "",
    area: "",
    areaOther: "",
    rooms: "",
    roomsOther: "",
    twoWheeler: false,
    threeWheeler: false,
    fourWheeler: false,
    tv: false,
    refrigerator: false,
    washingMachine: false,
    laptop: false,
    ac: false,
    address: ""
  });
  const [villageHouse, setVillageHouse] = useState({
    residenceType: "",
    rentAmount: "",
    houseType: "",
    area: "",
    areaOther: "",
    rooms: "",
    roomsOther: "",
    twoWheeler: false,
    threeWheeler: false,
    fourWheeler: false,
    tv: false,
    refrigerator: false,
    washingMachine: false,
    laptop: false,
    ac: false,
    address: ""
  });
  const [neighbour, setNeighbour] = useState({ name: "", contact: "" });
  const [landlord, setLandlord] = useState({ name: "", contact: "" });
  const [pradhan, setPradhan] = useState({ name: "", phone: "", email: "" });
  const [principal, setPrincipal] = useState({ name: "", phone: "", email: "" });
  const [teacher, setTeacher] = useState({ name: "", phone: "", email: "" });

  // Section 5: Course of Interest
  const [courseInterests, setCourseInterests] = useState<CourseInterest[]>([
    { id: "1", rank: 1, course: "", specialization: "" },
    { id: "2", rank: 2, course: "", specialization: "" },
    { id: "3", rank: 3, course: "", specialization: "" },
    { id: "4", rank: 4, course: "", specialization: "" },
    { id: "5", rank: 5, course: "", specialization: "" }
  ]);
  const [motivation, setMotivation] = useState({
    personalInterest: false,
    careerProspects: false,
    familyInfluence: false,
    scholarship: false
  });
  const [needMoreInfoBeforeDecision, setNeedMoreInfoBeforeDecision] = useState("");
  const [passionateAboutField, setPassionateAboutField] = useState("");
  const [appliedElsewhere, setAppliedElsewhere] = useState("");
  const [instituteDetails, setInstituteDetails] = useState({ name: "", fee: "" });
  const [examAttempts, setExamAttempts] = useState("");
  const [examAttemptsOther, setExamAttemptsOther] = useState("");
  const [attendRegularly, setAttendRegularly] = useState("");
  const [attendReasons, setAttendReasons] = useState("");
  const [attendReasonsOther, setAttendReasonsOther] = useState("");
  const [marriagePlans, setMarriagePlans] = useState("");
  const [dropoutRisk, setDropoutRisk] = useState("");
  const [relocatable, setRelocatable] = useState(false);
  const [openToAlternatives, setOpenToAlternatives] = useState("");
  const [parentView, setParentView] = useState("");
  const [candidateSignature, setCandidateSignature] = useState("");
  const [candidateSignatureDate, setCandidateSignatureDate] = useState("");
  const [candidateSignatureLocation, setCandidateSignatureLocation] = useState("");
  const [parentSignature, setParentSignature] = useState("");
  const [parentSignatureDate, setParentSignatureDate] = useState("");
  const [parentSignatureLocation, setParentSignatureLocation] = useState("");

  // Section 6: Financial & Logistics
  const [understandsPartialFee, setUnderstandsPartialFee] = useState("");
  const [transportMode, setTransportMode] = useState("");
  const [accommodationPlans, setAccommodationPlans] = useState("");

  // Psychological Section
  const [emotionalImpact, setEmotionalImpact] = useState("");
  const [workingToSupport, setWorkingToSupport] = useState("");
  const [familyFinancialCondition, setFamilyFinancialCondition] = useState("");
  const [stressCoping, setStressCoping] = useState({
    stayOrganised: false,
    seekSupport: false,
    manageTime: false,
    avoidStressful: false,
    exerciseYoga: false
  });
  const [familySupportLevel, setFamilySupportLevel] = useState("");

  // Section 7: Overall feedback of the student
  const [scholarshipRecommendation, setScholarshipRecommendation] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [interviewerSignature, setInterviewerSignature] = useState("");
  const [feedbackLocation, setFeedbackLocation] = useState("");
  const [feedbackDate, setFeedbackDate] = useState("");

  // Document Checklist
  const [documents, setDocuments] = useState({
    schoolApplication: "",
    gpsPhoto: "",
    homeVideo: "",
    shopVideo: "",
    aadhaar: "",
    rationCard: "",
    marksheet9: "",
    marksheet10: "",
    marksheet11: "",
    marksheet12: "",
    graduationMarksheet: "",
    incomeCertificate: "",
    casteCertificate: "",
    ewsCertificate: "",
    domicile: "",
    bankStatementFather: "",
    bankStatementMother: "",
    bankStatementSibling1: "",
    bankStatementSibling2: "",
    bankStatementSibling3: "",
    englishEssay: ""
  });

  const addSibling = () => {
    setSiblings([
      ...siblings,
      {
        id: Date.now().toString(),
        name: "",
        relation: "",
        age: "",
        education: "",
        fees: "",
        income: ""
      }
    ]);
  };

  const removeSibling = (id: string) => {
    setSiblings(siblings.filter(s => s.id !== id));
  };

  const addExtendedFamilyMember = () => {
    setExtendedFamily([
      ...extendedFamily,
      {
        id: Date.now().toString(),
        name: "",
        relation: "",
        age: "",
        education: "",
        occupation: "",
        income: ""
      }
    ]);
  };

  const removeExtendedFamilyMember = (id: string) => {
    setExtendedFamily(extendedFamily.filter(f => f.id !== id));
  };

  // Submission Popup State
  const [showSubmissionPopup, setShowSubmissionPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showDraftPopup, setShowDraftPopup] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [submissionComments, setSubmissionComments] = useState("");
  const [submissionDocuments, setSubmissionDocuments] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});
  const [filePreviews, setFilePreviews] = useState<{ [key: string]: string }>({});
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show submission popup instead of directly submitting
    setShowSubmissionPopup(true);
  };

  const handleFinalSubmit = () => {
    // Validate required fields
    if (!submissionStatus || !submissionComments.trim()) {
      setShowErrorPopup(true);
      return;
    }

    // Handle form submission
    console.log("Form submitted with status:", submissionStatus);
    console.log("Comments:", submissionComments);
    console.log("Documents:", submissionDocuments);
    
    // Show success confirmation
    setShowSubmissionPopup(false);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    onBack();
    setShowConfirmation(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const currentLength = submissionDocuments.length;
      
      files.forEach((file, idx) => {
        const fileIndex = currentLength + idx;
        const fileId = `${file.name}-${fileIndex}`;
        
        // Simulate upload progress
        setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
        
        const interval = setInterval(() => {
          setUploadProgress(prev => {
            const currentProgress = prev[fileId] || 0;
            if (currentProgress >= 100) {
              clearInterval(interval);
              return prev;
            }
            return { ...prev, [fileId]: Math.min(currentProgress + 10, 100) };
          });
        }, 100);

        // Create preview for image files
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setFilePreviews(prev => ({ ...prev, [fileId]: event.target?.result as string }));
          };
          reader.readAsDataURL(file);
        }
      });
      
      setSubmissionDocuments(prev => [...prev, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    const fileToRemove = submissionDocuments[index];
    const fileId = `${fileToRemove.name}-${index}`;
    
    // Clean up related state
    setUploadProgress(prev => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
    setFilePreviews(prev => {
      const newPreviews = { ...prev };
      delete newPreviews[fileId];
      return newPreviews;
    });
    
    setSubmissionDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      const currentLength = submissionDocuments.length;
      
      fileArray.forEach((file, idx) => {
        const fileIndex = currentLength + idx;
        const fileId = `${file.name}-${fileIndex}`;
        
        // Simulate upload progress
        setUploadProgress(prev => ({ ...prev, [fileId]: 0 }));
        
        const interval = setInterval(() => {
          setUploadProgress(prev => {
            const currentProgress = prev[fileId] || 0;
            if (currentProgress >= 100) {
              clearInterval(interval);
              return prev;
            }
            return { ...prev, [fileId]: Math.min(currentProgress + 10, 100) };
          });
        }, 100);

        // Create preview for image files
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setFilePreviews(prev => ({ ...prev, [fileId]: event.target?.result as string }));
          };
          reader.readAsDataURL(file);
        }
      });
      
      setSubmissionDocuments(prev => [...prev, ...fileArray]);
    }
  };

  const handleNext = () => {
    console.log('handleNext called - Current step:', currentStep);
    if (currentStep < 5) {
      const nextStep = currentStep + 1;
      console.log('Navigating from step', currentStep, 'to step', nextStep);
      setCurrentStep(nextStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.log('Already at final step');
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveDraft = () => {
    console.log('Saving draft with data:', { 
      mediumOfStudy, 
      comfortableInEnglish, 
      bloodGroup,
      fatherDetails,
      motherDetails
    });
    setShowDraftPopup(true);
  };

  const steps = [
    { number: 1, title: 'Personal & Family', status: currentStep === 1 ? 'current' as const : currentStep > 1 ? 'completed' as const : 'locked' as const },
    { number: 2, title: 'Family Network', status: currentStep === 2 ? 'current' as const : currentStep > 2 ? 'completed' as const : 'locked' as const },
    { number: 3, title: 'Academic Interest', status: currentStep === 3 ? 'current' as const : currentStep > 3 ? 'completed' as const : 'locked' as const },
    { number: 4, title: 'Financial & Psychology', status: currentStep === 4 ? 'current' as const : currentStep > 4 ? 'completed' as const : 'locked' as const },
    { number: 5, title: 'Feedback & Documents', status: currentStep === 5 ? 'current' as const : 'locked' as const }
  ];

  return (
    <div className="min-h-full bg-[#f6f8fc]">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:px-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] hover:text-[#a85613] hover:bg-transparent p-0"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Student Profile
          </Button>
          <div>
            <h1
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] mb-2"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              In-Person Verification Form
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
              Student: {studentName}
            </p>
            {/* Debug: Current Step Display */}
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[14px] mt-2">
              Current Step: {currentStep} of 5
            </p>
          </div>
        </div>

        {/* Card Container with Step Indicator */}
        <div className="bg-white rounded-[10px] relative mb-8">
          <div aria-hidden="true" className="absolute border border-[#e2e8f2] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
          
          {/* Step Indicator Section with Gray Background */}
          <div className="bg-[#f6f8fc] rounded-tl-[10px] rounded-tr-[10px] relative">
            <div aria-hidden="true" className="absolute border-[#e2e8f2] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[10px] rounded-tr-[10px]" />
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-5 sm:py-6 md:py-8">
              <StepIndicator steps={steps} />
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="space-y-6">

          {/* Step 1: Personal & Parental Details (Sections 1-2) */}
          {currentStep === 1 && (
            <>
          {/* Section 1: Personal Details */}
          <div className="mb-6">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Section 1 – Personal Details
            </h2>

            {/* In-Person Verification Details */}
            <div className="mb-6">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                In-Person Verification Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Blood Group
                  </label>
                  <select
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  >
                    <option value="">Select blood group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A−</option>
                    <option value="B+">B+</option>
                    <option value="B-">B−</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB−</option>
                    <option value="O+">O+</option>
                    <option value="O-">O−</option>
                    <option value="Not Known">Not Known</option>
                  </select>
                </div>

                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Any medical history of the applicant?
                  </Label>
                  <RadioGroup
                    value={hasMedicalHistory}
                    onValueChange={(value) => setHasMedicalHistory(value)}
                    className="flex gap-6 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="medicalHistory-yes" />
                      <Label
                        htmlFor="medicalHistory-yes"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="medicalHistory-no" />
                      <Label
                        htmlFor="medicalHistory-no"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {hasMedicalHistory === "yes" && (
                  <div className="md:col-span-2">
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Describe medical history
                    </label>
                    <textarea
                      value={medicalHistoryDetails}
                      onChange={(e) => setMedicalHistoryDetails(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                      placeholder="Enter medical history details"
                    />
                  </div>
                )}

                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Is the applicant an earning member of the family?
                  </Label>
                  <RadioGroup
                    value={isEarningMember}
                    onValueChange={(value) => setIsEarningMember(value)}
                    className="flex gap-6 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="earningMember-yes" />
                      <Label
                        htmlFor="earningMember-yes"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="earningMember-no" />
                      <Label
                        htmlFor="earningMember-no"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {isEarningMember === "yes" && (
                  <div className="md:col-span-2">
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Job details
                    </label>
                    <input
                      type="text"
                      value={jobDetails}
                      onChange={(e) => setJobDetails(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter job details"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Language & Communication */}
            <div className="border-t border-[#e2e8f2] pt-6">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                Language & Communication
              </h3>

              <div className="space-y-4">
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Which medium did you study in school?
                  </Label>
                  <RadioGroup
                    value={mediumOfStudy}
                    onValueChange={(value) => setMediumOfStudy(value)}
                    className="flex gap-6 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="english" id="medium-english" />
                      <Label
                        htmlFor="medium-english"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        English Medium
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hindi" id="medium-hindi" />
                      <Label
                        htmlFor="medium-hindi"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Hindi Medium
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="medium-other" />
                      <Label
                        htmlFor="medium-other"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                  {mediumOfStudy === "other" && (
                    <input
                      type="text"
                      value={mediumOfStudyOther}
                      onChange={(e) => setMediumOfStudyOther(e.target.value)}
                      placeholder="Specify other medium"
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent mt-3"
                    />
                  )}
                </div>

                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Are you comfortable studying this course entirely in English?
                  </Label>
                  <RadioGroup
                    value={comfortableInEnglish}
                    onValueChange={(value) => setComfortableInEnglish(value)}
                    className="flex gap-6 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="comfortable-yes" />
                      <Label
                        htmlFor="comfortable-yes"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="comfortable-no" />
                      <Label
                        htmlFor="comfortable-no"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {comfortableInEnglish === "no" && (
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      If No, Are you taking any steps to improve your English speaking and writing skills?
                    </Label>
                    <div className="flex gap-6 mt-3 flex-wrap">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="steps-coaching"
                          checked={stepsIfNo.coaching}
                          onCheckedChange={(checked) => setStepsIfNo({ ...stepsIfNo, coaching: checked as boolean })}
                        />
                        <Label
                          htmlFor="steps-coaching"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Coaching Class
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="steps-online"
                          checked={stepsIfNo.online}
                          onCheckedChange={(checked) => setStepsIfNo({ ...stepsIfNo, online: checked as boolean })}
                        />
                        <Label
                          htmlFor="steps-online"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Online Class
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="steps-other"
                          checked={stepsIfNo.other}
                          onCheckedChange={(checked) => setStepsIfNo({ ...stepsIfNo, other: checked as boolean })}
                        />
                        <Label
                          htmlFor="steps-other"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Other
                        </Label>
                      </div>
                      {stepsIfNo.other && (
                        <input
                          type="text"
                          value={stepsIfNo.otherText}
                          onChange={(e) => setStepsIfNo({ ...stepsIfNo, otherText: e.target.value })}
                          placeholder="Specify other steps"
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent ml-6"
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section 2: Parental Status - This will be continued in the next part due to length */}
          <div className="mb-6">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Section 2 – Parental Status
            </h2>

            {/* Parental Details Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                      Field
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[13px]">
                      Father
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[13px]">
                      Mother
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[13px]">
                      If no parents or both are not supportive, please give guardian details.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e8f2]">
                    <td className="px-4 py-3 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      Name
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={fatherDetails.name}
                        onChange={(e) => setFatherDetails({ ...fatherDetails, name: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={motherDetails.name}
                        onChange={(e) => setMotherDetails({ ...motherDetails, name: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={guardianDetails.name}
                        onChange={(e) => setGuardianDetails({ ...guardianDetails, name: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e8f2]">
                    <td className="px-4 py-3 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      Age
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={fatherDetails.age}
                        onChange={(e) => setFatherDetails({ ...fatherDetails, age: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={motherDetails.age}
                        onChange={(e) => setMotherDetails({ ...motherDetails, age: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={guardianDetails.age}
                        onChange={(e) => setGuardianDetails({ ...guardianDetails, age: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e8f2]">
                    <td className="px-4 py-3 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      Education
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={fatherDetails.education}
                        onChange={(e) => setFatherDetails({ ...fatherDetails, education: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={motherDetails.education}
                        onChange={(e) => setMotherDetails({ ...motherDetails, education: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={guardianDetails.education}
                        onChange={(e) => setGuardianDetails({ ...guardianDetails, education: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e8f2]">
                    <td className="px-4 py-3 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      Occupation
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={fatherDetails.occupation}
                        onChange={(e) => setFatherDetails({ ...fatherDetails, occupation: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={motherDetails.occupation}
                        onChange={(e) => setMotherDetails({ ...motherDetails, occupation: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={guardianDetails.occupation}
                        onChange={(e) => setGuardianDetails({ ...guardianDetails, occupation: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e8f2]">
                    <td className="px-4 py-3 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      No. of work days/month
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={fatherDetails.workDays}
                        onChange={(e) => setFatherDetails({ ...fatherDetails, workDays: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={motherDetails.workDays}
                        onChange={(e) => setMotherDetails({ ...motherDetails, workDays: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={guardianDetails.workDays}
                        onChange={(e) => setGuardianDetails({ ...guardianDetails, workDays: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e8f2]">
                    <td className="px-4 py-3 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      Monthly Income (₹)
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={fatherDetails.monthlyIncome}
                        onChange={(e) => setFatherDetails({ ...fatherDetails, monthlyIncome: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={motherDetails.monthlyIncome}
                        onChange={(e) => setMotherDetails({ ...motherDetails, monthlyIncome: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={guardianDetails.monthlyIncome}
                        onChange={(e) => setGuardianDetails({ ...guardianDetails, monthlyIncome: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e8f2]">
                    <td className="px-4 py-3 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      Income from Agriculture (₹)
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={fatherDetails.agricultureIncome}
                        onChange={(e) => setFatherDetails({ ...fatherDetails, agricultureIncome: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={motherDetails.agricultureIncome}
                        onChange={(e) => setMotherDetails({ ...motherDetails, agricultureIncome: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="number"
                        value={guardianDetails.agricultureIncome}
                        onChange={(e) => setGuardianDetails({ ...guardianDetails, agricultureIncome: e.target.value })}
                        className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Additional Parent/Guardian Information */}
            <div className="space-y-6 border-t border-[#e2e8f2] pt-6">
              <div>
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                  Father Condition
                </h3>
                <RadioGroup
                  value={fatherCondition}
                  onValueChange={(value) => setFatherCondition(value)}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                >
                  {[
                    { key: "givesMoney", label: "Gives Money" },
                    { key: "doesNotStay", label: "Does not stay with family" },
                    { key: "doesNotGiveMoney", label: "Does not give money" },
                    { key: "physicallyIll", label: "Physically ill" },
                    { key: "mentallyIll", label: "Mentally ill" },
                    { key: "terminallyIll", label: "Terminally ill" }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <RadioGroupItem value={item.key} id={`father-${item.key}`} />
                      <Label
                        htmlFor={`father-${item.key}`}
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                  Mother Condition
                </h3>
                <RadioGroup
                  value={motherCondition}
                  onValueChange={(value) => setMotherCondition(value)}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                >
                  {[
                    { key: "givesMoney", label: "Gives Money" },
                    { key: "doesNotStay", label: "Does not stay with family" },
                    { key: "doesNotGiveMoney", label: "Does not give money" },
                    { key: "physicallyIll", label: "Physically ill" },
                    { key: "mentallyIll", label: "Mentally ill" },
                    { key: "terminallyIll", label: "Terminally ill" }
                  ].map((item) => (
                    <div key={item.key} className="flex items-center space-x-2">
                      <RadioGroupItem value={item.key} id={`mother-${item.key}`} />
                      <Label
                        htmlFor={`mother-${item.key}`}
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                  Multiple marriages in the family.
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Father
                    </Label>
                    <RadioGroup
                      value={multipleMarriages.father}
                      onValueChange={(value) => setMultipleMarriages({ ...multipleMarriages, father: value })}
                      className="flex gap-6 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="multipleMarriagesFather-yes" />
                        <Label
                          htmlFor="multipleMarriagesFather-yes"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="multipleMarriagesFather-no" />
                        <Label
                          htmlFor="multipleMarriagesFather-no"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                    {multipleMarriages.father === "yes" && (
                      <div className="mt-4">
                        <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                          How does it affect the candidate?
                        </label>
                        <textarea
                          value={multipleMarriages.fatherImpact}
                          onChange={(e) => setMultipleMarriages({ ...multipleMarriages, fatherImpact: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                          placeholder="Describe the impact"
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Mother
                    </Label>
                    <RadioGroup
                      value={multipleMarriages.mother}
                      onValueChange={(value) => setMultipleMarriages({ ...multipleMarriages, mother: value })}
                      className="flex gap-6 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="multipleMarriagesMother-yes" />
                        <Label
                          htmlFor="multipleMarriagesMother-yes"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="multipleMarriagesMother-no" />
                        <Label
                          htmlFor="multipleMarriagesMother-no"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                    {multipleMarriages.mother === "yes" && (
                      <div className="mt-4">
                        <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                          How does it affect the candidate?
                        </label>
                        <textarea
                          value={multipleMarriages.motherImpact}
                          onChange={(e) => setMultipleMarriages({ ...multipleMarriages, motherImpact: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                          placeholder="Describe the impact"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Any Disabled Person in the Family
                </Label>
                <RadioGroup
                  value={disabledPerson}
                  onValueChange={(value) => setDisabledPerson(value)}
                  className="flex gap-6 mt-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="disabledPerson-yes" />
                    <Label
                      htmlFor="disabledPerson-yes"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="disabledPerson-no" />
                    <Label
                      htmlFor="disabledPerson-no"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Any socio-economic crisis?
                </label>
                <textarea
                  value={socioEconomicCrisis}
                  onChange={(e) => setSocioEconomicCrisis(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                  placeholder="Describe any socio-economic crisis"
                />
              </div>

              <div>
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                  Alcoholism in the family
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Father
                    </Label>
                    <RadioGroup
                      value={alcoholism.father}
                      onValueChange={(value) => setAlcoholism({ ...alcoholism, father: value })}
                      className="flex gap-6 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="alcoholismFather-yes" />
                        <Label
                          htmlFor="alcoholismFather-yes"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="alcoholismFather-no" />
                        <Label
                          htmlFor="alcoholismFather-no"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                    {alcoholism.father === "yes" && (
                      <div className="mt-4">
                        <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                          Father Severity
                        </label>
                        <select
                          value={alcoholism.fatherSeverity}
                          onChange={(e) => setAlcoholism({ ...alcoholism, fatherSeverity: e.target.value })}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        >
                          <option value="">Select severity</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Mother
                    </Label>
                    <RadioGroup
                      value={alcoholism.mother}
                      onValueChange={(value) => setAlcoholism({ ...alcoholism, mother: value })}
                      className="flex gap-6 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="alcoholismMother-yes" />
                        <Label
                          htmlFor="alcoholismMother-yes"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="alcoholismMother-no" />
                        <Label
                          htmlFor="alcoholismMother-no"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                    {alcoholism.mother === "yes" && (
                      <div className="mt-4">
                        <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                          Mother Severity
                        </label>
                        <select
                          value={alcoholism.motherSeverity}
                          onChange={(e) => setAlcoholism({ ...alcoholism, motherSeverity: e.target.value })}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        >
                          <option value="">Select severity</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                    Impact on
                  </label>
                  <div className="flex flex-wrap gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setAlcoholism({ ...alcoholism, impactHealth: !alcoholism.impactHealth })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          alcoholism.impactHealth
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {alcoholism.impactHealth && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Health
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setAlcoholism({ ...alcoholism, impactQuarrel: !alcoholism.impactQuarrel })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          alcoholism.impactQuarrel
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {alcoholism.impactQuarrel && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Quarrel
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setAlcoholism({ ...alcoholism, impactFinances: !alcoholism.impactFinances })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          alcoholism.impactFinances
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {alcoholism.impactFinances && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Finances
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Any Large Expenses
                  </label>
                  <input
                    type="text"
                    value={largeExpenses}
                    onChange={(e) => setLargeExpenses(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Description"
                  />
                </div>

                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={largeExpensesAmount}
                    onChange={(e) => setLargeExpensesAmount(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Enter amount"
                  />
                </div>
              </div>

              <div>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Any Loans
                </Label>
                <RadioGroup
                  value={hasLoans}
                  onValueChange={(value) => setHasLoans(value)}
                  className="flex gap-6 mt-3 mb-3"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="hasLoans-yes" />
                    <Label
                      htmlFor="hasLoans-yes"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="hasLoans-no" />
                    <Label
                      htmlFor="hasLoans-no"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
                {hasLoans === "yes" && (
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Loan amount (₹)"
                  />
                )}
              </div>
            </div>
          </div>
            </>
          )}

          {/* Step 2: Family Network & Residence (Sections 3-4) */}
          {currentStep === 2 && (
            <>
          {/* Section 3: Siblings / Family Members */}
          <div className="mb-6">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Section 3 – Siblings / Family Members
            </h2>

            {/* Siblings Table */}
            <div className="overflow-x-auto mb-4">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px] w-[180px]">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                      Relation
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                      Age
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px] leading-[1.3]">
                      Current Status / Education / Institution / Occupation
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                      Fees (₹)
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                      Income (₹)
                    </th>
                    <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {siblings.map((sibling, index) => (
                    <tr key={sibling.id} className="border-b border-[#e2e8f2]">
                      <td className="px-4 py-3 w-[180px]">
                        <input
                          type="text"
                          value={sibling.name}
                          onChange={(e) => {
                            const updated = [...siblings];
                            updated[index].name = e.target.value;
                            setSiblings(updated);
                          }}
                          className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={sibling.relation}
                          onChange={(e) => {
                            const updated = [...siblings];
                            updated[index].relation = e.target.value;
                            setSiblings(updated);
                          }}
                          className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={sibling.age}
                          onChange={(e) => {
                            const updated = [...siblings];
                            updated[index].age = e.target.value;
                            setSiblings(updated);
                          }}
                          className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="text"
                          value={sibling.education}
                          onChange={(e) => {
                            const updated = [...siblings];
                            updated[index].education = e.target.value;
                            setSiblings(updated);
                          }}
                          className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={sibling.fees}
                          onChange={(e) => {
                            const updated = [...siblings];
                            updated[index].fees = e.target.value;
                            setSiblings(updated);
                          }}
                          className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          value={sibling.income}
                          onChange={(e) => {
                            const updated = [...siblings];
                            updated[index].income = e.target.value;
                            setSiblings(updated);
                          }}
                          className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                        />
                      </td>
                      <td className="px-4 py-3">
                        {siblings.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeSibling(sibling.id)}
                            className="text-[#fb2c36] hover:bg-[#ffe6e6] p-2 rounded-[8px] transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              type="button"
              onClick={addSibling}
              variant="outline"
              className="mb-6 h-[40px] px-6 border-[#1a4d8f] text-[#1a4d8f] hover:bg-[#ecf4ff] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add More Row
            </Button>

            {/* Additional Fields */}
            <div className="space-y-6 border-t border-[#e2e8f2] pt-6">
              <div>
                <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                  Cattle Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => setCattleDetails({ ...cattleDetails, cows: !cattleDetails.cows })}
                      className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                        cattleDetails.cows
                          ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                          : 'bg-white border-[#aeaeae]'
                      }`}
                    >
                      {cattleDetails.cows && (
                        <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                          <path d={checkmarkSvg.p2e525300} fill="white" />
                        </svg>
                      )}
                    </button>
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Cows
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => setCattleDetails({ ...cattleDetails, buffaloes: !cattleDetails.buffaloes })}
                      className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                        cattleDetails.buffaloes
                          ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                          : 'bg-white border-[#aeaeae]'
                      }`}
                    >
                      {cattleDetails.buffaloes && (
                        <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                          <path d={checkmarkSvg.p2e525300} fill="white" />
                        </svg>
                      )}
                    </button>
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Buffaloes
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => setCattleDetails({ ...cattleDetails, goats: !cattleDetails.goats })}
                      className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                        cattleDetails.goats
                          ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                          : 'bg-white border-[#aeaeae]'
                      }`}
                    >
                      {cattleDetails.goats && (
                        <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                          <path d={checkmarkSvg.p2e525300} fill="white" />
                        </svg>
                      )}
                    </button>
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Goats
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => setCattleDetails({ ...cattleDetails, other: !cattleDetails.other })}
                      className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                        cattleDetails.other
                          ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                          : 'bg-white border-[#aeaeae]'
                      }`}
                    >
                      {cattleDetails.other && (
                        <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                          <path d={checkmarkSvg.p2e525300} fill="white" />
                        </svg>
                      )}
                    </button>
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Other
                    </span>
                  </label>
                </div>
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Income of Cattle Holdings (₹)
                  </label>
                  <input
                    type="number"
                    value={cattleDetails.income}
                    onChange={(e) => setCattleDetails({ ...cattleDetails, income: e.target.value })}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Enter income"
                  />
                </div>
              </div>

              <div>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Own Agriculture Land
                </Label>
                <RadioGroup
                  value={ownAgricultureLand}
                  onValueChange={(value) => setOwnAgricultureLand(value)}
                  className="flex gap-6 mt-3 mb-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="ownAgricultureLand-yes" />
                    <Label
                      htmlFor="ownAgricultureLand-yes"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="ownAgricultureLand-no" />
                    <Label
                      htmlFor="ownAgricultureLand-no"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
                {ownAgricultureLand === "yes" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        Area
                      </label>
                      <input
                        type="text"
                        value={agricultureArea}
                        onChange={(e) => setAgricultureArea(e.target.value)}
                        className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter area"
                      />
                    </div>
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        Income From Land (₹)
                      </label>
                      <input
                        type="number"
                        value={agricultureIncome}
                        onChange={(e) => setAgricultureIncome(e.target.value)}
                        className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter income"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Income From Rent (₹)
                  </label>
                  <input
                    type="number"
                    value={rentIncome}
                    onChange={(e) => setRentIncome(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Enter rent income"
                  />
                </div>

                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Any Other Source of Income
                  </label>
                  <input
                    type="text"
                    value={otherIncome}
                    onChange={(e) => setOtherIncome(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Describe other income"
                  />
                </div>
              </div>

              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Total Monthly Family Income (₹)
                </label>
                <input
                  type="number"
                  value={totalMonthlyIncome}
                  onChange={(e) => setTotalMonthlyIncome(e.target.value)}
                  className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  placeholder="Enter total monthly income"
                />
              </div>

              <div>
                <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                  Does your extended family support you?
                </Label>
                <RadioGroup
                  value={extendedFamilySupport}
                  onValueChange={(value) => setExtendedFamilySupport(value)}
                  className="flex gap-6 mt-3 mb-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="extendedFamilySupport-yes" />
                    <Label
                      htmlFor="extendedFamilySupport-yes"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      Yes
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="extendedFamilySupport-no" />
                    <Label
                      htmlFor="extendedFamilySupport-no"
                      className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                    >
                      No
                    </Label>
                  </div>
                </RadioGroup>
                {extendedFamilySupport === "yes" && (
                  <>
                    <div className="mb-4">
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                        Who?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={extendedFamilySupportType.nana}
                            onCheckedChange={(checked) =>
                              setExtendedFamilySupportType({
                                ...extendedFamilySupportType,
                                nana: checked as boolean
                              })
                            }
                            className="size-[18px] rounded-[3px] border-[#aeaeae] data-[state=checked]:bg-[#1a4d8f] data-[state=checked]:border-[#1a4d8f]"
                          />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            Nana
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={extendedFamilySupportType.dada}
                            onCheckedChange={(checked) =>
                              setExtendedFamilySupportType({
                                ...extendedFamilySupportType,
                                dada: checked as boolean
                              })
                            }
                            className="size-[18px] rounded-[3px] border-[#aeaeae] data-[state=checked]:bg-[#1a4d8f] data-[state=checked]:border-[#1a4d8f]"
                          />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            Dada
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={extendedFamilySupportType.chacha}
                            onCheckedChange={(checked) =>
                              setExtendedFamilySupportType({
                                ...extendedFamilySupportType,
                                chacha: checked as boolean
                              })
                            }
                            className="size-[18px] rounded-[3px] border-[#aeaeae] data-[state=checked]:bg-[#1a4d8f] data-[state=checked]:border-[#1a4d8f]"
                          />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            Chacha
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={extendedFamilySupportType.mama}
                            onCheckedChange={(checked) =>
                              setExtendedFamilySupportType({
                                ...extendedFamilySupportType,
                                mama: checked as boolean
                              })
                            }
                            className="size-[18px] rounded-[3px] border-[#aeaeae] data-[state=checked]:bg-[#1a4d8f] data-[state=checked]:border-[#1a4d8f]"
                          />
                          <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                            Mama
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        Support amount (₹)
                      </label>
                      <input
                        type="number"
                        value={extendedFamilySupportAmount}
                        onChange={(e) => setExtendedFamilySupportAmount(e.target.value)}
                        className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter support amount"
                      />
                    </div>

                    {/* Extended Family Details Table */}
                    <div>
                      <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[16px] mb-4 font-bold">
                        Extended Family Details
                      </h3>
                      <div className="overflow-x-auto mb-4">
                        <table className="w-full min-w-[800px]">
                          <thead>
                            <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                              <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px] w-[180px]">
                                Name
                              </th>
                              <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                                Relation
                              </th>
                              <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                                Age
                              </th>
                              <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                                Education
                              </th>
                              <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                                Occupation
                              </th>
                              <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                                Income (₹)
                              </th>
                              <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {extendedFamily.map((member, index) => (
                              <tr key={member.id} className="border-b border-[#e2e8f2]">
                                <td className="px-4 py-3 w-[180px]">
                                  <input
                                    type="text"
                                    value={member.name}
                                    onChange={(e) => {
                                      const updated = [...extendedFamily];
                                      updated[index].name = e.target.value;
                                      setExtendedFamily(updated);
                                    }}
                                    className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="text"
                                    value={member.relation}
                                    onChange={(e) => {
                                      const updated = [...extendedFamily];
                                      updated[index].relation = e.target.value;
                                      setExtendedFamily(updated);
                                    }}
                                    className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    value={member.age}
                                    onChange={(e) => {
                                      const updated = [...extendedFamily];
                                      updated[index].age = e.target.value;
                                      setExtendedFamily(updated);
                                    }}
                                    className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="text"
                                    value={member.education}
                                    onChange={(e) => {
                                      const updated = [...extendedFamily];
                                      updated[index].education = e.target.value;
                                      setExtendedFamily(updated);
                                    }}
                                    className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="text"
                                    value={member.occupation}
                                    onChange={(e) => {
                                      const updated = [...extendedFamily];
                                      updated[index].occupation = e.target.value;
                                      setExtendedFamily(updated);
                                    }}
                                    className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  <input
                                    type="number"
                                    value={member.income}
                                    onChange={(e) => {
                                      const updated = [...extendedFamily];
                                      updated[index].income = e.target.value;
                                      setExtendedFamily(updated);
                                    }}
                                    className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                                  />
                                </td>
                                <td className="px-4 py-3">
                                  {extendedFamily.length > 1 && (
                                    <button
                                      type="button"
                                      onClick={() => removeExtendedFamilyMember(member.id)}
                                      className="text-[#fb2c36] hover:bg-[#ffe6e6] p-2 rounded-[8px] transition-colors"
                                    >
                                      <X className="w-4 h-4" />
                                    </button>
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <Button
                        type="button"
                        onClick={addExtendedFamilyMember}
                        variant="outline"
                        className="h-[40px] px-6 border-[#1a4d8f] text-[#1a4d8f] hover:bg-[#ecf4ff] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px]"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add More Row
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Section 4: House & Town Details */}
          <div className="mb-6">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Section 4 – House & Town Details
            </h2>

            {/* Current House */}
            <div className="mb-8">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Current House Information (Where you live now)
              </h3>

              <div className="space-y-6">
                {/* Residence Type */}
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Residence Type
                  </Label>
                  <RadioGroup
                    value={currentHouse.residenceType}
                    onValueChange={(value) => setCurrentHouse({ ...currentHouse, residenceType: value, rentAmount: value === "rented" ? currentHouse.rentAmount : "" })}
                    className="flex flex-wrap gap-6 mt-3 mb-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self-owned" id="currentResidenceType-self-owned" />
                      <Label
                        htmlFor="currentResidenceType-self-owned"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Self-owned
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="caretaker" id="currentResidenceType-caretaker" />
                      <Label
                        htmlFor="currentResidenceType-caretaker"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Caretaker
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rented" id="currentResidenceType-rented" />
                      <Label
                        htmlFor="currentResidenceType-rented"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Rented
                      </Label>
                    </div>
                  </RadioGroup>
                  {currentHouse.residenceType === "rented" && (
                    <div className="mt-2">
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        Rent Amount (If applicable)
                      </label>
                      <input
                        type="number"
                        value={currentHouse.rentAmount}
                        onChange={(e) => setCurrentHouse({ ...currentHouse, rentAmount: e.target.value })}
                        className="w-full md:w-1/2 h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter rent amount"
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Construction Type */}
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Construction Type
                    </Label>
                    <RadioGroup
                      value={currentHouse.houseType}
                      onValueChange={(value) => setCurrentHouse({ ...currentHouse, houseType: value })}
                      className="flex gap-6 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="kacha" id="currentHouseType-kacha" />
                        <Label
                          htmlFor="currentHouseType-kacha"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Kacha
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pacca" id="currentHouseType-pacca" />
                        <Label
                          htmlFor="currentHouseType-pacca"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Pacca
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Area */}
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Area
                    </Label>
                    <RadioGroup
                      value={currentHouse.area}
                      onValueChange={(value) => setCurrentHouse({ ...currentHouse, area: value, areaOther: value === "other" ? currentHouse.areaOther : "" })}
                      className="grid grid-cols-2 gap-3 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50-gaj" id="currentArea-50-gaj" />
                        <Label
                          htmlFor="currentArea-50-gaj"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          50 Gaj
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100-gaj" id="currentArea-100-gaj" />
                        <Label
                          htmlFor="currentArea-100-gaj"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          100 Gaj
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="above-100" id="currentArea-above-100" />
                        <Label
                          htmlFor="currentArea-above-100"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Above 100
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="currentArea-other" />
                        <Label
                          htmlFor="currentArea-other"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Other (Specify)
                        </Label>
                      </div>
                    </RadioGroup>
                    {currentHouse.area === "other" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          value={currentHouse.areaOther}
                          onChange={(e) => setCurrentHouse({ ...currentHouse, areaOther: e.target.value })}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                          placeholder="Enter area details"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Number of Rooms */}
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Number of rooms
                  </Label>
                  <RadioGroup
                    value={currentHouse.rooms}
                    onValueChange={(value) => setCurrentHouse({ ...currentHouse, rooms: value, roomsOther: value === "other" ? currentHouse.roomsOther : "" })}
                    className="flex flex-wrap gap-6 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="currentRooms-1" />
                      <Label
                        htmlFor="currentRooms-1"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        1 Room
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="currentRooms-2" />
                      <Label
                        htmlFor="currentRooms-2"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        2 Rooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="currentRooms-3" />
                      <Label
                        htmlFor="currentRooms-3"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        3 Rooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="currentRooms-other" />
                      <Label
                        htmlFor="currentRooms-other"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                  {currentHouse.rooms === "other" && (
                    <div className="mt-3">
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        No. of Rooms:
                      </label>
                      <input
                        type="text"
                        value={currentHouse.roomsOther}
                        onChange={(e) => setCurrentHouse({ ...currentHouse, roomsOther: e.target.value })}
                        className="w-full md:w-1/2 h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter number of rooms"
                      />
                    </div>
                  )}
                </div>

                {/* Vehicles */}
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                    Vehicles Available
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, twoWheeler: !currentHouse.twoWheeler })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.twoWheeler
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.twoWheeler && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Two Wheeler
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, threeWheeler: !currentHouse.threeWheeler })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.threeWheeler
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.threeWheeler && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Three Wheeler
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, fourWheeler: !currentHouse.fourWheeler })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.fourWheeler
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.fourWheeler && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Four Wheeler
                      </span>
                    </label>
                  </div>
                </div>

                {/* Electronic Equipment */}
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                    Electronic Equipment
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, tv: !currentHouse.tv })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.tv
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.tv && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        TV
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, refrigerator: !currentHouse.refrigerator })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.refrigerator
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.refrigerator && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Refrigerator
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, washingMachine: !currentHouse.washingMachine })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.washingMachine
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.washingMachine && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Washing Machine
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, laptop: !currentHouse.laptop })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.laptop
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.laptop && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Laptop/Desktop
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setCurrentHouse({ ...currentHouse, ac: !currentHouse.ac })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          currentHouse.ac
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {currentHouse.ac && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        A/C
                      </span>
                    </label>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Address
                  </label>
                  <textarea
                    value={currentHouse.address}
                    onChange={(e) => setCurrentHouse({ ...currentHouse, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                    placeholder="Enter full address"
                  />
                </div>
              </div>
            </div>

            {/* Village House */}
            <div className="mb-8 border-t border-[#e2e8f2] pt-8">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Village House Information (If you have a house in your village)
              </h3>

              <div className="space-y-6">
                {/* Village House Type */}
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    Village House Type
                  </Label>
                  <RadioGroup
                    value={villageHouse.residenceType}
                    onValueChange={(value) => setVillageHouse({ ...villageHouse, residenceType: value, rentAmount: value === "rented" ? villageHouse.rentAmount : "" })}
                    className="flex flex-wrap gap-6 mt-3 mb-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="self-owned" id="villageResidenceType-self-owned" />
                      <Label
                        htmlFor="villageResidenceType-self-owned"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Self-owned
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="caretaker" id="villageResidenceType-caretaker" />
                      <Label
                        htmlFor="villageResidenceType-caretaker"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Caretaker
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="rented" id="villageResidenceType-rented" />
                      <Label
                        htmlFor="villageResidenceType-rented"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Rented
                      </Label>
                    </div>
                  </RadioGroup>
                  {villageHouse.residenceType === "rented" && (
                    <div className="mt-2">
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        Rent Amount (If applicable)
                      </label>
                      <input
                        type="number"
                        value={villageHouse.rentAmount}
                        onChange={(e) => setVillageHouse({ ...villageHouse, rentAmount: e.target.value })}
                        className="w-full md:w-1/2 h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter rent amount"
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Village House Type */}
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Village House Type (If you have a house in your village)
                    </Label>
                    <RadioGroup
                      value={villageHouse.houseType}
                      onValueChange={(value) => setVillageHouse({ ...villageHouse, houseType: value })}
                      className="flex gap-6 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="kacha" id="villageHouseType-kacha" />
                        <Label
                          htmlFor="villageHouseType-kacha"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Kacha
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pacca" id="villageHouseType-pacca" />
                        <Label
                          htmlFor="villageHouseType-pacca"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Pacca
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Area of Village House */}
                  <div>
                    <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Area of Village House
                    </Label>
                    <RadioGroup
                      value={villageHouse.area}
                      onValueChange={(value) => setVillageHouse({ ...villageHouse, area: value, areaOther: value === "other" ? villageHouse.areaOther : "" })}
                      className="grid grid-cols-2 gap-3 mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50-gaj" id="villageArea-50-gaj" />
                        <Label
                          htmlFor="villageArea-50-gaj"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          50 Gaj
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100-gaj" id="villageArea-100-gaj" />
                        <Label
                          htmlFor="villageArea-100-gaj"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          100 Gaj
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="above-100" id="villageArea-above-100" />
                        <Label
                          htmlFor="villageArea-above-100"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Above 100
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="villageArea-other" />
                        <Label
                          htmlFor="villageArea-other"
                          className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                        >
                          Other (Specify)
                        </Label>
                      </div>
                    </RadioGroup>
                    {villageHouse.area === "other" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          value={villageHouse.areaOther}
                          onChange={(e) => setVillageHouse({ ...villageHouse, areaOther: e.target.value })}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                          placeholder="Enter area details"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Number of Rooms */}
                <div>
                  <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                    No. of Rooms in Village House
                  </Label>
                  <RadioGroup
                    value={villageHouse.rooms}
                    onValueChange={(value) => setVillageHouse({ ...villageHouse, rooms: value, roomsOther: value === "other" ? villageHouse.roomsOther : "" })}
                    className="flex flex-wrap gap-6 mt-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="villageRooms-1" />
                      <Label
                        htmlFor="villageRooms-1"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        1 Room
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2" id="villageRooms-2" />
                      <Label
                        htmlFor="villageRooms-2"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        2 Rooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="villageRooms-3" />
                      <Label
                        htmlFor="villageRooms-3"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        3 Rooms
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="villageRooms-other" />
                      <Label
                        htmlFor="villageRooms-other"
                        className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer"
                      >
                        Other
                      </Label>
                    </div>
                  </RadioGroup>
                  {villageHouse.rooms === "other" && (
                    <div className="mt-3">
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        No. of Rooms:
                      </label>
                      <input
                        type="text"
                        value={villageHouse.roomsOther}
                        onChange={(e) => setVillageHouse({ ...villageHouse, roomsOther: e.target.value })}
                        className="w-full md:w-1/2 h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter number of rooms"
                      />
                    </div>
                  )}
                </div>

                {/* Vehicles */}
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                    Vehicles Available in Village House (If any)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, twoWheeler: !villageHouse.twoWheeler })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.twoWheeler
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.twoWheeler && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Two Wheeler
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, threeWheeler: !villageHouse.threeWheeler })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.threeWheeler
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.threeWheeler && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Three Wheeler
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, fourWheeler: !villageHouse.fourWheeler })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.fourWheeler
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.fourWheeler && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Four Wheeler
                      </span>
                    </label>
                  </div>
                </div>

                {/* Electronic Equipment */}
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                    Electronic Equipment in Village House
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, tv: !villageHouse.tv })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.tv
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.tv && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        TV
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, refrigerator: !villageHouse.refrigerator })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.refrigerator
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.refrigerator && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Refrigerator
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, washingMachine: !villageHouse.washingMachine })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.washingMachine
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.washingMachine && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Washing Machine
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, laptop: !villageHouse.laptop })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.laptop
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.laptop && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Laptop/Desktop
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setVillageHouse({ ...villageHouse, ac: !villageHouse.ac })}
                        className={`size-[16px] rounded-[3px] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1 ${
                          villageHouse.ac
                            ? 'bg-[#1a4d8f] border-[#1a4d8f]'
                            : 'bg-white border-[#aeaeae]'
                        }`}
                      >
                        {villageHouse.ac && (
                          <svg className="w-[10.5px] h-[7px]" fill="none" viewBox="0 0 11 7">
                            <path d={checkmarkSvg.p2e525300} fill="white" />
                          </svg>
                        )}
                      </button>
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        A/C
                      </span>
                    </label>
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Address
                  </label>
                  <textarea
                    value={villageHouse.address}
                    onChange={(e) => setVillageHouse({ ...villageHouse, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                    placeholder="Enter full address"
                  />
                </div>
              </div>
            </div>

            {/* Important Contacts */}
            <div className="border-t border-[#e2e8f2] pt-8">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Important Contacts
              </h3>

              {/* Neighbour and Landlord fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Neighbour */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Neighbour's Name
                    </label>
                    <input
                      type="text"
                      value={neighbour.name}
                      onChange={(e) => setNeighbour({ ...neighbour, name: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Neighbour's Contact No
                    </label>
                    <input
                      type="tel"
                      value={neighbour.contact}
                      onChange={(e) => setNeighbour({ ...neighbour, contact: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter contact number"
                    />
                  </div>
                </div>

                {/* Landlord */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Landlord's Name (if applicable)
                    </label>
                    <input
                      type="text"
                      value={landlord.name}
                      onChange={(e) => setLandlord({ ...landlord, name: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Landlord's Contact No (if applicable)
                    </label>
                    <input
                      type="tel"
                      value={landlord.contact}
                      onChange={(e) => setLandlord({ ...landlord, contact: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter contact number"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Pradhan or any other head of the village */}
                <div className="space-y-4">
                  <h4 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[15px]">
                    Pradhan or any other head of the village
                  </h4>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={pradhan.name}
                      onChange={(e) => setPradhan({ ...pradhan, name: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      WhatsApp No
                    </label>
                    <input
                      type="tel"
                      value={pradhan.phone}
                      onChange={(e) => setPradhan({ ...pradhan, phone: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter WhatsApp number"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Email ID
                    </label>
                    <input
                      type="email"
                      value={pradhan.email}
                      onChange={(e) => setPradhan({ ...pradhan, email: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                {/* School Principal */}
                <div className="space-y-4">
                  <h4 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[15px]">
                    School Principal
                  </h4>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={principal.name}
                      onChange={(e) => setPrincipal({ ...principal, name: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      WhatsApp No
                    </label>
                    <input
                      type="tel"
                      value={principal.phone}
                      onChange={(e) => setPrincipal({ ...principal, phone: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter WhatsApp number"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Email ID
                    </label>
                    <input
                      type="email"
                      value={principal.email}
                      onChange={(e) => setPrincipal({ ...principal, email: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                {/* School Teacher */}
                <div className="space-y-4">
                  <h4 className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[15px]">
                    School Teacher
                  </h4>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={teacher.name}
                      onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      WhatsApp No
                    </label>
                    <input
                      type="tel"
                      value={teacher.phone}
                      onChange={(e) => setTeacher({ ...teacher, phone: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter WhatsApp number"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                      Email ID
                    </label>
                    <input
                      type="email"
                      value={teacher.email}
                      onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </>
          )}

          {/* Step 3: Academic Interest (Section 5) */}
          {currentStep === 3 && (
            <>
          {/* Section 5: Course of Interest */}
          <div className="mb-6">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Section 5 – Course of Interest
            </h2>

            {/* Course Interest */}
            <div className="mb-8">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Course of interest to study (in the order of preference: most to least)
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className="bg-[#f6f8fc] border-b border-[#e2e8f2]">
                      <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px] w-[80px]">
                        Rank
                      </th>
                      <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                        Course
                      </th>
                      <th className="px-4 py-3 text-left font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[13px]">
                        Specialization
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseInterests.map((interest, index) => (
                      <tr key={interest.id} className="border-b border-[#e2e8f2]">
                        <td className="px-4 py-3">
                          <div className="w-[50px] h-[36px] flex items-center justify-center bg-[#f6f8fc] rounded-[8px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[#1a4d8f] text-[14px]">
                            {interest.rank}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={interest.course}
                            onChange={(e) => {
                              const updated = [...courseInterests];
                              updated[index].course = e.target.value;
                              setCourseInterests(updated);
                            }}
                            className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                            placeholder="Enter course name"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={interest.specialization}
                            onChange={(e) => {
                              const updated = [...courseInterests];
                              updated[index].specialization = e.target.value;
                              setCourseInterests(updated);
                            }}
                            className="w-full h-[36px] px-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[13px] text-[#4d4b48] focus:outline-none focus:ring-1 focus:ring-[#1a4d8f] focus:border-transparent"
                            placeholder="Enter specialization"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Motivation & Additional Questions */}
            <div className="space-y-6 border-t border-[#e2e8f2] pt-6">
              {/* What motivated you to pursue this course? */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  What motivated you to pursue this course?
                </label>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <Checkbox
                      checked={motivation.personalInterest}
                      onCheckedChange={(checked) => setMotivation({ ...motivation, personalInterest: checked as boolean })}
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Personal interest
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <Checkbox
                      checked={motivation.careerProspects}
                      onCheckedChange={(checked) => setMotivation({ ...motivation, careerProspects: checked as boolean })}
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Career prospects
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <Checkbox
                      checked={motivation.familyInfluence}
                      onCheckedChange={(checked) => setMotivation({ ...motivation, familyInfluence: checked as boolean })}
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Family influence
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <Checkbox
                      checked={motivation.scholarship}
                      onCheckedChange={(checked) => setMotivation({ ...motivation, scholarship: checked as boolean })}
                    />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Scholarship opportunity
                    </span>
                  </Label>
                </div>
              </div>

              {/* Do you need more information about the course before making a final decision? */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  Do you need more information about the course before making a final decision?
                </label>
                <RadioGroup value={needMoreInfoBeforeDecision} onValueChange={setNeedMoreInfoBeforeDecision} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                </RadioGroup>
                <p className="mt-2 font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b7280] text-[13px]">
                  If Yes (Our Counsellors shall explain it in later round)
                </p>
              </div>

              {/* Are you passionate about this field of study? */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  Are you passionate about this field of study?
                </label>
                <RadioGroup value={passionateAboutField} onValueChange={setPassionateAboutField} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Have you applied for this course anywhere else? */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  Have you applied for this course anywhere else?
                </label>
                <RadioGroup value={appliedElsewhere} onValueChange={setAppliedElsewhere} className="flex flex-wrap gap-x-6 gap-y-3 mb-4">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                </RadioGroup>
                {appliedElsewhere === "yes" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        Institute Name
                      </label>
                      <input
                        type="text"
                        value={instituteDetails.name}
                        onChange={(e) => setInstituteDetails({ ...instituteDetails, name: e.target.value })}
                        className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter institute name"
                      />
                    </div>
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                        Fee Structure (₹)
                      </label>
                      <input
                        type="text"
                        value={instituteDetails.fee}
                        onChange={(e) => setInstituteDetails({ ...instituteDetails, fee: e.target.value })}
                        className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                        placeholder="Enter fee structure"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* If applied for */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  If applied for
                </label>
                <RadioGroup value={examAttempts} onValueChange={setExamAttempts} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="cuet" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      CUET
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="nda" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      NDA
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="jee" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      JEE
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="neet" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      NEET
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="others" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Others
                    </span>
                  </Label>
                </RadioGroup>
                {examAttempts === "others" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={examAttemptsOther}
                      onChange={(e) => setExamAttemptsOther(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Specify other exams"
                    />
                  </div>
                )}
              </div>

              {/* If you get selected, will you be able to attend the college regularly? */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  If you get selected, will you be able to attend the college regularly?
                </label>
                <RadioGroup value={attendRegularly} onValueChange={setAttendRegularly} className="flex flex-wrap gap-x-6 gap-y-3 mb-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                </RadioGroup>
                {attendRegularly === "no" && (
                  <div>
                    <RadioGroup value={attendReasons} onValueChange={setAttendReasons} className="flex flex-wrap gap-x-6 gap-y-3">
                      <Label className="flex items-center gap-2.5 cursor-pointer">
                        <RadioGroupItem value="upsc" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          UPSC Preparation
                        </span>
                      </Label>
                      <Label className="flex items-center gap-2.5 cursor-pointer">
                        <RadioGroupItem value="banking" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          Banking
                        </span>
                      </Label>
                      <Label className="flex items-center gap-2.5 cursor-pointer">
                        <RadioGroupItem value="work" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          Work to feed the family
                        </span>
                      </Label>
                      <Label className="flex items-center gap-2.5 cursor-pointer">
                        <RadioGroupItem value="other" />
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                          Other
                        </span>
                      </Label>
                    </RadioGroup>
                    {attendReasons === "other" && (
                      <div className="mt-3">
                        <input
                          type="text"
                          value={attendReasonsOther}
                          onChange={(e) => setAttendReasonsOther(e.target.value)}
                          className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                          placeholder="Please specify"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Plans for marriage or major life events? */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  Do you have any plans for marriage or any other major life events that might affect your studies?
                </label>
                <RadioGroup value={marriagePlans} onValueChange={setMarriagePlans} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="maybe" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Maybe
                    </span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Will you drop out of the course if faced with difficulties? */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  Will you drop out of the course if faced with difficulties?
                </label>
                <RadioGroup value={dropoutRisk} onValueChange={setDropoutRisk} className="flex flex-wrap gap-x-6 gap-y-3 mb-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                </RadioGroup>
                <Label className="flex items-center gap-2.5 cursor-pointer">
                  <Checkbox
                    checked={relocatable}
                    onCheckedChange={(checked) => setRelocatable(checked as boolean)}
                  />
                  <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                    I am willing to relocate if needed to continue my education
                  </span>
                </Label>
              </div>

              {/* Open to alternative courses? */}
              <div>
                <div className="space-y-3 mb-3">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                    If the seats in the current course are limited and we are unable to offer you admission to the course you applied for, we would like to offer you the opportunity to consider alternative courses that may be of interest to you. Would you be open to exploring other course options that we offer?
                  </p>
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                    यदि हमारी सीट इस कोर्स के लिए लिमिटेड हुई और हम आपको इस कोर्स में एडमिशन न दे पाए। हालाँकि, हम आपको दूसरे कोर्स पर विचार करने का अवसर प्रदान करना चाहेंगे जो आपकी रुचि के हो सकते हैं।
                  </p>
                </div>
                <RadioGroup value={openToAlternatives} onValueChange={setOpenToAlternatives} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Parent's view */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  How do you see your child's future? Will you help them to study & grow?
                </label>
                <textarea
                  value={parentView}
                  onChange={(e) => setParentView(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                  placeholder="Enter parent's/guardian's perspective on the child's education and future"
                />
              </div>
            </div>

            {/* Signatures Section */}
            <div className="border-t border-[#e2e8f2] pt-6 mt-8">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Signatures
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Candidate Signature */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Candidate Signature
                    </label>
                    <input
                      type="text"
                      value={candidateSignature}
                      onChange={(e) => setCandidateSignature(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter candidate signature"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={candidateSignatureDate}
                      onChange={(e) => setCandidateSignatureDate(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={candidateSignatureLocation}
                      onChange={(e) => setCandidateSignatureLocation(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter location"
                    />
                  </div>
                </div>

                {/* Parent/Guardian Signature */}
                <div className="space-y-4">
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Parent/Guardian Signature
                    </label>
                    <input
                      type="text"
                      value={parentSignature}
                      onChange={(e) => setParentSignature(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter parent/guardian signature"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={parentSignatureDate}
                      onChange={(e) => setParentSignatureDate(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      value={parentSignatureLocation}
                      onChange={(e) => setParentSignatureLocation(e.target.value)}
                      className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      placeholder="Enter location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
            </>
          )}

          {/* Step 4: Financial & Psychology (Section 6) */}
          {currentStep === 4 && (
            <>
          {/* Section 6: Financial & Logistics */}
          <div className="mb-6">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Section 6 – Financial & Logistics
            </h2>

            {/* Financial & Logistics Questions */}
            <div className="space-y-6 mb-8">
              {/* Tuition & Fee Understanding */}
              <div>
                <div className="bg-[#f6f8fc] border border-[#e2e8f2] rounded-[12px] p-4 mb-4">
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed mb-3">
                    The Tuition fee is 100% waived if you get admission here. However, you will have to pay additional charges such as exam fees, admission fees, uniform charges, or security charges which may be at least INR 15,000-40,000 only for the first year depending on the course and college. Post that, every year you will have to just pay the exam fee or any fest charges in the college. Are you okay with it?
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed">
                    (If I take an example, let's say you want to pursue a BTech. The fees for the entire course are more than 8,00,000 rupees. However, if you get selected through the Dor Scholarship, you'll only need to pay 20,000-40,000 in the first year. After that, for the 2nd, 3rd, and 4th years, you'll need to pay 15,000-20,000 every year.)
                  </p>
                </div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  Will you be able to manage/pay this amount?
                </label>
                <RadioGroup value={understandsPartialFee} onValueChange={setUnderstandsPartialFee} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="yes" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Yes
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="no" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      No
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="maybe" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      May Be
                    </span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Transportation */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  Transportation charges will be extra. How will you manage transportation to and from the college? Financially as well which mode of transport will you use?
                </label>
                <RadioGroup value={transportMode} onValueChange={setTransportMode} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="publicTransport" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Public Transport
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="privateVehicle" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Private Vehicle
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="collegeTransport" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      College Transport
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="walking" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Walking
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="familySupport" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Family Support
                    </span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Accommodation (For students outside Dehradun) */}
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                  If you are from outside Dehradun, where will you stay- will you be able to cover living expenses?
                </label>
                <RadioGroup value={accommodationPlans} onValueChange={setAccommodationPlans} className="flex flex-wrap gap-x-6 gap-y-3">
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="specifyAccommodation" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Specify accommodation plans
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="financiallyIndependent" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Financially Independent
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="financialSupport" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Financial support from family
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2.5 cursor-pointer">
                    <RadioGroupItem value="relativeSupport" />
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      Relative Support
                    </span>
                  </Label>
                </RadioGroup>
              </div>
            </div>

            {/* Psychological Section */}
            <div className="border-t border-[#e2e8f2] pt-6">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Psychological Section
              </h3>

              <div className="space-y-6">
                {/* Personal circumstances impact */}
                <div>
                  <div className="space-y-1 mb-2">
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Are there any personal circumstances or experiences that have significantly impacted your emotional well-being or academic performance?
                    </label>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      क्या ऐसी कोई परिस्थितियाँ या अनुभव हैं जिन्होंने आपकी मानसिक स्थिति या पढ़ाई पर असर डाला हो?
                    </label>
                  </div>
                  <textarea
                    value={emotionalImpact}
                    onChange={(e) => setEmotionalImpact(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                    placeholder="Describe the circumstances and their impact"
                  />
                </div>

                {/* Have you had to work to support */}
                <div>
                  <div className="space-y-1 mb-2">
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      Have you had to work to support yourself and your family? If so, how has it influenced your academic pursuit?
                    </label>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      क्या आपको अपनी और अपने परिवार की सहायता करने के लिए काम करना पड़ा है? अगर हां, तो इसने आपकी अकादमिक करियर पर कैसे प्रभाव डाला है?
                    </label>
                  </div>
                  <textarea
                    value={workingToSupport}
                    onChange={(e) => setWorkingToSupport(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                    placeholder="Describe how work has influenced your academic journey"
                  />
                </div>

                {/* Family's financial situation */}
                <div>
                  <div className="space-y-1 mb-2">
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      What is the financial situation of your family? Any financial barriers that may impact your ability to attend college regularly?
                    </label>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      आपके परिवार की आर्थिक स्थिति कैसी है? क्या कोई आर्थिक परेशानी है जो आपको कॉलेज जाने में मुश्किल डाल सकती है?
                    </label>
                  </div>
                  <textarea
                    value={familyFinancialCondition}
                    onChange={(e) => setFamilyFinancialCondition(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                    placeholder="Describe your family's financial situation and barriers"
                  />
                </div>

                {/* Stress coping methods */}
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-3">
                    How do you deal with stress and pressure?
                  </label>
                  <div className="flex flex-wrap gap-x-6 gap-y-3">
                    <Label className="flex items-center gap-2.5 cursor-pointer">
                      <Checkbox
                        checked={stressCoping.stayOrganised}
                        onCheckedChange={(checked) => setStressCoping({ ...stressCoping, stayOrganised: checked as boolean })}
                      />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Stay organised
                      </span>
                    </Label>
                    <Label className="flex items-center gap-2.5 cursor-pointer">
                      <Checkbox
                        checked={stressCoping.seekSupport}
                        onCheckedChange={(checked) => setStressCoping({ ...stressCoping, seekSupport: checked as boolean })}
                      />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Seek Support
                      </span>
                    </Label>
                    <Label className="flex items-center gap-2.5 cursor-pointer">
                      <Checkbox
                        checked={stressCoping.manageTime}
                        onCheckedChange={(checked) => setStressCoping({ ...stressCoping, manageTime: checked as boolean })}
                      />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Manage Time Effectively
                      </span>
                    </Label>
                    <Label className="flex items-center gap-2.5 cursor-pointer">
                      <Checkbox
                        checked={stressCoping.avoidStressful}
                        onCheckedChange={(checked) => setStressCoping({ ...stressCoping, avoidStressful: checked as boolean })}
                      />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Avoid Stressful Situation
                      </span>
                    </Label>
                    <Label className="flex items-center gap-2.5 cursor-pointer">
                      <Checkbox
                        checked={stressCoping.exerciseYoga}
                        onCheckedChange={(checked) => setStressCoping({ ...stressCoping, exerciseYoga: checked as boolean })}
                      />
                      <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                        Exercise/Yoga
                      </span>
                    </Label>
                  </div>
                </div>

                {/* Family support level */}
                <div>
                  <div className="space-y-1 mb-2">
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      What level of support do you receive from your family in pursuing your education?
                    </label>
                    <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                      आपको अपनी शिक्षा प्राप्त करने में अपने परिवार से किस स्तर का सहयोग प्राप्त होता है?
                    </label>
                  </div>
                  <textarea
                    value={familySupportLevel}
                    onChange={(e) => setFamilySupportLevel(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                    placeholder="Describe the level and type of support from your family"
                  />
                </div>
              </div>
            </div>
          </div>
            </>
          )}

          {/* Step 5: Feedback & Documents (Section 7) */}
          {currentStep === 5 && (
            <>
          {/* Section 7: Overall Feedback */}
          <div className="mb-6">
            <h2
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[22px] mb-6"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Section 7 – Overall feedback of the student
            </h2>

            {/* Overall Recommendation */}
            <div className="space-y-6 mb-8">
              <div>
                <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                  Do you feel that the student should get the Dor Scholarship? If yes, reasons
                </label>
                <textarea
                  value={scholarshipRecommendation}
                  onChange={(e) => setScholarshipRecommendation(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                  placeholder="Provide your detailed recommendation and reasoning"
                />
              </div>
            </div>

            {/* Interviewer Details */}
            <div className="border-t border-[#e2e8f2] pt-6 mb-8">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Interviewer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Interviewer Name
                  </label>
                  <input
                    type="text"
                    value={interviewerName}
                    onChange={(e) => setInterviewerName(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Enter interviewer name"
                  />
                </div>
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Interviewer Signature
                  </label>
                  <input
                    type="text"
                    value={interviewerSignature}
                    onChange={(e) => setInterviewerSignature(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Enter signature"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={feedbackLocation}
                    onChange={(e) => setFeedbackLocation(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                    placeholder="Enter location"
                  />
                </div>
                <div>
                  <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    value={feedbackDate}
                    onChange={(e) => setFeedbackDate(e.target.value)}
                    className="w-full h-[44px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Document Details Checklist */}
            <div className="border-t border-[#e2e8f2] pt-6">
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#a85613] text-[18px] mb-6 font-bold">
                Document Details Checklist
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { key: 'schoolApplication', label: 'School Application Form Signed by Principal' },
                  { key: 'gpsPhoto', label: 'GPS Family Photo' },
                  { key: 'homeVideo', label: 'Home Video (2 mins)' },
                  { key: 'shopVideo', label: 'If you have a shop, we need a shop video' },
                  { key: 'aadhaar', label: 'Aadhaar Card' },
                  { key: 'rationCard', label: 'Ration Card' },
                  { key: 'marksheet9', label: '9th Marksheet' },
                  { key: 'marksheet10', label: '10th Marksheet' },
                  { key: 'marksheet11', label: '11th Marksheet' },
                  { key: 'marksheet12', label: '12th Marksheet (if Received)' },
                  { key: 'graduationMarksheet', label: 'Graduation Marksheet (if applying for Post-Graduation)' },
                  { key: 'incomeCertificate', label: 'Income Certificate' },
                  { key: 'casteCertificate', label: 'Caste Certificate' },
                  { key: 'ewsCertificate', label: 'EWS Certificate' },
                  { key: 'domicile', label: 'Domicile' },
                  { key: 'bankStatementFather', label: 'Bank statement of all earning members (Last 6 Months) Father' },
                  { key: 'bankStatementMother', label: 'Bank statement of all earning members (Last 6 Months) Mother' },
                  { key: 'bankStatementSibling1', label: 'Bank statement of all earning members (Last 6 Months) Siblings' },
                  { key: 'bankStatementSibling2', label: 'Bank statement of all earning members (Last 6 Months) Siblings 2' },
                  { key: 'bankStatementSibling3', label: 'Bank statement of all earning members (Last 6 Months) Siblings 3' },
                  { key: 'englishEssay', label: 'English Essay (Exam written in the office)' }
                ].map((doc) => (
                  <div key={doc.key} className="flex flex-col gap-3 p-4 bg-[#f6f8fc] rounded-[10px]">
                    <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
                      {doc.label}
                    </span>
                    <div className="flex gap-3">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <button
                          type="button"
                          onClick={() => setDocuments({ ...documents, [doc.key]: "yes" })}
                          className="relative w-5 h-5 bg-white rounded-full border border-[#1a4d8f] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1"
                        >
                          {documents[doc.key] === "yes" && (
                            <div className="w-[13px] h-[13px] bg-[#1a4d8f] rounded-full" />
                          )}
                        </button>
                        <span className="text-[14px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">Yes</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <button
                          type="button"
                          onClick={() => setDocuments({ ...documents, [doc.key]: "no" })}
                          className="relative w-5 h-5 bg-white rounded-full border border-[#1a4d8f] border-[0.8px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:ring-offset-1"
                        >
                          {documents[doc.key] === "no" && (
                            <div className="w-[13px] h-[13px] bg-[#1a4d8f] rounded-full" />
                          )}
                        </button>
                        <span className="text-[14px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48]">No</span>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            </>
          )}

            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#e2e8f2]">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-5 sm:px-[30px] py-3 sm:py-[13px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] border text-center ${
                  currentStep === 1
                    ? 'bg-white text-[#4d4b48] opacity-40 border-[#e2e8f2] cursor-not-allowed'
                    : 'bg-white text-[#4d4b48] border-[#e2e8f2] hover:bg-[#f6f8fc]'
                }`}
              >
                Previous
              </button>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={handleSaveDraft}
                  className="px-5 sm:px-[30px] py-3 sm:py-[13px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] bg-[#ecf4ff] text-[#1a4d8f] border border-[#1a4d8f] hover:bg-[#dce9ff] order-2 sm:order-1 text-center"
                >
                  Save as Draft
                </button>

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log('Next button clicked on step:', currentStep);
                      handleNext();
                    }}
                    className="px-5 sm:px-[30px] py-3 sm:py-[13px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] bg-[#1a4d8f] text-white hover:bg-[#153d73] text-center order-1 sm:order-2"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-5 sm:px-[30px] py-3 sm:py-[13px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] bg-[#1a4d8f] text-white hover:bg-[#153d73] text-center order-1 sm:order-2"
                  >
                    Submit Verification Form
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Submission Popup */}
      <Dialog open={showSubmissionPopup} onOpenChange={setShowSubmissionPopup}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] bg-white rounded-[12px] border border-[#e2e8f2] flex flex-col">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Submit In-Person Verification
            </DialogTitle>
            <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Please provide the final status and feedback for this verification
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4 overflow-y-auto flex-1">
            {/* Update Status */}
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Update Status <span className="text-[#ef4444]">*</span>
              </Label>
              <Select value={submissionStatus} onValueChange={setSubmissionStatus}>
                <SelectTrigger className="w-full h-[44px] rounded-[8px] border-[#e2e8f2] bg-white font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="On Hold">On Hold</SelectItem>
                  <SelectItem value="Recommend">Recommend</SelectItem>
                  <SelectItem value="Need Review">Need Review</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Comments */}
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Comments <span className="text-[#ef4444]">*</span>
              </Label>
              <textarea
                value={submissionComments}
                onChange={(e) => setSubmissionComments(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-[#e2e8f2] rounded-[8px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent resize-none"
                placeholder="Enter your comments or feedback"
              />
            </div>

            {/* Document Upload */}
            <div className="space-y-2">
              <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
                Document Upload <span className="text-[#9ca3af]">(Optional)</span>
              </Label>
              
              {submissionDocuments.length === 0 ? (
                <div
                  className={`border-2 border-dashed rounded-[10px] p-6 text-center transition-colors ${
                    dragActive ? 'border-[#1a4d8f] bg-[#ecf4ff]' : 'border-[#e2e8f2] bg-white hover:border-[#1a4d8f]'
                  }`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="submission-documents"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="submission-documents" className="cursor-pointer block">
                    <Upload className="w-8 h-8 text-[#1a4d8f] mx-auto mb-2" />
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[14px] mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99a1af] text-[12px]">
                      PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </label>
                </div>
              ) : (
                <div className="space-y-2">
                  {submissionDocuments.map((file, index) => {
                    const fileId = `${file.name}-${index}`;
                    const progress = uploadProgress[fileId];
                    const isUploading = progress !== undefined && progress < 100;
                    const isUploaded = progress === 100;
                    const preview = filePreviews[fileId];

                    return (
                      <div key={index} className="bg-white border-[1.6px] border-[#e2e8f2] rounded-[10px] p-[17.6px]">
                        {isUploading && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                                Uploading...
                              </p>
                              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px]">
                                {progress}%
                              </p>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>
                        )}

                        <div className="flex items-start gap-[16px]">
                          {/* Preview Thumbnail */}
                          <div className="shrink-0">
                            {preview ? (
                              <img 
                                src={preview} 
                                alt={file.name}
                                className="w-[80px] h-[80px] object-cover rounded-[8px] border-[0.8px] border-[#e2e8f2]"
                              />
                            ) : (
                              <div className="w-[80px] h-[80px] bg-[#f6f8fc] rounded-[8px] border-[0.8px] border-[#e2e8f2] flex items-center justify-center">
                                <FileText className="w-8 h-8 text-[#1a4d8f]"/>
                              </div>
                            )}
                          </div>

                          {/* File Info */}
                          <div className="flex-1 min-w-0 flex flex-col gap-[4px]">
                            <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] leading-[19.5px] truncate">
                              {file.name}
                            </p>
                            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99a1af] text-[11px] leading-[16.5px]">
                              {(file.size / 1024).toFixed(2)} KB
                            </p>
                            {isUploaded && (
                              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[12px] leading-[18px]">
                                ✓ Upload complete
                              </p>
                            )}
                          </div>

                          {/* Remove Button */}
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="shrink-0 rounded-[4px] p-[4px] hover:bg-[#fee] transition-colors"
                            title="Remove file"
                          >
                            <svg className="w-[20px] h-[20px]" fill="none" viewBox="0 0 20 20">
                              <path d="M8.33333 9.16667V14.1667" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M11.6667 9.16667V14.1667" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={trashIconPaths.p3bbb0f80} stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d="M2.5 5H17.5" stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                              <path d={trashIconPaths.p3ba73400} stroke="#FB2C36" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  {/* Add More Button */}
                  <div
                    className="border-2 border-dashed border-[#e2e8f2] rounded-[10px] p-4 text-center hover:border-[#1a4d8f] transition-colors cursor-pointer"
                  >
                    <input
                      type="file"
                      id="submission-documents-add"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="submission-documents-add" className="cursor-pointer block">
                      <Upload className="w-6 h-6 text-[#1a4d8f] mx-auto mb-1" />
                      <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#1a4d8f] text-[13px]">
                        Add more documents
                      </p>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-[#e2e8f2]">
            <Button
              onClick={() => setShowSubmissionPopup(false)}
              className="h-[44px] px-6 bg-white border border-[#e2e8f2] text-[#4d4b48] rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] hover:bg-[#f6f8fc]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleFinalSubmit}
              className="h-[44px] px-6 bg-[#1a4d8f] hover:bg-[#153d73] text-white rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px]"
            >
              Submit Form
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Error Popup */}
      <Dialog open={showErrorPopup} onOpenChange={setShowErrorPopup}>
        <DialogContent className="sm:max-w-md bg-white rounded-[24px] p-8">
          <DialogHeader className="items-center text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-[#fff5f5] flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-[#fb2c36]" />
              </div>
            </div>
            <DialogTitle
              className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[24px] mb-2"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Incomplete Form
            </DialogTitle>
            <DialogDescription className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[15px] mb-6">
              Please fill in all required fields (Status and Comments) before submitting the form.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowErrorPopup(false)}
            className="w-full h-[48px] bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] hover:bg-[#153d73] transition-colors"
          >
            Got it
          </Button>
        </DialogContent>
      </Dialog>

      {/* Success Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border-[#aeaeae] border-[0.8px] border-solid rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] max-w-md w-full p-8">
            {/* Success Icon */}
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 rounded-full bg-[#d1faec] flex items-center justify-center">
                <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 30 30">
                  <path d="M13.25 20.75L22.0625 11.9375L20.3125 10.1875L13.25 17.25L9.6875 13.6875L7.9375 15.4375L13.25 20.75ZM15 27.5C13.2708 27.5 11.6458 27.1719 10.125 26.5156C8.60417 25.8594 7.28125 24.9687 6.15625 23.8437C5.03125 22.7187 4.14062 21.3958 3.48437 19.875C2.82812 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82812 11.6458 3.48437 10.125C4.14062 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14062 10.125 3.48437C11.6458 2.82812 13.2708 2.5 15 2.5C16.7292 2.5 18.3542 2.82812 19.875 3.48437C21.3958 4.14062 22.7187 5.03125 23.8437 6.15625C24.9687 7.28125 25.8594 8.60417 26.5156 10.125C27.1719 11.6458 27.5 13.2708 27.5 15C27.5 16.7292 27.1719 18.3542 26.5156 19.875C25.8594 21.3958 24.9687 22.7187 23.8437 23.8437C22.7187 24.9687 21.3958 25.8594 19.875 26.5156C18.3542 27.1719 16.7292 27.5 15 27.5ZM15 25C17.7917 25 20.1562 24.0312 22.0937 22.0937C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0937 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0937C9.84375 24.0312 12.2083 25 15 25Z" fill="#10B981" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] leading-[36px] text-center mb-10"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Feedback Submitted Successfully!
            </h3>

            {/* Description */}
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22.5px] text-center mb-10">
              Your in-person verification feedback has been recorded successfully.
            </p>

            {/* Button */}
            <Button
              onClick={handleConfirm}
              className="w-full h-[50px] bg-gradient-to-b from-[#1a4d8f] to-[#153d73] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] leading-[22.5px] hover:shadow-lg transition-all"
            >
              Back to Profile
            </Button>
          </div>
        </div>
      )}

      {/* Draft Saved Popup */}
      {showDraftPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white border-[#aeaeae] border-[0.8px] border-solid rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] max-w-md w-full p-8">
            {/* Info Icon */}
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 rounded-full bg-[#ecf4ff] flex items-center justify-center">
                <svg className="w-[30px] h-[30px]" fill="none" viewBox="0 0 30 30">
                  <path d="M14 21H16V13H14V21ZM15 11C15.2833 11 15.521 10.904 15.713 10.712C15.905 10.52 16.0007 10.2827 16 10C16 9.71667 15.904 9.479 15.712 9.287C15.52 9.095 15.2827 8.99934 15 9C14.7167 9 14.479 9.096 14.287 9.288C14.095 9.48 13.9993 9.71734 14 10C14 10.2833 14.096 10.521 14.288 10.713C14.48 10.905 14.7173 11.0007 15 11ZM15 27.5C13.2708 27.5 11.6458 27.1719 10.125 26.5156C8.60417 25.8594 7.28125 24.9687 6.15625 23.8437C5.03125 22.7187 4.14062 21.3958 3.48437 19.875C2.82812 18.3542 2.5 16.7292 2.5 15C2.5 13.2708 2.82812 11.6458 3.48437 10.125C4.14062 8.60417 5.03125 7.28125 6.15625 6.15625C7.28125 5.03125 8.60417 4.14062 10.125 3.48437C11.6458 2.82812 13.2708 2.5 15 2.5C16.7292 2.5 18.3542 2.82812 19.875 3.48437C21.3958 4.14062 22.7187 5.03125 23.8437 6.15625C24.9687 7.28125 25.8594 8.60417 26.5156 10.125C27.1719 11.6458 27.5 13.2708 27.5 15C27.5 16.7292 27.1719 18.3542 26.5156 19.875C25.8594 21.3958 24.9687 22.7187 23.8437 23.8437C22.7187 24.9687 21.3958 25.8594 19.875 26.5156C18.3542 27.1719 16.7292 27.5 15 27.5ZM15 25C17.7917 25 20.1562 24.0312 22.0937 22.0937C24.0312 20.1562 25 17.7917 25 15C25 12.2083 24.0312 9.84375 22.0937 7.90625C20.1562 5.96875 17.7917 5 15 5C12.2083 5 9.84375 5.96875 7.90625 7.90625C5.96875 9.84375 5 12.2083 5 15C5 17.7917 5.96875 20.1562 7.90625 22.0937C9.84375 24.0312 12.2083 25 15 25Z" fill="#1A4D8F" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h3
              className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] leading-[36px] text-center mb-10"
              style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}
            >
              Draft Saved Successfully!
            </h3>

            {/* Description */}
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[15px] leading-[22.5px] text-center mb-10">
              Your verification form has been saved as a draft. You can continue filling it out later.
            </p>

            {/* Button */}
            <Button
              onClick={() => setShowDraftPopup(false)}
              className="w-full h-[50px] bg-gradient-to-b from-[#1a4d8f] to-[#153d73] text-white rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] leading-[22.5px] hover:shadow-lg transition-all"
            >
              Continue Editing
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
