import { useState } from "react";
import { ArrowLeft, Upload, Plus } from "lucide-react";
import svgPaths from "../../imports/svg-dd7h52kplc";

interface Seat {
  city: string;
  college: string;
  course: string;
  noOfSeats: number;
  remainingSeats: number;
}

interface AddNewSeatProps {
  onBack: () => void;
  onSave: (seats: Seat[]) => void;
  editingSeat?: { id: string; city: string; college: string; course: string; noOfSeats: number; remainingSeats: number; lastUpdatedOn: string } | null;
  initialMethod?: "bulk" | "manual" | null;
}

export default function AddNewSeat({ onBack, onSave, editingSeat, initialMethod = null }: AddNewSeatProps) {
  const [selectedMethod, setSelectedMethod] = useState<"bulk" | "manual" | null>(initialMethod);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [manualSeats, setManualSeats] = useState<Seat[]>([
    { city: "", college: "", course: "", noOfSeats: 0, remainingSeats: 0 }
  ]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "text/csv" || file.name.endsWith(".csv") || 
          file.type === "application/vnd.ms-excel" || 
          file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        setUploadedFile(file);
      } else {
        alert("Please upload a CSV or Excel file");
      }
    }
  };

  const handleAddManualRow = () => {
    setManualSeats([...manualSeats, { city: "", college: "", course: "", noOfSeats: 0, remainingSeats: 0 }]);
  };

  const handleRemoveRow = (index: number) => {
    setManualSeats(manualSeats.filter((_, i) => i !== index));
  };

  const handleManualInputChange = (index: number, field: keyof Seat, value: string | number) => {
    const updated = [...manualSeats];
    updated[index] = { ...updated[index], [field]: value };
    // When noOfSeats is updated, set remainingSeats to the same value
    if (field === "noOfSeats") {
      updated[index].remainingSeats = typeof value === "number" ? value : 0;
    }
    setManualSeats(updated);
  };

  const handleSave = () => {
    if (selectedMethod === "bulk" && uploadedFile) {
      // In a real implementation, parse the CSV/Excel file
      // For now, we'll just show a success message
      alert("Bulk upload functionality will parse the file. For demo, adding sample data.");
      onSave([
        { city: "Delhi", college: "Delhi University", course: "B.Sc Chemistry", noOfSeats: 50, remainingSeats: 50 },
        { city: "Mumbai", college: "Mumbai University", course: "B.Com", noOfSeats: 100, remainingSeats: 100 }
      ]);
    } else if (selectedMethod === "manual") {
      const validSeats = manualSeats.filter(
        seat => seat.city && seat.college && seat.course && seat.noOfSeats > 0
      );
      if (validSeats.length === 0) {
        alert("Please fill in all fields for at least one seat entry");
        return;
      }
      onSave(validSeats);
    }
  };

  if (!selectedMethod) {
    return (
      <div className="p-6 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-[#1a4d8f] hover:text-[#153d73] mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Seats Management
            </button>
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Add New Seat
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Choose how you want to add seat information
            </p>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bulk Upload Option */}
            <button
              onClick={() => setSelectedMethod("bulk")}
              className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border-2 border-[#e2e8f2] p-8 hover:border-[#1a4d8f] hover:shadow-lg transition-all duration-200 text-left group"
            >
              <div className="bg-[#ecf4ff] w-16 h-16 rounded-[12px] flex items-center justify-center mb-4 group-hover:bg-[#1a4d8f] transition-colors">
                <Upload className="w-8 h-8 text-[#1a4d8f] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-['Fraunces:Bold',sans-serif] text-[#1a4d8f] text-[24px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Bulk Upload
              </h3>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[20px]">
                Upload a formatted Excel or CSV file containing multiple seat entries at once. Ideal for adding large amounts of data.
              </p>
              <div className="mt-4 text-[#1a4d8f] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]">
                Supported formats: .csv, .xlsx, .xls
              </div>
            </button>

            {/* Manual Entry Option */}
            <button
              onClick={() => setSelectedMethod("manual")}
              className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border-2 border-[#e2e8f2] p-8 hover:border-[#1a4d8f] hover:shadow-lg transition-all duration-200 text-left group"
            >
              <div className="bg-[#fff9e6] w-16 h-16 rounded-[12px] flex items-center justify-center mb-4 group-hover:bg-[#a85613] transition-colors">
                <Plus className="w-8 h-8 text-[#a85613] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-['Fraunces:Bold',sans-serif] text-[#a85613] text-[24px] mb-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
                Add Individually
              </h3>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px] leading-[20px]">
                Manually enter seat details one by one using a form. Perfect for adding individual entries or making quick updates.
              </p>
              <div className="mt-4 text-[#a85613] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[13px]">
                Add City, College, Course & Seats
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedMethod === "bulk") {
    return (
      <div className="p-6 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-6">
            <button
              onClick={() => setSelectedMethod(null)}
              className="flex items-center gap-2 text-[#1a4d8f] hover:text-[#153d73] mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to options
            </button>
            <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              Bulk Upload
            </h1>
            <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
              Upload a formatted Excel or CSV file with seat information
            </p>
          </div>

          {/* Upload Area */}
          <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-8">
            <div className="border-2 border-dashed border-[#e2e8f2] rounded-[12px] p-12 text-center">
              <div className="bg-[#ecf4ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-[#1a4d8f]" />
              </div>
              <h3 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[16px] mb-2">
                {uploadedFile ? uploadedFile.name : "Upload your file"}
              </h3>
              <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#969696] text-[14px] mb-4">
                {uploadedFile ? "File uploaded successfully" : "Drag and drop or click to browse"}
              </p>
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white h-[44px] px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer leading-[44px]"
              >
                Choose File
              </label>
            </div>

            {/* File Format Info */}
            <div className="mt-6 bg-[#f6f8fc] rounded-[12px] p-4">
              <h4 className="font-['Wix_Madefor_Text:Bold',sans-serif] text-[#4d4b48] text-[14px] mb-2">
                File Format Requirements:
              </h4>
              <ul className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] space-y-1 list-disc list-inside">
                <li>Column headers: City, College, Course, No. of Seats</li>
                <li>All fields are required</li>
                <li>No. of Seats must be a positive number</li>
                <li>Supported formats: .csv, .xlsx, .xls</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6 justify-between">
            <button
              onClick={() => setSelectedMethod(null)}
              className="h-[44px] px-6 rounded-[100px] border-2 border-[#e2e8f2] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] text-[#4d4b48] hover:bg-[#f6f8fc] transition-colors w-[96px]"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={!uploadedFile}
              className="h-[44px] px-6 rounded-[100px] bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 w-[170px]"
            >
              Upload & Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={initialMethod ? onBack : () => setSelectedMethod(null)}
            className="flex items-center gap-2 text-[#1a4d8f] hover:text-[#153d73] mb-4 font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {initialMethod ? "Back to Seats Management" : "Back to options"}
          </button>
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[28px] sm:text-[32px] mb-1" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Add New Seat
          </h1>
          <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[14px]">
            Add seat details manually for each entry
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-[16px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] border border-[#e2e8f2] p-6">
          <div className="space-y-4">
            {manualSeats.map((seat, index) => (
              <div key={index}>
                {index > 0 && <div className="border-t border-[#e2e8f2] mb-4" />}
                <div className="rounded-[12px] p-4 relative">
                  {manualSeats.length > 1 && (
                    <button
                      onClick={() => handleRemoveRow(index)}
                      className="absolute top-2 right-2 hover:bg-[#ffe6e6] p-1.5 rounded-[6px] transition-colors w-8 h-8"
                    >
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <path d="M6.66667 7.33333V11.3333" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M9.33333 7.33333V11.3333" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p37e28100} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d="M2 4H14" stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        <path d={svgPaths.p2ffbeb80} stroke="#E7000B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                      </svg>
                    </button>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* City */}
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                        City <span className="text-[#fb2c36]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter city name"
                        value={seat.city}
                        onChange={(e) => handleManualInputChange(index, "city", e.target.value)}
                        className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </div>

                    {/* College */}
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                        College <span className="text-[#fb2c36]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter college name"
                        value={seat.college}
                        onChange={(e) => handleManualInputChange(index, "college", e.target.value)}
                        className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                        Course <span className="text-[#fb2c36]">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter course name"
                        value={seat.course}
                        onChange={(e) => handleManualInputChange(index, "course", e.target.value)}
                        className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </div>

                    {/* Total Seats */}
                    <div>
                      <label className="block font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[#4d4b48] text-[13px] mb-2">
                        Total Seats <span className="text-[#fb2c36]">*</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter number of seats"
                        min="1"
                        value={seat.noOfSeats || ""}
                        onChange={(e) => handleManualInputChange(index, "noOfSeats", parseInt(e.target.value) || 0)}
                        className="w-full h-[40px] px-4 border border-[#e2e8f2] rounded-[12px] font-['Wix_Madefor_Text:Regular',sans-serif] text-[14px] text-[#4d4b48] placeholder:text-[#969696] focus:outline-none focus:ring-2 focus:ring-[#1a4d8f] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add More Button */}
          <button
            onClick={handleAddManualRow}
            className="mt-4 flex items-center gap-2 text-[#1a4d8f] hover:bg-[#ecf4ff] px-4 py-2 rounded-[100px] font-['Wix_Madefor_Text:SemiBold',sans-serif] text-[14px] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Another Entry
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 justify-between">
          <button
            onClick={initialMethod ? onBack : () => setSelectedMethod(null)}
            className="h-[44px] px-6 rounded-[100px] border-2 border-[#e2e8f2] font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] text-[#4d4b48] hover:bg-[#f6f8fc] transition-colors w-[96px]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="h-[44px] px-6 rounded-[100px] bg-gradient-to-r from-[#1a4d8f] to-[#153d73] text-white font-['Wix_Madefor_Text:Bold',sans-serif] text-[14px] hover:shadow-lg hover:scale-105 transition-all duration-200 w-[140px]"
          >
            Save Seats
          </button>
        </div>
      </div>
    </div>
  );
}