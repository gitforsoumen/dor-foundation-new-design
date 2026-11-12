import { useState } from "react";
import StepIndicator from "./StepIndicator";
import PersonalDetailsStep from "./form-steps/PersonalDetailsStep";
import AcademicDetailsStep from "./form-steps/AcademicDetailsStep";
import FamilyFinanceStep from "./form-steps/FamilyFinanceStep";
import ReviewSubmitStep from "./form-steps/ReviewSubmitStep";
import ApplicationSuccess from "./ApplicationSuccess";
import svgPaths from "../imports/svg-b91sqlrjx2";
import { CheckCircle2, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface ApplicationFormProps {
  user: {
    name: string;
    email: string;
    mobile: string;
  };
  onBackToDashboard: () => void;
  onOpenDocuments?: () => void;
}

export interface FormData {
  // Personal Details
  email: string;
  fullName: string;
  schoolName: string;
  mobile: string;
  whatsappNumber: string;
  dob: string;
  photograph: File | null;
  casteCategory: string;
  gender: string;
  permanentAddress: string;
  permanentCity: string;
  permanentState: string;
  permanentPincode: string;
  currentAddress: string;
  currentCity: string;
  currentState: string;
  currentPincode: string;
  sameAsPermAddress: boolean;

  // Academic Details
  schoolBoard: string;
  schoolBoardOther: string;
  percentage9th: string;
  percentage10th: string;
  percentage11th: string;
  percentage12th: string;
  stream12th: string;
  stream12thOther: string;
  yearOfPassing12th: string;
  yearOfPassing12thOther: string;
  percentageGraduation: string;
  firstChoiceCourse: string;
  firstChoiceCourseOther: string;
  secondChoiceCourse: string;
  secondChoiceCourseOther: string;
  thirdChoiceCourse: string;
  thirdChoiceCourseOther: string;
  achievements: string;
  hobbiesSkills: string;
  lifeAim: string;
  otherScholarship: string;
  referenceSource: string;
  dorAlumniName: string;
  referencePersonName: string;
  referenceName: string;
  referenceOther: string;
  referenceSourceOther: string;

  // Family & Finance
  fatherName: string;
  fatherOccupation: string;
  fatherMobile: string;
  motherName: string;
  motherOccupation: string;
  motherOccupationOther: string;
  motherMobile: string;
  numberOfSiblings: string;
  numberOfSiblingsOther: string;
  siblingsOccupation: string;
  totalFamilyIncome: string;

  // Documents
  documents: {
    marksheet9th: File | null;
    marksheet10th: File | null;
    marksheet11th: File | null;
    marksheet12th: File | null;
    incomeProof: File | null;
    casteCertificate: File | null;
  };
}

export default function ApplicationForm({ user, onBackToDashboard, onOpenDocuments }: ApplicationFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDeclarationModal, setShowDeclarationModal] = useState(false);
  const [consentCheckboxes, setConsentCheckboxes] = useState({
    documents1_1: false,
    documents1_2: false,
    documents1_3: false,
    feeStructure2: false,
    feeStructure2_1: false,
    feeStructure2_2: false,
    accommodation3: false,
    homeVisit4: false,
    homeVisit4_1: false,
    homeVisit4_2: false,
    followProcess: false,
  });
  const [formData, setFormData] = useState<FormData>({
    email: user.email,
    fullName: user.name,
    schoolName: '',
    mobile: user.mobile,
    whatsappNumber: '',
    dob: '',
    photograph: null,
    casteCategory: '',
    gender: '',
    permanentAddress: '',
    permanentCity: '',
    permanentState: '',
    permanentPincode: '',
    currentAddress: '',
    currentCity: '',
    currentState: '',
    currentPincode: '',
    sameAsPermAddress: false,
    schoolBoard: '',
    schoolBoardOther: '',
    percentage9th: '',
    percentage10th: '',
    percentage11th: '',
    percentage12th: '',
    stream12th: '',
    stream12thOther: '',
    yearOfPassing12th: '',
    yearOfPassing12thOther: '',
    percentageGraduation: '',
    firstChoiceCourse: '',
    firstChoiceCourseOther: '',
    secondChoiceCourse: '',
    secondChoiceCourseOther: '',
    thirdChoiceCourse: '',
    thirdChoiceCourseOther: '',
    achievements: '',
    hobbiesSkills: '',
    lifeAim: '',
    otherScholarship: '',
    referenceSource: '',
    dorAlumniName: '',
    referencePersonName: '',
    referenceName: '',
    referenceOther: '',
    referenceSourceOther: '',
    fatherName: '',
    fatherOccupation: '',
    fatherMobile: '',
    motherName: '',
    motherOccupation: 'homemaker',
    motherOccupationOther: '',
    motherMobile: '',
    numberOfSiblings: '',
    numberOfSiblingsOther: '',
    siblingsOccupation: '',
    totalFamilyIncome: '',
    documents: {
      marksheet9th: null,
      marksheet10th: null,
      marksheet11th: null,
      marksheet12th: null,
      incomeProof: null,
      casteCertificate: null
    }
  });

  const steps = [
    { number: 1, title: 'Personal Details', status: currentStep === 1 ? 'current' as const : currentStep > 1 ? 'completed' as const : 'locked' as const },
    { number: 2, title: 'Academic Details', status: currentStep === 2 ? 'current' as const : currentStep > 2 ? 'completed' as const : 'locked' as const },
    { number: 3, title: 'Family & Finance', status: currentStep === 3 ? 'current' as const : currentStep > 3 ? 'completed' as const : 'locked' as const },
    { number: 4, title: 'Review & Submit', status: currentStep === 4 ? 'current' as const : 'locked' as const }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem('scholarshipDraft', JSON.stringify(formData));
    alert('Application saved as draft!');
  };

  const handleSubmit = () => {
    // Check if all required checkboxes are checked
    const allChecked = Object.values(consentCheckboxes).every(value => value === true);
    
    if (!allChecked) {
      setShowDeclarationModal(true);
      return;
    }
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show success page if submitted
  if (isSubmitted) {
    return <ApplicationSuccess onGoToDashboard={onBackToDashboard} onOpenDocuments={onOpenDocuments} />;
  }

  return (
    <div className="min-h-screen bg-[#f6f8fc] relative">
      {/* Gradient Background Section */}
      <div className="absolute h-[358px] left-0 top-0 w-full bg-gradient-to-r from-[#e8d5c4] to-[#c5d5e8]" />

      {/* Content Container */}
      <div className="relative">
        <div className="max-w-[1366px] mx-auto px-4 sm:px-6 md:px-8 pt-[30px] sm:pt-[40px] md:pt-[50px]">
          {/* Back Button */}
          <button
            onClick={onBackToDashboard}
            className="flex gap-[7px] items-center mb-6 sm:mb-8 font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[14px] sm:text-[16px] hover:underline"
          >
            <div className="relative shrink-0 size-[14px] sm:size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p203476e0} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                <path d="M12.6667 8H3.33333" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
              </svg>
            </div>
            <span className="hidden sm:inline">Back to Dashboard</span>
            <span className="sm:hidden">Back</span>
          </button>

          {/* Title and Who can Apply */}
          <div className="flex flex-col md:flex-row items-start md:justify-between mb-8 sm:mb-10 md:mb-12 gap-4 md:gap-6">
            <div className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic text-[0px] text-black w-full md:w-auto">
              <p className="font-['Fraunces:Bold',sans-serif] font-bold mb-1 sm:mb-2 text-[#a85613] text-[22px] sm:text-[26px] md:text-[30px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Scholarship Application Form
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px]">Complete all sections to submit your application</p>
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
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">

          {/* Step Content */}
          {currentStep === 1 && (
            <PersonalDetailsStep formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 2 && (
            <AcademicDetailsStep formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 3 && (
            <FamilyFinanceStep formData={formData} setFormData={setFormData} />
          )}
          {currentStep === 4 && (
            <ReviewSubmitStep 
              formData={formData} 
              consentCheckboxes={consentCheckboxes}
              setConsentCheckboxes={setConsentCheckboxes}
              onSubmit={handleSubmit}
            />
          )}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#e2e8f2]">
                <button
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
                    onClick={handleSaveDraft}
                    className="px-5 sm:px-[30px] py-3 sm:py-[13px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] bg-[#ecf4ff] text-[#1a4d8f] border border-[#1a4d8f] hover:bg-[#dce9ff] order-2 sm:order-1 text-center"
                  >
                    Save as Draft
                  </button>

                  {currentStep < 4 ? (
                    <button
                      onClick={handleNext}
                      className="px-5 sm:px-[30px] py-3 sm:py-[13px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] bg-[#1a4d8f] text-white hover:bg-[#153d73] text-center order-1 sm:order-2"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-5 sm:px-[30px] py-3 sm:py-[13px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[14px] sm:text-[16px] bg-[#1a4d8f] text-white hover:bg-[#153d73] text-center order-1 sm:order-2"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Declaration Modal */}
      {showDeclarationModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-[24px] p-8 max-w-md w-full shadow-2xl transform animate-in">
            <div className="text-center mb-6">
              <div className="size-16 bg-[#fff5f5] rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-[#fb2c36]" />
              </div>
              <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[24px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Declaration Required
              </h2>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[15px]">
                Please accept all the declaration statements to submit your application.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowDeclarationModal(false)}
                className="flex-1 bg-[#1a4d8f] text-white h-[48px] rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[15px] hover:bg-[#153d73] transition-all shadow-md hover:shadow-lg"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}