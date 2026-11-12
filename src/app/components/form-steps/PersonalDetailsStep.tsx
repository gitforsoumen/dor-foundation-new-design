import { useState } from "react";
import { Upload, X, FileText, Info } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Progress } from "../ui/progress";
import type { FormData } from "../ApplicationForm";
import calendarSvgPaths from "../../imports/svg-3ia9fx7yh0";

interface PersonalDetailsStepProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

export default function PersonalDetailsStep({ formData, setFormData }: PersonalDetailsStepProps) {
  const [uploadProgress, setUploadProgress] = useState<number | undefined>(undefined);
  const [photographPreview, setPhotographPreview] = useState<string | undefined>(undefined);
  const [dragActive, setDragActive] = useState(false);
  const [showPhotographTooltip, setShowPhotographTooltip] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Simulate upload progress
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        const currentProgress = prev || 0;
        if (currentProgress >= 100) {
          clearInterval(interval);
          return prev;
        }
        return Math.min(currentProgress + 10, 100);
      });
    }, 100);

    // Create preview for image files
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotographPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }

    setFormData({ ...formData, photograph: file });
  };

  const handleRemoveFile = () => {
    setFormData({ ...formData, photograph: null });
    setUploadProgress(undefined);
    setPhotographPreview(undefined);
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
    if (files && files[0]) {
      const event = {
        target: { files }
      } as React.ChangeEvent<HTMLInputElement>;
      handleFileChange(event);
    }
  };

  const handleSameAddressChange = (checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        sameAsPermAddress: true,
        currentAddress: formData.permanentAddress,
        currentCity: formData.permanentCity,
        currentState: formData.permanentState,
        currentPincode: formData.permanentPincode
      });
    } else {
      setFormData({
        ...formData,
        sameAsPermAddress: false
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div>
        <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Personal Details
        </h2>
        <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
          Basic information about you
        </p>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {/* Name of the Applicant */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Name of the Applicant <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            आवेदक का नाम
          </p>
          <Input
            type="text"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Email ID */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Email ID <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            ईमेल आईडी
          </p>
          <Input
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Student's Mobile No */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Student's Mobile No <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            विद्यार्थी का मोबाइल नंबर
          </p>
          <Input
            type="tel"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* WhatsApp Number */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            If you have a separate Whatsapp Number, write it below <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            यदि आपके पास अलग व्हाट्सएप नंबर है, तो उसे नीचे लिखें।
          </p>
          <Input
            type="tel"
            placeholder="Enter whatsapp number"
            value={formData.whatsappNumber}
            onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Student's D.O.B. */}
        <div>
          <div className="flex gap-[5px] items-center mb-[10px]">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
              Student's D.O.B.
            </Label>
            <span className="text-red-500 text-[14px]">*</span>
          </div>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mb-2">
            विद्यार्थी की जन्मतिथि
          </p>
          <div className="relative">
            <Input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              placeholder="DD/MM/YYYY"
              className="h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[16px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] placeholder:text-[#969696]"
              style={{
                colorScheme: 'light'
              }}
            />
            <div className="absolute right-[15px] top-1/2 -translate-y-1/2 pointer-events-none">
              <div className="h-[22.488px] w-[20px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 23">
                  <path d={calendarSvgPaths.p39a07700} fill="#AEAEAE" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Gender */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Gender <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            लिंग
          </p>
          <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* School Name */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Name of the School <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            विद्यालय का नाम
          </p>
          <Input
            type="text"
            placeholder="Enter school name"
            value={formData.schoolName}
            onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Caste Category */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Caste Category <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            जाति श्रेणी
          </p>
          <Select value={formData.casteCategory} onValueChange={(value) => setFormData({ ...formData, casteCategory: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sc">SC</SelectItem>
              <SelectItem value="st">ST</SelectItem>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="obc">OBC</SelectItem>
              <SelectItem value="ews">EWS</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Permanent Address - Full Width */}
        <div className="col-span-1 md:col-span-2">
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Permanent Address <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            स्थायी पता
          </p>
          <Input
            type="text"
            placeholder="Enter permanent address"
            value={formData.permanentAddress}
            onChange={(e) => setFormData({ ...formData, permanentAddress: e.target.value })}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* City, State, Pincode */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            City <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            शहर
          </p>
          <Select value={formData.permanentCity} onValueChange={(value) => setFormData({ ...formData, permanentCity: value })}>
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Bengaluru">Bengaluru</SelectItem>
              <SelectItem value="Hyderabad">Hyderabad</SelectItem>
              <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="Chennai">Chennai</SelectItem>
              <SelectItem value="Kolkata">Kolkata</SelectItem>
              <SelectItem value="Pune">Pune</SelectItem>
              <SelectItem value="Jaipur">Jaipur</SelectItem>
              <SelectItem value="Lucknow">Lucknow</SelectItem>
              <SelectItem value="Surat">Surat</SelectItem>
              <SelectItem value="Thiruvananthapuram">Thiruvananthapuram</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
              State <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              राज्य
            </p>
            <Select value={formData.permanentState} onValueChange={(value) => setFormData({ ...formData, permanentState: value })}>
              <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                <SelectItem value="Assam">Assam</SelectItem>
                <SelectItem value="Bihar">Bihar</SelectItem>
                <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                <SelectItem value="Goa">Goa</SelectItem>
                <SelectItem value="Gujarat">Gujarat</SelectItem>
                <SelectItem value="Haryana">Haryana</SelectItem>
                <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="Kerala">Kerala</SelectItem>
                <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                <SelectItem value="Manipur">Manipur</SelectItem>
                <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                <SelectItem value="Mizoram">Mizoram</SelectItem>
                <SelectItem value="Nagaland">Nagaland</SelectItem>
                <SelectItem value="Odisha">Odisha</SelectItem>
                <SelectItem value="Punjab">Punjab</SelectItem>
                <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                <SelectItem value="Sikkim">Sikkim</SelectItem>
                <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                <SelectItem value="Telangana">Telangana</SelectItem>
                <SelectItem value="Tripura">Tripura</SelectItem>
                <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                <SelectItem value="West Bengal">West Bengal</SelectItem>
                <SelectItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</SelectItem>
                <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Jammu and Kashmir">Jammu and Kashmir</SelectItem>
                <SelectItem value="Ladakh">Ladakh</SelectItem>
                <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
                <SelectItem value="Puducherry">Puducherry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
              Pin Code <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              पिन कोड
            </p>
            <Input
              type="text"
              placeholder="Enter 6-digit PIN code"
              value={formData.permanentPincode}
              onChange={(e) => setFormData({ ...formData, permanentPincode: e.target.value })}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        </div>

        {/* Same as Permanent Address Checkbox */}
        <div className="col-span-1 md:col-span-2 flex items-center gap-3">
          <Checkbox
            id="sameAddress"
            checked={formData.sameAsPermAddress}
            onCheckedChange={handleSameAddressChange}
          />
          <div>
            <label
              htmlFor="sameAddress"
              className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] cursor-pointer block"
            >
              Current address is the same as the permanent address?
            </label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              क्या वर्तमान पता स्थायी पते के समान है?
            </p>
          </div>
        </div>

        {/* Current Address - Full Width */}
        <div className="col-span-1 md:col-span-2">
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            Current Address <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            वर्तमान पता
          </p>
          <Input
            type="text"
            placeholder="Enter current address"
            value={formData.currentAddress}
            onChange={(e) => setFormData({ ...formData, currentAddress: e.target.value })}
            disabled={formData.sameAsPermAddress}
            className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
          />
        </div>

        {/* Current City, State, Pincode */}
        <div>
          <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
            City <span className="text-red-500">*</span>
          </Label>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            शहर
          </p>
          <Select 
            value={formData.currentCity} 
            onValueChange={(value) => setFormData({ ...formData, currentCity: value })}
            disabled={formData.sameAsPermAddress}
          >
            <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mumbai">Mumbai</SelectItem>
              <SelectItem value="Delhi">Delhi</SelectItem>
              <SelectItem value="Bengaluru">Bengaluru</SelectItem>
              <SelectItem value="Hyderabad">Hyderabad</SelectItem>
              <SelectItem value="Ahmedabad">Ahmedabad</SelectItem>
              <SelectItem value="Chennai">Chennai</SelectItem>
              <SelectItem value="Kolkata">Kolkata</SelectItem>
              <SelectItem value="Pune">Pune</SelectItem>
              <SelectItem value="Jaipur">Jaipur</SelectItem>
              <SelectItem value="Lucknow">Lucknow</SelectItem>
              <SelectItem value="Surat">Surat</SelectItem>
              <SelectItem value="Thiruvananthapuram">Thiruvananthapuram</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
              State <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              राज्य
            </p>
            <Select 
              value={formData.currentState} 
              onValueChange={(value) => setFormData({ ...formData, currentState: value })}
              disabled={formData.sameAsPermAddress}
            >
              <SelectTrigger className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] py-[27px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                <SelectItem value="Arunachal Pradesh">Arunachal Pradesh</SelectItem>
                <SelectItem value="Assam">Assam</SelectItem>
                <SelectItem value="Bihar">Bihar</SelectItem>
                <SelectItem value="Chhattisgarh">Chhattisgarh</SelectItem>
                <SelectItem value="Goa">Goa</SelectItem>
                <SelectItem value="Gujarat">Gujarat</SelectItem>
                <SelectItem value="Haryana">Haryana</SelectItem>
                <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                <SelectItem value="Jharkhand">Jharkhand</SelectItem>
                <SelectItem value="Karnataka">Karnataka</SelectItem>
                <SelectItem value="Kerala">Kerala</SelectItem>
                <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                <SelectItem value="Manipur">Manipur</SelectItem>
                <SelectItem value="Meghalaya">Meghalaya</SelectItem>
                <SelectItem value="Mizoram">Mizoram</SelectItem>
                <SelectItem value="Nagaland">Nagaland</SelectItem>
                <SelectItem value="Odisha">Odisha</SelectItem>
                <SelectItem value="Punjab">Punjab</SelectItem>
                <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                <SelectItem value="Sikkim">Sikkim</SelectItem>
                <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                <SelectItem value="Telangana">Telangana</SelectItem>
                <SelectItem value="Tripura">Tripura</SelectItem>
                <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                <SelectItem value="Uttarakhand">Uttarakhand</SelectItem>
                <SelectItem value="West Bengal">West Bengal</SelectItem>
                <SelectItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</SelectItem>
                <SelectItem value="Chandigarh">Chandigarh</SelectItem>
                <SelectItem value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
                <SelectItem value="Jammu and Kashmir">Jammu and Kashmir</SelectItem>
                <SelectItem value="Ladakh">Ladakh</SelectItem>
                <SelectItem value="Lakshadweep">Lakshadweep</SelectItem>
                <SelectItem value="Puducherry">Puducherry</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
              Pin Code <span className="text-red-500">*</span>
            </Label>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
              पिन कोड
            </p>
            <Input
              type="text"
              placeholder="Enter 6-digit PIN code"
              value={formData.currentPincode}
              onChange={(e) => setFormData({ ...formData, currentPincode: e.target.value })}
              disabled={formData.sameAsPermAddress}
              className="mt-2 h-[56px] rounded-[8px] border-[#aeaeae] bg-white px-[15px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px]"
            />
          </div>
        </div>

        {/* Photograph Upload - Full Width */}
        <div className="col-span-1 md:col-span-2 relative">
          <div className="flex items-center gap-2">
            <Label className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#4d4b48] text-[14px]">
              Photograph of Student <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowPhotographTooltip(!showPhotographTooltip)}
                className="text-[#1a4d8f] hover:text-[#a85613] transition-colors"
                aria-label="More information"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>
          </div>
          {showPhotographTooltip && (
            <div className="absolute top-12 left-0 right-0 sm:top-6 sm:left-0 sm:right-auto z-50 w-full sm:w-[320px] p-4 bg-[#ecf4ff] border border-[#1a4d8f] rounded-[8px] shadow-lg">
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed">
                Upload your recent Passport Size Photograph
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] leading-relaxed mt-2">
                अपनी हाल ही में खिंचवाई गई पासपोर्ट साइज़ फोटो अपलोड करें।
              </p>
            </div>
          )}
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[12px] mt-1">
            छात्र की तस्वीर
          </p>
          
          {!formData.photograph ? (
            <div 
              className={`mt-2 border-2 border-dashed rounded-[10px] p-12 flex flex-col items-center justify-center transition-colors ${
                dragActive 
                  ? 'border-[#1a4d8f] bg-[#ecf4ff]' 
                  : 'border-[#aeaeae] bg-white'
              }`}
              onDragEnter={handleDragEnter}
              onDragOver={handleDrag}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="w-8 h-8 text-[#99A1AF] mb-2" />
              <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-bold text-[#4d4b48] text-[14px] text-center mb-1">
                Click to upload or drag and drop
              </p>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px] text-center">
                Upload 1 supported file: PDF or image. Max 1 MB.
              </p>
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="hidden"
                id="photograph-upload"
              />
              <label
                htmlFor="photograph-upload"
                className="mt-4 px-6 py-2 bg-[#1a4d8f] text-white rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] cursor-pointer hover:bg-[#153d73]"
              >
                Choose File
              </label>
            </div>
          ) : (
            <div className="mt-2 border-2 border-[#e2e8f2] rounded-[10px] p-4 bg-white">
              {/* Upload Progress */}
              {uploadProgress !== undefined && uploadProgress < 100 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px]">
                      Uploading...
                    </p>
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[12px]">
                      {uploadProgress}%
                    </p>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              {/* File Preview */}
              <div className="flex items-start gap-4">
                {/* Preview Thumbnail */}
                <div className="shrink-0">
                  {photographPreview ? (
                    <img 
                      src={photographPreview} 
                      alt={formData.photograph.name}
                      className="w-20 h-20 object-cover rounded-[8px] border border-[#e2e8f2]"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-[#f6f8fc] rounded-[8px] border border-[#e2e8f2] flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[#1a4d8f]" />
                    </div>
                  )}
                </div>

                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] truncate">
                    {formData.photograph.name}
                  </p>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#99A1AF] text-[11px] mt-1">
                    {(formData.photograph.size / 1024).toFixed(2)} KB
                  </p>
                  {uploadProgress === 100 && (
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#25c196] text-[12px] mt-1">
                      ✓ Upload complete
                    </p>
                  )}
                </div>

                {/* Remove Button */}
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="shrink-0 p-1 hover:bg-[#f6f8fc] rounded-[4px] transition-colors"
                  title="Remove file"
                >
                  <X className="w-5 h-5 text-[#99A1AF] hover:text-red-500" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}