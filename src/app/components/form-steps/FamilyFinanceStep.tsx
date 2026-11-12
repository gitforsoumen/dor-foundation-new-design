import { Info } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import type { FormData } from "../ApplicationForm";
import { useState } from "react";

interface FamilyFinanceStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export default function FamilyFinanceStep({ formData, setFormData }: FamilyFinanceStepProps) {
  const [showSiblingsTooltip, setShowSiblingsTooltip] = useState(false);
  const [showSiblingsOccupationTooltip, setShowSiblingsOccupationTooltip] = useState(false);
  const [showFamilyIncomeTooltip, setShowFamilyIncomeTooltip] = useState(false);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Family & Finance
        </h2>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
          Basic information about your family & income
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Father's Details */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Father's Name <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            पिता का नाम
          </p>
          <Input
            type="text"
            placeholder="Enter father's name"
            value={formData.fatherName}
            onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Father's Mobile No. <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            पिता का मोबाइल नंबर
          </p>
          <Input
            type="tel"
            placeholder="Enter father's mobile number"
            value={formData.fatherMobile}
            onChange={(e) => setFormData({ ...formData, fatherMobile: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Father's Occupation <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            पिता का व्यवसाय
          </p>
          <Input
            type="text"
            placeholder="Enter father's occupation"
            value={formData.fatherOccupation}
            onChange={(e) => setFormData({ ...formData, fatherOccupation: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Empty cell for layout */}
        <div></div>

        {/* Mother's Details */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Mother's Name <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            माता का नाम
          </p>
          <Input
            type="text"
            placeholder="Enter mother's name"
            value={formData.motherName}
            onChange={(e) => setFormData({ ...formData, motherName: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
            Mother's Mobile No. <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            माता का मोबाइल नंबर
          </p>
          <Input
            type="tel"
            placeholder="Enter mother's mobile number"
            value={formData.motherMobile}
            onChange={(e) => setFormData({ ...formData, motherMobile: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Mother's Occupation */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px] block">
            Mother's Occupation
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1 mb-4">
            माता का व्यवसाय
          </p>
          <RadioGroup
            value={formData.motherOccupation}
            onValueChange={(value) => setFormData({ ...formData, motherOccupation: value })}
            className="flex gap-12"
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value="homemaker" id="homemaker" />
              <label htmlFor="homemaker" className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer">
                Homemaker/गृहिणी
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="other" id="other-occupation" />
              <label htmlFor="other-occupation" className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer">
                Other
              </label>
            </div>
          </RadioGroup>
        </div>

        {formData.motherOccupation === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Other Occupation <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              अन्य व्यवसाय
            </p>
            <Input
              type="text"
              placeholder="Enter other occupation"
              value={formData.motherOccupationOther}
              onChange={(e) => setFormData({ ...formData, motherOccupationOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        {!formData.motherOccupation || formData.motherOccupation === 'homemaker' ? <div></div> : null}

        {/* Siblings */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Number of Siblings <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSiblingsTooltip(!showSiblingsTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showSiblingsTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[320px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                Mention the number of Brothers & Sisters (Excluding yourself). If more than 5, select other and mention how many
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                भाइयों और बहनों की संख्या उल्लेख करें (स्वयं को छोड़कर)। यदि 5 से अधिक हैं, तो अन्य चुनें और संख्या बताएं।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            भाइयों और बहनों की संख्या
          </p>
          <Select value={formData.numberOfSiblings} onValueChange={(value) => setFormData({ ...formData, numberOfSiblings: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {formData.numberOfSiblings === 'other' && (
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Please specify number of siblings <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              कृपया भाई-बहनों की संख्या बताएं
            </p>
            <Input
              type="text"
              placeholder="Enter number of siblings"
              value={formData.numberOfSiblingsOther}
              onChange={(e) => setFormData({ ...formData, numberOfSiblingsOther: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        )}

        <div className="col-span-1 md:col-span-2 relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Siblings Occupation (If any) <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowSiblingsOccupationTooltip(!showSiblingsOccupationTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showSiblingsOccupationTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                If any of your Brother or Sister is working, please describe in brief about their jobs.
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                यदि आपके किसी भाई या बहन का काम है, तो कृपया उनके कार्य के बारे में संक्षेप में बताएं।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            भाइयों/बहनों का व्यवसाय (यदि कोई हो)
          </p>
          <Textarea
            placeholder="Enter siblings occupation in brief"
            value={formData.siblingsOccupation}
            onChange={(e) => setFormData({ ...formData, siblingsOccupation: e.target.value })}
            className="mt-2 min-h-[100px] rounded-[8px] border-[#aeaeae] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Total Family Income */}
        <div className="relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[14px]">
              Total Family Income (Monthly) <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowFamilyIncomeTooltip(!showFamilyIncomeTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showFamilyIncomeTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[360px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                Please calculate how much all family members make (Father+Mother+Siblings) and any other earnings from any other source(Income from Rent, Land, Domestic Animals, etc.) and only answer with a single number
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                कृपया सभी परिवार के सदस्यों की आय (पिता + माता + भाई-बहन) और किसी अन्य स्रोत से होने वाली आय (किराया, जमीन, पालतू पशु आदि) जोड़कर केवल एक संख्या में बताएं।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            कुल पारिवारिक आय (मासिक)
          </p>
          <Input
            type="text"
            placeholder="Enter total family income"
            value={formData.totalFamilyIncome}
            onChange={(e) => setFormData({ ...formData, totalFamilyIncome: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>
      </div>
    </div>
  );
}