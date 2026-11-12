import svgPaths from "./svg-ygt1ztoy6w";

function CardTitle() {
  return (
    <div className="absolute h-[20px] left-[24.8px] top-[24.8px] w-[500px]" data-name="CardTitle">
      <p className="absolute font-['Fraunces:Bold',sans-serif] font-bold leading-[20px] left-0 text-[#a85613] text-[20px] text-nowrap top-[0.6px] whitespace-pre" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
        Application Status Distribution
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-1/2 left-1/2 right-[34%] top-[18.02%]" data-name="Group">
      <div className="absolute inset-[-0.64%_-0.63%_-0.63%_-0.64%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 81">
          <g id="Group">
            <path d={svgPaths.pfbd1f0} fill="var(--fill-0, #F4A300)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute bottom-1/2 left-[35.74%] right-[49.5%] top-[18%]" data-name="Group">
      <div className="absolute inset-[-0.63%_-0.7%_-1%_-0.91%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 82">
          <g id="Group">
            <path d={svgPaths.p3a58bc80} fill="var(--fill-0, #1A4D8F)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[35.47%_38.69%_18%_34%]" data-name="Group">
      <div className="absolute inset-[-0.58%_-0.52%_-0.43%_-0.37%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 118">
          <g id="Group">
            <path d={svgPaths.p15bc1f10} fill="var(--fill-0, #10B981)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[27.37%] left-1/2 right-[34%] top-1/2" data-name="Group">
      <div className="absolute inset-[-0.88%_-0.63%_-1.25%_-1.51%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 58">
          <g id="Group">
            <path d={svgPaths.p321aa00} fill="var(--fill-0, #EF4444)" id="Vector" stroke="var(--stroke-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[18%_34%]" data-name="Group">
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[17.36%_11.24%_76.64%_64.36%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[17.36%_11.24%_76.64%_64.36%] leading-[normal] not-italic text-[#f4a300] text-[12px] text-nowrap whitespace-pre">Pending Review: 25%</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents inset-[10.77%_60.18%_83.23%_18.02%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[10.77%_60.18%_83.23%_18.02%] leading-[normal] not-italic text-[#1a4d8f] text-[12px] text-nowrap text-right whitespace-pre">Under Review: 18%</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[77.56%_61.76%_16.44%_21.04%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[77.56%_61.76%_16.44%_21.04%] leading-[normal] not-italic text-[12px] text-emerald-500 text-nowrap text-right whitespace-pre">Accepted: 45%</p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents inset-[60.51%_15.52%_33.49%_68.48%]" data-name="Group">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[60.51%_15.52%_33.49%_68.48%] leading-[normal] not-italic text-[12px] text-nowrap text-red-500 whitespace-pre">Rejected: 13%</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[10.77%_11.24%_16.44%_18.02%]" data-name="Group">
      <Group5 />
      <Group6 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents inset-[10.77%_11.24%_16.44%_18.02%]" data-name="Group">
      <Group4 />
      <Group9 />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute h-[250px] left-0 overflow-clip top-0 w-[500px]" data-name="Icon">
      <Group10 />
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute h-[250px] left-[24.8px] top-[74.8px] w-[500px]" data-name="CardContent">
      <Icon />
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#e2e8f2] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
      <CardTitle />
      <CardContent />
    </div>
  );
}