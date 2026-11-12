export default function Card() {
  const counselors = [
    { name: "Sarah Johnson", completed: 38, total: 45, percentage: 84 },
    { name: "Michael Chen", completed: 35, total: 42, percentage: 83 },
    { name: "Emily Davis", completed: 40, total: 48, percentage: 83 },
    { name: "David Kumar", completed: 32, total: 38, percentage: 84 },
    { name: "Lisa Wang", completed: 36, total: 43, percentage: 84 }
  ];

  return (
    <div className="bg-white rounded-[20px] border border-[#e2e8f2] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)] size-full" data-name="Card2">
      <div className="p-6">
        <h2 className="font-['Fraunces:Bold',sans-serif] font-bold leading-[30px] text-[#a85613] text-[20px] mb-6" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
          Students Assigned per Counsellor (Load Balance)
        </h2>
        
        <div className="flex flex-col gap-4">
          {counselors.map((counselor, index) => (
            <div key={index} className="flex flex-col gap-2">
              {/* Counselor Info Row */}
              <div className="flex items-center justify-between">
                <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[16px]">
                  {counselor.name}
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(26,77,143,0.1)] rounded-[6px] px-3 py-1">
                    <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#1a4d8f] text-[12px]">
                      {counselor.completed}/{counselor.total} students
                    </p>
                  </div>
                  <p className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#6b6b6b] text-[16px] w-[40px] text-right">
                    {counselor.percentage}%
                  </p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-[#e2e8f2] h-[8px] rounded-full overflow-hidden">
                <div 
                  className="bg-[#1a4d8f] h-full rounded-full transition-all duration-300"
                  style={{ width: `${counselor.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}