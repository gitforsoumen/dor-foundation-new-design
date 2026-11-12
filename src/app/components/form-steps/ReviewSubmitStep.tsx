import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import type { FormData } from "../ApplicationForm";

interface ReviewSubmitStepProps {
  formData: FormData;
  onSubmit: () => void;
  consentCheckboxes: {
    documents1_1: boolean;
    documents1_2: boolean;
    documents1_3: boolean;
    feeStructure2: boolean;
    feeStructure2_1: boolean;
    feeStructure2_2: boolean;
    accommodation3: boolean;
    homeVisit4: boolean;
    homeVisit4_1: boolean;
    homeVisit4_2: boolean;
    followProcess: boolean;
  };
  setConsentCheckboxes: (checkboxes: {
    documents1_1: boolean;
    documents1_2: boolean;
    documents1_3: boolean;
    feeStructure2: boolean;
    feeStructure2_1: boolean;
    feeStructure2_2: boolean;
    accommodation3: boolean;
    homeVisit4: boolean;
    homeVisit4_1: boolean;
    homeVisit4_2: boolean;
    followProcess: boolean;
  }) => void;
}

export default function ReviewSubmitStep({ formData, consentCheckboxes, setConsentCheckboxes }: ReviewSubmitStepProps) {
  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="border-b border-[#e2e8f2] pb-6 last:border-b-0">
      <h3 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[20px] mb-4" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {children}
      </div>
    </div>
  );

  const Field = ({ label, value, hindi }: { label: string; value: string | undefined; hindi?: string }) => (
    <div>
      <p className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#4d4b48] text-[14px] mb-1">
        {label}
      </p>
      {hindi && (
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mb-1">
          {hindi}
        </p>
      )}
      <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
        {value || '-'}
      </p>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Review & Submit
        </h2>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
          Please review all information before submitting your application
        </p>
      </div>

      {/* Review Sections */}
      <div className="space-y-6">
        <Section title="Personal Details">
          <Field label="Name of the Applicant" hindi="आवेदक का नाम" value={formData.fullName} />
          <Field label="Email ID" hindi="ईमेल आईडी" value={formData.email} />
          <Field label="Student's Mobile No" hindi="विद्यार्थी का मोबाइल नंबर" value={formData.mobile} />
          <Field label="WhatsApp Number" hindi="व्हाट्सएप नंबर" value={formData.whatsappNumber} />
          <Field label="Student's D.O.B." hindi="विद्यार्थी की जन्मतिथि" value={formData.dob} />
          <Field label="Gender" hindi="लिंग" value={formData.gender} />
          <Field label="Name of the School" hindi="विद्यालय का नाम" value={formData.schoolName} />
          <Field label="Caste Category" hindi="जाति श्रेणी" value={formData.casteCategory} />
          <Field label="Permanent Address" hindi="स्थायी पता" value={formData.permanentAddress} />
          <Field label="Current Address" hindi="वर्तमान पता" value={formData.currentAddress} />
          <div className="col-span-1 md:col-span-2">
            <Field 
              label="Photograph" 
              hindi="फोटोग्राफ"
              value={formData.photograph ? `${formData.photograph.name} (${(formData.photograph.size / 1024).toFixed(2)} KB)` : undefined} 
            />
          </div>
        </Section>

        <Section title="Academic Details">
          <Field label="School Board" hindi="स्कूल बोर्ड" value={formData.schoolBoard} />
          <Field label="Percentage of 9th Class" hindi="कक्षा 9 का प्रतिशत" value={formData.percentage9th ? `${formData.percentage9th}%` : undefined} />
          <Field label="Percentage of 10th Class" hindi="कक्षा 10 का प्रतिशत" value={formData.percentage10th ? `${formData.percentage10th}%` : undefined} />
          <Field label="Percentage of 11th Class" hindi="कक्षा 11 का प्रतिशत" value={formData.percentage11th ? `${formData.percentage11th}%` : undefined} />
          <Field label="Percentage of 12th Class" hindi="कक्षा 12 का प्रतिशत" value={formData.percentage12th ? `${formData.percentage12th}%` : undefined} />
          <Field 
            label="Stream in class 12th" 
            hindi="स्ट्रीम कक्षा 12 में" 
            value={formData.stream12th === 'other' ? formData.stream12thOther : formData.stream12th} 
          />
          <Field 
            label="Year of Passing class 12th" 
            hindi="12वीं पास करने का साल" 
            value={formData.yearOfPassing12th === 'other' ? formData.yearOfPassing12thOther : formData.yearOfPassing12th} 
          />
          <Field label="Percentage of Graduation" hindi="ग्रेजुएशन में प्राप्त प्रतिशत" value={formData.percentageGraduation ? `${formData.percentageGraduation}%` : undefined} />
          <Field label="First Choice of College Course" hindi="पहली पसंद का कॉलेज कोर्स" value={formData.firstChoiceCourse} />
          <Field label="Second Choice of College Course" hindi="दूसरी पसंद का कॉलेज कोर्स" value={formData.secondChoiceCourse} />
          <Field label="Third Choice of College Course" hindi="इन  कोर्स में दूसरी  तीसरी पसंद कौन-सी है?" value={formData.thirdChoiceCourse} />
          <div className="col-span-1 md:col-span-2">
            <Field label="Achievements (If any)" hindi="उपलब्धियाँ (यदि कोई हो)" value={formData.achievements} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Field label="Hobbies & Skills" hindi="शौक और कौशल" value={formData.hobbiesSkills} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Field label="Life's Aim" hindi="जीवन का लक्ष्य" value={formData.lifeAim} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <Field label="Other Scholarships (If any)" hindi="अन्य छात्रवृत्तियाँ (यदि कोई हो)" value={formData.otherScholarship} />
          </div>
          <Field label="How did you hear about DOR Foundation?" hindi="आपको DOR फाउंडेशन के बारे में कैसे पता चला?" value={formData.referenceSource} />
          <Field label="If any DOR alumni studied in your school, mention his/her name" hindi="अगर आपके स्कूल में कोई DOR का पुराना छात्र पढ़ा है, तो उसका नाम लिखें।" value={formData.dorAlumniName} />
          <Field label="If Reference, then who is the Reference?" hindi="यदि रेफरेंस है, तो वह कौन है?" value={formData.referenceName} />
        </Section>

        <Section title="Family & Finance">
          <Field label="Father's Name" hindi="पिता का नाम" value={formData.fatherName} />
          <Field label="Father's Mobile No." hindi="पिता का मोबाइल नंबर" value={formData.fatherMobile} />
          <Field label="Father's Occupation" hindi="पिता का व्यवसाय" value={formData.fatherOccupation} />
          <div></div>
          <Field label="Mother's Name" hindi="माता का नाम" value={formData.motherName} />
          <Field label="Mother's Mobile No." hindi="माता का मोबाइल नंबर" value={formData.motherMobile} />
          <Field 
            label="Mother's Occupation"
            hindi="माता का व्यवसाय"
            value={formData.motherOccupation === 'other' ? formData.motherOccupationOther : 'Homemaker'} 
          />
          <div></div>
          <Field 
            label="Number of Siblings" 
            hindi="भाइयों और बहनों की संख्या"
            value={formData.numberOfSiblings === 'other' ? formData.numberOfSiblingsOther : formData.numberOfSiblings} 
          />
          <div></div>
          <div className="col-span-1 md:col-span-2">
            <Field label="Siblings Occupation (If any)" hindi="भाइयों/बहनों का व्यवसाय (यदि कोई हो)" value={formData.siblingsOccupation} />
          </div>
          <Field label="Total Family Income (Monthly)" hindi="कुल पारिवारिक आय (मासिक)" value={formData.totalFamilyIncome} />
        </Section>
      </div>

      {/* Declaration */}
      <div className="bg-[#ecf4ff] border border-[#1a4d8f] rounded-[10px] p-6">
        <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#1a4d8f] text-[16px] mb-6">
          Declaration
        </h3>
        
        <div className="space-y-6">
          {/* 1. Documents Section */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="documents1"
                checked={consentCheckboxes.documents1_1}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, documents1_1: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="documents1"
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#4d4b48] text-[15px] cursor-pointer"
              >
                1. Important to share all the Documents asked by Dor Foundation<br />
                दस्तावेज़ (Documents) से जुड़ी बातें
              </label>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <Checkbox
                id="documents1_1"
                checked={consentCheckboxes.documents1_1}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, documents1_1: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="documents1_1"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">1.1</span> I understand that my documents and information are important for Dor Foundation to complete the process of scholarship so my application will not proceed further if I will not submit all my documents.<br />
                <span className="text-[#6a7282]">1.1 मैं समझता/समझती हूँ कि Dor Foundation को स्कॉलरशिप की प्रक्रिया पूरी करने के लिए मेरे सभी डॉक्यूमेंट्स की ज़रूरत होती है। अगर मैं अपने सभी डॉक्यूमेंट्स नहीं देता/देती, तो मेरी एप्लिकेशन आगे नहीं बढ़ेगी।</span>
              </label>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <Checkbox
                id="documents1_2"
                checked={consentCheckboxes.documents1_2}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, documents1_2: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="documents1_2"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">1.2</span> i am ready to share all the documents asked by Dor Foundation specifically Bank statements of all the earning members of my family, GPS family photograph and home video etc. ( with all the documents Mentioned in the documents list)<br />
                <span className="text-[#6a7282]">1.2 मैं Dor Foundation द्वारा मांगे गए सभी डॉक्यूमेंट्स देने के लिए तैयार हूँ —जैसे कि परिवार के सभी कमाने वाले सदस्यों के बैंक स्टेटमेंट, जीपीएस फैमिली फोटो, घर का वीडियो आदि (और डॉक्यूमेंट लिस्ट में दिए गए सभी कागज़ात)।</span>
              </label>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <Checkbox
                id="documents1_3"
                checked={consentCheckboxes.documents1_3}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, documents1_3: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="documents1_3"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">1.3</span> i understand that the foundation will use my documents only for scholarship purposes and will not misuse any information<br />
                <span className="text-[#6a7282]">1.3 मैं समझता/समझती हूँ कि फ़ाउंडेशन मेरे डॉक्यूमेंट्स का इस्तेमाल सिर्फ़ स्कॉलरशिप की प्रक्रिया के लिए करेगा और किसी भी तरह गलत उपयोग नहीं करेगा।</span>
              </label>
            </div>
          </div>

          {/* 2. Fee Structure Section */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="feeStructure2"
                checked={consentCheckboxes.feeStructure2}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, feeStructure2: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="feeStructure2"
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#4d4b48] text-[15px] cursor-pointer"
              >
                2. Fee Structure Information<br />
                2. फीस स्ट्रक्चर से जुड़ी जानकारी
              </label>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <Checkbox
                id="feeStructure2_1"
                checked={consentCheckboxes.feeStructure2_1}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, feeStructure2_1: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="feeStructure2_1"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">2.1</span> I understand that Dor Foundation provides 100% sponsorship for the academic/tuition fees.<br />
                <span className="text-[#6a7282]">2.1 मैं समझता/समझती हूँ कि Dor Foundation सिर्फ़ अकादमिक/ट्यूशन फीस का 100% स्पॉन्सरशिप देता है।</span>
              </label>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <Checkbox
                id="feeStructure2_2"
                checked={consentCheckboxes.feeStructure2_2}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, feeStructure2_2: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="feeStructure2_2"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">2.2</span> I understand that extra charges such as exam fees, uniform fees, admission fees, and other college charges must be paid by me.and my parents These extra charges usually range between ₹10,000 to ₹35,000 per year, depending on the college and course. I also understand that Dor Foundation may support me further based on my financial situation.<br />
                <span className="text-[#6a7282]">2.2 मैं यह भी समझता/समझती हूँ कि परीक्षा फीस, यूनिफ़ॉर्म, एडमिशन फीस और कॉलेज की ूसरी चार्जेस मुझे और मेरे माता-पिता को देने होंगे। ये एक्स्ट्रा चार्जेस आमतौर पर ₹10,000 से ₹35,000 तक हो सकते हैं, कॉलेज और कोर्स के हिसाब से। मैं यह भी जानता/जानती हूँ कि मेरी आर्थिक स्थिति देखकर फ़ाउंडेशन आगे भी मदद कर सकता है।</span>
              </label>
            </div>
          </div>

          {/* 3. Accommodation Section */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="accommodation3"
                checked={consentCheckboxes.accommodation3}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, accommodation3: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="accommodation3"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">3. Accomodation Information<br />
                3. रहने (Accommodation) से जुड़ी जानकारी</span><br />
                If you get admission in a college located in Dehradun, Haridwar, Haldwani, Roorkee, or Rudrapur, and you are not from any of these areas, then we need to ask you the following questions:<br />
                <span className="text-[#6a7282]">अगर आपका एडमिशन देहरादून, हरिद्वार, हल्द्वानी, रुड़की या रुद्रपुर में होता है और आप इन जगहों से नहीं हैं, तो आपको ये बातें बतानी होंगी</span>
              </label>
            </div>
          </div>

          {/* 4. Home Visit Section */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="homeVisit4"
                checked={consentCheckboxes.homeVisit4}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, homeVisit4: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="homeVisit4"
                className="font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[#4d4b48] text-[15px] cursor-pointer"
              >
                4. Importance of Home Visit<br />
                4. घर जाने (Home Visit) की ज़रूरत
              </label>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <Checkbox
                id="homeVisit4_1"
                checked={consentCheckboxes.homeVisit4_1}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, homeVisit4_1: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="homeVisit4_1"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">4.1</span> i understand that home visit is a important step of verification so i and my family have no objection if Dor Foundation does this.<br />
                <span className="text-[#6a7282]">4.1 मैं समझता/समझती हूँ कि होम विज़िट वेरिफिकेशन का ज़रूरी हिस्सा है। मुझे और मेरे परिवार को Dor Foundation के घर आने से कोई आपत्ति नहीं है।</span>
              </label>
            </div>
            
            <div className="flex items-start gap-3 ml-4">
              <Checkbox
                id="homeVisit4_2"
                checked={consentCheckboxes.homeVisit4_2}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, homeVisit4_2: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="homeVisit4_2"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">4.2</span> i will not hide or manipulate any information as i understand that Dor Foundation&apos;s mission is to provide scholarship to the most suited candidate.according to the criteria.<br />
                <span className="text-[#6a7282]">4.2 मैं वादा करता/करती हूँ कि मैं कोई जानकारी नहीं छुपाऊँगा/छुपाऊँगी और न ही गलत जानकारी दूँगा/दूँगी। मैं जानता/जानती हूँ कि फ़ाउंडेशन उन्हीं छात्रों को स्कॉलरशिप देता है जो इसके मानदंडों पर खरे उतरते हैं।</span>
              </label>
            </div>
          </div>

          {/* Final Process Commitment */}
          <div className="space-y-3 pt-3 border-t border-[#a8d5e8]">
            <div className="flex items-start gap-3">
              <Checkbox
                id="followProcess"
                checked={consentCheckboxes.followProcess}
                onCheckedChange={(checked) => setConsentCheckboxes({ ...consentCheckboxes, followProcess: checked as boolean })}
                className="mt-0.5"
              />
              <label
                htmlFor="followProcess"
                className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-relaxed cursor-pointer"
              >
                <span className="font-semibold">After applying, I will follow the entire process sincerely. I will be punctual for all required steps, answer all calls, and respond to messages on time.</span><br />
                <span className="text-[#6a7282]">पूरी प्रक्रिया को ईमानदारी से पूरा करना<br />
                आवेदन करने के बाद, मैं पूरी प्रक्रिया ईमानदारी से पूरा करूँगा/करूँगी। मैं हर स्टेप में समय पर उपस्थित रहूँगा/रहूँगी, सभी कॉल रिसीव करूँगा/करूँगी और मैसेज का समय पर जवाब दूँगा/दूँगी।</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fff9e6] border border-[#a85613] rounded-[10px] p-6">
        <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#a85613] text-[14px]">
          Please review all the information carefully. Once submitted, you will not be able to make changes to your application.
        </p>
      </div>
    </div>
  );
}