import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import type { FormData } from "../ApplicationForm";
import { Info } from "lucide-react";
import { useState } from "react";

interface AcademicDetailsStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export default function AcademicDetailsStep({ formData, setFormData }: AcademicDetailsStepProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showFirstChoiceTooltip, setShowFirstChoiceTooltip] = useState(false);
  const [showSecondChoiceTooltip, setShowSecondChoiceTooltip] = useState(false);
  const [showThirdChoiceTooltip, setShowThirdChoiceTooltip] = useState(false);
  const [showAchievementsTooltip, setShowAchievementsTooltip] = useState(false);
  const [showHobbiesSkillsTooltip, setShowHobbiesSkillsTooltip] = useState(false);
  const [showLifeAimTooltip, setShowLifeAimTooltip] = useState(false);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Academic Details
        </h2>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
          Information about your academic performance
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* School Board */}
        <div className="col-span-1 md:col-span-2">
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            School Board <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            आपके स्कूल का शिक्षा बोर्ड
          </p>
          <Select value={formData.schoolBoard} onValueChange={(value) => setFormData({ ...formData, schoolBoard: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select board" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uttarakhand">Uttarakhand Board</SelectItem>
              <SelectItem value="cbse">CBSE</SelectItem>
              <SelectItem value="icse">ICSE</SelectItem>
              <SelectItem value="up">Uttar Pradesh Board</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional School Board Other Field */}
        {formData.schoolBoard === 'other' && (
          <div className="col-span-1 md:col-span-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify School Board <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया स्कूल बोर्ड निर्दिष्ट करें
            </p>
            <Input
              type="text"
              placeholder="Enter school board name"
              value={formData.schoolBoardOther}
              onChange={(e) => setFormData({ ...formData, schoolBoardOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        {/* Percentages */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Percentage of 9th Class <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            कक्षा 9 का प्रतिशत
          </p>
          <Input
            type="number"
            placeholder="Enter percentage"
            value={formData.percentage9th}
            onChange={(e) => setFormData({ ...formData, percentage9th: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            min="0"
            max="100"
            step="0.01"
          />
        </div>

        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Percentage of 10th Class <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            कक्षा 10 का प्रतिशत
          </p>
          <Input
            type="number"
            placeholder="Enter percentage"
            value={formData.percentage10th}
            onChange={(e) => setFormData({ ...formData, percentage10th: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            min="0"
            max="100"
            step="0.01"
          />
        </div>

        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Percentage of 11th Class <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            कक्षा 11 का प्रतिशत
          </p>
          <Input
            type="number"
            placeholder="Enter percentage"
            value={formData.percentage11th}
            onChange={(e) => setFormData({ ...formData, percentage11th: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            min="0"
            max="100"
            step="0.01"
          />
        </div>

        <div className="relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Percentage of 12th Class <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowTooltip(!showTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[320px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                If you have received 12th Class result, please mention the Percentage obtained. If not, then write 0.
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                यदि आपने कक्षा 12 का परिणाम प्राप्त कर लिया है, तो प्राप्त प्रतिशत लिखें। यदि नहीं, तो 0 लिखें।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            कक्षा 12 का प्रतिशत
          </p>
          <Input
            type="number"
            placeholder="Enter percentage"
            value={formData.percentage12th}
            onChange={(e) => setFormData({ ...formData, percentage12th: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            min="0"
            max="100"
            step="0.01"
          />
        </div>

        {/* Stream in Class 12th */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Stream in Class 12th <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            स्ट्रीम कक्षा 12 में
          </p>
          <Select value={formData.stream12th} onValueChange={(value) => setFormData({ ...formData, stream12th: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select stream" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pcm">PCM – पी.सी.एम.</SelectItem>
              <SelectItem value="pcb">PCB – पी.सी.बी.</SelectItem>
              <SelectItem value="pcmb">PCMB – पी.सी.एम.बी.</SelectItem>
              <SelectItem value="arts">Arts – आर्ट्स</SelectItem>
              <SelectItem value="commerce">Commerce – कॉमर्स</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional Stream Other Field */}
        {formData.stream12th === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify Stream <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया स्ट्रीम निर्दिष्ट करें
            </p>
            <Input
              type="text"
              placeholder="Enter stream name"
              value={formData.stream12thOther}
              onChange={(e) => setFormData({ ...formData, stream12thOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        {/* Year of Passing Class 12th */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Year of Passing Class 12th <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            12वीं पास करने का साल
          </p>
          <Select value={formData.yearOfPassing12th} onValueChange={(value) => setFormData({ ...formData, yearOfPassing12th: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional Year Other Field */}
        {formData.yearOfPassing12th === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify Year <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया वर्ष निर्दिष्ट करें
            </p>
            <Input
              type="text"
              placeholder="Enter year"
              value={formData.yearOfPassing12thOther}
              onChange={(e) => setFormData({ ...formData, yearOfPassing12thOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        <div className="col-span-1 md:col-span-2">
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Percentage of Graduation <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            ग्रेजुएशन में प्राप्त प्रतिशत
          </p>
          <Input
            type="number"
            placeholder="Enter percentage"
            value={formData.percentageGraduation}
            onChange={(e) => setFormData({ ...formData, percentageGraduation: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            min="0"
            max="100"
            step="0.01"
          />
        </div>

        {/* Course Choices */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              What is your First Choice in these Courses? <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowFirstChoiceTooltip(!showFirstChoiceTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showFirstChoiceTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                Kindly do proper research on you tube, Chat GPT or Google about your course preference before coming for course counselling at Dor Foundation
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                कृपया डोर फाउंडेशन में कोर्स काउंसलिंग के लिए आने से पहले, अपने चुने हुए कोर्स के बारे में YouTube, ChatGPT या Google पर अच्छी तरह से शोध कर लें।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            इन  कोर्स में आपकी पहली पसंद कौन-सी है?
          </p>
          <Select value={formData.firstChoiceCourse} onValueChange={(value) => setFormData({ ...formData, firstChoiceCourse: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="gnm">GNM</SelectItem>
              <SelectItem value="bmrit">BMRIT</SelectItem>
              <SelectItem value="bsc-mlt">BSc MLT</SelectItem>
              <SelectItem value="bsc-ot">BSc OT</SelectItem>
              <SelectItem value="bsc-food-tech">BSc Food Tech</SelectItem>
              <SelectItem value="bsc-optometry">BSc Optometry</SelectItem>
              <SelectItem value="dmlt">DMLT</SelectItem>
              <SelectItem value="dipl-dialysis">Dipl. Dialysis</SelectItem>
              <SelectItem value="dipl-x-ray">Dipl. X Ray</SelectItem>
              <SelectItem value="dipl-ot-nursing">Dipl. OT Nursing</SelectItem>
              <SelectItem value="btech-cse">BTech Computer Science Engineering</SelectItem>
              <SelectItem value="btech-me">BTech Mechanical Engineering</SelectItem>
              <SelectItem value="btech-ce">BTech Civil Engineering</SelectItem>
              <SelectItem value="btech-ece">BTech Electronics and Communication Engineering</SelectItem>
              <SelectItem value="btech-eee">BTech Electrical and Electronic Engineering</SelectItem>
              <SelectItem value="dipl-ce">Dipl. Civil Engineering</SelectItem>
              <SelectItem value="dipl-ee">Dipl. Electrical Engineering</SelectItem>
              <SelectItem value="dipl-me">Dipl. Mechanical Engineering</SelectItem>
              <SelectItem value="dipl-cse">Dipl. Computer Science Engineering</SelectItem>
              <SelectItem value="mtech-cse">MTech CSE</SelectItem>
              <SelectItem value="mtech-ece">MTech ECE</SelectItem>
              <SelectItem value="mtech-ce">MTech CE</SelectItem>
              <SelectItem value="bsc-horticulture">BSc Horticulture</SelectItem>
              <SelectItem value="bsc-agriculture">BSc Agriculture</SelectItem>
              <SelectItem value="bsc-forestry">BSc Forestry</SelectItem>
              <SelectItem value="msc-biochemistry">MSc Biochemistry</SelectItem>
              <SelectItem value="msc-pharma-chemistry">MSc Pharma Chemistry</SelectItem>
              <SelectItem value="msc-botany">MSc Botany</SelectItem>
              <SelectItem value="msc-zoology">MSc Zoology</SelectItem>
              <SelectItem value="msc-chemistry">MSc Chemistry</SelectItem>
              <SelectItem value="msc-physics">MSc Physics</SelectItem>
              <SelectItem value="msc-forestry">MSc Forestry</SelectItem>
              <SelectItem value="msc-agronomy">MSc Agronomy</SelectItem>
              <SelectItem value="msc-maths">MSc Maths</SelectItem>
              <SelectItem value="msc-evs">MSc EVS</SelectItem>
              <SelectItem value="bsc-msc-microbiology">BSc & MSc Microbiology</SelectItem>
              <SelectItem value="bsc-msc-biotech">BSc & MSc Biotech</SelectItem>
              <SelectItem value="bpt">BPT</SelectItem>
              <SelectItem value="msc-mlt">MSc MLT</SelectItem>
              <SelectItem value="mpt">MPT</SelectItem>
              <SelectItem value="bba">BBA</SelectItem>
              <SelectItem value="bcom">BCom</SelectItem>
              <SelectItem value="mba">MBA</SelectItem>
              <SelectItem value="mcom">MCom</SelectItem>
              <SelectItem value="bca">BCA</SelectItem>
              <SelectItem value="bsc-it">BSc IT</SelectItem>
              <SelectItem value="bsc-cs">BSc CS</SelectItem>
              <SelectItem value="bsc-animation">BSc Animation</SelectItem>
              <SelectItem value="hm">HM</SelectItem>
              <SelectItem value="bfa">BFA</SelectItem>
              <SelectItem value="yoga">Yoga</SelectItem>
              <SelectItem value="bsc-pcm">BSc PCM</SelectItem>
              <SelectItem value="bsc-cbz">BSc CBZ</SelectItem>
              <SelectItem value="bsc-microbiology">BSc Microbiology</SelectItem>
              <SelectItem value="ba">BA</SelectItem>
              <SelectItem value="ba-tourism">BA Tourism</SelectItem>
              <SelectItem value="bfd">BFD</SelectItem>
              <SelectItem value="bdesign">BDesign</SelectItem>
              <SelectItem value="bjmc">BJMC</SelectItem>
              <SelectItem value="dhm">DHM</SelectItem>
              <SelectItem value="bhm">BHM</SelectItem>
              <SelectItem value="blib">BLib</SelectItem>
              <SelectItem value="mlib">Mlib</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional First Choice Other Field */}
        {formData.firstChoiceCourse === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify Course <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया कोर्स निर्दिष्ट करें
            </p>
            <Input
              type="text"
              placeholder="Enter course name"
              value={formData.firstChoiceCourseOther}
              onChange={(e) => setFormData({ ...formData, firstChoiceCourseOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        <div className="relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              What is your Second Choice in these Courses? <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSecondChoiceTooltip(!showSecondChoiceTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showSecondChoiceTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                Kindly do proper research on you tube, Chat GPT or Google about your course preference before coming for course counselling at Dor Foundation
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                कृपया डोर फाउंडेशन में कोर्स काउंसलिंग के लिए आने से पहले, अपने चुने हुए कोर्स के बारे में YouTube, ChatGPT या Google पर अच्छी तरह से शोध कर लें।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            इन  कोर्स में दूसरी पहली पसंद कौन-सी है?
          </p>
          <Select value={formData.secondChoiceCourse} onValueChange={(value) => setFormData({ ...formData, secondChoiceCourse: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="gnm">GNM</SelectItem>
              <SelectItem value="bmrit">BMRIT</SelectItem>
              <SelectItem value="bsc-mlt">BSc MLT</SelectItem>
              <SelectItem value="bsc-ot">BSc OT</SelectItem>
              <SelectItem value="bsc-food-tech">BSc Food Tech</SelectItem>
              <SelectItem value="bsc-optometry">BSc Optometry</SelectItem>
              <SelectItem value="dmlt">DMLT</SelectItem>
              <SelectItem value="dipl-dialysis">Dipl. Dialysis</SelectItem>
              <SelectItem value="dipl-x-ray">Dipl. X Ray</SelectItem>
              <SelectItem value="dipl-ot-nursing">Dipl. OT Nursing</SelectItem>
              <SelectItem value="btech-cse">BTech Computer Science Engineering</SelectItem>
              <SelectItem value="btech-me">BTech Mechanical Engineering</SelectItem>
              <SelectItem value="btech-ce">BTech Civil Engineering</SelectItem>
              <SelectItem value="btech-ece">BTech Electronics and Communication Engineering</SelectItem>
              <SelectItem value="btech-eee">BTech Electrical and Electronic Engineering</SelectItem>
              <SelectItem value="dipl-ce">Dipl. Civil Engineering</SelectItem>
              <SelectItem value="dipl-ee">Dipl. Electrical Engineering</SelectItem>
              <SelectItem value="dipl-me">Dipl. Mechanical Engineering</SelectItem>
              <SelectItem value="dipl-cse">Dipl. Computer Science Engineering</SelectItem>
              <SelectItem value="mtech-cse">MTech CSE</SelectItem>
              <SelectItem value="mtech-ece">MTech ECE</SelectItem>
              <SelectItem value="mtech-ce">MTech CE</SelectItem>
              <SelectItem value="bsc-horticulture">BSc Horticulture</SelectItem>
              <SelectItem value="bsc-agriculture">BSc Agriculture</SelectItem>
              <SelectItem value="bsc-forestry">BSc Forestry</SelectItem>
              <SelectItem value="msc-biochemistry">MSc Biochemistry</SelectItem>
              <SelectItem value="msc-pharma-chemistry">MSc Pharma Chemistry</SelectItem>
              <SelectItem value="msc-botany">MSc Botany</SelectItem>
              <SelectItem value="msc-zoology">MSc Zoology</SelectItem>
              <SelectItem value="msc-chemistry">MSc Chemistry</SelectItem>
              <SelectItem value="msc-physics">MSc Physics</SelectItem>
              <SelectItem value="msc-forestry">MSc Forestry</SelectItem>
              <SelectItem value="msc-agronomy">MSc Agronomy</SelectItem>
              <SelectItem value="msc-maths">MSc Maths</SelectItem>
              <SelectItem value="msc-evs">MSc EVS</SelectItem>
              <SelectItem value="bsc-msc-microbiology">BSc & MSc Microbiology</SelectItem>
              <SelectItem value="bsc-msc-biotech">BSc & MSc Biotech</SelectItem>
              <SelectItem value="bpt">BPT</SelectItem>
              <SelectItem value="msc-mlt">MSc MLT</SelectItem>
              <SelectItem value="mpt">MPT</SelectItem>
              <SelectItem value="bba">BBA</SelectItem>
              <SelectItem value="bcom">BCom</SelectItem>
              <SelectItem value="mba">MBA</SelectItem>
              <SelectItem value="mcom">MCom</SelectItem>
              <SelectItem value="bca">BCA</SelectItem>
              <SelectItem value="bsc-it">BSc IT</SelectItem>
              <SelectItem value="bsc-cs">BSc CS</SelectItem>
              <SelectItem value="bsc-animation">BSc Animation</SelectItem>
              <SelectItem value="hm">HM</SelectItem>
              <SelectItem value="bfa">BFA</SelectItem>
              <SelectItem value="yoga">Yoga</SelectItem>
              <SelectItem value="bsc-pcm">BSc PCM</SelectItem>
              <SelectItem value="bsc-cbz">BSc CBZ</SelectItem>
              <SelectItem value="bsc-microbiology">BSc Microbiology</SelectItem>
              <SelectItem value="ba">BA</SelectItem>
              <SelectItem value="ba-tourism">BA Tourism</SelectItem>
              <SelectItem value="bfd">BFD</SelectItem>
              <SelectItem value="bdesign">BDesign</SelectItem>
              <SelectItem value="bjmc">BJMC</SelectItem>
              <SelectItem value="dhm">DHM</SelectItem>
              <SelectItem value="bhm">BHM</SelectItem>
              <SelectItem value="blib">BLib</SelectItem>
              <SelectItem value="mlib">Mlib</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional Second Choice Other Field */}
        {formData.secondChoiceCourse === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify Course <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया कोर्स निर्दिष्ट करें
            </p>
            <Input
              type="text"
              placeholder="Enter course name"
              value={formData.secondChoiceCourseOther}
              onChange={(e) => setFormData({ ...formData, secondChoiceCourseOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        <div className="relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              What is your Third Choice in these Courses? <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowThirdChoiceTooltip(!showThirdChoiceTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showThirdChoiceTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                Kindly do proper research on you tube, Chat GPT or Google about your course preference before coming for course counselling at Dor Foundation
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                कृपया डोर फाउंडेशन में कोर्स काउंसलिंग के लिए आने से पहले, अपने चुने हुए कोर्स के बारे में YouTube, ChatGPT या Google पर अच्छी तरह से शोध कर लें।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            इन  कोर्स में दूसरी  तीसरी पसंद कौन-सी है?
          </p>
          <Select value={formData.thirdChoiceCourse} onValueChange={(value) => setFormData({ ...formData, thirdChoiceCourse: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select course" />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
              <SelectItem value="gnm">GNM</SelectItem>
              <SelectItem value="bmrit">BMRIT</SelectItem>
              <SelectItem value="bsc-mlt">BSc MLT</SelectItem>
              <SelectItem value="bsc-ot">BSc OT</SelectItem>
              <SelectItem value="bsc-food-tech">BSc Food Tech</SelectItem>
              <SelectItem value="bsc-optometry">BSc Optometry</SelectItem>
              <SelectItem value="dmlt">DMLT</SelectItem>
              <SelectItem value="dipl-dialysis">Dipl. Dialysis</SelectItem>
              <SelectItem value="dipl-x-ray">Dipl. X Ray</SelectItem>
              <SelectItem value="dipl-ot-nursing">Dipl. OT Nursing</SelectItem>
              <SelectItem value="btech-cse">BTech Computer Science Engineering</SelectItem>
              <SelectItem value="btech-me">BTech Mechanical Engineering</SelectItem>
              <SelectItem value="btech-ce">BTech Civil Engineering</SelectItem>
              <SelectItem value="btech-ece">BTech Electronics and Communication Engineering</SelectItem>
              <SelectItem value="btech-eee">BTech Electrical and Electronic Engineering</SelectItem>
              <SelectItem value="dipl-ce">Dipl. Civil Engineering</SelectItem>
              <SelectItem value="dipl-ee">Dipl. Electrical Engineering</SelectItem>
              <SelectItem value="dipl-me">Dipl. Mechanical Engineering</SelectItem>
              <SelectItem value="dipl-cse">Dipl. Computer Science Engineering</SelectItem>
              <SelectItem value="mtech-cse">MTech CSE</SelectItem>
              <SelectItem value="mtech-ece">MTech ECE</SelectItem>
              <SelectItem value="mtech-ce">MTech CE</SelectItem>
              <SelectItem value="bsc-horticulture">BSc Horticulture</SelectItem>
              <SelectItem value="bsc-agriculture">BSc Agriculture</SelectItem>
              <SelectItem value="bsc-forestry">BSc Forestry</SelectItem>
              <SelectItem value="msc-biochemistry">MSc Biochemistry</SelectItem>
              <SelectItem value="msc-pharma-chemistry">MSc Pharma Chemistry</SelectItem>
              <SelectItem value="msc-botany">MSc Botany</SelectItem>
              <SelectItem value="msc-zoology">MSc Zoology</SelectItem>
              <SelectItem value="msc-chemistry">MSc Chemistry</SelectItem>
              <SelectItem value="msc-physics">MSc Physics</SelectItem>
              <SelectItem value="msc-forestry">MSc Forestry</SelectItem>
              <SelectItem value="msc-agronomy">MSc Agronomy</SelectItem>
              <SelectItem value="msc-maths">MSc Maths</SelectItem>
              <SelectItem value="msc-evs">MSc EVS</SelectItem>
              <SelectItem value="bsc-msc-microbiology">BSc & MSc Microbiology</SelectItem>
              <SelectItem value="bsc-msc-biotech">BSc & MSc Biotech</SelectItem>
              <SelectItem value="bpt">BPT</SelectItem>
              <SelectItem value="msc-mlt">MSc MLT</SelectItem>
              <SelectItem value="mpt">MPT</SelectItem>
              <SelectItem value="bba">BBA</SelectItem>
              <SelectItem value="bcom">BCom</SelectItem>
              <SelectItem value="mba">MBA</SelectItem>
              <SelectItem value="mcom">MCom</SelectItem>
              <SelectItem value="bca">BCA</SelectItem>
              <SelectItem value="bsc-it">BSc IT</SelectItem>
              <SelectItem value="bsc-cs">BSc CS</SelectItem>
              <SelectItem value="bsc-animation">BSc Animation</SelectItem>
              <SelectItem value="hm">HM</SelectItem>
              <SelectItem value="bfa">BFA</SelectItem>
              <SelectItem value="yoga">Yoga</SelectItem>
              <SelectItem value="bsc-pcm">BSc PCM</SelectItem>
              <SelectItem value="bsc-cbz">BSc CBZ</SelectItem>
              <SelectItem value="bsc-microbiology">BSc Microbiology</SelectItem>
              <SelectItem value="ba">BA</SelectItem>
              <SelectItem value="ba-tourism">BA Tourism</SelectItem>
              <SelectItem value="bfd">BFD</SelectItem>
              <SelectItem value="bdesign">BDesign</SelectItem>
              <SelectItem value="bjmc">BJMC</SelectItem>
              <SelectItem value="dhm">DHM</SelectItem>
              <SelectItem value="bhm">BHM</SelectItem>
              <SelectItem value="blib">BLib</SelectItem>
              <SelectItem value="mlib">Mlib</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional Third Choice Other Field */}
        {formData.thirdChoiceCourse === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify Course <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया कोर्स निर्दिष्ट करें
            </p>
            <Input
              type="text"
              placeholder="Enter course name"
              value={formData.thirdChoiceCourseOther}
              onChange={(e) => setFormData({ ...formData, thirdChoiceCourseOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        {/* Text Fields */}
        <div className="col-span-1 md:col-span-2 relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Mention Any Of Your Two Achievements (Prize or Medals) <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowAchievementsTooltip(!showAchievementsTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showAchievementsTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                At the time of In-Person Verification, Please bring all your Certificates
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                इन पर्सन वेरिफिकेशन के समय कृपया अपने सभी प्रमाण पत्र साथ लाएं।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            अपने किसी दो उपलब्धियों (इनाम या पदक) का उल्लेख करें।
          </p>
          <Textarea
            placeholder="Describe your achievements..."
            value={formData.achievements}
            onChange={(e) => setFormData({ ...formData, achievements: e.target.value })}
            className="mt-2 min-h-[100px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        <div className="col-span-1 md:col-span-2 relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Hobbies & Skills <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowHobbiesSkillsTooltip(!showHobbiesSkillsTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showHobbiesSkillsTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                Mention at least 3 Hobbies and 3 Skills
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                कम से कम 3 शौक और 3 कौशल बताएं।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            शौक और कौशल
          </p>
          <Textarea
            placeholder="Describe your hobbies and skills..."
            value={formData.hobbiesSkills}
            onChange={(e) => setFormData({ ...formData, hobbiesSkills: e.target.value })}
            className="mt-2 min-h-[100px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        <div className="col-span-1 md:col-span-2 relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Life's Aim <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowLifeAimTooltip(!showLifeAimTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showLifeAimTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                What is your life's goal, describe in brief what do you want to achieve in life.
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                आपका जीवन लक्ष्य क्या है? संक्षेप में बताएं कि आप जीवन में क्या हासिल करना चाहते हैं।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            जीवन का लक्ष्य
          </p>
          <Textarea
            placeholder="What are your life goals and aspirations..."
            value={formData.lifeAim}
            onChange={(e) => setFormData({ ...formData, lifeAim: e.target.value })}
            className="mt-2 min-h-[100px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Have you received Scholarship from any one else? If yes, please share the details. <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            क्या आपको किसी और से छात्रवृत्ति मिली है? यदि हाँ, तो कृपया विवरण साझा करें।
          </p>
          <Textarea
            placeholder="Enter details or write 'No' if not applicable..."
            value={formData.otherScholarship}
            onChange={(e) => setFormData({ ...formData, otherScholarship: e.target.value })}
            className="mt-2 min-h-[100px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Reference Source */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            From where did you get to know about us? <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            आपको हमारे बारे में जानकारी कहाँ से मिली?
          </p>
          <Select value={formData.referenceSource} onValueChange={(value) => setFormData({ ...formData, referenceSource: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school-promotion">School Promotion</SelectItem>
              <SelectItem value="social-media">Social Media</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="reference">Reference</SelectItem>
              <SelectItem value="radio-fm">Radio/FM</SelectItem>
              <SelectItem value="friends">Friends</SelectItem>
              <SelectItem value="word-of-mouth">Word of Mouth</SelectItem>
              <SelectItem value="newspaper">Newspaper</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Conditional Reference Name Field */}
        {formData.referenceSource === 'reference' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              If Reference, then who is the Reference? <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              यदि रेफरेंस है, तो वह कौन है?
            </p>
            <Input
              type="text"
              placeholder="Enter reference name"
              value={formData.referenceName}
              onChange={(e) => setFormData({ ...formData, referenceName: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        {/* Conditional Other Field */}
        {formData.referenceSource === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify Other <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया अन्य निर्दिष्ट करें
            </p>
            <Input
              type="text"
              placeholder="Enter details"
              value={formData.referenceSourceOther}
              onChange={(e) => setFormData({ ...formData, referenceSourceOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        {/* DOR Alumni Name Field */}
        <div className="col-span-1 md:col-span-2">
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            If any DOR alumni studied in your school, mention his/her name <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            अगर आपके स्कूल में कोई DOR का पुराना छात्र पढ़ा है, तो उसका नाम लिखें।
          </p>
          <Input
            type="text"
            placeholder="Enter alumni name or write 'None' if not applicable"
            value={formData.dorAlumniName}
            onChange={(e) => setFormData({ ...formData, dorAlumniName: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Reference Person Name Field */}
        <div className="col-span-1 md:col-span-2">
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            If Reference, then who is the Reference? <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            यदि रेफरेंस है, तो वह कौन है?
          </p>
          <Input
            type="text"
            placeholder="Enter reference name or write 'N/A' if not applicable"
            value={formData.referencePersonName}
            onChange={(e) => setFormData({ ...formData, referencePersonName: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}