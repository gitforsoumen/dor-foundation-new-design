import svgPaths from "../imports/svg-u9t7iyer9f";
import imgLogo from "figma:asset/fb85e662a0f2d18cc83f90481c3f2d015fb7e1ed.png";
import { Upload } from 'lucide-react';

interface ApplicationSuccessProps {
  onGoToDashboard: () => void;
  onOpenDocuments?: () => void;
}

export default function ApplicationSuccess({ onGoToDashboard, onOpenDocuments }: ApplicationSuccessProps) {
  const applicationId = `DOF2025-${String(Math.floor(Math.random() * 90000) + 10000)}`;
  
  const handleDownloadAcknowledgment = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
    });
    const formattedTime = currentDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const acknowledgmentContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Application Acknowledgment - DOR Foundation</title>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=Wix+Madefor+Text:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body { 
      font-family: 'Wix Madefor Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f6f8fc 0%, #e8eef5 100%);
      padding: 40px 20px;
      min-height: 100vh;
      line-height: 1.6;
    }
    
    .container {
      background: white;
      max-width: 900px;
      margin: 0 auto;
      border-radius: 16px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    
    .header-banner {
      background: linear-gradient(135deg, #1a4d8f 0%, #2d5fa8 100%);
      padding: 40px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    
    .header-banner::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 400px;
      height: 400px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
    }
    
    .header-banner::after {
      content: '';
      position: absolute;
      bottom: -30%;
      left: -5%;
      width: 300px;
      height: 300px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
    }
    
    .logo-container {
      position: relative;
      z-index: 1;
      margin-bottom: 20px;
    }
    
    .logo {
      max-width: 150px;
      height: auto;
      margin: 0 auto;
      display: block;
      filter: brightness(0) invert(1);
    }
    
    .org-name {
      font-family: 'Fraunces', serif;
      font-size: 28px;
      font-weight: 700;
      color: white;
      margin-top: 16px;
      position: relative;
      z-index: 1;
      letter-spacing: 0.5px;
    }
    
    .org-subtitle {
      color: rgba(255, 255, 255, 0.9);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 1;
      margin-top: 8px;
    }
    
    .title-section {
      background: linear-gradient(135deg, #fff5e6 0%, #ffe8cc 100%);
      padding: 30px 40px;
      text-align: center;
      border-bottom: 4px solid #a85613;
    }
    
    .title { 
      font-family: 'Fraunces', serif;
      font-size: 32px;
      font-weight: 700;
      color: #a85613;
      margin-bottom: 6px;
    }
    
    .subtitle {
      color: #92400e;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
    
    .content {
      padding: 50px 40px;
    }
    
    .success-banner { 
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      border-left: 6px solid #10b981;
      padding: 28px;
      border-radius: 12px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      gap: 20px;
      box-shadow: 0 4px 20px rgba(16, 185, 129, 0.15);
    }
    
    .success-icon {
      width: 60px;
      height: 60px;
      background: #10b981;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
    }
    
    .checkmark {
      width: 32px;
      height: 32px;
      stroke: white;
      stroke-width: 3;
      fill: none;
    }
    
    .success-content {
      flex-grow: 1;
    }
    
    .success-text { 
      color: #065f46;
      font-weight: 700;
      font-size: 22px;
      margin-bottom: 4px;
    }
    
    .success-subtext {
      color: #047857;
      font-size: 14px;
      font-weight: 500;
    }
    
    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 45px;
    }
    
    .info-card {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border: 2px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      text-align: center;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    
    .info-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #1a4d8f, #3b82f6);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .info-card:hover::before {
      opacity: 1;
    }
    
    .info-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(26, 77, 143, 0.12);
      border-color: #1a4d8f;
    }
    
    .info-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #1a4d8f, #2563eb);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;
    }
    
    .info-label { 
      font-weight: 600;
      color: #64748b;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 8px;
    }
    
    .info-value { 
      color: #1e293b;
      font-size: 18px;
      font-weight: 700;
    }
    
    .app-id {
      color: #1a4d8f;
      font-size: 19px;
      font-family: 'Courier New', monospace;
      background: #eff6ff;
      padding: 8px 12px;
      border-radius: 6px;
      display: inline-block;
      margin-top: 4px;
    }
    
    .timeline-section {
      background: linear-gradient(to bottom, #eff6ff, #dbeafe);
      border-radius: 16px;
      padding: 40px;
      margin-bottom: 30px;
      border: 2px solid #bfdbfe;
    }
    
    .timeline-title {
      font-family: 'Fraunces', serif;
      font-size: 24px;
      font-weight: 700;
      color: #1a4d8f;
      margin-bottom: 30px;
      text-align: center;
      position: relative;
      padding-bottom: 12px;
    }
    
    .timeline-title::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: linear-gradient(90deg, #1a4d8f, #3b82f6);
      border-radius: 2px;
    }
    
    .timeline {
      position: relative;
      padding-left: 45px;
    }
    
    .timeline::before {
      content: '';
      position: absolute;
      left: 18px;
      top: 8px;
      bottom: 8px;
      width: 3px;
      background: linear-gradient(to bottom, #1a4d8f, #60a5fa, #93c5fd);
      border-radius: 2px;
    }
    
    .timeline-item {
      position: relative;
      margin-bottom: 28px;
      padding-left: 24px;
    }
    
    .timeline-item:last-child {
      margin-bottom: 0;
    }
    
    .timeline-dot {
      position: absolute;
      left: -30px;
      top: 4px;
      width: 36px;
      height: 36px;
      background: white;
      border: 4px solid #1a4d8f;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 15px;
      color: #1a4d8f;
      box-shadow: 0 3px 10px rgba(26, 77, 143, 0.25);
      z-index: 1;
    }
    
    .timeline-content h4 {
      font-weight: 700;
      color: #1e293b;
      font-size: 17px;
      margin-bottom: 6px;
    }
    
    .timeline-content p {
      color: #475569;
      font-size: 14px;
      line-height: 1.7;
    }
    
    .divider {
      height: 2px;
      background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
      margin: 40px 0;
    }
    
    .footer { 
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border-top: 3px solid #e2e8f0;
      padding: 35px 40px;
      text-align: center;
    }
    
    .footer-contact {
      color: #475569;
      font-size: 15px;
      line-height: 2;
      margin-bottom: 18px;
    }
    
    .footer-contact strong {
      color: #1e293b;
      font-weight: 700;
    }
    
    .footer-contact a {
      color: #1a4d8f;
      text-decoration: none;
      font-weight: 600;
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s ease;
    }
    
    .footer-contact a:hover {
      border-bottom-color: #1a4d8f;
    }
    
    .footer-note {
      color: #94a3b8;
      font-size: 13px;
      font-style: italic;
      margin-top: 14px;
      padding-top: 14px;
      border-top: 1px solid #e2e8f0;
    }
    
    .print-btn {
      background: linear-gradient(135deg, #1a4d8f, #2563eb);
      color: white;
      border: none;
      padding: 16px 36px;
      border-radius: 10px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      margin-top: 20px;
      box-shadow: 0 6px 20px rgba(26, 77, 143, 0.3);
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 10px;
    }
    
    .print-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(26, 77, 143, 0.4);
    }
    
    .print-btn:active {
      transform: translateY(0);
    }
    
    @media print {
      body {
        background: white;
        padding: 0;
      }
      .container {
        box-shadow: none;
        max-width: 100%;
      }
      .print-btn {
        display: none;
      }
    }
    
    @media (max-width: 768px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
      .header-banner {
        padding: 30px 24px;
      }
      .content {
        padding: 30px 24px;
      }
      .timeline-section {
        padding: 24px;
      }
      .title-section {
        padding: 24px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-banner">
      <div class="logo-container">
        <img src="${imgLogo}" alt="DOR Foundation Logo" class="logo">
      </div>
      <div class="org-name">DOR Foundation</div>
      <div class="org-subtitle">Empowering Dreams Through Education</div>
    </div>
    
    <div class="title-section">
      <h1 class="title">Application Acknowledgment Receipt</h1>
      <div class="subtitle">Official Confirmation Document</div>
    </div>
    
    <div class="content">
      <div class="success-banner">
        <div class="success-icon">
          <svg class="checkmark" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="success-content">
          <div class="success-text">Application Submitted Successfully!</div>
          <div class="success-subtext">Your application has been received and is now under review</div>
        </div>
      </div>
      
      <div class="info-grid">
        <div class="info-card">
          <div class="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 11l3 3L22 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="info-label">Application ID</div>
          <div class="app-id">${applicationId}</div>
        </div>
        
        <div class="info-card">
          <div class="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16 2v4M8 2v4M3 10h18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div class="info-label">Submission Date</div>
          <div class="info-value">${formattedDate}</div>
        </div>
        
        <div class="info-card">
          <div class="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
              <path d="M12 6v6l4 2" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="info-label">Time</div>
          <div class="info-value">${formattedTime}</div>
        </div>
      </div>
      
      <div class="info-grid" style="grid-template-columns: 1fr;">
        <div class="info-card">
          <div class="info-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
              <path d="M12 16v-4M12 8h.01" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="info-label">Current Status</div>
          <div class="info-value" style="color: #10b981; font-size: 20px;">● Under Review</div>
        </div>
      </div>
      
      <div class="timeline-section">
        <h2 class="timeline-title">What Happens Next?</h2>
        
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot">1</div>
            <div class="timeline-content">
              <h4>Application Review</h4>
              <p>Our team will carefully review your application within 7-10 business days to assess eligibility and completeness of all submitted information.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot">2</div>
            <div class="timeline-content">
              <h4>Document Verification</h4>
              <p>We will verify all submitted documents for authenticity and accuracy. This ensures a fair and transparent evaluation process for all applicants.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot">3</div>
            <div class="timeline-content">
              <h4>Interview Invitation</h4>
              <p>If shortlisted, you'll receive an interview invitation via email and SMS with detailed instructions, schedule, and preparation guidelines.</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-dot">4</div>
            <div class="timeline-content">
              <h4>Final Decision</h4>
              <p>You'll be notified of the final scholarship decision within 4-6 weeks from the submission date. Results will be communicated via email and SMS.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div style="text-align: center;">
        <button class="print-btn" onclick="window.print()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9V2h12v7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 14h12v8H6z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Print This Receipt
        </button>
      </div>
    </div>
    
    <div class="footer">
      <div class="footer-contact">
        <strong>Need Assistance?</strong><br>
        We're here to help! Contact us at <a href="mailto:support@dorfoundation.com">support@dorfoundation.com</a><br>
        Call our helpline: <strong>1800-XXX-XXXX</strong> (Monday-Friday, 9:00 AM - 6:00 PM IST)
      </div>
      <div class="footer-note">
        This is a computer-generated acknowledgment and does not require a physical signature.<br>
        Please retain this receipt for your records and future reference.
      </div>
    </div>
  </div>
</body>
</html>
    `;
    
    const blob = new Blob([acknowledgmentContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DOR_Application_Acknowledgment_${applicationId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  return (
    <div className="min-h-screen bg-[#f6f8fc] relative flex items-center justify-center p-4 sm:p-6 md:p-8 py-12">
      {/* Gradient Background Section */}
      <div className="absolute h-[250px] sm:h-[300px] md:h-[358px] left-0 top-0 w-full bg-gradient-to-r from-[#e8d5c4] to-[#c5d5e8]" />
      
      {/* Content Container */}
      <div className="bg-white rounded-[10px] max-w-[1118.4px] w-full relative z-10">
        <div aria-hidden="true" className="absolute border-[0.8px] border-[#e2e8f2] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_3px_30px_0px_rgba(54,88,136,0.07)]" />
        
        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Success Icon */}
          <div className="flex justify-center mb-5 sm:mb-6">
            <div className="bg-emerald-500 rounded-full size-[60px] sm:size-[70px] md:size-[80px] flex items-center justify-center">
              <svg className="size-8 sm:size-10 md:size-12" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                <path d={svgPaths.p304ca00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
                <path d="M18 22L24 28L44 8" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
              </svg>
            </div>
          </div>

          {/* Success Title */}
          <h1 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#a85613] text-[24px] sm:text-[30px] md:text-[36px] text-center mb-3 sm:mb-4 px-2" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
            Application Submitted Successfully!
          </h1>

          {/* Description */}
          <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[14px] sm:text-[15px] md:text-[16px] text-center mb-6 sm:mb-8 leading-[22px] sm:leading-[24px] md:leading-[25.6px] px-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Thank you for submitting your application to Dor Foundation. We have received your application and our team will review it carefully.
          </p>

          {/* What Happens Next Section */}
          <div className="bg-blue-50 rounded-[10px] p-5 sm:p-6 mb-6 sm:mb-8">
            <h2 className="font-['Fraunces:Bold',sans-serif] font-bold text-[#1a4d8f] text-[18px] sm:text-[20px] mb-4 leading-[26px] sm:leading-[30px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>
              What Happens Next?
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {/* Step 1 - Document Upload */}
              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="bg-[#1a4d8f] rounded-full size-7 sm:size-8 flex items-center justify-center shrink-0">
                  <span className="font-['Nunito_Sans:Regular',sans-serif] text-white text-[13px] sm:text-[14px] leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>1</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-neutral-950 text-[14px] sm:text-[16px] mb-2 leading-[22px] sm:leading-[25.6px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Document Upload
                  </h3>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mb-1" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    After submitting the form, the next step to process your application is to upload all required documents listed below.
                  </p>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mb-3" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    फॉर्म जमा करने के बाद, आपके आवेदन को आगे बढ़ाने का अगला चरण नीचे सूचीबद्ध सभी आवश्यक दस्तावेजों को अपलोड करना है।
                  </p>
                  
                  <div className="mb-4">
                    <p className="font-['Wix_Madefor_Text:SemiBold',sans-serif] font-semibold text-[#1a4d8f] text-[14px] sm:text-[15px] mb-3 leading-[20px] sm:leading-[22px]">
                      Required Documents:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">9th Marksheet</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">10th Marksheet</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">11th Marksheet</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">12th Marksheet (if received)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Aadhaar Card of Student</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Ration Card</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Domicile Certificate</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Income Certificate</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Caste Certificate</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">EWS Certificate (if applicable)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Bank Statements (last 6 months)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Home Video (2 minutes)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">GPS-tagged family photo</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#1a4d8f] mt-1">•</span>
                        <span className="font-['Wix_Madefor_Text:Regular',sans-serif] text-[#4d4b48] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]">Any other supporting document</span>
                      </div>
                    </div>
                  </div>

                  {/* Upload Documents Button */}
                  <div className="flex justify-start mt-4 mb-3">
                    <button
                      onClick={onOpenDocuments || onGoToDashboard}
                      className="bg-[#1a4d8f] text-white h-[42px] sm:h-[44px] px-5 sm:px-6 rounded-[100px] font-['Wix_Madefor_Text:Bold',sans-serif] font-bold text-[13px] sm:text-[14px] hover:bg-[#153d73] transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
                    >
                      <Upload className="w-4 h-4" />
                      Upload Documents
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 - Application Review */}
              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="bg-[#1a4d8f] rounded-full size-7 sm:size-8 flex items-center justify-center shrink-0">
                  <span className="font-['Nunito_Sans:Regular',sans-serif] text-white text-[13px] sm:text-[14px] leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>2</span>
                </div>
                <div>
                  <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-neutral-950 text-[14px] sm:text-[16px] mb-1 leading-[22px] sm:leading-[25.6px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Application Review
                  </h3>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mb-1" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Our team will review your application within 7-10 business days
                  </p>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    हमारी टीम 7-10 कार्य दिवसों के भीतर आपके आवेदन की समीक्षा करेगी।
                  </p>
                </div>
              </div>

              {/* Step 3 - Document Verification */}
              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="bg-[#1a4d8f] rounded-full size-7 sm:size-8 flex items-center justify-center shrink-0">
                  <span className="font-['Nunito_Sans:Regular',sans-serif] text-white text-[13px] sm:text-[14px] leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>3</span>
                </div>
                <div>
                  <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-neutral-950 text-[14px] sm:text-[16px] mb-1 leading-[22px] sm:leading-[25.6px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Document Verification
                  </h3>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mb-1" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    We will verify all submitted documents
                  </p>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    हम सभी प्रस्तुत दस्तावेजों का सत्यापन करेंगे।
                  </p>
                </div>
              </div>

              {/* Step 4 - Interview Invitation */}
              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="bg-[#1a4d8f] rounded-full size-7 sm:size-8 flex items-center justify-center shrink-0">
                  <span className="font-['Nunito_Sans:Regular',sans-serif] text-white text-[13px] sm:text-[14px] leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>4</span>
                </div>
                <div>
                  <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-neutral-950 text-[14px] sm:text-[16px] mb-1 leading-[22px] sm:leading-[25.6px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Interview Invitation
                  </h3>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mb-1" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    If shortlisted, you'll receive an interview invitation via email and SMS
                  </p>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    यदि आपका चयन होता है, तो आपको ईमेल और एसएमएस के माध्यम से साक्षात्कार का आमंत्रण प्राप्त होगा।
                  </p>
                </div>
              </div>

              {/* Step 5 - Final Decision */}
              <div className="flex gap-2.5 sm:gap-3 items-start">
                <div className="bg-[#1a4d8f] rounded-full size-7 sm:size-8 flex items-center justify-center shrink-0">
                  <span className="font-['Nunito_Sans:Regular',sans-serif] text-white text-[13px] sm:text-[14px] leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>5</span>
                </div>
                <div>
                  <h3 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-neutral-950 text-[14px] sm:text-[16px] mb-1 leading-[22px] sm:leading-[25.6px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    Final Decision
                  </h3>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] mb-1" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    You'll be notified of the final decision within 4-6 weeks
                  </p>
                  <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                    आपको 4-6 सप्ताह के भीतर अंतिम निर्णय की सूचना मिल जाएगी।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Download Application Form Card */}
            <div 
              onClick={handleDownloadAcknowledgment}
              className="bg-white border-[0.8px] border-[#e2e8f2] rounded-[10px] p-6 text-center relative cursor-pointer hover:border-[#1a4d8f] hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-3">
                <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p9c60400} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2bf8f980} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Nunito_Sans:Regular',sans-serif] text-neutral-950 text-[14px] mb-1 leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Download Application Form.
              </h3>
              <p className="font-['Nunito_Sans:Bold',sans-serif] text-[#4a5565] text-[12px] leading-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Download.
              </p>
            </div>

            {/* Application ID Card */}
            <div className="bg-white border-[0.8px] border-[#e2e8f2] rounded-[10px] p-6 text-center relative">
              <div className="flex justify-center mb-3">
                <svg className="size-6" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M8 2V6" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M16 2V6" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p32f12c00} stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M3 10H21" stroke="#1A4D8F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="font-['Nunito_Sans:Regular',sans-serif] text-neutral-950 text-[14px] mb-1 leading-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Application ID
              </h3>
              <p className="font-['Nunito_Sans:Bold',sans-serif] text-[#1a4d8f] text-[12px] leading-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                {applicationId}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={onGoToDashboard}
              className="bg-[#1a4d8f] text-white px-6 sm:px-8 py-3 sm:py-[17px] rounded-full font-['Nunito_Sans:Bold',sans-serif] text-[13px] sm:text-[14px] hover:bg-[#153d73] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] leading-[20px] w-full sm:w-auto text-center"
              style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
            >
              Go to Dashboard
            </button>
          </div>

          {/* Footer */}
          <div className="pt-5 sm:pt-6 border-t-[0.8px] border-[#e2e8f2]">
            <p className="font-['Nunito_Sans:Regular',sans-serif] text-[#4a5565] text-[12px] sm:text-[14px] text-center leading-[18px] sm:leading-[20px] px-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Need help? Contact us at{' '}
              <a href="mailto:support@dorfoundation.com" className="text-[#1a4d8f] break-all">
                support@dorfoundation.com
              </a>
              {' '}or call 1800-XXX-XXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}